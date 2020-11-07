import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'

const headingModifier = {
  light: () => css`
    color: ${({ theme }) => theme.colors.white};
  `,
  dark: () => css`
    color: ${({ theme }) => theme.colors.black};
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color }) => css`
    font-family: 'Ubuntu';
    ${color && headingModifier[color!]};
    ${media.greaterThan('medium')`
      font-size: ${
        parseInt(theme.font.sizes.xxlarge.replace('rem', '')) * 2 + 'rem'
      };
    `}
    font-size: ${theme.font.sizes.xxlarge};
  `}
`
