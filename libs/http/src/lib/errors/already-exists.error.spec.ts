import { HTTP_STATUS } from '../status/http-status'

import { AlreadyExistsError } from './already-exists.error'
import { ErrorOptions } from './http.error'

describe('AlreadyExistsError', () => {
  let subject: AlreadyExistsError
  let message: string
  let attrs: ErrorOptions

  beforeEach(() => {
    subject = new AlreadyExistsError(message, attrs)
  })

  describe('#constructor', () => {
    describe('when no status code is given', () => {
      beforeAll(() => {
        message = 'AlreadyExistsError'
        attrs = { statusCode: undefined }
      })

      it(`returns the status error code "${HTTP_STATUS['conflict']}"`, () => {
        expect(subject.statusCode).toEqual(HTTP_STATUS['conflict'])
      })
    })
  })
})
