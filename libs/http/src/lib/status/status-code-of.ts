import { get, isArray, isString } from 'lodash'

import { HTTP_STATUS, HTTP_STATUS_CODE, IS_HTTP_STATUS, IS_HTTP_STATUS_CODE } from './http-status'

type StatusCodeOptions = {
  props?: string | Array<string>
  alt?: HTTP_STATUS_CODE | HTTP_STATUS
}

export const statusCodeOf = <T>(value: T, { props, alt }: StatusCodeOptions = {}): HTTP_STATUS_CODE => {
  if (IS_HTTP_STATUS_CODE(value)) {
    return +value as HTTP_STATUS_CODE
  }

  if (IS_HTTP_STATUS(value)) {
    return HTTP_STATUS[value]
  }

  if (isString(props)) {
    return statusCodeOf(get(value, props), { alt })
  }

  if (isArray(props)) {
    for (const prop of props) {
      const code = statusCodeOf(get(value, prop))

      if (code) {
        return code
      }
    }
  }

  if (alt) {
    return statusCodeOf(alt)
  }
}

export const withStatusCode = <T>(attrs: T, alt: HTTP_STATUS | HTTP_STATUS_CODE = 'internal_server_error'): T => {
  return {
    ...attrs,
    statusCode: statusCodeOf(attrs, { props: ['statusCode', 'status'], alt })
  }
}
