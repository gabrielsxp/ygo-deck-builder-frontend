import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { OverlayProps } from '.'

type OverlayPartialProps = Pick<OverlayProps, 'show'>

export const Wrapper = styled.div<OverlayPartialProps>`
  ${({ theme, show }) => css`
    background-color: ${rgba(theme.colors.black, 0.5)};
    position: fixed;
    overscroll-behavior: contain;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    overflow: hidden;
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
