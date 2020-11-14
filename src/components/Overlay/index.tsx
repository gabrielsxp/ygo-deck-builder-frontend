import * as S from './styles'
import { useEffect } from 'react'

export type OverlayProps = {
  children: React.ReactNode
  show?: boolean
}

const Overlay = ({ children, show = false }: OverlayProps) => {
  useEffect(() => {
    const b = document.querySelector('body')
    if (b) {
      if (show) {
        b.style.overflow = 'hidden'
      } else {
        b.style.overflow = 'scroll'
      }
    }
  }, [show])
  return <S.Wrapper show={show}>{children}</S.Wrapper>
}

export default Overlay
