import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const LighterWrapperFooter = styled.section`
  ${({ theme }) => css`
    background-image: url('/img/footerbg.webp');
    padding: calc(${theme.spacings.large} * 2) 0;
    margin: auto 0;
  `}
`
