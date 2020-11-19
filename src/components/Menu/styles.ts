import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type MenuProps = {
  isOpen: boolean
}

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} 0;
  `}
`

export const NavWrapper = styled.div``

export const MenuLink = styled.a`
  ${media.greaterThan('medium')`
    ${({ theme }) => css`
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.white};
      text-decoration: none;
      position: relative;
      &:hover {
        &:after {
          animation: hoverAnimation 0.3s ease forwards;
        }
      }
      &:after {
        content: '';
        position: absolute;
        bottom: -0.5rem;
        left: 50%;
        transform: translateX(-50%);
        height: 0.3rem;
        width: 0%;
        background-color: ${theme.colors.primary};
        animation: hoverAnimationSqueeze 0.3s ease forwards;

        @keyframes hoverAnimation {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        @keyframes hoverAnimationSqueeze {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      }
    `}
  `}
`

export const IconWrapper = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  cursor: pointer;
  margin: auto 0;
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
  > svg {
    width: 100%;
    height: 100%;
  }
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  `}
`

export const MenuGroup = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-self: center;

  > div {
    ${({ theme }) => css`
      padding-left: ${theme.spacings.xxsmall};
    `}
  }
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      > ${MenuLink} {
        margin-left: ${theme.spacings.xxsmall};
      }
    `}
    ${MenuLink} {
      ${media.lessThan('medium')`
        color: ${theme.colors.white};
        text-decoration
      `}
    }
  `}
`
export const RegistrationBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    > span {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.black};
      margin: 0.3rem 0;
    }
  `}
`
export const CreateAccount = styled.a`
  ${({ theme }) => css`
    position: relative;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.primary};
    font-weight: bold;
    text-decoration: none;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      left: 0;
      bottom: -0.5rem;
      height: 0.1rem;
      background-color: ${theme.colors.primary};
    }
  `}
`

export const MenuFull = styled.nav<MenuProps>`
  ${({ isOpen, theme }) => css`
    opacity: ${isOpen ? 1 : 0};
    padding: ${theme.spacings.large};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${theme.colors.white};
    position: fixed;
    overflow: hidden;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    pointer-events: ${isOpen ? 'full' : 'none'};
    transition: opacity 0.2s ease-in-out;
    z-index: 300;
    > svg {
      position: absolute;
      right: 1.6rem;
      top: 1.6rem;
      color: ${theme.colors.black};
      width: 2.4rem;
      height: 2.4rem;
      cursor: pointer;
    }

    ${NavWrapper} {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      justify-content: center;
    }

    ${MenuLink} {
      position: relative;
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.black};
      text-decoration: none;
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`
