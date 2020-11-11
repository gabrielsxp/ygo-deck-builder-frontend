import * as S from './styles'
import Heading from 'components/Heading'
import { ArrowToBottom as ArrowToBottomIcon } from '@styled-icons/boxicons-regular/ArrowToBottom'
import { ArrowToLeft as ArrowToLeftIcon } from '@styled-icons/boxicons-regular/ArrowToLeft'
import { Plus as PlusIcon } from '@styled-icons/boxicons-regular/Plus'
import { FavoriteBorder as FavoriteBorderIcon } from '@styled-icons/material-outlined/FavoriteBorder'
import { Favorite as FavoriteIcon } from '@styled-icons/material-outlined/Favorite'

export type DeckCardProps = {
  img: string
  name: string
  author: string
  mainNumberOfCards: number
  sideNumberOfCards?: number
  extraNumberOfCards?: number
  isFavorited: boolean
  url: string
  publishedDate: string
}

const DeckCard = ({
  img,
  name,
  author,
  mainNumberOfCards,
  sideNumberOfCards = 0,
  extraNumberOfCards = 0,
  isFavorited,
  url,
  publishedDate
}: DeckCardProps) => (
  <S.Wrapper href={url}>
    {!!img && <S.Image src={img} alt={name}></S.Image>}
    <S.Content>
      <S.NameWrapper>
        {!!name && (
          <Heading size="small" color="light">
            {name}
          </Heading>
        )}
        <S.FavoriteButton isFavorited={isFavorited}>
          {isFavorited ? (
            <FavoriteIcon aria-label="Deck is favorited" />
          ) : (
            <FavoriteBorderIcon aria-label="Deck is not favorited" />
          )}
        </S.FavoriteButton>
      </S.NameWrapper>
      <S.NumbersContainer>
        <S.NumberSpan>
          <S.IconWrapper>
            <ArrowToBottomIcon aria-label="Number of Cards on Main Deck" />
          </S.IconWrapper>
          <S.Description title="Number of Cards on Main Deck">
            {mainNumberOfCards} cards
          </S.Description>
        </S.NumberSpan>
        {sideNumberOfCards > 0 && (
          <S.NumberSpan>
            <S.IconWrapper>
              <ArrowToLeftIcon aria-label="Number of Cards on Side Deck" />
            </S.IconWrapper>
            <S.Description title="Number of Cards on Side Deck">
              {sideNumberOfCards} cards
            </S.Description>
          </S.NumberSpan>
        )}
        {extraNumberOfCards > 0 && (
          <S.NumberSpan>
            <S.IconWrapper>
              <PlusIcon aria-label="Number of Cards on Extra Deck" />
            </S.IconWrapper>
            <S.Description title="Number of Cards on Extra Deck">
              {extraNumberOfCards} cards
            </S.Description>
          </S.NumberSpan>
        )}
      </S.NumbersContainer>
      {!!author && (
        <>
          <S.Description style={{ marginTop: '0.8rem' }}>
            By: <span title="Author name">{author}</span>
          </S.Description>
          <S.Description>
            On: <span title="Publication date">{publishedDate}</span>
          </S.Description>
        </>
      )}
    </S.Content>
  </S.Wrapper>
)

export default DeckCard
