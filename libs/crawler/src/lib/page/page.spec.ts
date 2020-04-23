import { Fixture } from '../../../src/tests'

import { Page, Parser } from './page'

describe('Page', () => {
  let html: string
  let subject: Page

  beforeEach(() => {
    subject = new Page({ html })
  })

  describe('#title', () => {
    beforeAll(() => {
      html = Fixture.load('imdb/1917-review.html')
    })

    it('returns the page`s title', () => {
      expect(subject.title).toEqual('1917 (2019) - IMDb')
    })
  })

  describe('#at()', () => {
    beforeAll(() => {
      html = Fixture.load('imdb/1917-review.html')
    })

    let result: unknown
    const selector = '#title-overview-widget'
    const parser: Parser<unknown> = (doc) => ({
      name: doc?.find('div.vital > div.title_block > div > div.titleBar > div.title_wrapper > h1')?.text(),
      director: doc?.find('div.plot_summary_wrapper > div.plot_summary > div:nth-child(2) > a')?.text(),
      description: doc?.find('div.plot_summary_wrapper > div.plot_summary > div.summary_text')?.text()
    })

    beforeEach(() => {
      result = subject.at(selector, parser)
    })

    it('parses a single result', () => {
      expect(result).toMatchObject({
        name: '1917 (2019)',
        director: 'Sam Mendes',
        description:
          'April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.'
      })
    })
  })

  describe('#forEach()', () => {
    beforeAll(() => {
      html = Fixture.load('imdb/best-picture-winning.html')
    })

    let result: unknown
    const selector = '.pagecontent .lister-item.mode-advanced'
    const parser: Parser<unknown> = (doc) => ({
      name: doc?.find('h3')?.text(),
      director: doc?.find('div.lister-item-content > p:nth-child(5) > a:nth-child(1)')?.text(),
      description: doc?.find('div.lister-item-content > p:nth-child(4)')?.text()
    })

    beforeEach(() => {
      result = subject.forEach(selector, parser)
    })

    it('parses a single result', () => {
      expect(result).toMatchObject([
        {
          name: '1. Parasite (2019)',
          director: 'Bong Joon Ho',
          description:
            'A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. But their easy life gets complicated when their deception is threatened with exposure.'
        },
        {
          name: '2. Green Book (2018)',
          director: 'Peter Farrelly',
          description:
            'A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.'
        },
        {
          name: '3. The Shape of Water (2017)',
          director: 'Guillermo del Toro',
          description:
            'At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.'
        },
        {
          name: '4. Moonlight (I) (2016)',
          director: 'Barry Jenkins',
          description:
            'A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.'
        },
        {
          name: '5. Spotlight (I) (2015)',
          director: 'Tom McCarthy',
          description:
            'The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.'
        }
      ])
    })
  })
})
