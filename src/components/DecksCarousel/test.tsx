import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers'
import { DeckCardProps } from 'components/DeckCard'

import DecksCarousel from '.'

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

describe('<DecksCarousel />', () => {
  it('should render a carousel with 6 cards and a light theme', () => {
    renderWithTheme(
      <DecksCarousel
        items={deckList}
        title="Top Decks"
        subtitle="Most viewed decks of the last week"
        color="light"
      />
    )

    expect(
      screen.getByRole('heading', { name: /Top Decks/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Top Decks/i })).toHaveStyle({
      color: '#030517'
    })
    expect(
      screen.getByRole('heading', {
        name: /Most viewed decks of the last week/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /Most viewed decks of the last week/i
      })
    ).toHaveStyle({ color: '#d5057f' })
    expect(screen.getAllByRole('link')).toHaveLength(5)
    expect(screen.getByLabelText(/Carousel Container/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/next decks/i)).toHaveStyle({
      color: '#030517'
    })
    expect(screen.getByLabelText(/previous decks/i)).toHaveStyle({
      color: '#030517'
    })
  })
})
