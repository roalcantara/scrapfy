import { Module } from '@nestjs/common'
import { ImdbService, PokeapiService } from '@scrapfy/domain'

const services = [ImdbService, PokeapiService]

@Module({
  providers: [...services],
  exports: [...services]
})
export class DomainModule {}
