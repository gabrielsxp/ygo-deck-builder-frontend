import { Story, Meta } from '@storybook/react/types-6-0'
import DeckBuilder from '.'

export default {
  title: 'DeckBuilder',
  component: DeckBuilder
} as Meta

export const Default: Story = () => <DeckBuilder />
