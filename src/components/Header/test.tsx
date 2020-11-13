import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers'
import Header from '.'
import data from 'components/BoxCardPack/mock'

describe('<Header />', () => {
  it('should render a header without children', () => {
    renderWithTheme(<Header name={data.name} image={data.cover} />)

    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByAltText(/The Ultimate Rising Box/i)).toBeInTheDocument()
  })
})
