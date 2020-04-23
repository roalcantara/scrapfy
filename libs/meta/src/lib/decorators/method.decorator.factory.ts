// tslint:disable: typedef no-invalid-this
import { AppliableFunction, isAsyncFunction } from '../functions'

type Decoration = {
  target: object
  propertyKey: string
  propertyDescriptor: PropertyDescriptor
  instance?: object
  params?: Array<unknown>
  method: AppliableFunction
}

type Handler = (decoration: Decoration, ...args: Array<unknown>) => unknown

const buildAsyncFunction = (handle: Handler, options: Decoration) =>
  async function (...args: Array<unknown>) {
    return handle({ ...options, instance: this }, ...args)
  }

const buildSyncFunction = (handle: Handler, options: Decoration) =>
  function (...args: Array<unknown>) {
    return handle({ ...options, instance: this }, ...args)
  }

export const decorate = (handle: Handler) => (
  target: object,
  propertyKey: string,
  propertyDescriptor: PropertyDescriptor
) => {
  const method: AppliableFunction = propertyDescriptor.value
  const decoration: Decoration = { target, propertyKey, propertyDescriptor, method }

  if (isAsyncFunction(method)) {
    propertyDescriptor.value = buildAsyncFunction(handle, decoration)
  } else {
    propertyDescriptor.value = buildSyncFunction(handle, decoration)
  }

  return propertyDescriptor
}
