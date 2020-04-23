import { Crawlify } from '@scrapfy/crawler'
import { Movie } from './movie.model'
import { trace } from '@scrapfy/log'
import { spinner } from '@scrapfy/prompt'

export class ImdbService {
  options = ['Best Picture-Winning', '1917 Review'] as const

  constructor(readonly scrapfy = new Crawlify()) {}

  @trace
  @spinner
  async findBestPictures(count = 10): Promise<Array<Movie>> {
    const url = this.urlTo(`search/title/?count=${count}&groups=oscar_best_picture_winners&sort=year%2Cdesc`)
    const page = await this.scrapfy.load(url)

    return page?.forEach('.pagecontent .lister-item.mode-advanced', (doc) => {
      return new Movie({
        name: doc?.find('h3')?.text(),
        director: doc?.find('div.lister-item-content > p:nth-child(5) > a:nth-child(1)')?.text(),
        description: doc?.find('div.lister-item-content > p:nth-child(4)')?.text()
      })
    })
  }

  @trace
  @spinner
  async findReview(endpoint: string): Promise<Movie> {
    const url = this.urlTo(endpoint)
    const page = await this.scrapfy.load(url)

    return page?.at('#title-overview-widget', (doc) => {
      return new Movie({
        name: doc?.find('div.vital > div.title_block > div > div.titleBar > div.title_wrapper > h1')?.text(),
        director: doc?.find('div.plot_summary_wrapper > div.plot_summary > div:nth-child(2) > a')?.text(),
        description: doc?.find('div.plot_summary_wrapper > div.plot_summary > div.summary_text')?.text()
      })
    })
  }

  private urlTo = (url: string) => {
    return ['http://www.imdb.com', url].join('/')
  }
}
