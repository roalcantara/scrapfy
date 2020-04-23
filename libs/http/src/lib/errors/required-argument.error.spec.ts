import { InvalidArgumentError } from './invalid-argument.error'
import { RequiredArgumentError } from './required-argument.error'

describe('RequiredArgumentError', () => {
  let subject: RequiredArgumentError
  let args = ['DocumentNumber']

  it('is an InvalidArgumentError', () => {
    expect(new RequiredArgumentError(...args)).toBeInstanceOf(InvalidArgumentError)
  })

  describe('#message', () => {
    beforeEach(() => {
      subject = new RequiredArgumentError(...args)
    })

    it('returns an argument required message', () => {
      expect(subject.message).toEqual('DocumentNumber is required')
    })

    describe('with more than one argument', () => {
      beforeAll(() => {
        args = ['DocumentNumber', 'Name']
      })

      it('returns an argument required message for each argument', () => {
        expect(subject.message).toEqual('DocumentNumber is required, Name is required')
      })
    })
  })
})
