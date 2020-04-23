import { withStatusCode } from '../status/status-code-of'

import { ErrorOptions, HttpError } from './http.error'

export class AlreadyExistsError extends HttpError {
  constructor(readonly message: string, attrs?: ErrorOptions) {
    super(message, withStatusCode(attrs, 'conflict'))
  }
}
