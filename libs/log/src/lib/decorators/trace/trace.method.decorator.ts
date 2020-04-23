import { from, Observable, of, throwError } from 'rxjs'
import { catchError, concatMap } from 'rxjs/operators'

import { Debugy } from '../../debug/debugy'
import { isAsyncFunction, isObservable, decorate } from '@scrapfy/meta'

const onStart = (args: Array<unknown>, debug: Debugy) => {
  debug.log(args)
}

const onSuccess = <T>(value: T) => {
  return of(value)
}

const onError = (error: Error, debug: Debugy) => {
  debug.error(error)

  return throwError(error)
}

const handle = <T>(observable: Observable<T>, debug: Debugy) => {
  return observable.pipe(
    concatMap((value) => onSuccess(value)),
    catchError((error) => onError(error, debug))
  )
}

export const trace = decorate(({ target, propertyKey, instance, method }, ...args) => {
  const debug = new Debugy({ target, namespace: [propertyKey] })

  onStart(args, debug)

  if (isAsyncFunction(method)) {
    return handle(from(method.apply(instance, args)), debug).toPromise()
  }

  if (isObservable(method)) {
    return handle(method.apply(instance, args), debug)
  }

  return handle(of(method.apply(instance, args)), debug)
})
