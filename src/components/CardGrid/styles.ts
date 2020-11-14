import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  ${({ theme }) => css`
    grid-column-gap: ${theme.spacings.xxsmall};
    grid-row-gap: ${theme.spacings.medium};
    padding: ${theme.spacings.medium} 0;
  `}
  grid-template-columns: repeat(10, 1fr);
  ${media.between('medium', 'large')`
    grid-template-columns: repeat(8, 1fr);
  `}
  ${media.lessThan('small')`
    grid-template-columns: repeat(4, 1fr);
  `}
`
