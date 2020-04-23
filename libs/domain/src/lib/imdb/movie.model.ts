export class Movie {
  name?: string
  description?: string
  director?: string

  constructor(args: Partial<Movie>) {
    Object.assign(this, args)
  }
}
