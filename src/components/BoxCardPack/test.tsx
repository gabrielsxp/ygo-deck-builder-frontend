import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers'
import data from './mock'

import BoxCardPack from '.'

describe('<BoxCardPack />', () => {
  it('should render the a complete card pack with all attributes', () => {
    renderWithTheme(<BoxCardPack {...data} />)

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      '/box/the-ultimate-rising-box'
    )

    expect(screen.getByAltText(/The Ultimate Rising Box/i)).toBeInTheDocument()

    expect(screen.getByText(/The Ultimate Rising Box/i)).toHaveStyle({
      opacity: 0
    })
  })
})
