import { withStatusCode } from '../status/status-code-of'

import { ErrorOptions, HttpError } from './http.error'

export class NotFoundError extends HttpError {
  constructor(readonly message: string, attrs?: ErrorOptions) {
    super(message, withStatusCode(attrs, 'not_found'))
  }
}
