import * as S from './styles'

export type OverlayProps = {
  children: React.ReactNode
  show?: boolean
}

const Overlay = ({ children, show = false }: OverlayProps) => (
  <S.Wrapper show={show}>{children}</S.Wrapper>
)

export default Overlay
