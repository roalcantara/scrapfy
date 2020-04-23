import { Controller, Get, Param } from '@nestjs/common'
import { Pokemon, PokeapiService } from '@scrapfy/domain'

@Controller('pokemons')
export class PokemonController {
  constructor(private readonly service: PokeapiService) {}

  @Get()
  async findAll(): Promise<Array<Pokemon>> {
    return this.service.findAll()
  }

  @Get(':name')
  async findPokemonByName(@Param() param): Promise<Pokemon> {
    return this.service.findPokemonByName(param.name)
  }
}
