import { Story, Meta } from '@storybook/react/types-6-0'
import DecksCarousel, { DecksCarouselProps } from '.'
import { DeckCardProps } from 'components/DeckCard'

export default {
  title: 'DecksCarousel',
  component: DecksCarousel
} as Meta

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

export const LightCarousel: Story<DecksCarouselProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <DecksCarousel {...args} items={deckList} />
  </div>
)

export const DarkCarousel: Story<DecksCarouselProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <DecksCarousel {...args} items={deckList} />
  </div>
)

LightCarousel.args = {
  title: 'Latest Decks',
  subtitle: 'Decks that were posted on the last 24 hours',
  color: 'light'
}
DarkCarousel.args = {
  title: 'Top Decks',
  subtitle: 'Most viewed decks of the last week',
  color: 'dark'
}
DarkCarousel.parameters = {
  template: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
