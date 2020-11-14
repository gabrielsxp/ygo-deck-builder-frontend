import { Story, Meta } from '@storybook/react/types-6-0'
import CardGrid from '.'
import Card from 'components/Card'
import data from 'components/Card/mock'
import { Container } from 'components/Container'

export default {
  title: 'CardGrid',
  component: CardGrid
} as Meta

export const Default: Story = () => (
  <Container>
    <CardGrid>
      {Array.from(new Array(40)).map((_, index) => (
        <Card key={index} {...data} rarity="UR" />
      ))}
    </CardGrid>
  </Container>
)
