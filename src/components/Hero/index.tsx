import * as S from './styles'
import Heading from 'components/Heading'
import Button from 'components/Button'

export type HeroProps = {
  img: string
  preTitle: string
  title: string
  subtitle: string
  buttonTitle: string
  buttonLink: string
}

const Hero = ({
  img,
  preTitle,
  title,
  subtitle,
  buttonTitle,
  buttonLink
}: HeroProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Column>
        <Heading size="normal" color="primary">
          {preTitle}
        </Heading>
        <Heading color="light" size="large">
          {title}
        </Heading>
        <S.Description>{subtitle}</S.Description>
        <Button size="large" as="a" href={buttonLink}>
          {buttonTitle}
        </Button>
      </S.Column>
      <S.Column>
        <S.Image
          alt="Dark Magician by AlanMac95 deviantart.com/alanmac95/art/Dark-Magician-render-824624524"
          src={img}
        />
      </S.Column>
    </S.Content>
  </S.Wrapper>
)

export default Hero
