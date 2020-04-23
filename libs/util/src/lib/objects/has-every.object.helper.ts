import { isNil, isObject } from 'lodash'

export const hasEvery = <T>(object: T, ...type: Array<string>) => {
  const validation = !isNil(object) && isObject(object)

  if (isNil(type) || type.length === 0) return validation

  return type.reduce((previous: boolean, current: string) => previous && current in object, validation)
}
