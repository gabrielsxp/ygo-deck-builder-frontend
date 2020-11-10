import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(
      screen.getByAltText(/picture of winged kuriboh/i)
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/go to login page/i)).toBeInTheDocument()
  })
  it('should handle the open/close menu', () => {
    renderWithTheme(<Menu />)
    // select the expanded menu element
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    // check if the menu is initialy hidden
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
    // check if menu opens if clicked on menu icon
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })
    // check if menu closes if click on clone icon
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })
  it('should render links of dislogged account and display the registration box', () => {
    renderWithTheme(<Menu />)
    expect(screen.getByTitle(/latest decks/i)).toBeInTheDocument()
    expect(screen.getByTitle(/top decks/i)).toBeInTheDocument()
    expect(screen.getByText(/login now/i).parentElement).toBeInTheDocument()
    expect(screen.getByText(/or/i)).toBeInTheDocument()
    expect(screen.getByText(/create an account/i)).toBeInTheDocument()
  })
  it('should render links for a logged in user', () => {
    renderWithTheme(<Menu username="gabriel" />)
    expect(screen.queryByTitle(/my account/i)).toBeInTheDocument()
    expect(screen.queryByTitle(/sign out/i)).toBeInTheDocument()
    expect(screen.queryByText(/login now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/or/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/create an account/i)).not.toBeInTheDocument()
  })
})
