import { red } from 'chalk'
import { inspect } from 'util'
import { Prompto, Prompts } from './prompts'

export const run = async (prompts: Prompts) => {
  return new Prompto(prompts)
    .start('Scrapfy')
    .prompt()
    .then((res) => console.log(res, '\n'))
    .catch((err) => console.error(red(inspect(err.message)), err))
}
