// tslint:disable: variable-name
import { debug, Debugger } from 'debug'

export const ROOT_NAMESPACE = 'scrapfy' as const

export const Loggy: Debugger = debug(ROOT_NAMESPACE)
