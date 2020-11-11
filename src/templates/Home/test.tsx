import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers'

import Home from '.'

describe('<Home />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Home>
        <h1>Home</h1>
      </Home>
    )

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/deck column/i)).toBeInTheDocument()
  })
})
