import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers'
import DeckCard, { DeckCardProps } from '.'

const attrs: DeckCardProps = {
  img:
    'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604629234/kdxg3vuj6zyyf0rxxkdk.webp',
  name: 'Dark Magician OTK',
  author: 'Gabriel',
  mainNumberOfCards: 42,
  sideNumberOfCards: 12,
  extraNumberOfCards: 5,
  isFavorited: false,
  url: '/deck',
  publishedDate: '21/11/2020 14:00'
}
const attrsFavorited: DeckCardProps = {
  img:
    'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604629234/kdxg3vuj6zyyf0rxxkdk.webp',
  name: 'Dark Magician OTK',
  author: 'Gabriel',
  mainNumberOfCards: 42,
  sideNumberOfCards: 12,
  extraNumberOfCards: 5,
  isFavorited: true,
  url: '/deck',
  publishedDate: '21/11/2020 14:00'
}
const attrsNoSideAndExtraDecks: DeckCardProps = {
  img:
    'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604629234/kdxg3vuj6zyyf0rxxkdk.webp',
  name: 'Dark Magician OTK',
  author: 'Gabriel',
  mainNumberOfCards: 42,
  sideNumberOfCards: 0,
  extraNumberOfCards: 0,
  isFavorited: false,
  url: '/deck',
  publishedDate: '21/11/2020 14:00'
}

describe('<DeckCard />', () => {
  it('should render a Card with all properties setted', () => {
    renderWithTheme(<DeckCard {...attrs} />)
    // card link
    expect(screen.getByRole('link')).toHaveAttribute('href', '/deck')
    // name
    expect(
      screen.getByRole('heading', { name: /dark magician otk/i })
    ).toBeInTheDocument()
    // img
    expect(screen.getByRole('img')).toBeInTheDocument()
    // author
    expect(screen.getByTitle(/Author Name/i)).toBeInTheDocument()
    // publication date
    expect(screen.getByTitle(/Publication Date/i)).toBeInTheDocument()
    // main deck number of cards
    expect(
      screen.getByLabelText(/Number of Cards on Main Deck/i)
    ).toBeInTheDocument()
    expect(
      screen.getByTitle(/umber of Cards on Main Deck/i)
    ).toBeInTheDocument()
    // side deck number of cards
    expect(
      screen.queryByLabelText(/Number of Cards on Side Deck/i)
    ).toBeInTheDocument()
    expect(
      screen.queryByTitle(/Number of Cards on Side Deck/i)
    ).toBeInTheDocument()
    // extra deck number of cards
    expect(
      screen.queryByLabelText(/Number of Cards on Extra Deck/i)
    ).toBeInTheDocument()
    expect(
      screen.queryByTitle(/Number of Cards on Extra Deck/i)
    ).toBeInTheDocument()
  })
  it('should render a Card with no extra and side decks number of cards informed', () => {
    renderWithTheme(<DeckCard {...attrsNoSideAndExtraDecks} />)
    // card link
    expect(screen.getByRole('link')).toHaveAttribute('href', '/deck')
    // name
    expect(
      screen.getByRole('heading', { name: /dark magician otk/i })
    ).toBeInTheDocument()
    // img
    expect(screen.getByRole('img')).toBeInTheDocument()
    // author
    expect(screen.getByTitle(/Author Name/i)).toBeInTheDocument()
    // publication date
    expect(screen.getByTitle(/Publication Date/i)).toBeInTheDocument()
    // main deck number of cards
    expect(
      screen.getByLabelText(/Number of Cards on Main Deck/i)
    ).toBeInTheDocument()
    expect(
      screen.getByTitle(/umber of Cards on Main Deck/i)
    ).toBeInTheDocument()
    // side deck number of cards
    expect(
      screen.queryByLabelText(/Number of Cards on Side Deck/i)
    ).not.toBeInTheDocument()
    expect(
      screen.queryByTitle(/Number of Cards on Side Deck/i)
    ).not.toBeInTheDocument()
    // extra deck number of cards
    expect(
      screen.queryByLabelText(/Number of Cards on Extra Deck/i)
    ).not.toBeInTheDocument()
    expect(
      screen.queryByTitle(/Number of Cards on Extra Deck/i)
    ).not.toBeInTheDocument()
  })
  it('should render the favorite button filled with primary color', () => {
    renderWithTheme(<DeckCard {...attrsFavorited} />)
    expect(screen.getByLabelText(/deck is favorited/i)).toHaveStyle({
      color: '#d5057f'
    })
  })
  it('should render the favorite button with border and white color', () => {
    renderWithTheme(<DeckCard {...attrs} />)
    expect(screen.getByLabelText(/deck is not favorited/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
