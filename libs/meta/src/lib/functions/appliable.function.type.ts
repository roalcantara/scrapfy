/* eslint-disable @typescript-eslint/no-explicit-any */
export type AppliableFunction = {
  apply<A extends Array<unknown>>(target: object, args: A): any
}
