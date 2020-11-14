import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers'
import CardGrid from '.'
import Card from 'components/Card'
import data from 'components/Card/mock'

describe('<CardGrid />', () => {
  it('should render a card grid with 40 cards', () => {
    renderWithTheme(
      <CardGrid>
        {Array.from(new Array(40)).map((_, index) => (
          <Card {...data} rarity="UR" key={index} />
        ))}
      </CardGrid>
    )

    expect(screen.getAllByAltText(/Blue-Eyes Ultimate Dragon/i)).toHaveLength(
      40
    )
  })
})
