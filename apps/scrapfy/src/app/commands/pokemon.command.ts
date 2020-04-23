import { Command } from 'nestjs-command'
import { Injectable } from '@nestjs/common'
import { tablefy } from '@scrapfy/prompt'
import { PokeapiService } from '@scrapfy/domain'

@Injectable()
export class PokemonCommand {
  constructor(private readonly service: PokeapiService) {}

  @Command({ command: 'pokemon:all', describe: 'Get them all!' })
  async findAll(): Promise<void> {
    const values = await this.service.findAll()

    console.log(tablefy({ values }), '\n')
  }
}
