import * as S from './styles'
import Menu from 'components/Menu'
import Footer from 'components/Footer'
import { DragElementWrapper } from 'react-dnd'
import { Container } from 'components/Container'

export type DeckBuilderProps = {
  children: React.ReactNodeArray | React.ReactNode
  refProp?: DragElementWrapper<unknown>
}

export const ItemTypes = {
  CARD: 'card'
}

const DeckBuilder = ({ children, refProp }: DeckBuilderProps) => (
  <S.Wrapper ref={refProp}>
    <Container>
      <Menu />
      {children}
      <Footer />
    </Container>
  </S.Wrapper>
)

export default DeckBuilder
