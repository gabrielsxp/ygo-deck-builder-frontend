import * as S from './styles'

export type LogoProps = {
  size?: 'normal' | 'small' | 'big'
}

const Logo = ({ size = 'normal' }: LogoProps) => (
  <S.Wrapper size={size}>
    <img src="/img/main-logo.svg" alt="picture of winged kuriboh" />
  </S.Wrapper>
)

export default Logo
