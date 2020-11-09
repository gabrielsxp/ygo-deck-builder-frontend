import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const options = {
  big: '20rem',
  normal: '10rem',
  small: '5rem'
}

export const Wrapper = styled.div<LogoProps>`
  ${({ size }) => css`
    width: ${options[size!]};
    height: auto;
    cursor: pointer;
    & img {
      max-width: 100%;
    }
  `}
`
