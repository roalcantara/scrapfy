import { HTTP_STATUS } from '../status/http-status'

import { ErrorOptions } from './http.error'
import { NotFoundError } from './not-found.error'

describe('NotFoundError', () => {
  let subject: NotFoundError
  let message: string
  let attrs: ErrorOptions

  beforeEach(() => {
    subject = new NotFoundError(message, attrs)
  })

  describe('#constructor', () => {
    describe('when no status code is given', () => {
      beforeAll(() => {
        message = 'NotFoundError'
        attrs = { statusCode: undefined }
      })

      it(`returns the status error code "${HTTP_STATUS['not_found']}"`, () => {
        expect(subject.statusCode).toEqual(HTTP_STATUS['not_found'])
      })
    })
  })
})
