import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header``

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gutter: ${theme.grid.gutter};
  `}
  ${media.greaterThan('medium')`
    grid-template-columns: repeat(2, 1fr);
  `}
  overflow: hidden;
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    > * {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`

export const Image = styled.img`
  max-width: 100%;
  animation: upDown 1.5s linear infinite alternate;

  @keyframes upDown {
    from {
      transform: translateY(2rem);
    }
    to {
      transform: translateY(-2rem);
    }
  }
`
