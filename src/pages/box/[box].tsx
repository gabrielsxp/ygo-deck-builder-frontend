import Home from 'templates/Home'
import axios from 'client'
import Heading from 'components/Heading'
import { Container } from 'components/Container'
import * as S from 'templates/Home/styles'
import * as R from 'pages/styles'
import Header from 'components/Header'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'
import BoxCardPackCarousel from 'components/BoxCardPackCarousel'
import { BoxCardPackProps } from 'components/BoxCardPack'
import { GetStaticPaths } from 'next'

function Boxes({
  boxes,
  box
}: {
  boxes: BoxCardPackProps[]
  box: BoxCardPackProps
}) {
  return (
    <Home>
      <Header name={box.name} image={box.cover}>
        <MediaMatch greaterThan="medium">
          <R.ButtonContainer>
            <p>{box.name}</p>
            {/* <span>Total cards: {cards.cards.total}</span> */}
            <div>
              <Button color="primary" size="large">
                Open 1 pack
              </Button>
              <Button color="primary" size="large">
                Open 10 packs
              </Button>
            </div>
          </R.ButtonContainer>
        </MediaMatch>
      </Header>
      <R.SectionWrapper>
        <img src="/img/shape1.webp" id="pattern-1" alt="animation shape 1" />
        <Container>
          <S.SectionTitles>
            <Heading size="large" color="primary">
              Cards of this box
            </Heading>
            <Heading size="small" color="light">
              All cards presents in the box
            </Heading>
            <S.CardGrid>cards</S.CardGrid>
          </S.SectionTitles>
        </Container>
      </R.SectionWrapper>
      <Container>
        <BoxCardPackCarousel
          title="Latest boxes"
          subtitle="Try to open the most recent boxes released"
          items={boxes}
          color="dark"
        />
      </Container>
    </Home>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('executei 1')
  const boxes = await axios.get('boxes')
  const selectionBoxes = await axios.get('boxes?selection=true')
  let paths: { params: { box: string } }[] = []
  if (Array.isArray(boxes) && Array.isArray(selectionBoxes)) {
    paths = [...boxes.reverse().slice(0, 10), ...selectionBoxes].map((box) => ({
      params: { box: box.slug }
    }))
  }

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }: { params: { box: string } }) {
  const boxes = await axios('boxes')
  let box = {}
  if (Array.isArray(boxes)) {
    box = boxes.find((b) => b.slug.match(params.box))
  }
  const cardsResponse = await axios.get(`duel-links-cards?box=${params.box}`)
  console.log('cards: ', cardsResponse)

  return {
    props: {
      box,
      boxes: Array.isArray(boxes) ? boxes.reverse().slice(0, 10) : [],
      cards: cardsResponse
    }
  }
}

export default Boxes
