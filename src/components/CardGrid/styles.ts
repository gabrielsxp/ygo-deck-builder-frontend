import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  ${({ theme }) => css`
    grid-gap: ${theme.spacings.xxsmall};
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
