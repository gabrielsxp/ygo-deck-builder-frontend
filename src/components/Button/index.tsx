import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'secondary'
}

const Button = ({
  children,
  size = 'medium',
  color = 'primary'
}: ButtonProps) => (
  <S.Wrapper size={size} color={color}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
