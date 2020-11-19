/* eslint-disable react/no-unescaped-entities */
import Home from 'templates/Home'
import axios from 'client'
import Heading from 'components/Heading'
import CardGrid from 'components/CardGrid'
import Card, { CardProps } from 'components/Card'
import BoxCardPack from 'components/BoxCardPack'
import { Container } from 'components/Container'
import * as S from 'templates/Home/styles'
import Header from 'components/Header'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'
import BoxCardPackCarousel from 'components/BoxCardPackCarousel'
import Overlay from 'components/Overlay'
import { BoxCardPackProps } from 'components/BoxCardPack'
import { GetStaticPaths } from 'next'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

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

type ObtainedCardProps = {
  [x: string]: number
}

function Boxes({
  boxes,
  box,
  cards,
  infos,
  packs,
  obtained,
  url,
  isSelectionBox
}: {
  boxes: BoxCardPackProps[]
  box: BoxCardPackProps
  cards: CardProps[]
  infos: BoxInfoType
  packs: CardProps[][]
  obtained: ObtainedCardProps
  url: string
  isSelectionBox: boolean
}) {
  const [packIndex] = useState<number>(0)
  const [boxReseted, setBoxReseted] = useState<boolean>(false)
  const [total, setTotal] = useState<number>(0)
  const [displayOpenedCards, setDisplayOpenedCards] = useState<boolean>(false)
  const [displayAnimation, setDisplayAnimation] = useState<boolean>(false)
  const [currentPacks, setCurrentPacks] = useState<CardProps[][]>([])
  const [recycledCards, setRecycledCards] = useState<CardProps[]>([])
  const [displayOverlay, setDisplayOverlay] = useState<boolean>(false)
  const [obtainedCards, setObtainedCads] = useState<ObtainedCardProps>({
    ...obtained
  })
  const [displayPack, setDisplayPack] = useState<boolean>(false)
  const [clickedPack, setClickedPack] = useState<boolean>(false)

  useEffect(() => {
    if (
      currentPacks &&
      currentPacks[packIndex] &&
      currentPacks[packIndex]?.length ===
        (new RegExp(/selection/i).test(box?.name) ? 10 : 3)
    ) {
      setDisplayPack(true)
    } else {
      setDisplayPack(false)
    }
  }, [box?.name, currentPacks, packIndex])

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

  const clickPack = () => {
    setClickedPack(true)
    setTimeout(() => {
      setClickedPack(false)
      setDisplayPack(false)
    }, 2500)
  }

  const skipPackOpeningAndClose = () => {
    let cp = Object.assign([], currentPacks)
    cp = cp.reduce((acc, pack) => {
      acc = acc.concat(...pack)
      return acc
    }, [])
    setRecycledCards(Object.assign([], sortCards([...cp, ...recycledCards])))
    setDisplayAnimation(false)

    setDisplayOverlay(false)
  }

  const shuffleCards = (p: CardProps[][]) => {
    const array = Object.assign([], p)
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const resetBox = () => {
    setTotal(0)
    setRecycledCards([])
    setBoxReseted(true)
  }

  const resetObtainedCards = () => {
    setObtainedCads(Object.assign({}, { ...obtained }))
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
      .filter((c) => c.rarity?.match(/ur/i))
      .sort((a, b) => b?.name.localeCompare(a?.name))
    const sr: CardProps[] = cardsClone
      .filter((c) => c.rarity?.match(/sr/i))
      .sort((a, b) => b?.name.localeCompare(a?.name))
    const rare: CardProps[] = cardsClone
      .filter((c) => c.rarity === 'R')
      .sort((a, b) => b?.name.localeCompare(a?.name))
    const normal: CardProps[] = cardsClone
      .filter((c) => c.rarity === 'N')
      .sort((a, b) => b?.name.localeCompare(a?.name))

    return [...ur, ...sr, ...rare, ...normal]
  }

  const bringPacks = (amount: number) => {
    setDisplayOpenedCards(false)
    let p: CardProps[][] = []
    if (boxReseted) {
      p = shuffleCards(Object.assign([], packs))
      setBoxReseted(false)
    } else {
      p = Object.assign([], packs)
    }
    return p?.splice(total, amount)
  }

  const controlPackOpening = async (amount: number) => {
    setRecycledCards([])
    const cp = bringPacks(amount)
    const t = cp?.length + total
    setTotal(t)
    const allPacks = cp?.reduce((acc, current) => {
      acc = acc.concat(...current)
      return acc
    }, [])
    const checked: CardProps[] = []
    const rs: CardProps[] = Object.assign([], [...allPacks])
    console.log('recycled: ', rs)

    const currentCardsByAmount = rs.reduce(
      (acc: { [x: string]: number }, card) => {
        console.log('card:', card)
        const currentCard: string = card?.name
        console.log('current card: ', currentCard)
        if (!checked.find((c) => c?.name === currentCard)) {
          const amount = rs.filter((c) => c?.name === currentCard)?.length
          console.log('amount: ', amount)
          console.log('card name: ', currentCard)
          acc[`${card?.name}`] += amount
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
    <>
      <Head>
        <title>Duel Links Packs - {box.name}</title>
        <meta
          name="description"
          content={`A tool that allows to open ${box.name} of Duel Links for fun`}
        />
        <link
          rel="shortcut icon"
          href={box.image ? box.image.replace('http://', 'https://') : box.name}
        />
        <link
          rel="apple-touch-icon"
          href={box.image ? box.image.replace('http://', 'https://') : box.name}
        />
      </Head>
      <NextSeo>
        title={box.name} description="Yu-Gi-Oh! Duel Links Packs allow you to
        open Yu-Gi-Oh! Duel Links packs of all boxes released in the game.
        Updated on released of every box !" canonical=
        {`https://duellinkspacks.com${url}`} openGraph=
        {{
          url: `https://duellinkspacks.com${url}`,
          title: `Duel Links Packs - ${box.name}`,
          description:
            'Yu-Gi-Oh! Duel Links Packs allow you to open Yu-Gi-Oh! Duel Links packs of all boxes released in the game. Updated on released of every box !',
          images: [{ url: box.cover }],
          site_name: `Duel Links Packs - ${box.name}`,
          locale: 'pt_BR'
        }}
      </NextSeo>
      <Home>
        {currentPacks && currentPacks?.length > 0 && (
          <Overlay
            show={displayOverlay}
            scroll={displayOpenedCards}
            hideOverlay={() => setDisplayOverlay(false)}
            skip={skipPackOpening}
            skipAndClose={skipPackOpeningAndClose}
            displaySkipButton={!displayOpenedCards}
          >
            <Container>
              {displayOpenedCards && (
                <div style={{ padding: '5rem 0' }}>
                  <Heading size="normal" color="light">
                    Cards obtained -{' '}
                    <Button
                      onClick={() => controlPackOpening(1)}
                      color="primary"
                    >
                      Open another pack
                    </Button>
                    <Button
                      onClick={() => controlPackOpening(10)}
                      color="primary"
                      style={{ marginLeft: '1.2rem' }}
                    >
                      Open 10 more packs
                    </Button>
                  </Heading>
                  <CardGrid>
                    {recycledCards &&
                      recycledCards.map((card, index) => {
                        return (
                          <Card
                            thresholdIndex={10}
                            index={index}
                            {...card}
                            key={index}
                          />
                        )
                      })}
                  </CardGrid>
                </div>
              )}
              {!displayOpenedCards && (
                <S.PackOpeningWrapper>
                  {displayPack && (
                    <BoxCardPack
                      name={box?.name}
                      slug={box?.slug}
                      image={box?.image}
                      full
                      slashAnimation={clickedPack}
                      clickCallback={clickPack}
                    />
                  )}
                  {currentPacks[packIndex] &&
                    currentPacks[packIndex]?.length > 0 &&
                    currentPacks[packIndex]?.map((card, index) => {
                      return (
                        <Card
                          playAnimation={
                            index === currentPacks[packIndex]?.length - 1 &&
                            displayPack
                          }
                          showImages={!displayPack}
                          playBlurAnimation={displayAnimation}
                          size="full"
                          key={index}
                          {...card}
                          recycle={recyclePack}
                          displayRarity={!displayPack}
                        />
                      )
                    })}
                </S.PackOpeningWrapper>
              )}
            </Container>
          </Overlay>
        )}
        <Header
          name={box?.name}
          image={
            box?.cover ??
            'https://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1605463178/boxcover_n1h2yw.webp'
          }
        >
          <MediaMatch greaterThan="medium">
            <S.ButtonContainer>
              <p>{box?.name}</p>
              <span>
                Total gems: {isSelectionBox ? 200 * total : 50 * total}
              </span>
              <S.InfosContainer>
                <span>Packs opened: {total}</span>
                <span>Packs remaining: {packs.length - total}</span>
              </S.InfosContainer>
              {total < packs?.length ? (
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
              ) : (
                <Button color="primary" onClick={() => resetBox()}>
                  Reset box
                </Button>
              )}
              <S.ButtonContainer style={{ marginTop: '1.2rem' }}>
                <div>
                  <Button color="primary" onClick={() => resetBox()}>
                    Reset box
                  </Button>
                  <Button color="primary" onClick={() => resetObtainedCards()}>
                    Reset obtained cards
                  </Button>
                </div>
              </S.ButtonContainer>
            </S.ButtonContainer>
          </MediaMatch>
        </Header>
        <Container>
          <MediaMatch lessThan="medium">
            <S.ButtonContainer>
              <p>{box?.name}</p>
              <span>
                Total gems: {isSelectionBox ? 200 * total : 50 * total}
              </span>
              <S.InfosContainer>
                <span>Packs opened: {total}</span>
                <span>Packs remaining: {packs.length - total}</span>
              </S.InfosContainer>
              {total < packs?.length ? (
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
              ) : (
                <Button color="primary" onClick={() => resetBox()}>
                  Reset box
                </Button>
              )}
              <S.ButtonContainer style={{ marginTop: '1.2rem' }}>
                <div>
                  <Button color="primary" onClick={() => resetBox()}>
                    Reset box
                  </Button>
                  <Button color="primary" onClick={() => resetObtainedCards()}>
                    Reset obtained cards
                  </Button>
                </div>
              </S.ButtonContainer>
            </S.ButtonContainer>
          </MediaMatch>
          <S.SectionTitles>
            <Heading size="large" color="primary">
              Cards in this box
            </Heading>
            <Heading size="small" color="light">
              All cards presents in the box: {cards?.length}
            </Heading>
            <S.BoxInfosContainer>
              <S.Label>
                <S.LabelDescription>UR: </S.LabelDescription>
                {infos?.UR}
              </S.Label>
              <S.Label>
                <S.LabelDescription>SR: </S.LabelDescription>
                {infos?.SR}
              </S.Label>
              <S.Label>
                <S.LabelDescription>R: </S.LabelDescription>
                {infos?.R}
              </S.Label>
              <S.Label>
                <S.LabelDescription>N: </S.LabelDescription>
                {infos?.N}
              </S.Label>
            </S.BoxInfosContainer>
          </S.SectionTitles>
          <CardGrid>
            {cards &&
              cards.map((card, index) => {
                return (
                  <Card
                    amountBadge={card?.rarity === 'SR' || card?.rarity === 'UR'}
                    amountObtained={obtainedCards[card?.name]}
                    grayscale={!obtainedCards[card?.name]}
                    key={index}
                    {...card}
                    thresholdIndex={10}
                    index={index}
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
    </>
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
    fallback: false
  }
}

export async function getStaticProps({ params }: { params: { box: string } }) {
  const boxes = await axios('boxes?all=true')
  let box: BoxCardPackProps | null = null
  if (Array.isArray(boxes)) {
    box = boxes.find((b) => b.slug.match(params.box))
  }
  const cardsResponse: CardReturnType[] = await axios.get(
    `duel-links-cards?box=${params.box}`
  )
  let cards: CardProps[] = []
  let infos: BoxInfoType = {}
  if (cardsResponse[0]) {
    cards = cardsResponse[0].cards
    infos = {
      total: cardsResponse[0]?.total,
      N: cardsResponse[0]?.N,
      R: cardsResponse[0]?.R,
      SR: cardsResponse[0]?.SR,
      UR: cardsResponse[0]?.UR
    }
  } else {
    cards = []
    infos = {
      total: 0,
      N: 0,
      R: 0,
      SR: 0,
      UR: 0
    }
  }
  const urCards = cards.filter((c) => c.rarity === 'UR')
  const srCards = cards.filter((c) => c.rarity === 'SR')
  const rCards = cards.filter((c) => c.rarity === 'R')
  const nCards = cards.filter((c) => c.rarity === 'N')
  const pools = {
    UR: urCards.map((c, index) => {
      const cName = c?.name ?? ''
      return { [cName]: c.boxAmount, originalIndex: index }
    }),
    SR: srCards.map((c, index) => {
      const cName = c?.name ?? ''
      return { [cName]: c.boxAmount, originalIndex: index }
    }),
    R: rCards.map((c, index) => {
      const cName = c?.name ?? ''
      return { [cName]: c.boxAmount, originalIndex: index }
    }),
    N: nCards.map((c, index) => {
      const cName = c?.name ?? ''
      return { [cName]: c.boxAmount, originalIndex: index }
    })
  }

  //set obtained cards structure
  const obtained = cards.reduce(
    (acc: { [x: string]: number }, card: CardProps) => {
      const cName = card?.name ?? ''
      acc[cName] = 0
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
    type: 'only normals' | 'only rares' | 'mixed',
    onlyOne: boolean
  ) => {
    const firstCardType =
      type === 'only normals' ? 'N' : type === 'only rares' ? 'R' : 'N'
    const lastCardType =
      type === 'only normals' ? 'N' : type === 'only rares' ? 'R' : 'R'
    poolsClone = Object.assign({}, pools)
    if (
      poolsClone[firstCardType]?.length === 0 &&
      poolsClone[lastCardType]?.length === 0
    ) {
      return null
    }
    // get a random normal card
    const firstCardIndex: number = getRandomIndex(
      0,
      poolsClone[firstCardType]?.length - 1
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
    if (onlyOne) {
      return [firstCard]
    }
    // get a random rare card
    const lastCardIndex: number = getRandomIndex(
      0,
      poolsClone[lastCardType]?.length - 1
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
    let firstCardsAmount =
      poolsClone[firstCardType][firstCardIndex][firstCardName]
    if (firstCardsAmount) {
      firstCardsAmount--
      poolsClone[firstCardType][firstCardIndex][
        firstCardName
      ] = firstCardsAmount
    }
    let lastCardsAmount =
      poolsClone[lastCardType!][lastCardIndex!][lastCardName!]
    if (lastCardsAmount) {
      lastCardsAmount--
      poolsClone[lastCardType][lastCardIndex][lastCardName] = lastCardsAmount
    }

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
    if (!poolsClone['UR']) {
      poolsClone = {
        UR: [],
        SR: [],
        R: [],
        N: []
      }
    }
    const type =
      poolsClone['UR']?.length > 0
        ? 'UR'
        : poolsClone['SR']?.length > 0
        ? 'SR'
        : poolsClone['R']?.length > 0
        ? 'R'
        : poolsClone['N']?.length > 0
        ? 'N'
        : null
    if (type === null) {
      return null
    }
    // get a random ultra or super rare card from pool
    const cardIndex: number = getRandomIndex(0, poolsClone[type]?.length - 1)

    const card = poolsClone[type][cardIndex]
    let cardName = ''
    const returnedCard = categories[type][card.originalIndex]
    if (card) {
      cardName = Object.keys(card)[0]
    }

    // subtract the amount of cards getted
    let cardsAmount = poolsClone[type][cardIndex][cardName]
    if (cardsAmount) {
      cardsAmount--
      poolsClone[type][cardIndex][cardName] = cardsAmount
    }

    if (poolsClone[type][cardIndex][cardName] === 0) {
      poolsClone[type].splice(cardIndex, 1)
      const cards = Object.assign([], poolsClone[type])
      poolsClone[type] = cards
    }

    poolsClone = Object.assign({}, poolsClone)

    return [returnedCard]
  }

  const generatePack = (selection: boolean) => {
    let randomCommonCards: CardProps[] | null = []
    if (selection) {
      let acc: CardProps[] | null = []
      const aux: CardProps[] = []
      for (let i = 0; i < 4; i++) {
        acc = getCommonCardsFromPool(
          returnCommonTypeOfSort(getRandomIndex(0, 100)),
          false
        )
        if (acc !== null) {
          aux.push(...acc)
        }
      }
      acc = getCommonCardsFromPool(
        returnCommonTypeOfSort(getRandomIndex(0, 100)),
        true
      )
      if (acc !== null) {
        aux.push(...acc)
      }
      randomCommonCards = aux
    } else {
      randomCommonCards = getCommonCardsFromPool(
        returnCommonTypeOfSort(getRandomIndex(0, 100)),
        false
      )
    }
    let rareCards: CardProps[] | null = []
    rareCards = getRareCardFromPool()
    if (randomCommonCards !== null && rareCards !== null) {
      const pack = [...randomCommonCards, ...rareCards]
      return pack
    } else {
      return null
    }
  }
  if (!Object.keys(infos).find((k) => k === 'UR')) {
    infos = {
      UR: 0,
      SR: 0,
      R: 0,
      N: 0
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
      const isSelectionBox = new RegExp(/selection/i).test(box?.name ?? '')
      for (let i = 0; i < threshold; i++) {
        const gen = generatePack(isSelectionBox)
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
    for (let i = array?.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const packsInOrder = await generateAllPacks()
  const packs = shuffleArray(packsInOrder)

  let selectionBoxesLength = 0
  if (Array.isArray(boxes)) {
    selectionBoxesLength = boxes.filter((b) => b?.name?.match(/selection/i))
      .length
  }
  return {
    props: {
      box,
      boxes: Array.isArray(boxes)
        ? boxes.reverse().slice(selectionBoxesLength, 15)
        : [],
      cards,
      infos,
      packs,
      obtained,
      url: `/box/${params.box}`,
      isSelectionBox: new RegExp(/selection/i).test(box?.name ?? '')
    }
  }
}

export default Boxes
