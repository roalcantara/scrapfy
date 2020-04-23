export class Pokemon {
  id?: number
  url?: string
  name?: string
  weight?: number
  height?: number

  constructor(args: Partial<Pokemon>) {
    Object.assign(this, args)
  }
}
