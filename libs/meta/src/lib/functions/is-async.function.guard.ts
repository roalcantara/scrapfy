const ASYNC_IDENTIFIER = 'tslib_1.__awaiter'

export const isAsyncFunction = (method: object): boolean => {
  return method?.toString()?.includes(ASYNC_IDENTIFIER)
}
