import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { rgba } from 'polished'

export const Wrapper = styled.main``

export const DeckBuilderContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-gap: ${theme.grid.gutter};
    & > div {
      grid-template-columns: repeat(4, 1fr);
      & > div {
        height: 12rem;
      }
    }
    ${media.between('small', 'large')`
      grid-template-columns: 70% 1fr;
      & > div {
        grid-template-columns: repeat(8, 1fr);
        & > div {
          height: 10rem;
        }
      }
    `}
    ${media.greaterThan('large')`
      grid-template-columns: 70% 1fr;
      & > div {
        grid-template-columns: repeat(10, 1fr);
        & > div {
          height: 12rem;
        }
      }
    `}
  `}
`

export const FiltersContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-content: start;
    grid-column-gap: 0.5rem;
    grid-row-gap: 2rem;
    margin: 2rem 0;
    padding: ${theme.spacings.xxsmall};
    & > div {
      height: 12rem;
    }
    ${media.between('small', 'large')`
      grid-template-columns: repeat(3, 1fr);
      & > div {
        height: 10rem;
      }
    `}
    ${media.greaterThan('large')`
      grid-template-columns: repeat(4, 1fr);
      & > div {
        height: 12rem;
      }
    `};
  `}
`
export const GridTile = styled.div`
  ${({ theme }) => css`
    border: 0.1rem dashed ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    background-color: ${rgba(theme.colors.lighterBg, 0.5)};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
    font-weight: bold;
    height: 12rem;
    font-size: ${theme.font.sizes.small};
    position: relative;
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 3rem;
      height: 3rem;
      border: 0.1rem dashed ${theme.colors.white};
      border-radius: 100%;
    }
    ${media.between('small', 'large')`
    height: 12rem;
  `}
    ${media.greaterThan('large')`
    height: 18rem;
  `}
  `}
`
