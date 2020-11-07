import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading', () => {
    renderWithTheme(<Heading>Latest Decks</Heading>)
    expect(screen.getByRole('heading')).toHaveStyle({ color: '#FAFAFA' })
  })
  it('should render a black heading', () => {
    renderWithTheme(<Heading color="dark">Latest Decks</Heading>)
    expect(screen.getByRole('heading')).toHaveStyle({ color: '#030517' })
  })
})
