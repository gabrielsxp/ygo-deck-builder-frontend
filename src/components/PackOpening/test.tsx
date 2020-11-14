import { render, screen } from '@testing-library/react'

import PackOpening from '.'

describe('<PackOpening />', () => {
  it('should render the heading', () => {
    const { container } = render(<PackOpening />)

    expect(screen.getByRole('heading', { name: /PackOpening/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
