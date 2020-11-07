import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a logo with 100px wide', () => {
    render(<Logo />)
    expect(
      screen.getByAltText(/picture of winged kuriboh/i).parentElement
    ).toHaveStyle({
      width: '10rem'
    })
  })
  it('should render a smaller logo', () => {
    render(<Logo size="small" />)
    expect(
      screen.getByAltText(/picture of winged kuriboh/i).parentElement
    ).toHaveStyle({ width: '5rem' })
  })
  it('should render a bigger logo', () => {
    render(<Logo size="big" />)
    expect(
      screen.getByAltText(/picture of winged kuriboh/i).parentElement
    ).toHaveStyle({ width: '20rem' })
  })
})
