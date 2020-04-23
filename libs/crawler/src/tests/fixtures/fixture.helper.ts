import fs from 'fs'
import path from 'path'

export class Fixture {
  static path = (fileName: string) => {
    return path.join(__dirname, fileName)
  }

  static load = (fileName: string) => {
    return fs.readFileSync(Fixture.path(fileName)).toString()
  }
}
