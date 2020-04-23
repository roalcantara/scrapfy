import { yellow } from 'chalk'
import figlet from 'figlet'
import { Answers } from 'inquirer'

import { isArray } from 'lodash'
import { Promptfy } from './promptfy'
import { tablefy } from '../helpers/tables/tablefy'

export type Prompts = {
  [key: string]: Promptfy<unknown>
}

export class Prompto extends Promptfy<string> {
  constructor(readonly prompts: Prompts) {
    super([
      {
        type: 'list',
        name: 'option',
        message: yellow('What are you up to?'),
        choices: Object.keys(prompts)
      }
    ])
  }

  start(name: string): this {
    console.log(yellow(figlet.textSync(name, { horizontalLayout: 'full' })))

    return this
  }

  handle = async <T>(answer: Answers) => {
    const command = this.prompts[answer.option]
    const value = await command.prompt()
    const values = isArray(value) ? value : [value]

    return tablefy<T>({ values })
  }
}
