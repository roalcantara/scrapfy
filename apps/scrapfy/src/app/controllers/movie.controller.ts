import { Controller, Get, Param } from '@nestjs/common'
import { Movie, ImdbService } from '@scrapfy/domain'

@Controller('movies')
export class MovieController {
  constructor(private readonly service: ImdbService) {}

  @Get()
  async findBestPictures(): Promise<Array<Movie>> {
    return this.service.findBestPictures()
  }

  @Get(':endpoint')
  async findReview(@Param() params): Promise<Movie> {
    return this.service.findReview(params.endpoint)
  }
}
