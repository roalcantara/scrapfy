import { compact } from 'lodash'

export const clazzNameOf = (clazz: object) => {
  if (!clazz) return null

  const prototype = Object.getPrototypeOf(clazz)

  return compact([
    clazz?.constructor?.name,
    prototype?.constructor?.name,
    prototype?.__proto__?.constructor?.name
  ]).find((name) => name !== 'class_1')
}
