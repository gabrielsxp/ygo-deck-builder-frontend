import * as S from './styles'
import Menu from 'components/Menu'
import { Container } from 'components/Container'
import Footer from 'components/Footer'

type HomeTemplateProps = {
  children: React.ReactNodeArray | React.ReactNode
}

const Home = ({ children }: HomeTemplateProps) => (
  <S.Wrapper>
    <Container>
      <Menu />
    </Container>
    {children}
    <S.LighterWrapperFooter>
      <Container>
        <Footer />
      </Container>
    </S.LighterWrapperFooter>
  </S.Wrapper>
)

export default Home
