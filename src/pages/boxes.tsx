import Home from 'templates/Home'
import axios from 'client'
import { Container } from 'components/Container'

function Boxes({ boxes = [] }: any) {
  return (
    <Home>
      <Container>
        <h1>Boxes</h1>
        <h2>{boxes ? boxes.length : 0}</h2>
      </Container>
    </Home>
  )
}

export async function getServerSideProps() {
  const boxes = await axios.get('boxes')
  return {
    props: {
      boxes: boxes ?? []
    }
  }
}

export default Boxes
