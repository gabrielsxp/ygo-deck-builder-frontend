import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: String,
    size: String,
    color: String
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />
Default.args = {
  children: 'Create a deck',
  size: 'medium',
  color: 'primary'
}
