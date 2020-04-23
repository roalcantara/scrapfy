import { Module } from '@nestjs/common'
import { CommandModule } from 'nestjs-command'

import { DomainModule } from './modules'
import { MovieController, PokemonController } from './controllers'
import { MovieCommand, PokemonCommand } from './commands'

const modules = [DomainModule, CommandModule]
const controllers = [MovieController, PokemonController]
const commands = [MovieCommand, PokemonCommand]

@Module({
  imports: [...modules],
  controllers: [...controllers],
  providers: [...commands]
})
export class AppModule {}
