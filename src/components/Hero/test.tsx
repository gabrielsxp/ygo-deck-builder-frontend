import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers'

import Hero from '.'

const attrs = {
  img:
    'https://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1605019062/ddmykcs-6df034b8-8f0b-4c0b-bab6-e65722d067a3_asqyor.webp',
  preTitle: 'Find your favorite cards and create a deck with',
  title: 'Yu-GI-Oh! Deck builder !',
  subtitle:
    'Use our tool to find and create a Yu-Gi-Oh deck to share with everybody',
  buttonTitle: 'Create a deck',
  buttonLink: '/deck'
}

describe('<Hero />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Hero {...attrs} />)
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /Find your favorite cards and create a deck with/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Yu-GI-Oh! Deck builder !/i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /Use our tool to find and create a Yu-Gi-Oh deck to share with everybody/i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /create a deck/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
