import { withStatusCode } from '../status/status-code-of'

import { ErrorOptions, HttpError } from './http.error'

export class BadRequestError extends HttpError {
  constructor(readonly message: string, attrs?: ErrorOptions) {
    super(message, withStatusCode(attrs, 'bad_request'))
  }
}
