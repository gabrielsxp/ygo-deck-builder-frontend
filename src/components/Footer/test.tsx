import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 3 columns topics', () => {
    renderWithTheme(<Footer />)
    expect(screen.getByLabelText(/deck column/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/account column/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/contact column/i)).toBeInTheDocument()
  })
})
