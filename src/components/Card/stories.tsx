import { Story, Meta } from '@storybook/react/types-6-0'
import Card, { CardProps } from '.'
import data from './mock'
import { spell, trap } from './mock'
import CardGrid from 'components/CardGrid'
import { Container } from 'components/Container'

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    rarity: String
  }
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

export const FullUR: Story<CardProps> = (args) => (
  <Container>
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Card {...args} />
    </div>
  </Container>
)

export const FullSR: Story<CardProps> = (args) => (
  <Container>
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Card {...args} />
    </div>
  </Container>
)

export const FullR: Story<CardProps> = (args) => (
  <Container>
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Card {...args} />
    </div>
  </Container>
)

export const FullN: Story<CardProps> = (args) => (
  <Container>
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Card {...args} />
    </div>
  </Container>
)

export const FullBlurUR: Story<CardProps> = (args) => (
  <Container>
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Card {...args} />
    </div>
  </Container>
)

export const FullBlurSR: Story<CardProps> = (args) => (
  <Container>
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Card {...args} />
    </div>
  </Container>
)

export const FullBlurR: Story<CardProps> = (args) => (
  <Container>
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Card {...args} />
    </div>
  </Container>
)
export const FullBlurN: Story<CardProps> = (args) => (
  <Container>
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Card {...args} />
    </div>
  </Container>
)
export const DropAnimationRight: Story<CardProps> = (args) => (
  <Container>
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Card {...args} />
    </div>
  </Container>
)
export const DropAnimationLeft: Story<CardProps> = (args) => (
  <Container>
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Card {...args} />
    </div>
  </Container>
)

Monster.args = {
  ...data,
  rarity: 'UR'
}

Trap.args = {
  ...trap,
  rarity: 'UR'
}

Spell.args = {
  ...spell,
  rarity: 'SR'
}

FullUR.args = {
  ...data,
  rarity: 'UR',
  size: 'full',
  playAnimation: true,
  showImages: true,
  displayRarity: true
}

FullSR.args = {
  ...data,
  size: 'full',
  rarity: 'SR',
  playAnimation: true,
  showImages: true,
  displayRarity: true
}

FullR.args = {
  ...data,
  size: 'full',
  rarity: 'R',
  playAnimation: true,
  showImages: true,
  displayRarity: true
}

FullN.args = {
  ...data,
  size: 'full',
  rarity: 'N',
  playAnimation: false
}

FullBlurUR.args = {
  ...data,
  size: 'full',
  rarity: 'UR',
  playAnimation: false,
  playBlurAnimation: true
}
FullBlurSR.args = {
  ...data,
  size: 'full',
  rarity: 'SR',
  playAnimation: false,
  playBlurAnimation: true
}
FullBlurR.args = {
  ...data,
  size: 'full',
  rarity: 'R',
  playAnimation: false,
  playBlurAnimation: true
}
FullBlurN.args = {
  ...data,
  size: 'full',
  rarity: 'N',
  playAnimation: false,
  playBlurAnimation: true
}
DropAnimationRight.args = {
  ...data,
  size: 'full',
  rarity: 'N',
  playAnimation: false,
  playBlurAnimation: false,
  dropAnimationRight: true
}
DropAnimationLeft.args = {
  ...data,
  size: 'full',
  rarity: 'N',
  playAnimation: false,
  playBlurAnimation: false,
  dropAnimationLeft: true
}
