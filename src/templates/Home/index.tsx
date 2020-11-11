import * as S from './styles'
import Menu from 'components/Menu'
import { Container } from 'components/Container'
import Footer from 'components/Footer'

type HomeTemplateProps = {
  children: React.ReactNodeArray
}

const Home = ({ children }: HomeTemplateProps) => (
  <S.Wrapper>
    <Container>
      <Menu />
    </Container>
    {children}
    <Container>
      <Footer />
    </Container>
  </S.Wrapper>
)

export default Home
