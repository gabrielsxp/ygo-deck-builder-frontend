import { Story, Meta } from '@storybook/react/types-6-0'
import Header, { HeaderProps } from '.'
import data from './mock'

export default {
  title: 'Header',
  component: Header
} as Meta

export const Default: Story<HeaderProps> = (args) => <Header {...args} />

Default.args = {
  ...data
}

Default.parameters = {
  template: 'fullscreen'
}
