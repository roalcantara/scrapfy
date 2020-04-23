import { HTTP_STATUS } from '../status/http-status'

import { ErrorOptions } from './http.error'
import { UnprocessableEntity } from './unprocessable-entity.error'

describe('UnprocessableEntity', () => {
  let subject: UnprocessableEntity
  let message: string
  let attrs: ErrorOptions

  beforeEach(() => {
    subject = new UnprocessableEntity(message, attrs)
  })

  describe('#constructor', () => {
    describe('when no status code is given', () => {
      beforeAll(() => {
        message = 'UnprocessableEntity'
        attrs = { statusCode: undefined }
      })

      it(`returns the status error code "${HTTP_STATUS['unprocessable_entity']}"`, () => {
        expect(subject.statusCode).toEqual(HTTP_STATUS['unprocessable_entity'])
      })
    })
  })
})
