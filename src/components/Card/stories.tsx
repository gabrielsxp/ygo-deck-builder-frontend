import { Story, Meta } from '@storybook/react/types-6-0'
import Card, { CardProps } from '.'
import data from './mock'
import { spell, trap } from './mock'
import CardGrid from 'components/CardGrid'
import { Container } from 'components/Container'

export default {
  title: 'Card',
  component: Card
} as Meta

export const Monster: Story<CardProps> = (args) => (
  <Container>
    <CardGrid>
      <Card {...args} />
    </CardGrid>
  </Container>
)
export const Trap: Story<CardProps> = (args) => (
  <Container>
    <CardGrid>
      <Card {...args} />
    </CardGrid>
  </Container>
)

export const Spell: Story<CardProps> = (args) => (
  <Container>
    <CardGrid>
      <Card {...args} />
    </CardGrid>
  </Container>
)

Monster.args = {
  ...data
}

Trap.args = {
  ...trap
}

Spell.args = {
  ...spell
}
