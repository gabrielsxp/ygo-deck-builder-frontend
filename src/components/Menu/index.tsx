import { useState } from 'react'
import Link from 'next/link'
import * as S from './styles'
import Logo from 'components/Logo'
import Button from 'components/Button'
// import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search'
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
        </S.MenuGroup>
      </MediaMatch>

      <S.MenuGroup>
        <Link href="/boxes" passHref>
          <S.MenuLink title="Boxes">All boxes</S.MenuLink>
        </Link>
      </S.MenuGroup>

      <MediaMatch lessThan="medium">
        <S.MenuFull isOpen={isOpen} aria-hidden={!isOpen}>
          <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
          <S.NavWrapper>
            <S.MenuLink href="/" title="Home">
              Home
            </S.MenuLink>
            <S.MenuLink href="/boxes" title="Boxes">
              Boxes
            </S.MenuLink>
          </S.NavWrapper>
        </S.MenuFull>
      </MediaMatch>
    </S.Wrapper>
  )
}

export default Menu
