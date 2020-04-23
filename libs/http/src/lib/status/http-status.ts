/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/camelcase */
import { isNil, isString } from 'lodash'

export const HTTP_STATUS = {
  ok: 200,
  created: 201,
  accepted: 202,
  non_authoritative_information: 203,
  no_content: 204,
  reset_content: 205,
  partial_content: 206,
  multi_status: 207,
  already_reported: 208,
  im_used: 226,
  bad_request: 400,
  unauthorized: 401,
  payment_required: 402,
  forbidden: 403,
  not_found: 404,
  method_not_allowed: 405,
  not_acceptable: 406,
  proxy_authentication_required: 407,
  request_timeout: 408,
  conflict: 409,
  gone: 410,
  length_required: 411,
  precondition_failed: 412,
  request_entity_too_large: 413,
  request_uri_too_long: 414,
  unsupported_media_type: 415,
  requested_range_not_satisfiable: 416,
  expectation_failed: 417,
  i_am_a_teapot: 418,
  misdirected_request: 421,
  unprocessable_entity: 422,
  locked: 423,
  failed_dependency: 424,
  upgrade_required: 426,
  precondition_required: 428,
  too_many_requests: 429,
  request_header_fields_too_large: 431,
  login_timeout: 440,
  no_response: 444,
  retry_with: 449,
  blocked_by_windows_parental_controls: 450,
  unavailable_for_legal_reasons: 451,
  request_header_too_large: 494,
  cert_error: 495,
  no_cert: 496,
  http_to_https: 497,
  token_expired_or_invalid: 498,
  client_closed_request: 499,
  internal_server_error: 500,
  not_implemented: 501,
  bad_gateway: 502,
  service_unavailable: 503,
  gateway_timeout: 504,
  http_version_not_supported: 505,
  variant_also_negotiates: 506,
  insufficient_storage: 507,
  loop_detected: 508,
  not_extended: 510,
  network_authentication_required: 511
} as const

export type HTTP_STATUS = keyof typeof HTTP_STATUS
export type HTTP_STATUS_CODE = typeof HTTP_STATUS[HTTP_STATUS]

export const HTTP_STATUSES = Object.keys(HTTP_STATUS) as Array<HTTP_STATUS>
export const HTTP_STATUS_CODES = Object.values(HTTP_STATUS) as Array<HTTP_STATUS_CODE>

export const IS_HTTP_STATUS_CODE = (value: any): value is HTTP_STATUS_CODE =>
  !isNil(value) && !isNaN(value) && HTTP_STATUS_CODES.includes(+value as any)

export const IS_HTTP_STATUS = (value: any): value is HTTP_STATUS =>
  !isNil(value) && isString(value) && HTTP_STATUSES.includes(value as any)
