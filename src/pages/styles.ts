import styled, { css } from 'styled-components'

export const LighterWrapper = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.lighterBg};
    padding: calc(${theme.spacings.large} * 2) 0;
    margin: auto 0;
  `}
`
export const LighterWrapperImage = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.lighterBg};
    padding: calc(${theme.spacings.large} * 2) 0;
    margin: auto 0;
    background-image: url('/img/custombg.webp');
  `}
`
export const SectionWrapper = styled.section`
  ${({ theme }) => css`
    background-color: inherit;
    padding: calc(${theme.spacings.large} * 2) 0;
    margin: auto 0;
  `}
`

export const SectionWrapperAnimated = styled.section`
  ${({ theme }) => css`
    background-color: inherit;
    padding: calc(${theme.spacings.large} * 2) 0;
    margin: auto 0;
    overflow: hidden;
    > [id^='pattern'] {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: auto;
    }
    > #pattern-1 {
      animation: upDownHome 2s 0s ease-in-out infinite alternate;
      z-index: ${theme.layers.backgroundOverlay1};
    }
    > #pattern-2 {
      animation: upDownHome 4s 2s ease-in-out infinite alternate;
      z-index: ${theme.layers.backgroundOverlay2};
    }
    > #pattern-3 {
      animation: upDownHome 6s 4s ease-in-out infinite alternate;
      z-index: ${theme.layers.backgroundOverlay3};
    }
    @keyframes upDownHome {
      from {
        transform: translate(-50%, 0rem);
      }
      to {
        transform: translate(-50%, -20rem);
      }
    }
  `}
`
