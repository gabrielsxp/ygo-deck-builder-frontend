import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const LighterWrapperFooter = styled.section`
  ${({ theme }) => css`
    background-image: url('/img/footerbg.webp');
    padding: calc(${theme.spacings.large} * 2) 0;
    margin: auto 0;
  `}
`

export const SectionTitles = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-bottom: ${theme.spacings.small};
    padding: ${theme.spacings.xlarge} 0;
    > h2 {
      margin-bottom: ${theme.spacings.xxsmall};
      text-align: center;
    }
  `}
`

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    margin-top: ${theme.spacings.medium};
    gutter: ${theme.grid.gutter};
    grid-template-columns: repeat(2, 1fr);

    ${media.between('medium', 'large')`
      grid-template-columns: repeat(4, 1fr);
    `}
    ${media.greaterThan('large')`
      grid-template-columns: repeat(6, 1fr);
    `}
  `}
`
export const CardGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    margin-top: ${theme.spacings.medium};
    gutter: ${theme.grid.gutter};
    grid-template-columns: repeat(4, 1fr);

    ${media.between('medium', 'large')`
      grid-template-columns: repeat(8, 1fr);
    `}
    ${media.greaterThan('large')`
      grid-template-columns: repeat(12, 1fr);
    `}
  `}
`
export const Column = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const Card = styled.div`
  max-width: 10rem;
  height: auto;
`
