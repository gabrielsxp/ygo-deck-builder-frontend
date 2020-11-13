import * as S from './styles'

export type CardGridProps = {
  children: React.ReactNode | React.ReactNodeArray
}

const CardGrid = ({ children }: CardGridProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default CardGrid
