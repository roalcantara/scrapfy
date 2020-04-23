import { withStatusCode } from '../status/status-code-of'

import { ErrorOptions, HttpError } from './http.error'

export class UnprocessableEntity extends HttpError {
  constructor(readonly message: string, attrs?: ErrorOptions) {
    super(message, withStatusCode(attrs, 'unprocessable_entity'))
  }
}
