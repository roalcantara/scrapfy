import { Module } from '@nestjs/common'
import { CommandModule } from 'nestjs-command'

import { DomainModule } from './modules'
import { MovieController, PokemonController } from './controllers'

const modules = [DomainModule, CommandModule]
const controllers = [MovieController, PokemonController]

@Module({
  imports: [...modules],
  controllers: [...controllers]
})
export class AppModule {}
