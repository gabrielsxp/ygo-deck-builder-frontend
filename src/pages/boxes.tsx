import Home from 'templates/Home'
import axios from 'client'
import Heading from 'components/Heading'
import { Container } from 'components/Container'
import BoxCardPackCarousel from 'components/BoxCardPackCarousel'
import * as S from 'templates/Home/styles'
import * as R from './styles'
import BoxCardPack from 'components/BoxCardPack'

function Boxes({ selectionBoxes = [], boxes = [] }) {
  return (
    <Home>
      <Container>
        <BoxCardPackCarousel
          title="Selection Boxes"
          subtitle="All special card packs released"
          items={selectionBoxes}
          color="dark"
        />
      </Container>
      <R.SectionWrapperAnimated>
        <img src="/img/shape1.webp" id="pattern-1" alt="animation shape 1" />
        <img src="/img/shape2.webp" id="pattern-2" alt="animation shape 1" />
        <img src="/img/shape3.webp" id="pattern-3" alt="animation shape 1" />
        <Container>
          <S.SectionTitles>
            <Heading size="large" color="primary">
              Latest Boxes
            </Heading>
            <Heading size="small" color="light">
              All boxes and miniboxes released
            </Heading>
            <S.Grid>
              {boxes &&
                boxes.map((box, index) => {
                  return (
                    <S.Column key={index}>
                      <BoxCardPack {...box} />
                    </S.Column>
                  )
                })}
            </S.Grid>
          </S.SectionTitles>
        </Container>
      </R.SectionWrapperAnimated>
    </Home>
  )
}

export async function getStaticProps() {
  const boxes = await axios.get('boxes')
  const selectionBoxes = await axios.get('boxes?selection=true')

  return {
    props: {
      boxes: Array.isArray(boxes) ? boxes.reverse() : [],
      selectionBoxes,
      revalidate: 24 * 60 * 60
    }
  }
}

export default Boxes
