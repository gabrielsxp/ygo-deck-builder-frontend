import { Story, Meta } from '@storybook/react/types-6-0'
import BoxCardPack, { BoxCardPackProps } from '.'
import data from './mock'

export default {
  title: 'BoxCardPack',
  component: BoxCardPack
} as Meta

export const Default: Story<BoxCardPackProps> = (args) => (
  <BoxCardPack {...args} />
)

Default.args = {
  ...data
}
