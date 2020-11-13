import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { OverlayProps } from '.'

type OverlayPartialProps = Pick<OverlayProps, 'display'>

export const Wrapper = styled.div<OverlayPartialProps>`
  ${({ theme, display }) => css`
    background-color: ${rgba(theme.colors.black, 0.5)};
    position: fixed;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    ${display
      ? () => css`
          display: block;
        `
      : () => css`
          display: none;
        `};
  `}
`
