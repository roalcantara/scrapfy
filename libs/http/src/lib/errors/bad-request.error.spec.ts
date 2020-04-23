import { HTTP_STATUS } from '../status/http-status'

import { BadRequestError } from './bad-request.error'
import { ErrorOptions } from './http.error'

describe('BadRequestError', () => {
  let subject: BadRequestError
  let message: string
  let attrs: ErrorOptions

  beforeEach(() => {
    subject = new BadRequestError(message, attrs)
  })

  describe('#constructor', () => {
    describe('when no status code is given', () => {
      beforeAll(() => {
        message = 'BadRequestError'
        attrs = { statusCode: undefined }
      })

      it(`returns the status error code "${HTTP_STATUS['bad_request']}"`, () => {
        expect(subject.statusCode).toEqual(HTTP_STATUS['bad_request'])
      })
    })
  })
})
