import { HTTP_STATUS } from '../status/http-status'

import { ErrorOptions } from './http.error'
import { InvalidArgumentError } from './invalid-argument.error'

describe('InvalidArgumentError', () => {
  let subject: InvalidArgumentError
  let message: string
  let attrs: ErrorOptions

  beforeEach(() => {
    subject = new InvalidArgumentError(message, attrs)
  })

  describe('#constructor', () => {
    describe('when no status code is given', () => {
      beforeAll(() => {
        message = 'InvalidArgumentError'
        attrs = { statusCode: undefined }
      })

      it(`returns the status error code "${HTTP_STATUS['unprocessable_entity']}"`, () => {
        expect(subject.statusCode).toEqual(HTTP_STATUS['unprocessable_entity'])
      })
    })
  })
})
