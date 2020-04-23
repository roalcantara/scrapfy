import puppeteer from 'puppeteer'
import { from, Observable, of, throwError } from 'rxjs'
import { catchError, concatMap, finalize, tap } from 'rxjs/operators'
import { trace } from '@scrapfy/log'

import { Page } from './page/page'

export class Crawlify {
  browser: puppeteer.Browser
  response: puppeteer.Response
  page: puppeteer.Page

  @trace
  async load(url: string): Promise<Page> {
    return this.launch()
      .pipe(
        catchError((error) => this.onError(error)),
        concatMap((browser) => this.newPage(browser)),
        concatMap((page) => this.goTo(page, url)),
        concatMap((response) => this.contentOf(response)),
        concatMap((html) => this.onSuccess(html)),
        finalize(async () => this.onFinalize())
      )
      .toPromise()
  }

  private launch(): Observable<puppeteer.Browser> {
    return from(
      puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      })
    ).pipe(tap((browser) => (this.browser = browser)))
  }

  private newPage = async (browser: puppeteer.Browser): Promise<puppeteer.Page> => {
    return browser.newPage()
  }

  private async goTo(page: puppeteer.Page, url: string): Promise<puppeteer.Response> {
    this.page = page

    return this.page.goto(url, { waitUntil: 'networkidle0' })
  }

  private async contentOf(response: puppeteer.Response): Promise<string> {
    this.response = response

    return response.text()
  }

  private onSuccess(html: string): Observable<Page> {
    return of(
      new Page({
        statusText: this.response.statusText(),
        status: this.response.status(),
        url: this.response.url(),
        html
      })
    )
  }

  private async onFinalize(): Promise<void> {
    await this.page.close()
    await this.browser.close()
  }

  private onError = (error: Error) => {
    return throwError(error)
  }
}
