import { Module } from '@nestjs/common'
import { CommandModule } from 'nestjs-command'

import { DomainModule } from './modules'
import { MovieController, PokemonController } from './controllers'
import { MovieCommand } from './commands'

const modules = [DomainModule, CommandModule]
const controllers = [MovieController, PokemonController]
const commands = [MovieCommand]

@Module({
  imports: [...modules],
  controllers: [...controllers],
  providers: [...commands]
})
export class AppModule {}
