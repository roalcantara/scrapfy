import { Requestfy } from '@scrapfy/http'
import { strip } from '@scrapfy/util'
import { Pokemon } from './pokemon.model'
import { PokeapiResponse } from './pokeapi.response'
import { trace } from '@scrapfy/log'
import { spinner } from '@scrapfy/prompt'

export class PokeapiService {
  names = [
    'Bulbasaur',
    'Ivysaur',
    'Venusaur',
    'Charmander',
    'Charmeleon',
    'Charizard',
    'Squirtle',
    'Wartortle',
    'Blastoise',
    'Caterpie',
    'Metapod',
    'Butterfree',
    'Weedle',
    'Kakuna',
    'Beedrill',
    'Pidgey',
    'Pidgeotto',
    'Pidgeot',
    'Rattata',
    'Raticate'
  ] as const

  constructor(readonly helper = new Requestfy('https://pokeapi.co/api/v2/pokemon')) {}

  @trace
  @spinner
  async findAll(): Promise<Array<Pokemon>> {
    const value = await this.helper.get<PokeapiResponse>()

    return value?.results?.map((item) => new Pokemon(item))
  }

  @trace
  @spinner
  async findPokemonByName(pokemon: string): Promise<Pokemon> {
    const endpoint = strip(pokemon).toString().toLowerCase()
    const value = await this.helper.get<Pokemon>({ endpoint })
    const { id, name, weight, height } = value || {}

    return new Pokemon({ id, name, weight, height })
  }
}
