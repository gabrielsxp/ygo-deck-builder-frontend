import { Story, Meta } from '@storybook/react/types-6-0'
import Overlay, { OverlayProps } from '.'

export default {
  title: 'Overlay',
  component: Overlay,
  argTypes: {
    display: Boolean
  }
} as Meta

export const Default: Story<OverlayProps> = (args) => (
  <Overlay {...args}>
    <h1 style={{ color: 'white' }}>Displaying children inside the overlay</h1>
  </Overlay>
)
