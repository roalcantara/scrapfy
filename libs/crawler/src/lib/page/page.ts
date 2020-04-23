import cheerio from 'cheerio'
import { get, isNil } from 'lodash'
import { fs } from 'mz'

import { strip } from '@scrapfy/util'

export type Parser<T> = (document: Cheerio) => T

export class Page {
  url: string
  html: string
  status: number
  statusText: string

  get title(): string {
    const titles = this.document('title')

    return get(titles, '[0].children[0].data')
  }

  get document(): CheerioStatic {
    if (!isNil(this.html)) {
      return cheerio.load(this.html)
    }
  }

  constructor(args: Partial<Page>) {
    Object.assign(this, args)
  }

  extract<T>(parser: Parser<T>): T {
    return strip(parser(cheerio(this.document)))
  }

  at<T>(selector: string, parser: Parser<T>): T {
    const document = this.document(selector)

    return strip(parser(document))
  }

  forEach<T>(selector: string, parser: Parser<T>): Array<T> {
    const document = this.document(selector)

    return document?.toArray()?.map((element) => {
      return strip(parser(cheerio(element)))
    })
  }

  async toFile(filePath: string): Promise<void> {
    await fs.writeFile(filePath, this.html, 'utf8')
  }
}
