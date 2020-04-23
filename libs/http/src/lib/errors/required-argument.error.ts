import { InvalidArgumentError } from './invalid-argument.error'

const NAMED_PARAMETER_REGEX = new RegExp(/(:)\w+/g)
const ERROR_MESSAGE_TEMPLATE = ':arg is required'

export class RequiredArgumentError extends InvalidArgumentError {
  constructor(...args: Array<string>) {
    super(args.map((arg) => ERROR_MESSAGE_TEMPLATE.replace(NAMED_PARAMETER_REGEX, arg)).join(', '))
  }
}
