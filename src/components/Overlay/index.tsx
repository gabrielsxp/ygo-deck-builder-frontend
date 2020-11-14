import * as S from './styles'
import { useEffect } from 'react'
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline'

export type OverlayProps = {
  children: React.ReactNode
  show?: boolean
  hideOverlay: () => void
  scroll?: boolean
}

const Overlay = ({
  children,
  show = false,
  hideOverlay,
  scroll = false
}: OverlayProps) => {
  useEffect(() => {
    const b = document.querySelector('body')
    if (b) {
      if (show) {
        b.style.overflow = 'hidden'
      } else {
        b.style.overflow = 'auto'
      }
    }
  }, [show])
  return (
    <S.Wrapper scroll={scroll} show={show}>
      <>
        <S.CloseButton onClick={() => hideOverlay()}>
          <CloseIcon />
        </S.CloseButton>
        {children}
      </>
    </S.Wrapper>
  )
}

export default Overlay
