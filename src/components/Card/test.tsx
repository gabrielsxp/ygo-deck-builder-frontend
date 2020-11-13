import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers'
import monster, { spell, trap } from './mock'

import Card from '.'

describe('<Card />', () => {
  it('should render a card', () => {
    renderWithTheme(<Card {...monster} />)
    expect(screen.getByAltText(/UR/i)).toBeInTheDocument()
    expect(
      screen.getByAltText(/Blue-Eyes Ultimate Dragon/i)
    ).toBeInTheDocument()
  })
  it('should render a monster card', () => {
    renderWithTheme(<Card {...monster} />)
    fireEvent.mouseOver(screen.getByAltText(/Blue-Eyes Ultimate Dragon/i))
    expect(screen.getByLabelText(/Card infos container/i)).toBeInTheDocument()
  })
})
