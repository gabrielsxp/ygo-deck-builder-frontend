import * as S from './styles'
import styled, { css } from 'styled-components'
import Link from 'next/link'

export type BoxCardPackProps = {
  name: string
  image: string
  slug: string
  cover?: string
  full?: boolean
  slashAnimation?: boolean
  clickCallback?: () => void
}

const Wrapper = styled.a<Pick<BoxCardPackProps, 'full' | 'slashAnimation'>>`
  ${({ full }) => css`
    width: ${full ? '40rem' : '20rem'};
    height: ${full ? '50rem' : '30rem'};
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-decoration: none;
    transition: transform 0.3s ease-in-out;

    &:hover > p {
      transform: translate(-50%, 0.4rem);
      opacity: ${full ? 0 : 1};
    }
    &:hover {
      transform: ${full ? 'none' : 'translateY(-1rem)'};
    }
    > span {
      display: block;
    }
    z-index: 100;
    ${full &&
    css`
      > span:first-child {
        display: block;
        width: 100%;
        height: 1rem;
        border-radius: 100%;
        background-color: #428df5;
        border: 0.3rem solid blue;
        filter: blur(0.2rem) brightness(1.3);
        z-index: 100;
        position: absolute;
        top: 7rem;
        left: 0;
        opacity: 0;
      }
      &.slash {
        animation: slide 0.75s 1.5s ease-in-out forwards;
        > span:first-child {
          animation: slash 1s ease-in-out forwards;
        }
      }
    `}
    @keyframes slash {
      from {
        opacity: 0;
        transform: translateX(-100%);
      }
      to {
        opacity: 1;
        transform: translateX(100%);
      }
    }
    @keyframes slide {
      from {
        transform: translateY(0%);
      }
      to {
        transform: translateY(200%);
      }
    }
  `}
`

const BoxCardPack = ({
  name,
  image,
  slug,
  full = false,
  slashAnimation = false,
  clickCallback = () => ({})
}: BoxCardPackProps) => {
  return full ? (
    <Wrapper
      className={slashAnimation ? 'slash' : ''}
      full={full}
      slashAnimation={slashAnimation}
      onClick={(e) => {
        e.preventDefault()
        if (typeof clickCallback === 'function') {
          clickCallback()
        }
      }}
    >
      <span></span>
      <span></span>
      <S.ImageWrapper full={full} slashAnimation={slashAnimation}>
        <span></span>
        <S.Image src={image} alt={name}></S.Image>
      </S.ImageWrapper>
      <S.Name>{name}</S.Name>
    </Wrapper>
  ) : (
    <Link href={`/box/${slug}`} passHref>
      <Wrapper slashAnimation={slashAnimation}>
        <span></span>
        <span></span>
        <S.ImageWrapper>
          <span></span>
          <S.Image src={image} alt={name}></S.Image>
        </S.ImageWrapper>
        <S.Name>{name}</S.Name>
      </Wrapper>
    </Link>
  )
}

export default BoxCardPack
