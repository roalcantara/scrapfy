import Ora from 'ora'
import { from, Observable, of } from 'rxjs'
import { finalize } from 'rxjs/operators'

import { isAsyncFunction, isObservable, decorate } from '@scrapfy/meta'

const handle = <T>(observable: Observable<T>) => {
  const spin = Ora(`Loading...\n`).start()

  return observable.pipe(finalize(() => spin.stop()))
}

export const spinner = decorate(({ instance, method }, ...args) => {
  if (isAsyncFunction(method)) {
    return handle(from(method.apply(instance, args))).toPromise()
  }

  if (isObservable(method)) {
    return handle(method.apply(instance, args))
  }

  return handle(of(method.apply(instance, args)))
})
