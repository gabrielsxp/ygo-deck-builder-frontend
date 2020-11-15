import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { BoxCardPackProps } from '.'

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const ImageWrapper = styled.div<
  Pick<BoxCardPackProps, 'full' | 'slashAnimation'>
>`
  position: relative;
  width: 100%;
  height: 100%;
  ${({ full, slashAnimation, theme }) => css`
    ${full &&
    slashAnimation &&
    css`
      height: 50rem;
      > span {
        display: block;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 25rem;
        height: 50rem;
        border-radius: 0rem;
        z-index: 200;
        background-color: ${theme.colors.white};
        filter: blur(2rem);
        opacity: 0;
        animation: fadeAway 1.25s 0.75s ease-in-out forwards;
      }
    `};
  `};
  @keyframes fadeAway {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export const NameContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 40%;
    background-color: ${rgba(theme.colors.secondary, 0.8)};
    padding: ${theme.spacings.xsmall};
    position: relative;
  `}
`

export const Name = styled.p`
  ${({ theme }) => css`
    font-weight: bold;
    width: 15rem;
    background-color: ${rgba(theme.colors.lighterBg, 0.8)};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
    padding: ${theme.spacings.xxsmall};
    position: absolute;
    bottom: 0rem;
    left: 50%;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    transform: translateX(-50%);
  `}
`
