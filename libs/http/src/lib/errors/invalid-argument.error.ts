import { withStatusCode } from '../status/status-code-of'

import { ErrorOptions, HttpError } from './http.error'

export class InvalidArgumentError extends HttpError {
  constructor(readonly message: string, attrs?: ErrorOptions) {
    super(message, withStatusCode(attrs, 'unprocessable_entity'))
  }
}
