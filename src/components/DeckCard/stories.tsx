import { Story, Meta } from '@storybook/react/types-6-0'
import DeckCard from '.'

import { DeckCardProps } from '.'

export default {
  title: 'DeckCard',
  component: DeckCard,
  argTypes: {
    img: String,
    name: String,
    author: String,
    mainNumberOfCards: Number,
    sideNumberOfCards: Number,
    extraNumberOfCards: Number,
    isFavorited: Boolean,
    url: String,
    publishedDate: String
  }
} as Meta

export const Default: Story<DeckCardProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '3rem auto' }}>
    <DeckCard {...args} />
  </div>
)

Default.args = {
  img:
    'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604629234/kdxg3vuj6zyyf0rxxkdk.webp',
  name: 'Dark Magician OTK',
  author: 'Gabriel',
  mainNumberOfCards: 42,
  sideNumberOfCards: 12,
  extraNumberOfCards: 5,
  isFavorited: false,
  url: '/deck',
  publishedDate: '21/11/2020 14:00'
}
