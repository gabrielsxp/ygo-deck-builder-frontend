import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers'

import Overlay from '.'

describe('<Overlay />', () => {
  it('should render the Overlay displaying on the screen', () => {
    renderWithTheme(
      <Overlay show>
        <h1 aria-hidden="true">Content</h1>
      </Overlay>
    )
    expect(
      screen.getByRole('heading', { hidden: true }).parentElement
    ).toHaveStyle({
      display: 'block'
    })
  })
  it('should not render the Overlay displaying on the screen', () => {
    renderWithTheme(
      <Overlay>
        <h1 aria-hidden="true">Content</h1>
      </Overlay>
    )
    expect(
      screen.getByRole('heading', { hidden: true }).parentElement
    ).toHaveStyle({
      display: 'none'
    })
  })
})
