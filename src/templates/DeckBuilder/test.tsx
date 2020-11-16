import { render, screen } from '@testing-library/react'

import DeckBuilder from '.'

describe('<DeckBuilder />', () => {
  it('should render the heading', () => {
    const { container } = render(<DeckBuilder />)

    expect(screen.getByRole('heading', { name: /DeckBuilder/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
