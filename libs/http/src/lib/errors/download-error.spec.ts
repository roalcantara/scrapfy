import { HTTP_STATUS } from '../status/http-status'

import { DownloadError } from './download-error'
import { ErrorOptions } from './http.error'

describe('DownloadError', () => {
  let subject: DownloadError
  let message: string
  let attrs: ErrorOptions

  beforeEach(() => {
    subject = new DownloadError(message, attrs)
  })

  describe('#constructor', () => {
    describe('when no status code is given', () => {
      beforeAll(() => {
        message = 'DownloadError'
        attrs = { statusCode: undefined }
      })

      it(`returns the status error code "${HTTP_STATUS['unprocessable_entity']}"`, () => {
        expect(subject.statusCode).toEqual(HTTP_STATUS['unprocessable_entity'])
      })
    })
  })
})
