// tslint:disable: prefer-function-over-method
import { trace } from '@scrapfy/log'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { compact, get, isUndefined } from 'lodash'
import { stringify } from 'querystring'
import { from, Observable, of, throwError } from 'rxjs'
import { catchError, switchMap } from 'rxjs/operators'

import { HttpError } from '../errors'

export type HttpMethod = 'get' | 'post' | 'delete' | 'put'

export type RequestOpts<Endpoints = string> = AxiosRequestConfig & {
  endpoint?: Endpoints
  stringify?: boolean
}

export class Requestfy<Endpoints = string> {
  constructor(readonly url: string) {}

  async get<T>(args: RequestOpts<Endpoints> = {}): Promise<T> {
    return this.request(args, { method: 'get' })
  }

  async post<T>(args: RequestOpts<Endpoints> = {}): Promise<T> {
    return this.request(args, { method: 'post' })
  }

  async delete<T>(args: RequestOpts<Endpoints> = {}): Promise<T> {
    return this.request(args, { method: 'delete' })
  }

  async put<T>(args: RequestOpts<Endpoints> = {}): Promise<T> {
    return this.request(args, { method: 'put' })
  }

  async request<T>(args: RequestOpts<Endpoints> = {}, attrs: { method: HttpMethod }): Promise<T> {
    const options = this.optionsFor(attrs.method, args)

    return this.run<T>(options)
      .pipe(
        switchMap((res) => this.onSuccess<T>(res)),
        catchError((err) => this.onError(err, args))
      )
      .toPromise()
  }

  @trace
  run<T>(options: Partial<AxiosRequestConfig>): Observable<AxiosResponse<T>> {
    return from(axios(options))
  }

  private optionsFor(method: HttpMethod, options: RequestOpts<Endpoints>): Partial<AxiosRequestConfig> {
    const { endpoint, ...opts } = options
    const url = this.urlFor(endpoint)

    if (isUndefined(opts.stringify) || opts.stringify) {
      if (get(opts, 'data', false)) {
        opts['data'] = stringify(opts.data)
      }
    }

    return {
      method,
      url,
      ...opts
    }
  }

  private onSuccess = <T>(response: AxiosResponse<T>) => {
    return of(typeof response === 'string' ? JSON.parse(response) : response.data)
  }

  private onError = (error: Error, args: RequestOpts<Endpoints>) => {
    const source = this.sourceOf(error)

    return throwError(new HttpError(this.messageOf(source), { source, data: args }))
  }

  private urlFor(endpoint: Endpoints): string {
    return compact([this.url, endpoint]).join('/')
  }

  private messageOf = (source: Error): string => {
    return get(source, 'message', get(source, 'data.message'))
  }

  private sourceOf = (error: Error): Error => {
    return get(error, 'response', error)
  }
}
