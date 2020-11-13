import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { CardProps } from '.'
import { rgba } from 'polished'

const cardModifiers = {
  normal: () => css`
    height: 18rem;

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
  full: () => css`
    max-width: 50rem;
    height: 60rem;
  `
}

export const Wrapper = styled.div`
  ${({ size }: { theme: DefaultTheme } & Pick<CardProps, 'size'>) => css`
    position: relative;
    width: 100%;
    margin-top: 0rem;
    ${size && cardModifiers[size!]};

    &:hover > div {
      display: block;
    }
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
`
export const CardInfoContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: -29rem;
    top: 0;
    width: 28rem;
    z-index: ${theme.layers.overlay};
    padding: ${theme.spacings.xxsmall};
    background-color: ${rgba(theme.colors.lighterBg, 0.2)};
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
