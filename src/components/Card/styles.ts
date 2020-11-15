import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { CardProps } from '.'
import { rgba } from 'polished'

const rarityModifier = {
  UR: () => css`
    border-image: linear-gradient(
      to bottom right,
      #b827fc 0%,
      #2c90fc 25%,
      #b8fd33 50%,
      #fec837 75%,
      #fd1892 100%
    );
  `,
  SR: () => css`
    border-image: linear-gradient(
      to bottom right,
      #f7e500 0%,
      #ffbb00 50%,
      #fdeb00 100%
    );
  `,
  R: () => css`
    border-image: linear-gradient(
      to bottom right,
      #2a44e9 0%,
      #338cfa 50%,
      #2e77f2 100%
    );
  `,
  N: () => css`
    border-image: none;
  `
}

const rarityModifierBlur = {
  UR: () => css`
    border-radius: 50%;
    background-image: linear-gradient(
      to bottom right,
      #b827fc 0%,
      #2c90fc 25%,
      #b8fd33 50%,
      #fec837 75%,
      #fd1892 100%
    );
  `,
  SR: () => css`
    border-radius: 50%;
    background-image: linear-gradient(
      to bottom right,
      #f7e500 0%,
      #ffbb00 50%,
      #fdeb00 100%
    );
  `,
  R: () => css`
    border-radius: 50%;
    background-image: linear-gradient(
      to bottom right,
      #2a44e9 0%,
      #338cfa 50%,
      #2e77f2 100%
    );
  `,
  N: () => css`
    background: transparent;
    border-image: none;
  `
}

const cardModifiers = {
  normal: () => css`
    height: 18rem;
    &:hover > div {
      display: block;
    }
    ${media.between('medium', 'large')`
      height: 15rem;
    `}

    ${media.lessThan('small')`
      height: 12rem;
    `}
    @media screen and (max-width: 350px) {
      height: 10rem;
    }
  `,
  full: (
    rarity: keyof typeof rarityModifier,
    playAnimation: boolean,
    playBlurAnimation: boolean
  ) => css`
    max-width: 30rem;
    height: min(80vh, 40rem);
    &.drop-left {
      transform-origin: right top;
      animation: dropAnimationLeft 0.5s linear forwards;
    }
    &.drop-right {
      transform-origin: left bottom;
      animation: dropAnimationRight 0.5s linear forwards;
    }
    &:after {
      content: '';
      width: 130%;
      height: 110%;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(3rem);
      ${playBlurAnimation && rarityModifierBlur[rarity!]};
      ${({ theme }) => css`
        z-index: ${theme.layers.backgroundOverlay1};
      `}
      animation: blurAnimation 2s infinite ease-in-out alternate;
    }
    & > span {
      top: -2rem;
      & > img {
        width: 8rem;
      }
    }
    ${media.lessThan('medium')`
      & > span {
        top: -1.5rem;
        & > img {
          width: 6rem;
        }
      }
    `}
    > #card-animation-back {
      > span {
        ${({ theme }) => css`
          width: calc(100% + 50rem);
          height: calc(100% + 50rem);
          position: absolute;
          top: -25rem;
          left: -25rem;
          z-index: ${theme.layers.backgroundOverlay1};
          border: 5px solid transparent;
          ${rarity && rarityModifier[rarity!]};
          border-image-slice: 1;
          border: none;
        `}
      }
      > span:nth-of-type(1) {
        ${playAnimation &&
        css`
          animation: cardFrameAnimation 1.5s infinite linear;
        `}
      }
      > span:nth-of-type(2) {
        ${playAnimation &&
        css`
          animation: cardFrameAnimation 1.5s 0.25s infinite linear;
        `}
      }
      > span:nth-of-type(3) {
        ${playAnimation &&
        css`
          animation: cardFrameAnimation 1.5s 0.5s infinite linear;
        `}
      }
      > span:nth-of-type(4) {
        ${playAnimation &&
        css`
          animation: cardFrameAnimation 1.5s 0.75s infinite linear;
        `}
      }
      > span:nth-of-type(5) {
        ${playAnimation &&
        css`
          animation: cardFrameAnimation 1.5s 1s infinite linear;
        `}
      }
      @keyframes cardFrameAnimation {
        from {
          transform: scale(0);
        }
        to {
          transfrom: scale(4);
        }
      }
      @keyframes blurAnimation {
        from {
          transform: translate(-50%, -50%) scale(1.2);
        }
        to {
          transfrom: translate(-50%, -50%) scale(2);
        }
      }
      @keyframes dropAnimationLeft {
        0% {
          transform: translate(0, 0) rotate(-10deg);
        }
        50% {
          transform: translate(-30rem, 30rem) rotate(-30deg);
        }
        100% {
          transform: translate(-60rem, 60rem) rotate(-60deg);
        }
      }
      @keyframes dropAnimationRight {
        0% {
          transform: translate(0, 0) rotate(10deg);
        }
        50% {
          transform: translate(30rem, 30rem) rotate(30deg);
        }
        100% {
          transform: translate(60rem, 60rem) rotate(60deg);
        }
      }
    }
  `
}

export const Wrapper = styled.div`
  ${({
    size,
    rarity = 'N',
    playAnimation,
    playBlurAnimation
  }: { theme: DefaultTheme } & Pick<
    CardProps,
    'size' | 'playAnimation' | 'playBlurAnimation'
  > & { rarity: keyof typeof rarityModifier }) => css`
    position: relative;
    width: 100%;
    ${size &&
    cardModifiers[size!](rarity!, playAnimation!, playBlurAnimation!)};
  `}
`

export const RarityBadge = styled.span`
  position: absolute;
  left: 0;
  top: -1.3rem;
  width: 100%;
  background-color: transparent;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;

  > img {
    position: relative;
    width: 5rem;
    height: auto;
  }

  ${media.lessThan('medium')`
    top: -0.8rem;
    > img {
      position: relative;
      width: 3rem;
      height: auto;
    }
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

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${({ grayscale }: Pick<CardProps, 'grayscale'>) => css`
    ${grayscale &&
    css`
      filter: grayscale(1);
    `}
  `}
`
export const CardInfoContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: -29rem;
    top: 0;
    width: 28rem;
    z-index: ${theme.layers.overlay};
    padding: ${theme.spacings.xxsmall};
    background-color: ${theme.colors.lighterBg};
    border-radius: ${theme.border.radius};
    border: 0.1rem solid ${rgba(theme.colors.primary, 0.4)};
    display: none;

    ${media.between('medium', 'large')`
      width: 30rem;
      right: -32rem;
      transform: translateY(-50%);
      top: 50%;
    `}

    ${media.greaterThan('large')`
      width: 40rem;
      right: -42rem;
      transform: translateY(-50%);
      top: 50%;
    `}

    @media screen and (max-width: 350px) {
      width: 21rem;
      right: -22rem;
      top: 0rem;
    }
  `}
`

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;

  & > p:first-child {
    margin-right: 1.2rem;
  }
`
export const AmountBadge = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 3rem;
    height: 3rem;
    background-color: ${rgba(theme.colors.secondary, 0.9)};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    z-index: ${theme.layers.menu};
    border-radius: 30% 0 0 0;
  `}
`
