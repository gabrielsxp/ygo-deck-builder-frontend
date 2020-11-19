import * as S from 'templates/Home/styles'
import Home from 'templates/Home'
import { Container } from 'components/Container'
import Hero, { HeroProps } from 'components/Hero'
import BoxCardPackCarousel from 'components/BoxCardPackCarousel'
import axios from 'client'
import { BoxCardPackProps } from 'components/BoxCardPack'

const heroArgs: HeroProps = {
  img:
    'https://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1605019062/ddmykcs-6df034b8-8f0b-4c0b-bab6-e65722d067a3_asqyor.webp',
  preTitle: 'Do you like opening some packs ? Meet',
  title: 'Yu-Gi-Oh! Duel Links packs opener',
  subtitle:
    'Use our tool to open all packs of the game without spend any games. Just for fun !',
  buttonTitle: 'Browse all packs',
  buttonLink: '/boxes'
}

export default function Index({ boxes = [] }: { boxes: BoxCardPackProps[] }) {
  return (
    <Home>
      <S.LighterWrapperImage>
        <Container>
          <Hero {...heroArgs} />
        </Container>
      </S.LighterWrapperImage>
      <S.SectionWrapperAnimated>
        <img src="/img/shape1.webp" id="pattern-1" alt="animation shape 1" />
        <img src="/img/shape2.webp" id="pattern-2" alt="animation shape 1" />
        <img src="/img/shape3.webp" id="pattern-3" alt="animation shape 1" />
        <Container>
          <BoxCardPackCarousel
            title="Latest boxes"
            subtitle="Last 10 boxes released in game"
            color="dark"
            items={boxes}
          />
        </Container>
      </S.SectionWrapperAnimated>
    </Home>
  )
}

export async function getStaticProps() {
  const boxes = await axios.get('boxes')

  return {
    props: {
      boxes: Array.isArray(boxes) ? boxes.reverse().slice(0, 10) : [],
      revalidate: 24 * 60 * 60
    }
  }
}
