import { Module } from '@nestjs/common'

import { DomainModule } from './modules'
import { MovieController, PokemonController } from './controllers'

const modules = [DomainModule]
const controllers = [MovieController, PokemonController]

@Module({
  imports: [...modules],
  controllers: [...controllers]
})
export class AppModule {}
