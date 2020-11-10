import * as S from './styles'
import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Link from 'next/link'

const Footer = () => (
  <S.Wrapper>
    <Logo />
    <S.Content>
      <S.Column aria-label="Deck column">
        <Heading color="dark">Decks</Heading>
        <Link href="#">Latest Decks</Link>
        <Link href="#">Top Decks</Link>
      </S.Column>
      <S.Column aria-label="Contact column">
        <Heading color="dark">Contact</Heading>
        <a href="mailto:contact@ygo.kofastools.com">Send an e-mail</a>
      </S.Column>
      <S.Column aria-label="Account column">
        <Heading color="dark">Account</Heading>
        <Link href="#">My Account</Link>
        <Link href="#">Decklists</Link>
        <Link href="#">Favorites</Link>
      </S.Column>
    </S.Content>
  </S.Wrapper>
)

export default Footer
