import { statusCodeOf } from './status-code-of'

describe('statusCodeOf()', () => {
  describe.each`
    value            | expected
    ${200}           | ${200}
    ${'403'}         | ${403}
    ${'not_found'}   | ${404}
    ${{}}            | ${undefined}
    ${null}          | ${undefined}
    ${undefined}     | ${undefined}
    ${'not_status'}  | ${undefined}
    ${{ code: 404 }} | ${undefined}
  `('with "$value"', ({ value, expected }) => {
    it(`returns "${expected}"`, () => {
      expect(statusCodeOf(value)).toBe(expected)
    })
  })

  describe('when alt is "internal_server_error"', () => {
    describe.each`
      value            | expected
      ${{}}            | ${500}
      ${null}          | ${500}
      ${undefined}     | ${500}
      ${'not_status'}  | ${500}
      ${{ code: 404 }} | ${500}
    `('with "$value"', ({ value, expected }) => {
      it(`returns "${expected}"`, () => {
        expect(statusCodeOf(value, { alt: 'internal_server_error' })).toBe(expected)
      })
    })
  })

  describe('when props is "status"', () => {
    describe.each`
      value                          | expected
      ${{ status: 200 }}             | ${200}
      ${{ status: '403' }}           | ${403}
      ${{ status: 'not_found' }}     | ${404}
      ${{ status: {} }}              | ${undefined}
      ${{ status: null }}            | ${undefined}
      ${{ status: undefined }}       | ${undefined}
      ${{ status: 'not_status' }}    | ${undefined}
      ${{ statusCode: 'not_found' }} | ${undefined}
    `('with "$value"', ({ value, expected }) => {
      it(`returns "${expected}"`, () => {
        expect(statusCodeOf(value, { props: 'status' })).toBe(expected)
      })
    })
  })

  describe('when props is "status" or "code"', () => {
    describe.each`
      value                          | expected
      ${{ status: 'ok', code: 404 }} | ${200}
    `('with "$value"', ({ value, expected }) => {
      it(`returns "${expected}"`, () => {
        expect(statusCodeOf(value, { props: ['status', 'code'] })).toBe(expected)
      })
    })
  })
})
