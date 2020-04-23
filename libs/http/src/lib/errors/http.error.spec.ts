import { HTTP_STATUS } from '../status/http-status'

import { ErrorOptions, HttpError } from './http.error'

describe('HttpError', () => {
  let subject: HttpError
  let message: string
  let attrs: ErrorOptions

  beforeEach(() => {
    subject = new HttpError(message, attrs)
  })

  describe('#constructor', () => {
    beforeAll(() => {
      message = 'Error'
    })

    it('initializes with the given message', () => {
      expect(subject.message).toEqual(message)
    })

    describe('when an http status code is given', () => {
      beforeAll(() => {
        attrs = { statusCode: 404 }
      })

      it('initializes with the given statusCode', () => {
        expect(subject.statusCode).toEqual(attrs.statusCode)
      })
    })

    describe('when an http status is given', () => {
      beforeAll(() => {
        attrs = { statusCode: 'bad_request' }
      })

      it('initializes with the proper statusCode', () => {
        expect(subject.statusCode).toEqual(HTTP_STATUS['bad_request'])
      })
    })

    describe('when no status code is given', () => {
      beforeAll(() => {
        attrs = { statusCode: undefined }
      })

      it('returns the internal server error code', () => {
        expect(subject.statusCode).toEqual(HTTP_STATUS['internal_server_error'])
      })
    })

    describe('when data is given', () => {
      beforeAll(() => {
        attrs = {
          data: {
            errors: ['userId should not be empty', 'userId should be string']
          }
        }
      })

      it('initializes with the given data', () => {
        expect(subject.data).toEqual(attrs.data)
      })
    })
  })
})
