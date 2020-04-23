import { hasEvery } from '@scrapfy/util'

import { HttpError } from './http.error'

export const isHttpError = (obj: unknown): obj is HttpError => {
  return hasEvery(obj, 'statusCode', 'message')
}
