import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'secondary'
  fullWidth?: boolean
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  size = 'medium',
  color = 'primary',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper {...props} size={size} color={color} fullWidth={fullWidth}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
