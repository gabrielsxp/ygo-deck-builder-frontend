import * as S from './styles'
import Heading from 'components/Heading'
import { useState, useRef, useEffect } from 'react'
import { useDrag } from 'react-dnd'

import { ItemTypes } from 'templates/DeckBuilder'

export type CardProps = {
  name: string
  displayRarity?: boolean
  rarity: 'N' | 'R' | 'SR' | 'UR'
  amount?: number[]
  how?: string[] | undefined
  release?: string
  duelLinksRarity: 'N' | 'R' | 'SR' | 'UR'
  card_images: string[]
  type: string
  level?: number
  atk?: number | string | null
  def?: number | string | null
  desc: string
  race?: string | null
  attribute?: string | null
  archetype?: string | null
  boxAmount?: number
  size?: 'normal' | 'full'
  playAnimation?: boolean
  playBlurAnimation?: boolean
  dropAnimationLeft?: boolean
  dropAnimationRight?: boolean
  index?: number | null
  thresholdIndex?: number | null
  grayscale?: boolean
  amountBadge?: boolean
  amountObtained?: number
  showImages?: boolean
  dragOrigin?: string
  displayCardInfos?: boolean
  executeDeckAction?: () => void
  recycle?: () => void

  //disposable
  _id?: string
  id?: number
  createdAt?: string
  updatedAt?: string
  __v?: number
}

const Card = ({
  size = 'normal',
  how = [''],
  displayRarity = true,
  rarity = 'N',
  card_images,
  name,
  attribute,
  type,
  archetype,
  race,
  desc,
  atk,
  def,
  boxAmount,
  release,
  playAnimation = false,
  playBlurAnimation = false,
  dropAnimationLeft = false,
  dropAnimationRight = false,
  grayscale = false,
  executeDeckAction = () => ({}),
  recycle = () => ({}),
  amountBadge = false,
  amountObtained = 0,
  showImages = false,
  index = null,
  thresholdIndex = null,
  dragOrigin = '',
  displayCardInfos = true
}: CardProps) => {
  const [canClick, setCanClick] = useState<boolean>(true)
  const [dropState, setDropState] = useState<string>('')

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, index, dragOrigin, name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })

  const isMounted = useRef(true)
  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  const getRandomIndex = (min: number, max: number) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const injectDropClass = () => {
    if (size === 'full') {
      console.warn('can click: ', canClick)
      if (!canClick) {
        return
      }
      setCanClick(false)
      const possibleClasses = ['drop-right', 'drop-left']
      const index = getRandomIndex(0, possibleClasses.length - 1)
      const className = possibleClasses[index]
      setDropState(className!)
      setTimeout(() => {
        if (typeof recycle === 'function') {
          recycle()
          if (isMounted.current) {
            setDropState('')
            setCanClick(true)
          }
        }
      }, 250)
    }
  }

  return (
    <S.Wrapper
      onClick={() => injectDropClass()}
      onDoubleClick={() => executeDeckAction()}
      className={
        dropState !== ''
          ? dropState
          : dropAnimationLeft
          ? 'drop-left'
          : dropAnimationRight
          ? 'drop-right'
          : ''
      }
      ref={dragOrigin !== '' ? drag : null}
      displayCardInfos={displayCardInfos}
      isDragging={isDragging}
      playAnimation={playAnimation}
      playBlurAnimation={playBlurAnimation}
      rarity={rarity}
      size={size}
      data-testid="card-wrapper"
    >
      <div id="card-animation-back">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <Heading>{isDragging}</Heading>
      {amountBadge && <S.AmountBadge>{amountObtained}</S.AmountBadge>}
      {displayRarity && (
        <S.RarityBadge>
          <img alt={rarity} src={`/img/${rarity}.png`}></img>
        </S.RarityBadge>
      )}
      {card_images && card_images.length > 0 && (
        <S.Image
          showImages={showImages}
          grayscale={grayscale}
          alt={name}
          src={card_images[0]}
          size={size}
        />
      )}
      {!card_images && (
        <S.Image
          showImages={showImages}
          grayscale={grayscale}
          alt={name}
          src="https://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1605722613/card-back_b4kypq.webp"
        />
      )}
      {displayCardInfos && (
        <S.CardInfoContainer
          index={index ?? 0}
          thresholdIndex={thresholdIndex ?? 0}
          aria-label="Card infos container"
        >
          <Heading aria-hidden="true" size="small" color="light">
            {name}
          </Heading>
          <S.Label aria-hidden="true">
            <S.LabelDescription>Type: </S.LabelDescription>
            {type}
          </S.Label>
          {attribute && (
            <S.Label aria-hidden="true">
              <S.LabelDescription>Attribute: </S.LabelDescription>
              {attribute}
            </S.Label>
          )}
          {race && (
            <S.Label aria-hidden="true">
              <S.LabelDescription>Race: </S.LabelDescription>
              {race}
            </S.Label>
          )}
          {archetype && (
            <S.Label aria-hidden="true">
              <S.LabelDescription>Archetype: </S.LabelDescription>
              {archetype}
            </S.Label>
          )}
          <S.Label aria-hidden="true">
            <S.LabelDescription>Description: </S.LabelDescription>
            {desc}
          </S.Label>
          <S.StatusContainer>
            {!!atk && (
              <S.Label aria-hidden="true">
                <S.LabelDescription>ATK: </S.LabelDescription>
                {atk}
              </S.Label>
            )}
            {!!def && (
              <S.Label aria-hidden="true">
                <S.LabelDescription>DEF: </S.LabelDescription>
                {def}
              </S.Label>
            )}
          </S.StatusContainer>
          <S.StatusContainer>
            {!!boxAmount && (
              <S.Label aria-hidden="true">
                <S.LabelDescription>Amount In this box: </S.LabelDescription>
                {boxAmount} {boxAmount !== 1 ? 'cards' : 'card'}
              </S.Label>
            )}
            {!!release && (
              <S.Label aria-hidden="true">
                <S.LabelDescription>First release: </S.LabelDescription>
                {release.split('-').reverse().join('-').replace(/-/g, '/')}
              </S.Label>
            )}
          </S.StatusContainer>
          {how && how.length > 0 && (
            <>
              <S.Label aria-hidden="true">
                <S.LabelDescription>How to get:&nbsp;</S.LabelDescription>
                {how.map((box, index) => (
                  <span key={index}>
                    {index === how.length - 1 ? box : `${box}, `}
                  </span>
                ))}
              </S.Label>
            </>
          )}
        </S.CardInfoContainer>
      )}
    </S.Wrapper>
  )
}

export default Card
