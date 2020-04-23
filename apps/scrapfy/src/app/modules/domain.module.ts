import { Module } from '@nestjs/common'
import { ImdbService } from '@scrapfy/domain'

const services = [ImdbService]

@Module({
  providers: [...services],
  exports: [...services]
})
export class DomainModule {}
