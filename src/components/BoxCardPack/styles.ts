import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const NameContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 40%;
    background-color: ${rgba(theme.colors.secondary, 0.8)};
    padding: ${theme.spacings.xsmall};
    position: relative;
  `}
`

export const Name = styled.p`
  ${({ theme }) => css`
    font-weight: bold;
    width: 15rem;
    background-color: ${rgba(theme.colors.lighterBg, 0.8)};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
    padding: ${theme.spacings.xxsmall};
    position: absolute;
    bottom: 0rem;
    left: 50%;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    transform: translateX(-50%);
  `}
`
