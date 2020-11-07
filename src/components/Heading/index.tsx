import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'light' | 'dark'
}

const Heading = ({ children, color = 'light' }: HeadingProps) => (
  <S.Wrapper color={color}>{children}</S.Wrapper>
)

export default Heading
