import * as S from './styles'
import { Container } from 'components/Container'

export type HeaderProps = {
  image: string | undefined
  name: string
  children?: React.ReactNode
}

const Header = ({ image, name, children }: HeaderProps) => (
  <S.Wrapper>
    <S.Image alt={name} src={image} />
    <Container id="header-children">{!!children && children}</Container>
  </S.Wrapper>
)

export default Header
