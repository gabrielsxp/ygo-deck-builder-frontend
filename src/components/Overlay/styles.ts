import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { OverlayProps } from '.'
import media from 'styled-media-query'

type OverlayPartialProps = Pick<OverlayProps, 'show' | 'scroll'>

export const Wrapper = styled.div<OverlayPartialProps>`
  ${({ theme, show, scroll }) => css`
    background-color: ${rgba(theme.colors.black, 0.9)};
    position: fixed;
    overscroll-behavior: contain;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    overflow-x: hidden;
    overflow-y: ${scroll ? 'auto' : 'hidden'};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${theme.layers.alwaysOnTop};
    ${show
      ? () => css`
          display: block;
        `
      : () => css`
          display: none;
        `};
  `}
`
export const CloseButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    outline: none;
    cursor: pointer;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${theme.layers.alwaysOnTop + 10};

    > svg {
      color: ${theme.colors.white};
      width: 100%;
      height: 100%;
    }
  `}
`
export const ButtonWrapper = styled.div`
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 90;
  & > button:first-child {
    margin-right: 1.2rem;
  }
  ${media.lessThan('medium')`
    top: 1.5rem;
    & > button:first-child {
      margin-right: 0;
      margin-bottom: 1.2rem;
    }
  `}
`
