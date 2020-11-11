import styled, { css } from 'styled-components'
import { rgba } from 'polished'
// import media from 'styled-media-query'
import { DeckCardProps } from '.'

type CardProps = Pick<DeckCardProps, 'isFavorited'>

export const Wrapper = styled.a`
  ${({ theme }) => css`
    position: relative;
    background-color: ${theme.colors.white};
    border: 0.3rem solid ${rgba(theme.colors.primary, 0.6)};
    border-radius: ${theme.border.radius};
    /* overflow: hidden; */
    max-width: 340px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;

    &:hover {
      border-color: ${theme.colors.primary};
      transition: all 0.5s ease-in-out;
      > ${Image} {
        transform: scale(1.2);
        transition: all 0.5s ease-in-out;
      }
    }
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 3rem;
      bottom: -3rem;
      background: transparent;
      left: 0;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 35%;
    background-color: ${rgba(theme.colors.secondary, 0.8)};
    padding: ${theme.spacings.xsmall};
  `}
`

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    margin: ${theme.spacings.xxsmall} 0;
    word-break: break-all;
  `}
`

export const NumbersContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const NumberSpan = styled.span`
  display: flex;
  align-items: center;
  margin-right: 1.2rem;
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;
    position: relative;
    margin-right: ${theme.spacings.xxsmall};
    > svg {
      width: 100%;
      height: 100%;
      color: ${theme.colors.white};
    }
  `}
`

export const FavoriteButton = styled.button<CardProps>`
  ${({ theme, isFavorited }) => css`
    position: relative;
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
    outline: none;
    border: none;
    background-color: transparent;
    > svg {
      width: 100%;
      height: 100%;
      color: ${isFavorited ? theme.colors.primary : theme.colors.white};
      transition: color 0.3s ease;
    }
  `}
`
export const NameWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`
