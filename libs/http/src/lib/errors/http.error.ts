import { get } from 'lodash'

import { HTTP_STATUS, HTTP_STATUS_CODE } from '../status/http-status'
import { statusCodeOf } from '../status/status-code-of'

type Options = {
  statusCode?: HTTP_STATUS | HTTP_STATUS_CODE
  source?: Error
  data?: unknown
}

export type ErrorOptions = Options & Partial<Error>

export class HttpError extends Error {
  statusCode: HTTP_STATUS_CODE
  source: Error
  data: unknown

  constructor(readonly message: string, attrs: ErrorOptions = {}) {
    super(message)
    this.statusCode = statusCodeOf(get(attrs, 'statusCode', attrs.source), {
      props: ['statusCode', 'status'],
      alt: 'internal_server_error'
    })
    this.source = get(attrs, 'source')
    this.stack = get(this.source, 'stack', this.stack)
    this.data = get(attrs, 'data', get(this.source, 'data'))
    this.name = get(this.source, 'name', this.constructor.name)
  }
}
