import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const options = {
  big: '200px',
  normal: '100px',
  small: '50px'
}

export const Wrapper = styled.div<LogoProps>`
  ${({ size }) => css`
    width: ${options[size!]};
    height: auto;
    & img {
      max-width: 100%;
    }
  `}
`
