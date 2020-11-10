import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'size' | 'color' | 'fullWidth'>

const buttonModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: 1.2rem;
    padding: ${theme.spacings.xxsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: 1.4rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: 1.6rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
  `,
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
    &:hover {
      background-color: transparent;
      color: ${theme.colors.primary};
      border: 0.1rem solid ${theme.colors.primary};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary};
    &:hover {
      background-color: transparent;
      color: ${theme.colors.secondary};
      border: 0.1rem solid ${theme.colors.secondary};
    }
  `,
  fullWidth: () => css`
    width: 100%;
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, color, fullWidth }) => css`
    width: max-content;
    ${buttonModifiers[size!](theme)};
    ${buttonModifiers[color!](theme)};
    ${fullWidth && buttonModifiers['fullWidth']};
    color: ${theme.colors.white};
    border: 0;
    outline: none;
    border-radius: ${theme.border.radius};
    cursor: pointer;
    transition: all 0.3s ease-out;
    border: 0.1rem solid transparent;
    font-weight: bold;
    text-decoration: none;
  `}
`
