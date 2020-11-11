import { Story, Meta } from '@storybook/react/types-6-0'
import Hero, { HeroProps } from '.'

export default {
  title: 'Hero',
  component: Hero,
  argTypes: {
    img: String,
    preTitle: String,
    title: String,
    subtitle: String,
    buttonTitle: String,
    buttonLink: String
  }
} as Meta

export const Default: Story<HeroProps> = (args) => <Hero {...args} />

Default.args = {
  img:
    'https://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1605019062/ddmykcs-6df034b8-8f0b-4c0b-bab6-e65722d067a3_asqyor.webp',
  preTitle: 'Find your favorite cards and create a deck with',
  title: 'Yu-GI-Oh! Deck builder !',
  subtitle:
    'Use our tool to find and create a Yu-Gi-Oh deck to share with everybody',
  buttonTitle: 'Create a deck',
  buttonLink: '/deck'
}
Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
