import { Story, Meta } from '@storybook/react/types-6-0'
import BoxCardPack, { BoxCardPackProps } from '.'
import data from './mock'

export default {
  title: 'BoxCardPack',
  component: BoxCardPack
} as Meta

export const Default: Story<BoxCardPackProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BoxCardPack {...args} />
  </div>
)

export const Full: Story<BoxCardPackProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BoxCardPack {...args} />
  </div>
)

export const FullAnimated: Story<BoxCardPackProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BoxCardPack {...args} />
  </div>
)

Default.args = {
  ...data
}

Full.args = {
  ...data,
  full: true
}

FullAnimated.args = {
  ...data,
  full: true,
  slashAnimation: true
}
