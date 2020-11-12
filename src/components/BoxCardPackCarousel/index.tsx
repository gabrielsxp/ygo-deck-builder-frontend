import * as S from './styles'
import Slider, { SliderSettings } from 'components/Slider'
import Heading from 'components/Heading'
import BoxCardPack, { BoxCardPackProps } from 'components/BoxCardPack'
import { NavigateNext as NavigateNextIcon } from '@styled-icons/material-sharp/NavigateNext'
import { NavigateBefore as NavigateBeforeIcon } from '@styled-icons/material-sharp/NavigateBefore'

export type BoxCardPackCarouselProps = {
  title: string
  subtitle?: string
  items: BoxCardPackProps[]
  color?: 'light' | 'dark' | 'medium'
}

const settings: SliderSettings = {
  arrows: true,
  dots: true,
  slidesToShow: 4.4,
  slidesToScroll: 1,
  lazyLoad: 'ondemand',
  nextArrow: <NavigateNextIcon aria-label="next packs" />,
  prevArrow: <NavigateBeforeIcon aria-label="previous packs" />,
  infinite: false,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        slidesToShow: 4.4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 3.4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
        slidesToScroll: 1
      }
    }
  ]
}

const BoxCardPackCarousel = ({
  title,
  subtitle = '',
  items,
  color = 'light'
}: BoxCardPackCarouselProps) => (
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
          items.map((pack: BoxCardPackProps, index) => {
            return <BoxCardPack key={index} {...pack} />
          })}
      </Slider>
    )}
  </S.Wrapper>
)

export default BoxCardPackCarousel
