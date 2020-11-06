import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a logo with 100px wide', () => {
    render(<Logo />)
    expect(
      screen.getByAltText(/picture of winged kuriboh/i).parentElement
    ).toHaveStyle({
      width: '100px'
    })
  })
})
