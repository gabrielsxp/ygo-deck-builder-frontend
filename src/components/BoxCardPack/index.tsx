import * as S from './styles'
import styled from 'styled-components'
import Link from 'next/link'

export type BoxCardPackProps = {
  name: string
  image: string
  slug: string
}

const Wrapper = styled.a`
  width: 20rem;
  height: 30rem;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-decoration: none;
  transition: transform 0.3s ease-in-out;

  &:hover > p {
    transform: translate(-50%, 0.4rem);
    opacity: 1;
  }
  &:hover {
    transform: translateY(-1rem);
  }
`

const BoxCardPack = ({ name, image, slug }: BoxCardPackProps) => (
  <Link href={slug} passHref>
    <Wrapper>
      <S.Image src={image} alt={name} />
      <S.Name>{name}</S.Name>
    </Wrapper>
  </Link>
)

export default BoxCardPack
