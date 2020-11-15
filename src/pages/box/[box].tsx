import Home from 'templates/Home'
import axios from 'client'
import Heading from 'components/Heading'
import CardGrid from 'components/CardGrid'
import Card, { CardProps } from 'components/Card'
import { Container } from 'components/Container'
import * as S from 'templates/Home/styles'
import * as R from 'pages/styles'
import Header from 'components/Header'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'
import BoxCardPackCarousel from 'components/BoxCardPackCarousel'
import Overlay from 'components/Overlay'
import { BoxCardPackProps } from 'components/BoxCardPack'
import { GetStaticPaths } from 'next'
import { useState } from 'react'

const CARD_PER_PACK = 3
const CARD_PER_PACK_SELECTION = 10

type BoxInfoType = {
  total?: number
  N?: number
  R?: number
  SR?: number
  UR?: number
}

type CardReturnType = {
  box: string
  boxFound: number
  cards: CardProps[]
} & BoxInfoType

type PoolProps = {
  [x: string]: number
  originalIndex: number
}

type ObtainedCardProps = {
  [x: string]: number
}

function Boxes({
  boxes,
  box,
  cards,
  infos,
  packs,
  obtained
}: {
  boxes: BoxCardPackProps[]
  box: BoxCardPackProps
  cards: CardProps[]
  infos: BoxInfoType
  packs: CardProps[][]
  obtained: ObtainedCardProps
}) {
  const [packIndex] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)
  const [displayOpenedCards, setDisplayOpenedCards] = useState<boolean>(false)
  const [displayAnimation, setDisplayAnimation] = useState<boolean>(false)
  const [currentPacks, setCurrentPacks] = useState<CardProps[][]>([])
  const [recycledCards, setRecycledCards] = useState<CardProps[]>([])
  const [displayOverlay, setDisplayOverlay] = useState<boolean>(false)
  const [obtainedCards, setObtainedCads] = useState<ObtainedCardProps>({
    ...obtained
  })

  const skipPackOpening = () => {
    let cp = Object.assign([], currentPacks)
    cp = cp.reduce((acc, pack) => {
      acc = acc.concat(...pack)
      return acc
    }, [])
    setRecycledCards(Object.assign([], sortCards([...cp, ...recycledCards])))
    setDisplayAnimation(false)

    setDisplayOpenedCards(true)
  }

  const recyclePack = () => {
    console.log(packIndex)
    console.log(currentPacks[packIndex])
    console.log(currentPacks.length)
    const cp: CardProps[][] = Object.assign([], currentPacks)
    if (cp[packIndex].length > 0) {
      const r = cp[packIndex].splice(0, 1)
      console.log('card: ', r)
      setRecycledCards(Object.assign([], sortCards([...recycledCards, ...r])))
      setCurrentPacks(Object.assign([], cp))
      if (cp[packIndex].length === 1) {
        setDisplayAnimation(true)
      } else {
        setDisplayAnimation(false)
      }
    }
    if (cp[packIndex].length === 0) {
      console.log('cp length', cp.length)
      setCurrentPacks(Object.assign([], cp))
      console.log('cp length', cp.length)
      if (cp.length === 1) {
        setDisplayOpenedCards(true)
        console.log('display: ', displayOpenedCards)
      } else {
        const index = packIndex
        console.log('index: ', index)
        console.log('cp undefined', cp[packIndex])
        cp.splice(index, 1)
        console.log('cp: ', cp)
        setCurrentPacks(Object.assign([], cp))
      }
    }
    console.log(currentPacks[packIndex])
  }

  const sortCards = (cards: CardProps[]) => {
    const cardsClone: CardProps[] = Object.assign([], cards)
    const ur: CardProps[] = cardsClone
      .filter((c) => c.rarity.match(/ur/i))
      .sort((a, b) => b.name.localeCompare(a.name))
    const sr: CardProps[] = cardsClone
      .filter((c) => c.rarity.match(/sr/i))
      .sort((a, b) => b.name.localeCompare(a.name))
    const rare: CardProps[] = cardsClone
      .filter((c) => c.rarity === 'R')
      .sort((a, b) => b.name.localeCompare(a.name))
    const normal: CardProps[] = cardsClone
      .filter((c) => c.rarity === 'N')
      .sort((a, b) => b.name.localeCompare(a.name))

    return [...ur, ...sr, ...rare, ...normal]
  }

  const bringPacks = (amount: number) => {
    setDisplayOpenedCards(false)
    const p = Object.assign([], packs)
    return p.splice(total, amount)
  }

  const controlPackOpening = async (amount: number) => {
    setRecycledCards([])
    const cp = bringPacks(amount)
    const t = cp.length + total
    setTotal(t)
    const allPacks = cp.reduce((acc, current) => {
      acc = acc.concat(...current)
      return acc
    }, [])
    const checked: CardProps[] = []
    const rs: CardProps[] = Object.assign([], [...allPacks])
    console.log('recycled: ', rs)

    const currentCardsByAmount = rs.reduce(
      (acc: { [x: string]: number }, card) => {
        console.log('card:', card)
        const currentCard: string = card.name
        console.log('current card: ', currentCard)
        if (!checked.find((c) => c.name === currentCard)) {
          const amount = rs.filter((c) => c.name === currentCard).length
          console.log('amount: ', amount)
          console.log('card name: ', currentCard)
          acc[`${card.name}`] += amount
          checked.push(card)
        }
        return acc
      },
      { ...obtainedCards }
    )
    console.log('obtained: ', currentCardsByAmount)
    setObtainedCads(Object.assign(currentCardsByAmount))
    setDisplayOverlay(true)
    setCurrentPacks(Object.assign([], cp))
  }

  return (
    <Home>
      {currentPacks && currentPacks.length > 0 && (
        <Overlay
          show={displayOverlay}
          scroll={displayOpenedCards}
          hideOverlay={() => setDisplayOverlay(false)}
          skip={skipPackOpening}
          displaySkipButton={!displayOpenedCards}
        >
          <Container>
            {displayOpenedCards && (
              <div style={{ padding: '5rem 0' }}>
                <Heading size="normal" color="light">
                  Cards obtained -{' '}
                  <Button onClick={() => controlPackOpening(1)} color="primary">
                    Open another pack
                  </Button>
                </Heading>
                <CardGrid>
                  {recycledCards &&
                    recycledCards.map((card, index) => {
                      return <Card {...card} key={index} />
                    })}
                </CardGrid>
              </div>
            )}
            {!displayOpenedCards && (
              <R.PackOpeningWrapper>
                {currentPacks[packIndex] &&
                  currentPacks[packIndex].length > 0 &&
                  currentPacks[packIndex].map((card, index) => {
                    return (
                      <Card
                        playBlurAnimation={displayAnimation}
                        size="full"
                        key={index}
                        {...card}
                        recycle={recyclePack}
                      />
                    )
                  })}
              </R.PackOpeningWrapper>
            )}
          </Container>
        </Overlay>
      )}
      <Header name={box.name} image={box.cover ?? '/img/boxcover.webp'}>
        <MediaMatch greaterThan="medium">
          <R.ButtonContainer>
            <p>{box.name}</p>
            {/* <span>Total cards: {cards.cards.total}</span> */}
            <div>
              <Button
                onClick={() => controlPackOpening(1)}
                color="primary"
                size="large"
              >
                Open 1 pack
              </Button>
              <Button
                onClick={() => controlPackOpening(10)}
                color="primary"
                size="large"
              >
                Open 10 packs
              </Button>
            </div>
          </R.ButtonContainer>
        </MediaMatch>
      </Header>
      <Container>
        <S.SectionTitles>
          <Heading size="large" color="primary">
            Cards in this box
          </Heading>
          <Heading size="small" color="light">
            All cards presents in the box: {cards.length}
          </Heading>
          <R.BoxInfosContainer>
            <R.Label>
              <R.LabelDescription>UR: </R.LabelDescription>
              {infos.UR}
            </R.Label>
            <R.Label>
              <R.LabelDescription>SR: </R.LabelDescription>
              {infos.SR}
            </R.Label>
            <R.Label>
              <R.LabelDescription>R: </R.LabelDescription>
              {infos.R}
            </R.Label>
            <R.Label>
              <R.LabelDescription>N: </R.LabelDescription>
              {infos.N}
            </R.Label>
          </R.BoxInfosContainer>
        </S.SectionTitles>
        <CardGrid>
          {cards &&
            cards.map((card, index) => {
              return (
                <Card
                  grayscale={!obtainedCards[card.name]}
                  key={index}
                  {...card}
                />
              )
            })}
        </CardGrid>
      </Container>
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
  const boxes = await axios.get('boxes')
  const selectionBoxes = await axios.get('boxes?selection=true')
  let paths: { params: { box: string } }[] = []
  if (Array.isArray(boxes) && Array.isArray(selectionBoxes)) {
    paths = [...boxes.reverse(), ...selectionBoxes].map((box) => ({
      params: { box: box.slug }
    }))
  }

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }: { params: { box: string } }) {
  const boxes = await axios('boxes?all=true')
  let box = {}
  if (Array.isArray(boxes)) {
    box = boxes.find((b) => b.slug.match(params.box))
  }
  const cardsResponse: CardReturnType[] = await axios.get(
    `duel-links-cards?box=${params.box}`
  )
  let cards: CardProps[] = []
  let infos: BoxInfoType = {}
  cards = cardsResponse[0].cards
  infos = {
    total: cardsResponse[0]?.total,
    N: cardsResponse[0]?.N,
    R: cardsResponse[0]?.R,
    SR: cardsResponse[0]?.SR,
    UR: cardsResponse[0]?.UR
  }

  const urCards = cards.filter((c) => c.rarity === 'UR')
  const srCards = cards.filter((c) => c.rarity === 'SR')
  const rCards = cards.filter((c) => c.rarity === 'R')
  const nCards = cards.filter((c) => c.rarity === 'N')
  const pools = {
    UR: urCards.map((c, index) => {
      return { [c.name]: c.boxAmount, originalIndex: index }
    }),
    SR: srCards.map((c, index) => {
      return { [c.name]: c.boxAmount, originalIndex: index }
    }),
    R: rCards.map((c, index) => {
      return { [c.name]: c.boxAmount, originalIndex: index }
    }),
    N: nCards.map((c, index) => {
      return { [c.name]: c.boxAmount, originalIndex: index }
    })
  }

  //set obtained cards structure
  const obtained = cards.reduce(
    (acc: { [x: string]: number }, card: CardProps) => {
      acc[card.name] = 0
      return acc
    },
    {}
  )

  const categories = {
    UR: urCards,
    SR: srCards,
    R: rCards,
    N: nCards
  }

  //methdos
  const getRandomIndex = (min: number, max: number) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const returnCommonTypeOfSort = (n: number) => {
    return n < 25 ? 'only normals' : n > 25 && n <= 50 ? 'only rares' : 'mixed'
  }

  let poolsClone = Object.assign({}, pools)

  const getCommonCardsFromPool = (
    type: 'only normals' | 'only rares' | 'mixed'
  ) => {
    const firstCardType =
      type === 'only normals' ? 'N' : type === 'only rares' ? 'R' : 'N'
    const lastCardType =
      type === 'only normals' ? 'N' : type === 'only rares' ? 'R' : 'R'
    poolsClone = Object.assign({}, pools)
    if (
      poolsClone[firstCardType].length === 0 &&
      poolsClone[lastCardType].length === 0
    ) {
      return null
    }
    // get a random normal card
    const firstCardIndex: number = getRandomIndex(
      0,
      poolsClone[firstCardType].length - 1
    )
    const firstCardOn = poolsClone[firstCardType][firstCardIndex]
    if (!firstCardOn) {
      return null
    }
    const firstCard = categories[firstCardType][firstCardOn.originalIndex]
    let firstCardName = ''
    if (firstCard) {
      firstCardName = Object.keys(firstCard)[0]
    }
    // get a random rare card
    const lastCardIndex: number = getRandomIndex(
      0,
      poolsClone[lastCardType].length - 1
    )
    const lastCardOn = poolsClone[lastCardType][lastCardIndex]
    if (!lastCardOn) {
      return null
    }
    const lastCard = categories[lastCardType][lastCardOn.originalIndex]
    let lastCardName = ''
    if (lastCard) {
      lastCardName = Object.keys(firstCard)[0]
    }
    // subtract the amount of cards getted

    poolsClone[firstCardType][firstCardIndex][firstCardName]--
    poolsClone[lastCardType][lastCardIndex][lastCardName]--

    if (poolsClone[firstCardType][firstCardIndex][firstCardName] === 0) {
      poolsClone[firstCardType].splice(firstCardIndex, 1)
    }
    if (poolsClone[lastCardType][lastCardIndex][lastCardName] === 0) {
      poolsClone[lastCardType].splice(lastCardIndex, 1)
    }

    poolsClone = Object.assign({}, poolsClone)

    return [firstCard, lastCard]
  }

  const getRareCardFromPool = () => {
    poolsClone = Object.assign({}, pools)
    const type =
      poolsClone['UR'].length > 0
        ? 'UR'
        : poolsClone['SR'].length > 0
        ? 'SR'
        : poolsClone['R'].length > 0
        ? 'R'
        : poolsClone['N'].length > 0
        ? 'N'
        : null
    if (type === null) {
      return null
    }
    // get a random ultra or super rare card from pool
    const cardIndex: number = getRandomIndex(0, poolsClone[type].length - 1)

    const card = poolsClone[type][cardIndex]
    let cardName = ''
    const returnedCard = categories[type][card.originalIndex]
    if (card) {
      cardName = Object.keys(card)[0]
    }

    // subtract the amount of cards getted
    poolsClone[type][cardIndex][cardName]--

    if (poolsClone[type][cardIndex][cardName] === 0) {
      poolsClone[type].splice(cardIndex, 1)
      const cards = Object.assign([], poolsClone[type])
      poolsClone[type] = cards
    }

    poolsClone = Object.assign({}, poolsClone)

    return [returnedCard]
  }

  const generatePack = () => {
    // const amountPerPack: number = box.name.match(/selection/i)
    //   ? CARD_PER_PACK_SELECTION
    //   : CARD_PER_PACK
    const randomCommonCards: CardProps[] | null = getCommonCardsFromPool(
      returnCommonTypeOfSort(getRandomIndex(0, 100))
    )
    let rareCards: CardProps[] | null = []
    rareCards = getRareCardFromPool()
    if (randomCommonCards !== null && rareCards !== null) {
      const pack = [...randomCommonCards, ...rareCards]
      return pack
    } else {
      return null
    }
  }

  const generateAllPacks = async () => {
    const p: CardProps[][] | null = []
    const threshold =
      infos.UR === 9
        ? 180
        : infos.UR === 10
        ? 200
        : infos.UR === 2
        ? 80
        : infos.UR === 3
        ? 100
        : infos.UR === 16
        ? 60
        : infos.UR === 8
        ? 36
        : 0
    return new Promise<CardProps[][]>((resolve) => {
      for (let i = 0; i < threshold; i++) {
        const gen = generatePack()
        if (!gen) {
          break
        }
        p.push(gen)
      }
      resolve(p)
    })
  }

  const shuffleArray = (p: CardProps[][]) => {
    const array = Object.assign([], p)
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const packsInOrder = await generateAllPacks()
  const packs = shuffleArray(packsInOrder)

  return {
    props: {
      box,
      boxes: Array.isArray(boxes) ? boxes.reverse().slice(0, 10) : [],
      cards,
      infos,
      packs,
      obtained
    }
  }
}

export default Boxes
