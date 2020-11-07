import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render a button with medium size and primary color', () => {
    renderWithTheme(<Button>Create deck</Button>)
    expect(screen.getByRole('button')).toHaveStyle({
      padding: '0.8rem 1.6rem',
      'background-color': '#d5057f'
    })
  })
  it('should render a button with small size and primary color', () => {
    renderWithTheme(<Button size="small">Create deck</Button>)
    expect(screen.getByRole('button')).toHaveStyle({
      padding: '0.8rem',
      'background-color': '#d5057f'
    })
  })
  it('should render a button with large size and primary color', () => {
    renderWithTheme(<Button size="large">Create deck</Button>)
    expect(screen.getByRole('button')).toHaveStyle({
      padding: '0.8rem 2.4rem',
      'background-color': '#d5057f'
    })
  })
  it('should render a button with a medium size and secondary color', () => {
    renderWithTheme(
      <Button size="medium" color="secondary">
        Create deck
      </Button>
    )
    expect(screen.getByRole('button')).toHaveStyle({
      padding: '0.8rem 1.6rem',
      'background-color': '#26253f'
    })
  })
  it('should render a button with a small size and secondary color', () => {
    renderWithTheme(
      <Button size="small" color="secondary">
        Create deck
      </Button>
    )
    expect(screen.getByRole('button')).toHaveStyle({
      padding: '0.8rem',
      'background-color': '#26253f'
    })
  })
  it('should render a button with a large size and secondary color', () => {
    renderWithTheme(
      <Button size="large" color="secondary">
        Create deck
      </Button>
    )
    expect(screen.getByRole('button')).toHaveStyle({
      padding: '0.8rem 2.4rem',
      'background-color': '#26253f'
    })
  })
})
