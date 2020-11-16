import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { CardGridProps } from '.'

export const Wrapper = styled.div<Pick<CardGridProps, 'reduced'>>`
  position: relative;
  display: grid;
  align-content: start;
  ${({ theme, reduced }) => css`
    grid-column-gap: ${theme.spacings.xxsmall};
    grid-row-gap: ${theme.spacings.medium};
    padding: ${theme.spacings.medium} 0;
    grid-template-columns: ${reduced ? 'repeat(8, 1fr)' : 'repeat(10, 1fr)'};
    ${media.between('medium', 'large')`
    grid-template-columns: ${reduced ? 'repeat(4, 1fr)' : 'repeat(8, 1fr)'};
  `}
    ${media.lessThan('small')`
    grid-template-columns: repeat(4, 1fr);
  `}
  `}
`
