import { compact, isArray, isObject, isString } from 'lodash'

import { isNullOrEmpty } from './is-null-or-empty.string.helper'

type AltOption<T> = {
  alt: T
}

export const strip = <T extends unknown>(value: T, { alt }: AltOption<T> = { alt: undefined }) => {
  if (isString(value) && isNullOrEmpty(value)) {
    return alt
  }

  if (isArray(value)) {
    return compact(value || []).map((item) => strip(item))
  }

  if (isObject(value)) {
    return Object.entries(value).reduce((reduced, [key, val]) => {
      return { ...reduced, [key]: strip(val) }
    }, {})
  }

  return String(value).trim().replace(/\s+/g, ' ')
}
