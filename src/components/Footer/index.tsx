import * as S from './styles'
import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Link from 'next/link'

const Footer = () => (
  <S.Wrapper>
    <Logo />
    <S.Content>
      <S.Column aria-label="Deck column">
        <Heading color="dark">Popular Boxes</Heading>
        <Link href="/box/dark-dimension-box">Dark Dimension Box</Link>
        <Link href="/box/judgement-force-box">Judgement Force BOx</Link>
        <Link href="/box/shark-fang-box">Shark Fang Box</Link>
        <Link href="/box/soul-of-resurrection-box">
          Soul of Ressurrection Box
        </Link>
        <Link href="/box/spirit-of-the-beast-box">Spirit of the Beast Box</Link>
      </S.Column>
      <S.Column aria-label="Contact column">
        <Heading color="dark">Contact</Heading>
        <a href="mailto:contact@duellinkspacks.com">Send an e-mail</a>
      </S.Column>
    </S.Content>
  </S.Wrapper>
)

export default Footer
