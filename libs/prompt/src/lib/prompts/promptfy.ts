import { prompt as Prompt, Answers, QuestionCollection } from 'inquirer'

export abstract class Promptfy<T> {
  constructor(readonly questions: QuestionCollection) {}

  handle?(value: Answers): Promise<T | Array<T>>

  prompt = async () => {
    const chosen = await Prompt(this.questions)

    return this.handle(chosen)
  }
}
