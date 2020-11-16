import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const DeckBuilderContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-gap: ${theme.grid.gutter};
    & > div {
      grid-template-columns: repeat(4, 1fr);
    }
    ${media.between('medium', 'large')`
      grid-template-columns: 70% 1fr;
      & > div {
        grid-template-columns: repeat(5, 1fr);
      }
    `}
    ${media.between('small', 'medium')`
      grid-template-columns: 70% 1fr;
      & > div {
        grid-template-columns: repeat(5, 1fr);
      }
    `}
    ${media.greaterThan('large')`
      grid-template-columns: 70% 1fr;
      & > div {
        grid-template-columns: repeat(7, 1fr);
      }
    `}
  `}
`

export const FiltersContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-content: start;
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;

  ${media.between('small', 'medium')`
      grid-template-columns: repeat(2, 1fr);
    `}
  ${media.greaterThan('medium')`
      grid-template-columns: repeat(3, 1fr);
    `}
`
