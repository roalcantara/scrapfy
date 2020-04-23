import { isNil } from 'lodash'

export const isNullOrEmpty = (value: string) => {
  return isNil(value) || String(value).trim() === ''
}
