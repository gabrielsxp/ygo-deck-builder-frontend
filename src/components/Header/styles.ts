import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { rgba } from 'polished'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 12rem;
    border: none;
    border-top: 0.2rem solid ${theme.colors.white};
    border-bottom: 0.2rem solid ${theme.colors.white};
    overflow: hidden;

    &:hover {
      & > img {
        transform: scale(1.1);
      }
    }

    > #header-children {
      z-index: ${theme.layers.menu + 10};
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: ${rgba(theme.colors.secondary, 0.5)};
      z-index: ${theme.layers.menu};
    }
    ${media.greaterThan('medium')`
      height: 40rem;
    `}
    ${media.between('medium', 'large')`
      height: 20rem;
    `}
  `}
`

export const Image = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  object-fit: contain;
  transition: transform 0.5s ease-in-out;

  ${media.greaterThan('medium')`
    object-fit: cover;
  `}
`
