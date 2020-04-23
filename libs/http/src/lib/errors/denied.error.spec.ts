import { HTTP_STATUS } from '../status/http-status'

import { DeniedError } from './denied.error'
import { ErrorOptions } from './http.error'

describe('DeniedError', () => {
  let subject: DeniedError
  let message: string
  let attrs: ErrorOptions

  beforeEach(() => {
    subject = new DeniedError(message, attrs)
  })

  describe('#constructor', () => {
    describe('when no status code is given', () => {
      beforeAll(() => {
        message = 'DeniedError'
        attrs = { statusCode: undefined }
      })

      it(`returns the status error code "${HTTP_STATUS['unauthorized']}"`, () => {
        expect(subject.statusCode).toEqual(HTTP_STATUS['unauthorized'])
      })
    })
  })
})
