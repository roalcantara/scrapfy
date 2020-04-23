import { isObservable as IsObservable } from 'rxjs'

const RXJS_IDENTIFIER = 'rxjs'

export const isObservable = (method: object): boolean => {
  return method?.toString()?.includes(RXJS_IDENTIFIER) || IsObservable(method)
}
