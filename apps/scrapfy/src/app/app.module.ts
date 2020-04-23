import { Module } from '@nestjs/common'

import { DomainModule } from './modules'
import { MovieController } from './controllers'

const modules = [DomainModule]
const controllers = [MovieController]

@Module({
  imports: [...modules],
  controllers: [...controllers]
})
export class AppModule {}
