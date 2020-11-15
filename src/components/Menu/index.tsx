import { useState } from 'react'
import Link from 'next/link'
import * as S from './styles'
import Logo from 'components/Logo'
import Button from 'components/Button'
import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search'
import { LogIn as LoginIcon } from '@styled-icons/boxicons-regular/LogIn'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { Close as CloseIcon } from '@styled-icons/material/Close'
import MediaMatch from 'components/MediaMatch'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper>
          <MenuIcon aria-label="Open Menu" onClick={() => setIsOpen(true)} />
        </S.IconWrapper>
      </MediaMatch>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>
      <MediaMatch greaterThan="medium">
        <S.MenuGroup>
          <Link href="/" passHref>
            <S.MenuLink title="Home">Home</S.MenuLink>
          </Link>
          <Link href="boxes" passHref>
            <S.MenuLink title="Boxes">Boxes</S.MenuLink>
          </Link>
          {/* <S.MenuLink href="#" title="Top Deck">
            Top Decks
          </S.MenuLink> */}
        </S.MenuGroup>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <LoginIcon aria-label="Go to LogIn page" />
        </S.IconWrapper>
        {!username && (
          <MediaMatch greaterThan="medium">
            <Button>Sign in</Button>
          </MediaMatch>
        )}
        {!!username && (
          <MediaMatch greaterThan="medium">
            <Button>My account</Button>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <MediaMatch lessThan="medium">
        <S.MenuFull isOpen={isOpen} aria-hidden={!isOpen}>
          <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
          <S.NavWrapper>
            <S.MenuLink href="#" title="Latest Decks">
              Latest Decks
            </S.MenuLink>
            <S.MenuLink href="#" title="Top Decks">
              Top Decks
            </S.MenuLink>
            {!!username && (
              <>
                <S.MenuLink href="#" title="My Account">
                  My account
                </S.MenuLink>
                <S.MenuLink href="#" title="Sign Out">
                  Sign out
                </S.MenuLink>
              </>
            )}
          </S.NavWrapper>
          {!username && (
            <S.RegistrationBox>
              <Button fullWidth={false} size="large">
                Login now
              </Button>
              <span>or</span>
              <S.CreateAccount href="#" title="Create an account">
                Create an account
              </S.CreateAccount>
            </S.RegistrationBox>
          )}
        </S.MenuFull>
      </MediaMatch>
    </S.Wrapper>
  )
}

export default Menu
