import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    margin-top: ${theme.spacings.xsmall};
    grid-template-columns: repeat(2, 1fr);
    gutter: ${theme.grid.gutter};
    ${HeadingStyles.Wrapper} {
      text-transform: uppercase;
      margin-bottom: ${theme.spacings.xsmall};
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.primary};
    }
    ${media.greaterThan('medium')`
      grid-template-columns: repeat(3, 1fr);
    `}
  `}
`

export const Column = styled.div`
  > a {
    ${({ theme }) => css`
      display: block;
      margin-bottom: ${theme.spacings.xsmall};
      text-decoration: none;
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.medium};
      &:hover {
        text-decoration: underline;
      }
    `}
  }
`
