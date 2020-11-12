import { Story, Meta } from '@storybook/react/types-6-0'
import BoxCardPackCarousel, { BoxCardPackCarouselProps } from '.'
import data from './mock'

export default {
  title: 'BoxCardPackCarousel',
  component: BoxCardPackCarousel
} as Meta

export const DarkCarousel: Story<BoxCardPackCarouselProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BoxCardPackCarousel {...args} items={data} />
  </div>
)
DarkCarousel.args = {
  title: 'Selection Boxes',
  subtitle: 'All Special Packs released',
  color: 'dark'
}

DarkCarousel.parameters = {
  template: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
