import { Command } from 'nestjs-command'
import { Injectable } from '@nestjs/common'
import { tablefy } from '@scrapfy/prompt'
import { ImdbService } from '@scrapfy/domain'

@Injectable()
export class MovieCommand {
  constructor(private readonly service: ImdbService) {}

  @Command({ command: 'movie:winners', describe: 'Loads all best pictures' })
  async findBestPictures(): Promise<void> {
    const values = await this.service.findBestPictures()

    console.log(tablefy({ values }), '\n')
  }
}
