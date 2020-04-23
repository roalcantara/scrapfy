import { green, red } from 'chalk'
import { Debugger } from 'debug'
import { compact, first, flatten, get, isArray, isEmpty, isNil, isObject, size } from 'lodash'
import prettyFormat from 'pretty-format'

import { clazzNameOf } from '@scrapfy/meta'
import { Loggy } from '../logger/loggy'
import { isNullOrEmpty } from '@scrapfy/util'

export type Debuggable = {
  debug: Debugy
}

export type Formatter = {
  format<T, K>(values: T, ...args: Array<K>): string
}

export type Color = (message: string) => string

type FormatOptions = {
  color: Color
  args: Array<unknown>
}

export type LogOptions = {
  target: unknown
  namespace?: Array<string>
  formatter?: Formatter
}

export class Debugy {
  target?: unknown
  Loggy: Debugger
  formatter?: Formatter
  namespaces: Set<string>

  get entries(): Array<string> {
    return Array.from(get(this, 'namespaces', []))
  }

  get namespace(): string {
    return [...compact(this.entries || [])].join(':')
  }

  constructor(options: LogOptions) {
    this.namespaces = new Set<string>()

    if (options.formatter) {
      this.formatter = options.formatter
    }

    if (isObject(options.target)) {
      this.push(...this.namespacesFor(options.target))
    }

    if (options.namespace) {
      this.push(...options.namespace)
    }
  }

  log<T>(message?: T, ...args: Array<unknown>): Debugy {
    this.Loggy(this.format(message, { args, color: green }))

    return this
  }

  trace<T>(message?: T, ...args: Array<unknown>): Debugy {
    return this.with('trace').log(message, ...args)
  }

  error(error: Error, ...args: Array<unknown>): Debugy {
    this.Loggy.extend('error')(this.format(error.stack, { args, color: red }))

    return this
  }

  build(): Debugy {
    this.Loggy = Loggy

    this.entries.forEach((namespace) => {
      this.Loggy = this.Loggy.extend(namespace)
    })

    return this
  }

  with(...namespace: Array<string>): Debugy {
    const namespaces = compact(flatten([...this.entries, ...namespace]))

    return new Debugy({ target: this.target, namespace: namespaces })
  }

  push(...namespace: Array<string>): Debugy {
    if (namespace) {
      namespace.filter((item) => !isNullOrEmpty(item)).forEach((item) => this.namespaces.add(item))
    }

    return this.build()
  }

  unshift(...namespace: Array<string>): Debugy {
    if (namespace) {
      return this.reset(...namespace, ...this.entries)
    }

    return this
  }

  reset(...namespace: Array<string>): Debugy {
    this.namespaces = new Set(flatten(compact(namespace)))

    return this.build()
  }

  startWith(...namespace: Array<string>): Debugy {
    const current = this.namespaces

    this.namespaces = new Set(flatten([compact(namespace), ...current]))

    return this.build()
  }

  shift(): Debugy {
    const list = this.entries

    list.shift()

    return this.reset(...list)
  }

  pop(): Debugy {
    const list = this.entries

    list.pop()

    return this.reset(...list)
  }

  clear(): Debugy {
    return this.reset()
  }

  puts(...args: Array<string>): string {
    return [`[${this.namespace}]`, ...args].join(' ')
  }

  private format = <T>(message: T, { args, color }: FormatOptions) => {
    return color(['=> ', this.formatMessage(message, args)].join(''))
  }

  private formatMessage = <T>(message: T, ...args: Array<unknown>) => {
    if (this.formatter) {
      return this.formatter.format(message, ...args)
    }

    const messages = isArray(message) ? message : [message]

    let msg = compact([...messages, ...args]).reduce((reduced, next) => {
      if (!isNil(next) && !isEmpty(next) && size(next) !== 0) {
        reduced.push(next)
      }

      return reduced
    }, [])

    if (size(msg) === 1) {
      msg = first(msg)
    }

    return prettyFormat(msg, { min: true })
  }

  private namespacesFor = (target: object): Array<string> => {
    if (isNil(target)) return []

    return [clazzNameOf(target)]
  }
}
