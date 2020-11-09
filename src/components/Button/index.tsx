import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'secondary'
  fullWidth?: boolean
}

const Button = ({
  children,
  size = 'medium',
  color = 'primary',
  fullWidth = false
}: ButtonProps) => (
  <S.Wrapper size={size} color={color} fullWidth={fullWidth}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
