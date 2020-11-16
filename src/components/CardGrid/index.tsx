import * as S from './styles'
import { useDrop, DragObjectWithType } from 'react-dnd'
import { ItemTypes } from 'templates/DeckBuilder'
import { CardProps } from 'components/Card'

export type CardGridProps = {
  children: React.ReactNode | React.ReactNodeArray
  reduced?: boolean
  removeCard?: (index: number, source: string) => CardProps
  addCard?: (card: CardProps, destiny: string) => void
}

type DraggabledItemProps = {
  index: number
  dragOrigin: string
}

const CardGrid = ({
  children,
  reduced = false,
  removeCard,
  addCard
}: CardGridProps) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item: DragObjectWithType & DraggabledItemProps) => {
      if (isOver && item.dragOrigin !== 'deck') {
        if (typeof removeCard === 'function' && typeof addCard === 'function') {
          console.log('cabou')
          const card = removeCard(item.index, item.dragOrigin)
          console.log('card: ', card)
          addCard(card, 'deck')
        }
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })
  return (
    <S.Wrapper ref={drop} reduced={reduced}>
      {children}
    </S.Wrapper>
  )
}

export default CardGrid
