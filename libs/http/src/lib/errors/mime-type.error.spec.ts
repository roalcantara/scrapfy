import { HTTP_STATUS } from '../status/http-status'

import { ErrorOptions } from './http.error'
import { MimeTypeError } from './mime-type.error'

describe('MimeTypeError', () => {
  let subject: MimeTypeError
  let message: string
  let attrs: ErrorOptions

  beforeEach(() => {
    subject = new MimeTypeError(message, attrs)
  })

  describe('#constructor', () => {
    describe('when no status code is given', () => {
      beforeAll(() => {
        message = 'MimeTypeError'
        attrs = { statusCode: undefined }
      })

      it(`returns the status error code "${HTTP_STATUS['unprocessable_entity']}"`, () => {
        expect(subject.statusCode).toEqual(HTTP_STATUS['unprocessable_entity'])
      })
    })
  })
})
