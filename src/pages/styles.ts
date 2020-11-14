import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { rgba } from 'polished'

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
export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    background-color: ${rgba(theme.colors.lighterBg, 0.8)};
    border-radius: ${theme.border.radius};
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    }

    & > p {
      font-size: ${theme.font.sizes.medium};
      font-weight: bold;
      color: ${theme.colors.white};
      margin-bottom: ${theme.spacings.small};
    }
    & > span {
      font-size: ${theme.font.sizes.xsmall};
      font-weight: bold;
      color: ${theme.colors.white};
      margin-bottom: ${theme.spacings.small};
    }
    & div > button:first-child {
      margin-right: ${theme.spacings.small};
    }
    ${media.greaterThan('medium')`
      flex-direction: column;
    `}
  `}
`
export const Label = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.white};
    margin: ${theme.spacings.xxsmall} 0;
  `}
`

export const LabelDescription = styled.span`
  ${({ theme }) => css`
    font-size: inherit;
    color: ${theme.colors.primary};
    font-weight: bold;
  `}
`
export const BoxInfosContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  > p {
    margin-right: 1.2rem;
  }
`
export const PackOpeningWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  > div:nth-child(1) {
    z-index: 70;
  }
  > div:nth-child(2) {
    z-index: 69;
  }
  > div:nth-child(3) {
    z-index: 68;
  }
  > div:nth-child(4) {
    z-index: 67;
  }
  > div:nth-child(5) {
    z-index: 66;
  }
  > div:nth-child(6) {
    z-index: 65;
  }
  > div:nth-child(7) {
    z-index: 64;
  }
  > div:nth-child(8) {
    z-index: 63;
  }
  > div:nth-child(9) {
    z-index: 62;
  }
  > div:nth-child(10) {
    z-index: 61;
  }
`
