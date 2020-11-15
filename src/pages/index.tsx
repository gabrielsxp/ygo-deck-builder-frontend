import * as S from 'templates/Home/styles'
import Home from 'templates/Home'
import { Container } from 'components/Container'
import Hero, { HeroProps } from 'components/Hero'
import DeckCarousel from 'components/DecksCarousel'
import { DeckCardProps } from 'components/DeckCard'

const heroArgs: HeroProps = {
  img:
    'https://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1605019062/ddmykcs-6df034b8-8f0b-4c0b-bab6-e65722d067a3_asqyor.webp',
  preTitle: 'Find your favorite cards and create a deck with',
  title: 'Yu-GI-Oh! Deck builder !',
  subtitle:
    'Use our tool to find and create a Yu-Gi-Oh deck to share with everybody',
  buttonTitle: 'Create a deck',
  buttonLink: '/deck'
}

const deckList: DeckCardProps[] = [
  {
    name: 'Buster Blader OTK',
    author: 'Dark Paladin',
    publishedDate: '20/11/2020 11:00',
    mainNumberOfCards: 42,
    sideNumberOfCards: 0,
    extraNumberOfCards: 0,
    url: '/deck',
    img:
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604629262/ixsk7mjsn4afqc4hgevt.webp',
    isFavorited: false
  },
  {
    name: 'Dark Magician OTK',
    author: 'vagabond',
    publishedDate: '20/11/2020 11:00',
    mainNumberOfCards: 42,
    sideNumberOfCards: 12,
    extraNumberOfCards: 5,
    url: '/deck',
    img:
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604629234/kdxg3vuj6zyyf0rxxkdk.webp',
    isFavorited: true
  },
  {
    name: 'Blue-Eyes Ultimate',
    author: 'random-user-23',
    publishedDate: '20/11/2020 11:00',
    mainNumberOfCards: 42,
    sideNumberOfCards: 12,
    extraNumberOfCards: 12,
    url: '/deck',
    img:
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604638816/begep20gxmacb4x9pxxh.webp',
    isFavorited: false
  },
  {
    name: 'Buster Blader OTK',
    author: 'Dark Paladin',
    publishedDate: '20/11/2020 11:00',
    mainNumberOfCards: 42,
    sideNumberOfCards: 0,
    extraNumberOfCards: 0,
    url: '/deck',
    img:
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604629262/ixsk7mjsn4afqc4hgevt.webp',
    isFavorited: false
  },
  {
    name: 'Dark Magician OTK',
    author: 'vagabond',
    publishedDate: '20/11/2020 11:00',
    mainNumberOfCards: 42,
    sideNumberOfCards: 12,
    extraNumberOfCards: 5,
    url: '/deck',
    img:
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604629234/kdxg3vuj6zyyf0rxxkdk.webp',
    isFavorited: true
  },
  {
    name: 'Blue-Eyes Ultimate',
    author: 'random-user-23',
    publishedDate: '20/11/2020 11:00',
    mainNumberOfCards: 42,
    sideNumberOfCards: 12,
    extraNumberOfCards: 12,
    url: '/deck',
    img:
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604638816/begep20gxmacb4x9pxxh.webp',
    isFavorited: false
  }
]

export default function Index() {
  return (
    <Home>
      <S.LighterWrapperImage>
        <Container>
          <Hero {...heroArgs} />
        </Container>
      </S.LighterWrapperImage>
      <S.SectionWrapperAnimated>
        <img src="/img/shape1.webp" id="pattern-1" alt="animation shape 1" />
        <img src="/img/shape2.webp" id="pattern-2" alt="animation shape 1" />
        <img src="/img/shape3.webp" id="pattern-3" alt="animation shape 1" />
        <Container>
          <DeckCarousel
            title="Latest Decks"
            subtitle="Decks that were posted on the last hour"
            color="dark"
            items={deckList}
          />
        </Container>
      </S.SectionWrapperAnimated>
      <section style={{ padding: '5rem 0' }}>
        <Container>
          <DeckCarousel
            title="Top Decks"
            color="dark"
            subtitle="Most viewed decks of the last week"
            items={deckList}
          />
        </Container>
      </section>
    </Home>
  )
}
