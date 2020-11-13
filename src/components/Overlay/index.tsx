import * as S from './styles'

export type OverlayProps = {
  children: React.ReactNode
  display?: boolean
}

const Overlay = ({ children, display = false }: OverlayProps) => (
  <S.Wrapper display={display}>{children}</S.Wrapper>
)

export default Overlay
