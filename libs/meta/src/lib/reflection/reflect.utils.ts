import { isNullOrEmpty } from '@scrapfy/util'
import { Dictionary, first, flatten, isArray, isNil, last } from 'lodash'
import 'reflect-metadata'

export type MetaArgs = {
  key: string
  target: unknown
  property?: string | symbol
  own?: boolean
  propertyDescriptor?: PropertyDescriptor
}
export type MetaValueArgs<T = unknown> = MetaArgs & {
  value: T
}
type MetaProperties<T = unknown> = Dictionary<T>
type MetaTargets = Dictionary<MetaProperties>
type MetaKeys = Dictionary<MetaTargets>
type MetaStorage = {
  value?: unknown
  object?: unknown
  values?: MetaKeys
}

export class ReflectUtils {
  private static _items: MetaStorage = {}

  static get items(): MetaStorage {
    return this._items
  }

  static get keys(): Array<string> {
    return Object.keys(ReflectUtils.items)
  }

  static has<T>(key: string, target?: T, property?: string | symbol): boolean {
    return (
      !isNil(key) &&
      !isNil(ReflectUtils.items[key]) &&
      (isNil(target) ||
        (!isNil(ReflectUtils.items[key][target]) &&
          (isNil(property) || !isNil(ReflectUtils.items[key][target][String(property)]))))
    )
  }

  static get<T = unknown>({ key, target, property, own = true }: MetaArgs): Array<T> {
    try {
      if (own) {
        return Reflect.getOwnMetadata(key, target, property) || null
      } else {
        return Reflect.getMetadata(key, target, property) || null
      }
    } catch (_err) {
      return null
    }
  }

  static first<T = unknown>({ key, target, property, own = true }: MetaArgs): T {
    const values = ReflectUtils.get<T>({ key, target, property, own })

    return isArray(values) ? first(values) : values
  }

  static last<T = unknown>({ key, target, property, own = true }: MetaArgs): T {
    const values = ReflectUtils.get<T>({ key, target, property, own })

    return isArray(values) ? last(values) : values
  }

  static set<T = unknown>({ key, target, property, value, propertyDescriptor }: MetaValueArgs<T>): void {
    Reflect.defineMetadata(key, value, target, property)

    ReflectUtils.put<T>({ key, target, property, value, propertyDescriptor })
  }

  static add<T = unknown>({ key, target, property, value, propertyDescriptor }: MetaValueArgs<T>): void {
    let values: Array<T> = ReflectUtils.get<T>({ key, target, property }) || new Array<T>()

    if (!isArray(values)) values = [values]

    values.push(value)

    ReflectUtils.set<Array<T>>({ key, target, property, value: values, propertyDescriptor })
  }

  static all = <T = unknown>({ key }: Partial<MetaArgs>) => {
    const items = ReflectUtils.items[key] || {}

    return flatten(
      Object.keys(items).map((item) => {
        return flatten(ReflectUtils.allFrom<T>(key, items[item]))
      })
    )
  }

  static allFrom = <T>(key: string, target: T) => {
    return Object.keys(target)
      .filter((property) => property !== 'object')
      .map((property) => ReflectUtils.allValuesFrom(key, target, property))
  }

  static allValuesFrom = <T>(key: string, target: T, property: string) => {
    const values = target[property]
    let value = values.value
    const propertyDescriptor = values.propertyDescriptor

    if (!isArray(value)) value = [value]

    return flatten(
      value.map((val) => {
        return {
          key,
          target: target['object'],
          property,
          value: val,
          propertyDescriptor
        }
      })
    )
  }

  // tslint:disable:no-dynamic-delete
  static delete({ key, target, property }: MetaArgs): boolean {
    Reflect.deleteMetadata(key, target, property)

    return ReflectUtils.remove(key, target, property)
  }

  static clear(key?: string): void {
    if (isNullOrEmpty(key)) {
      ReflectUtils.keys.forEach((storedKey) => {
        ReflectUtils.clear(storedKey)
      })
    } else {
      if (ReflectUtils.keys.includes(key)) {
        Object.values<MetaStorage>(ReflectUtils.items[key]).forEach((target) => {
          if (ReflectUtils.has(key, target)) {
            Object.values(ReflectUtils.items[key][target]).forEach((property) => {
              ReflectUtils.delete({
                key,
                target: target.object,
                property: String(property)
              })
              ReflectUtils.remove(key, target, String(property))
            })
          }

          ReflectUtils.delete({ key, target: target.object })
          ReflectUtils.remove(key, target)
        })
      }
    }
  }

  static getType = ({ target, propertyKey }) => {
    return Reflect.getMetadata('design:type', target, propertyKey)
  }

  static getReturntype = ({ target, propertyKey }) => {
    return Reflect.getMetadata('design:returntype', target, propertyKey)
  }

  private static put<T = unknown>({ key, target, property, value, propertyDescriptor }: MetaValueArgs<T>): void {
    const index = target.constructor.name

    ReflectUtils.items[key] = ReflectUtils.items[key] || {}
    ReflectUtils.items[key][index] = ReflectUtils.items[key][index] || {}
    ReflectUtils.items[key][index].object = target

    if (isNil(property)) {
      ReflectUtils.items[key][index].value = {
        value,
        propertyDescriptor
      }
    } else {
      ReflectUtils.items[key][index][String(property)] = ReflectUtils.items[key][index][String(property)] || {}
      ReflectUtils.items[key][index][String(property)] = {
        value,
        propertyDescriptor
      }
    }
  }

  private static remove<T>(key: string, target?: T, property?: string | symbol): boolean {
    if (ReflectUtils.has(key, target, property)) return delete ReflectUtils.items[key][target][String(property)]
    else if (ReflectUtils.has(key, target)) return delete ReflectUtils.items[key][target]
    else if (ReflectUtils.has(key)) return delete ReflectUtils.items[key]
    else return false
  }
}
