import { HTTP_STATUS } from '../status/http-status'

import { ForbiddenError } from './forbidden.error'
import { ErrorOptions } from './http.error'

describe('ForbiddenError', () => {
  let subject: ForbiddenError
  let message: string
  let attrs: ErrorOptions

  beforeEach(() => {
    subject = new ForbiddenError(message, attrs)
  })

  describe('#constructor', () => {
    describe('when no status code is given', () => {
      beforeAll(() => {
        message = 'ForbiddenError'
        attrs = { statusCode: undefined }
      })

      it(`returns the status error code "${HTTP_STATUS['forbidden']}"`, () => {
        expect(subject.statusCode).toEqual(HTTP_STATUS['forbidden'])
      })
    })
  })
})
