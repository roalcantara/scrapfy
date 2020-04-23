// tslint:disable: ban-types
export type ClazzOf<T = {}> = new (...args: Array<unknown>) => T

export type Clazz<T = {}> =
  | ClazzOf<T>
  | (Function & {
      name: string
    })
