import * as S from './styles'
import Slider, { SliderSettings } from 'components/Slider'
import Heading from 'components/Heading'
import DeckCard, { DeckCardProps } from 'components/DeckCard'
import { NavigateNext as NavigateNextIcon } from '@styled-icons/material-sharp/NavigateNext'
import { NavigateBefore as NavigateBeforeIcon } from '@styled-icons/material-sharp/NavigateBefore'

export type DecksCarouselProps = {
  title: string
  subtitle?: string
  items: DeckCardProps[]
  color?: 'light' | 'dark' | 'medium'
}

const settings: SliderSettings = {
  arrows: true,
  dots: true,
  slidesToShow: 4.2,
  slidesToScroll: 1,
  lazyLoad: 'ondemand',
  nextArrow: <NavigateNextIcon aria-label="next decks" />,
  prevArrow: <NavigateBeforeIcon aria-label="previous decks" />,
  infinite: false,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        slidesToShow: 3.2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 2.2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const DecksCarousel = ({
  title,
  subtitle = '',
  items,
  color = 'light'
}: DecksCarouselProps) => (
  <S.Wrapper aria-label="Carousel Container">
    <S.SectionTitles>
      <Heading size="large" color={color === 'light' ? 'dark' : 'primary'}>
        {title}
      </Heading>
      {!!subtitle && (
        <Heading size="small" color={color === 'light' ? 'primary' : 'light'}>
          {subtitle}
        </Heading>
      )}
    </S.SectionTitles>
    {items && items.length > 0 && (
      <Slider color={color} settings={settings}>
        {items &&
          items.map((card: DeckCardProps, index) => {
            return <DeckCard key={index} {...card} />
          })}
      </Slider>
    )}
  </S.Wrapper>
)

export default DecksCarousel
