import { render, screen } from '@testing-library/react'

import Overlay from '.'

describe('<Overlay />', () => {
  it('should render the heading', () => {
    const { container } = render(<Overlay />)

    expect(screen.getByRole('heading', { name: /Overlay/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
