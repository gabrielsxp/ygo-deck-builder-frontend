import DeckBuilder from 'templates/DeckBuilder'
import * as S from 'templates/DeckBuilder/styles'
import CardGrid from 'components/CardGrid'
import Card from 'components/Card'
import data from 'components/Card/mock'
import { useDrop, DragObjectWithType } from 'react-dnd'
import { ItemTypes } from 'templates/DeckBuilder'
import Overlay from 'components/Overlay'
import Button from 'components/Button'
import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import { Container } from 'components/Container'
import { useState } from 'react'

const allCards: CardProps[] = [
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624591/j2svwruz5pj3tkja0zg7.webp'
    ],
    _id: '5fa4a0cf2c8d37522027d997',
    id: 80801743,
    name: 'Abominable Chamber of the Unchained',
    type: 'Trap Card',
    desc:
      'Special Summon 1 "Unchained" monster from your hand or GY. If this Set card is destroyed by card effect: You can Special Summon 1 "Unchained" monster from your Deck. You can only use each effect of "Abominable Chamber of the Unchained" once per turn.',
    race: 'Normal',
    archetype: 'Unchained',
    createdAt: '2020-11-06T01:03:11.703Z',
    updatedAt: '2020-11-06T01:03:11.703Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624593/vsg2bdfuja3mrw4tzmio.webp'
    ],
    _id: '5fa4a0d22c8d37522027d998',
    id: 1966438,
    name: 'Abominable Unchained Soul',
    type: 'Effect Monster',
    desc:
      'You can only Special Summon "Abominable Unchained Soul(s)" once per turn. If a card(s) you control is destroyed by battle or card effect: You can Special Summon this card from your hand. If this card is Special Summoned: You can discard 1 card; destroy 1 card on the field. Once per turn, during the End Phase, if this card is in the GY because it was destroyed on the field and sent there this turn: You can Special Summon this card, but place it on the bottom of the Deck when it leaves the field.',
    atk: 3000,
    def: 1500,
    level: 8,
    race: 'Fiend',
    attribute: 'DARK',
    createdAt: '2020-11-06T01:03:14.217Z',
    updatedAt: '2020-11-06T01:03:14.217Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624595/onljcbzjodmuxw6gs8hh.webp'
    ],
    _id: '5fa4a0d42c8d37522027d999',
    id: 27412542,
    name: "Abomination's Prison",
    type: 'Spell Card',
    desc:
      'Add 1 "Unchained" card from your Deck to your hand. If this Set card is destroyed by card effect: You can Special Summon 1 "Unchained" monster from your Deck. You can only use each effect of "Abomination\'s Prison" once per turn.',
    race: 'Normal',
    archetype: 'Unchained',
    createdAt: '2020-11-06T01:03:16.194Z',
    updatedAt: '2020-11-06T01:03:16.194Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624597/idj6wyd0orn5sjcdtikz.webp'
    ],
    _id: '5fa4a0d62c8d37522027d99a',
    id: 70832512,
    name: 'Absolute Crusader',
    type: 'Effect Monster',
    desc:
      'If a Level 5 or higher monster(s) is Special Summoned: Tribute this face-up card; destroy that Level 5 or higher monster(s).',
    atk: 1800,
    def: 1200,
    level: 4,
    race: 'Warrior',
    attribute: 'EARTH',
    createdAt: '2020-11-06T01:03:18.069Z',
    updatedAt: '2020-11-06T01:03:18.069Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624599/blukmvc1jq8pmwtebhbo.webp'
    ],
    _id: '5fa4a0d72c8d37522027d99b',
    id: 27744077,
    name: 'Absolute End',
    type: 'Trap Card',
    desc:
      "Activate only during your opponent's turn. This turn, the attacks from your opponent's monsters become direct attacks.",
    race: 'Normal',
    createdAt: '2020-11-06T01:03:19.896Z',
    updatedAt: '2020-11-06T01:03:19.896Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624601/rqpvl3lpe4llfvxdkvxd.webp'
    ],
    _id: '5fa4a0d92c8d37522027d99c',
    id: 60990740,
    name: 'Absolute King Back Jack',
    type: 'Effect Monster',
    desc:
      'During your opponent\'s turn (Quick Effect): You can banish this card from the GY; excavate the top card of your Deck, and if it is a Normal Trap, Set it to your field. Otherwise, send it to the GY. That Set card can be activated during this turn. If this card is sent to the GY: You can look at 3 cards from the top of your Deck, then place them on the top of the Deck in any order. You can only use each effect of "Absolute King Back Jack" once per turn.',
    atk: 0,
    def: 0,
    level: 1,
    race: 'Fiend',
    attribute: 'DARK',
    createdAt: '2020-11-06T01:03:21.765Z',
    updatedAt: '2020-11-06T01:03:21.765Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624603/bpmlfctnlsqgnssktzyq.webp'
    ],
    _id: '5fa4a0db2c8d37522027d99d',
    id: 71422989,
    name: 'Absorb Fusion',
    type: 'Spell Card',
    desc:
      'Add 1 "Gem-Knight" card from your Deck to your hand, then you can apply this effect.\n● Fusion Summon 1 "Gem-Knight" Fusion Monster from your Extra Deck, by banishing Fusion Materials listed on it from your hand or your side of the field.\nYou can only activate 1 "Absorb Fusion" per turn. You cannot Special Summon monsters the turn you activate this card, except "Gem-Knight" monsters.',
    race: 'Normal',
    archetype: 'Gem-',
    createdAt: '2020-11-06T01:03:23.839Z',
    updatedAt: '2020-11-06T01:03:23.839Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624605/wet8o8p5bgsskczmlpbf.webp'
    ],
    _id: '5fa4a0dd2c8d37522027d99e',
    id: 3900605,
    name: 'Absorbing Jar',
    type: 'Flip Effect Monster',
    desc:
      'FLIP: Destroy all Set Spell/Trap Cards on the field, then each player draws 1 card for each of the cards they controlled that was destroyed by this effect. You cannot Set any cards this turn.',
    atk: 600,
    def: 500,
    level: 3,
    race: 'Rock',
    attribute: 'EARTH',
    createdAt: '2020-11-06T01:03:25.695Z',
    updatedAt: '2020-11-06T01:03:25.695Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624607/gujrcoawodphdbg1dakk.webp'
    ],
    _id: '5fa4a0df2c8d37522027d99f',
    id: 49771608,
    name: 'Absorbing Kid from the Sky',
    type: 'Effect Monster',
    desc:
      'When this card destroys a monster and sends it to the Graveyard as a result of battle, increase your Life Points by the Level of the destroyed monster x 300 points.',
    atk: 1300,
    def: 1000,
    level: 4,
    race: 'Fairy',
    attribute: 'LIGHT',
    createdAt: '2020-11-06T01:03:27.483Z',
    updatedAt: '2020-11-06T01:03:27.483Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624609/dax0w7ql9uygywkwiftp.webp'
    ],
    _id: '5fa4a0e22c8d37522027d9a0',
    id: 67748760,
    name: 'Absorouter Dragon',
    type: 'Effect Monster',
    desc:
      'If you control a "Rokket" monster, you can Special Summon this card (from your hand). You can only Special Summon "Absorouter Dragon" once per turn this way. If this card is sent to the GY: You can add 1 "Rokket" monster from your Deck to your hand. You can only use this effect of "Absorouter Dragon" once per turn.',
    atk: 1200,
    def: 2800,
    level: 7,
    race: 'Dragon',
    attribute: 'DARK',
    archetype: 'Rokket',
    createdAt: '2020-11-06T01:03:30.125Z',
    updatedAt: '2020-11-06T01:03:30.125Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624611/ivr6u92stiyadp69aryv.webp'
    ],
    _id: '5fa4a0e42c8d37522027d9a1',
    id: 15308295,
    name: 'Abyss Actor - Comic Relief',
    type: 'Pendulum Effect Monster',
    desc:
      '[ Pendulum Effect ]\r\nYou can target 1 "Abyss Actor" Pendulum Monster you control and 1 monster your opponent controls; switch control of both monsters, then destroy this card. You can only use this effect of "Abyss Actor - Comic Relief" once per turn.\r\n----------------------------------------\r\n[ Monster Effect ]\r\nYou take no battle damage from attacks involving this card. Once per turn, during your Standby Phase: Give control of this card to your opponent. Once per turn, if control of this face-up card changes: Activate this effect; the owner of this card can destroy 1 Set "Abyss Script" Spell in their Spell & Trap Zone.',
    atk: 1000,
    def: 2000,
    level: 3,
    race: 'Fiend',
    attribute: 'DARK',
    archetype: 'Abyss Actor',
    createdAt: '2020-11-06T01:03:32.219Z',
    updatedAt: '2020-11-06T01:03:32.219Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624613/oggridxqmovvl84zaki0.webp'
    ],
    _id: '5fa4a0e62c8d37522027d9a2',
    id: 44179224,
    name: 'Abyss Actor - Curtain Raiser',
    type: 'Pendulum Effect Monster',
    desc:
      '[ Pendulum Effect ]\r\nIf you control no monsters: You can Special Summon this card from your Pendulum Zone. You can only use this effect of "Abyss Actor - Curtain Raiser" once per Duel.\r\n----------------------------------------\r\n[ Monster Effect ]\r\nGains 1100 ATK if you control no other monsters. Once per turn: You can send 1 "Abyss Script" Spell from your Deck to the GY; add 1 face-up "Abyss Actor" Pendulum Monster from your Extra Deck to your hand.',
    atk: 1100,
    def: 1000,
    level: 4,
    race: 'Fiend',
    attribute: 'DARK',
    archetype: 'Abyss Actor',
    createdAt: '2020-11-06T01:03:34.451Z',
    updatedAt: '2020-11-06T01:03:34.451Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624616/tgdhs0vhyrdgzaxjkpic.webp'
    ],
    _id: '5fa4a0e82c8d37522027d9a3',
    id: 52240819,
    name: 'Abyss Actor - Evil Heel',
    type: 'Pendulum Effect Monster',
    desc:
      '[ Pendulum Effect ]\r\nOnce per turn: You can Tribute 1 "Abyss Actor" monster, then target 1 face-up monster your opponent controls; it loses ATK equal to the original ATK of the Tributed monster, until the end of this turn (even if this card leaves the field).\r\n----------------------------------------\r\n[ Monster Effect ]\r\nIf this card is Normal or Special Summoned: You can target 1 face-up monster your opponent controls; it loses 1000 ATK for each "Abyss Actor" monster you currently control, until the end of this turn. When this card destroys an opponent\'s monster by battle: You can target 1 "Abyss Script" Spell Card in your Graveyard; Set that card.',
    atk: 3000,
    def: 2000,
    level: 8,
    race: 'Fiend',
    attribute: 'DARK',
    archetype: 'Abyss Actor',
    createdAt: '2020-11-06T01:03:36.497Z',
    updatedAt: '2020-11-06T01:03:36.497Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624618/et8oddsfnthddczq38l1.webp'
    ],
    _id: '5fa4a0ea2c8d37522027d9a4',
    id: 88412339,
    name: 'Abyss Actor - Extras',
    type: 'Pendulum Effect Monster',
    desc:
      '[ Pendulum Effect ]\r\nIf your opponent controls a monster: You can Special Summon this card from your Pendulum Zone. You can only use this effect of "Abyss Actor - Extras" once per turn.\r\n----------------------------------------\r\n[ Monster Effect ]\r\nYou can Tribute this card; place 1 "Abyss Actor" Pendulum Monster from your Deck in your Pendulum Zone, also for the rest of this turn, you cannot Special Summon monsters, except "Abyss Actor" monsters, nor activate the Pendulum Effect of "Abyss Actor - Extras". You can only use this effect of "Abyss Actor - Extras" once per turn.',
    atk: 100,
    def: 100,
    level: 1,
    race: 'Fiend',
    attribute: 'DARK',
    archetype: 'Abyss Actor',
    createdAt: '2020-11-06T01:03:38.426Z',
    updatedAt: '2020-11-06T01:03:38.426Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624620/fju1c4dbsxcaoetrl0j1.webp'
    ],
    _id: '5fa4a0ec2c8d37522027d9a5',
    id: 99634927,
    name: 'Abyss Actor - Funky Comedian',
    type: 'Pendulum Effect Monster',
    desc:
      '[ Pendulum Effect ]\r\nOnce per turn: You can Tribute 1 "Abyss Actor" monster, then target 1 "Abyss Actor" monster you control; it gains ATK equal to the original ATK of the Tributed monster, until the end of this turn (even if this card leaves the field).\r\n----------------------------------------\r\n[ Monster Effect ]\r\nIf this card is Normal or Special Summoned: You can make this card gain 300 ATK for each "Abyss Actor" monster you currently control, until the end of this turn. You can target 1 other "Abyss Actor" monster you control; it gains ATK equal to this card\'s current ATK, until the end of this turn. This card cannot attack the turn this effect is activated. You can only use this effect of "Abyss Actor - Funky Comedian" once per turn.',
    atk: 300,
    def: 200,
    level: 1,
    race: 'Fiend',
    attribute: 'DARK',
    archetype: 'Abyss Actor',
    createdAt: '2020-11-06T01:03:40.513Z',
    updatedAt: '2020-11-06T01:03:40.513Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624622/lvtddjqude0b1cyq6whs.webp'
    ],
    _id: '5fa4a0ee2c8d37522027d9a6',
    id: 2368215,
    name: 'Abyss Actor - Hyper Director',
    type: 'Link Monster',
    desc:
      '1 "Abyss Actor" Pendulum Monster\r\nYou can target 1 card in your Pendulum Zone; Special Summon it, then place 1 "Abyss Actor" Pendulum Monster with a different name, from your Deck or face-up Extra Deck, to your Pendulum Zone, also you cannot Normal or Special Summon monsters for the rest of this turn, except "Abyss Actor" monsters. You can only use this effect of "Abyss Actor - Hyper Director" once per turn.',
    atk: 800,
    race: 'Fiend',
    attribute: 'DARK',
    archetype: 'Abyss Actor',
    createdAt: '2020-11-06T01:03:42.751Z',
    updatedAt: '2020-11-06T01:03:42.751Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624624/vzep2nzh8qegkravxqk2.webp'
    ],
    _id: '5fa4a0f02c8d37522027d9a7',
    id: 24907044,
    name: 'Abyss Actor - Leading Lady',
    type: 'Pendulum Effect Monster',
    desc:
      '[ Pendulum Effect ]\r\nOnce per turn, when you take battle damage from an opponent\'s attacking monster: You can activate 1 of these effects;\r\n●That opponent\'s monster loses ATK equal to the damage you took (even if this card leaves the field).\r\n●Add 1 face-up "Abyss Actor" Pendulum Monster from your Extra Deck to your hand with ATK less than or equal to the damage you took.\r\n----------------------------------------\r\n[ Monster Effect ]\r\nOnce per turn, when battle damage is inflicted: You can target 1 face-up monster your opponent controls; it loses ATK equal to that battle damage. When this card is destroyed by battle, or if this card in its owner\'s Monster Zone is destroyed by an opponent\'s card effect: You can Set 1 "Abyss Script" Spell directly from your Deck.',
    atk: 1500,
    def: 1000,
    level: 4,
    race: 'Fiend',
    attribute: 'DARK',
    archetype: 'Abyss Actor',
    createdAt: '2020-11-06T01:03:44.962Z',
    updatedAt: '2020-11-06T01:03:44.962Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624626/ns4byyuh45y9gvenc1aj.webp'
    ],
    _id: '5fa4a0f32c8d37522027d9a8',
    id: 78310590,
    name: 'Abyss Actor - Mellow Madonna',
    type: 'Pendulum Effect Monster',
    desc:
      '[ Pendulum Effect ]\r\nYou can pay 1000 LP; add 1 "Abyss Actor" Pendulum Monster from your Deck to your hand, except "Abyss Actor - Mellow Madonna", also you cannot Special Summon monsters for the rest of this turn, except "Abyss Actor" Pendulum Monsters (even if this card leaves the field). You can only use this effect of "Abyss Actor - Mellow Madonna" once per turn.\r\n----------------------------------------\r\n[ Monster Effect ]\r\nGains 100 ATK for each "Abyss Script" Spell in your GY. You can only use each of the following effects of "Abyss Actor - Mellow Madonna" once per turn.\r\n●When a Pendulum Monster you control is destroyed by battle: You can Special Summon this card from your hand.\r\n●If an "Abyss Script" Spell Card or effect is activated: You can Special Summon 1 Level 4 or lower "Abyss Actor" Pendulum Monster from your Deck, but return it to the hand during the End Phase.',
    atk: 1800,
    def: 2500,
    level: 7,
    race: 'Fiend',
    attribute: 'DARK',
    archetype: 'Abyss Actor',
    createdAt: '2020-11-06T01:03:47.109Z',
    updatedAt: '2020-11-06T01:03:47.109Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624628/nasdx8uosaudivqmdged.webp'
    ],
    _id: '5fa4a0f52c8d37522027d9a9',
    id: 51028231,
    name: 'Abyss Actor - Sassy Rookie',
    type: 'Pendulum Effect Monster',
    desc:
      '[ Pendulum Effect ]\r\nIf an "Abyss Actor" monster(s) you control would be destroyed by battle or an opponent\'s card effect, you can destroy this card instead.\r\n----------------------------------------\r\n[ Monster Effect ]\r\nThe first time this card would be destroyed by battle or card effect each turn, it is not destroyed. If this card is destroyed by battle, or if this card in its owner\'s Monster Zone is destroyed by an opponent\'s card effect: You can Special Summon 1 Level 4 or lower "Abyss Actor" monster from your Deck, except "Abyss Actor - Sassy Rookie". If this card in the Pendulum Zone is destroyed: You can target 1 Level 4 or lower monster your opponent controls; destroy it.',
    atk: 1700,
    def: 1000,
    level: 4,
    race: 'Fiend',
    attribute: 'DARK',
    archetype: 'Abyss Actor',
    createdAt: '2020-11-06T01:03:49.269Z',
    updatedAt: '2020-11-06T01:03:49.269Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624630/q6hpuf0bk6ewlrhe1f5w.webp'
    ],
    _id: '5fa4a0f72c8d37522027d9aa',
    id: 25629622,
    name: 'Abyss Actor - Superstar',
    type: 'Pendulum Effect Monster',
    desc:
      '[ Pendulum Effect ]\r\nOnce per turn: You can Tribute 1 "Abyss Actor" monster, then target 1 "Abyss Script" Spell in your GY; add it to your hand.\r\n----------------------------------------\r\n[ Monster Effect ]\r\nWhen Normal or Special Summoned, your opponent\'s Spell/Trap Cards and effects cannot be activated. Once per turn: You can Set 1 "Abyss Script" Spell directly from your Deck, but it is sent to the GY during the End Phase.',
    atk: 2500,
    def: 1800,
    level: 7,
    race: 'Fiend',
    attribute: 'DARK',
    archetype: 'Abyss Actor',
    createdAt: '2020-11-06T01:03:51.083Z',
    updatedAt: '2020-11-06T01:03:51.083Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624632/jk1wqhgwmrwa1xbrvfmq.webp'
    ],
    _id: '5fa4a0f92c8d37522027d9ab',
    id: 39024589,
    name: 'Abyss Actor - Trendy Understudy',
    type: 'Pendulum Effect Monster',
    desc:
      '[ Pendulum Effect ]\r\nWhen you Pendulum Summon a monster: You can add 1 face-up Level 1 or 8 "Abyss Actor" Pendulum Monster from your Extra Deck to your hand.\r\n----------------------------------------\r\n[ Monster Effect ]\r\nIf you have 2 "Abyss Actor" cards in your Pendulum Zones: You can Tribute this card; Special Summon 1 Level 1 or 8 "Abyss Actor" Pendulum Monster from your hand or face-up from your Extra Deck. You can only use this effect of "Abyss Actor - Trendy Understudy" once per turn.',
    atk: 700,
    def: 700,
    level: 2,
    race: 'Fiend',
    attribute: 'DARK',
    archetype: 'Abyss Actor',
    createdAt: '2020-11-06T01:03:53.148Z',
    updatedAt: '2020-11-06T01:03:53.148Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624634/pcffddohr7rme8f8c1fi.webp'
    ],
    _id: '5fa4a0fb2c8d37522027d9ac',
    id: 7279373,
    name: 'Abyss Actor - Twinkle Little Star',
    type: 'Pendulum Effect Monster',
    desc:
      '[ Pendulum Effect ]\r\nYou cannot Pendulum Summon monsters, except "Abyss Actor" monsters. This effect cannot be negated. Once per turn: You can target 1 "Abyss Actor" monster you control; this turn, it can make up to 3 attacks on monsters during each Battle Phase, also other monsters you control cannot attack for the rest of this turn (even if this card leaves the field).\r\n----------------------------------------\r\n[ Monster Effect ]\r\nCannot be destroyed by battle during your turn. This card can make up to 3 attacks on monsters during each Battle Phase.',
    atk: 1000,
    def: 1000,
    level: 4,
    race: 'Fiend',
    attribute: 'DARK',
    archetype: 'Abyss Actor',
    createdAt: '2020-11-06T01:03:55.016Z',
    updatedAt: '2020-11-06T01:03:55.016Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624636/k16zyfvnbzwxwqlwfnqq.webp'
    ],
    _id: '5fa4a0fc2c8d37522027d9ad',
    id: 51391183,
    name: 'Abyss Actor - Wild Hope',
    type: 'Pendulum Effect Monster',
    desc:
      '[ Pendulum Effect ]\r\nOnce per turn: You can target 1 "Abyss Actor" card in your other Pendulum Zone; its Pendulum Scale becomes 9 until the end of this turn, also you cannot Special Summon monsters for the rest of this turn, except "Abyss Actor" monsters (even if this card leaves the field).\r\n----------------------------------------\r\n[ Monster Effect ]\r\nOnce per turn: You can make this card gain 100 ATK for each "Abyss Actor" monster you currently control with different names, until the end of this turn. If this card is destroyed by battle or card effect: You can add 1 "Abyss Actor" card from your Deck to your hand, except "Abyss Actor - Wild Hope". You can only use this effect of "Abyss Actor - Wild Hope" once per turn.',
    atk: 1600,
    def: 1200,
    level: 4,
    race: 'Fiend',
    attribute: 'DARK',
    archetype: 'Abyss Actor',
    createdAt: '2020-11-06T01:03:56.940Z',
    updatedAt: '2020-11-06T01:03:56.940Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624638/dtoihbxwudzgjnpqimmy.webp'
    ],
    _id: '5fa4a0fe2c8d37522027d9ae',
    id: 59057953,
    name: 'Abyss Actors Back Stage',
    type: 'Trap Card',
    desc:
      'If you have 2 "Abyss Actor" cards in your Pendulum Zones: Add 2 "Abyss Actor" Pendulum Monsters with different names from your Deck to your Extra Deck face-up. You can only activate 1 "Abyss Actors Back Stage" per turn.',
    race: 'Normal',
    archetype: 'Abyss Actor',
    createdAt: '2020-11-06T01:03:58.878Z',
    updatedAt: '2020-11-06T01:03:58.878Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624640/azhxusrhr0rqierv08wo.webp'
    ],
    _id: '5fa4a1032c8d37522027d9af',
    id: 4682617,
    name: "Abyss Actors' Curtain Call",
    type: 'Trap Card',
    desc:
      'If an "Abyss Script" Spell Card or effect is activated this turn: Add face-up "Abyss Actor" Pendulum Monsters from your Extra Deck to your hand, up to the number of "Abyss Script" Spells in your GY. Then, you can Special Summon "Abyss Actor" Pendulum Monsters from your hand with different names, up to the number of monsters added to the hand by this effect. You cannot Special Summon monsters for the rest of this turn, except "Abyss Actor" Pendulum Monsters. You can only activate 1 "Abyss Actors\' Curtain Call" per turn.',
    race: 'Normal',
    archetype: 'Abyss Actor',
    createdAt: '2020-11-06T01:04:03.933Z',
    updatedAt: '2020-11-06T01:04:03.933Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624645/udtjqyh8j4muhnoaxkuz.webp'
    ],
    _id: '5fa4a1052c8d37522027d9b0',
    id: 21044178,
    name: 'Abyss Dweller',
    type: 'XYZ Monster',
    desc:
      '2 Level 4 monsters\nWhile this card has a material attached that was originally WATER, all WATER monsters you control gain 500 ATK. Once per turn (Quick Effect): You can detach 1 material from this card; your opponent cannot activate any card effects in their GY this turn.',
    atk: 1700,
    def: 1400,
    level: 4,
    race: 'Sea Serpent',
    attribute: 'WATER',
    createdAt: '2020-11-06T01:04:05.784Z',
    updatedAt: '2020-11-06T01:04:05.784Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624647/ityjlbqwixen7bio1xjs.webp'
    ],
    _id: '5fa4a1072c8d37522027d9b1',
    id: 40387124,
    name: 'Abyss Flower',
    type: 'Normal Monster',
    desc: 'A rarely seen flower that blossoms quietly on the edge of darkness.',
    atk: 750,
    def: 400,
    level: 2,
    race: 'Plant',
    attribute: 'EARTH',
    createdAt: '2020-11-06T01:04:07.668Z',
    updatedAt: '2020-11-06T01:04:07.668Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624649/yhdbcoqgwbzlrhttwdeu.webp'
    ],
    _id: '5fa4a1092c8d37522027d9b2',
    id: 77297908,
    name: 'Abyss Playhouse - Fantastic Theater',
    type: 'Spell Card',
    desc:
      'You can reveal 1 "Abyss Actor" Pendulum Monster and 1 "Abyss Script" Spell in your hand; add 1 "Abyss Script" Spell from your Deck to your hand, with a different name than that revealed Spell. While you control a Pendulum Summoned "Abyss Actor" Pendulum Monster, any monster effect activated by your opponent becomes "Destroy 1 Set Spell/Trap your opponent controls". You can only use each effect of "Abyss Playhouse - Fantastic Theater" once per turn.',
    race: 'Field',
    archetype: 'Abyss Actor',
    createdAt: '2020-11-06T01:04:09.786Z',
    updatedAt: '2020-11-06T01:04:09.786Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624651/gakic0ecirft8etgry51.webp'
    ],
    _id: '5fa4a10b2c8d37522027d9b3',
    id: 86578200,
    name: 'Abyss Prop - Wild Wagon',
    type: 'Spell Card',
    desc:
      'The first time each "Abyss Actor" monster you control would be destroyed by battle each turn, it is not destroyed. Once per turn: You can target 1 "Abyss Actor" monster you control; your opponent cannot target it with card effects until the end of their turn (even if this card leaves the field). If this Set card in its owner\'s control is destroyed by an opponent\'s card effect, and you have a face-up "Abyss Actor" Pendulum Monster in your Extra Deck: You can return all cards your opponent controls to the hand.',
    race: 'Continuous',
    archetype: 'Abyss Actor',
    createdAt: '2020-11-06T01:04:11.891Z',
    updatedAt: '2020-11-06T01:04:11.891Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624653/a8y0cngoqy44wxcmbokc.webp'
    ],
    _id: '5fa4a10e2c8d37522027d9b4',
    id: 70564929,
    name: 'Abyss Script - Abysstainment',
    type: 'Spell Card',
    desc:
      'You can Tribute 1 "Abyss Actor" monster, then target 1 "Abyss Script" Spell in your GY; Set it to your field. You can use this effect of "Abyss Script - Abysstainment" up to twice per turn. If this Set card in its owner\'s control is destroyed by an opponent\'s card effect, and you have a face-up "Abyss Actor" Pendulum Monster in your Extra Deck: You can Special Summon any number of "Abyss Actor" Pendulum Monsters from your Deck.',
    race: 'Continuous',
    archetype: 'Abyss Actor',
    createdAt: '2020-11-06T01:04:14.169Z',
    updatedAt: '2020-11-06T01:04:14.169Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624655/ambhlq4gpx0d119wp2hs.webp'
    ],
    _id: '5fa4a1112c8d37522027d9b5',
    id: 87390798,
    name: 'Abyss Script - Fantasy Magic',
    type: 'Spell Card',
    desc:
      'Target 1 "Abyss Actor" monster you control; this turn, every monster that battles it, but is not destroyed, returns to the hand at the end of the Damage Step. If this Set card in its owner\'s control is destroyed by an opponent\'s card effect, and you have a face-up "Abyss Actor" Pendulum Monster in your Extra Deck: You can target 1 card your opponent controls; place it on top of the Deck.',
    race: 'Normal',
    archetype: 'Abyss Actor',
    createdAt: '2020-11-06T01:04:17.123Z',
    updatedAt: '2020-11-06T01:04:17.123Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624658/dweac62f7hzn46ird2b5.webp'
    ],
    _id: '5fa4a1132c8d37522027d9b6',
    id: 50179591,
    name: "Abyss Script - Fire Dragon's Lair",
    type: 'Spell Card',
    desc:
      'Target 1 "Abyss Actor" monster you control; if it destroys your opponent\'s monster by battle this turn, your opponent banishes 3 monsters from their Extra Deck (their choice). If this Set card in its owner\'s control is destroyed by an opponent\'s card effect, and you have a face-up "Abyss Actor" Pendulum Monster in your Extra Deck: You can look at your opponent\'s Extra Deck, also banish 1 monster from their Extra Deck. You can only use this effect of "Abyss Script - Fire Dragon\'s Lair" once per turn.',
    race: 'Normal',
    archetype: 'Abyss Actor',
    createdAt: '2020-11-06T01:04:19.367Z',
    updatedAt: '2020-11-06T01:04:19.367Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624660/wcgg9dnkmqioueayucbs.webp'
    ],
    _id: '5fa4a1152c8d37522027d9b7',
    id: 23784496,
    name: 'Abyss Script - Opening Ceremony',
    type: 'Spell Card',
    desc:
      'Gain 500 LP for each "Abyss Actor" monster you control. If this Set card in its owner\'s control is destroyed by an opponent\'s card effect, and you have a face-up "Abyss Actor" Pendulum Monster in your Extra Deck: You can draw until you have 5 cards in your hand. You can only use each effect of "Abyss Script - Opening Ceremony" once per turn.',
    race: 'Normal',
    archetype: 'Abyss Actor',
    createdAt: '2020-11-06T01:04:21.561Z',
    updatedAt: '2020-11-06T01:04:21.561Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624663/vyv7nyv97tj7pqfjvkic.webp'
    ],
    _id: '5fa4a1172c8d37522027d9b8',
    id: 13662809,
    name: 'Abyss Script - Rise of the Abyss King',
    type: 'Spell Card',
    desc:
      'Target face-up cards on the field, up to the number of Attack Position "Abyss Actor" monsters with different names you control; destroy them. If you control a Level 7 or higher "Abyss Actor" monster, your opponent cannot activate cards or effects in response to this card\'s activation. If this Set card in its owner\'s control is destroyed by an opponent\'s card effect, and you have a face-up "Abyss Actor" Pendulum Monster in your Extra Deck: You can add up to 2 "Abyss Actor" cards and/or "Abyss Script" Spells with different names from your Deck to your hand.',
    race: 'Normal',
    archetype: 'Abyss Actor',
    createdAt: '2020-11-06T01:04:23.698Z',
    updatedAt: '2020-11-06T01:04:23.698Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624665/ozg4kpegkbyipq5r0yyg.webp'
    ],
    _id: '5fa4a1192c8d37522027d9b9',
    id: 41803903,
    name: 'Abyss Script - Romantic Terror',
    type: 'Spell Card',
    desc:
      'Return 1 "Abyss Actor" Pendulum Monster you control to the hand, and if you do, Special Summon from your Extra Deck in Defense Position, 1 face-up "Abyss Actor" Pendulum Monster with a different original name from that monster. If this Set card in its owner\'s control is destroyed by an opponent\'s card effect, and you have a face-up "Abyss Actor" Pendulum Monster in your Extra Deck: You can Set any number of "Abyss Script" Spells directly from your Deck. You can only activate 1 "Abyss Script - Romantic Terror" per turn.',
    race: 'Quick-Play',
    archetype: 'Abyss Actor',
    createdAt: '2020-11-06T01:04:25.508Z',
    updatedAt: '2020-11-06T01:04:25.508Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624667/cmun1xwhmpcsudm37tfh.webp'
    ],
    _id: '5fa4a11e2c8d37522027d9ba',
    id: 18318842,
    name: 'Abyss Soldier',
    type: 'Effect Monster',
    desc:
      'Once per turn: You can discard 1 WATER monster to the Graveyard to target 1 card on the field; return it to the hand.',
    atk: 1800,
    def: 1300,
    level: 4,
    race: 'Aqua',
    attribute: 'WATER',
    createdAt: '2020-11-06T01:04:30.575Z',
    updatedAt: '2020-11-06T01:04:30.575Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624672/apgqlvouagsigpfnhzpj.webp'
    ],
    _id: '5fa4a1202c8d37522027d9bb',
    id: 97232518,
    name: 'Abyss Stungray',
    type: 'Trap Card',
    desc:
      'Special Summon this card as an Effect Monster (Thunder-Type/LIGHT/Level 5/ATK 1900/DEF 0). (This card is also still a Trap Card.) If Summoned this way, this card cannot be destroyed by battle.',
    race: 'Continuous',
    createdAt: '2020-11-06T01:04:32.427Z',
    updatedAt: '2020-11-06T01:04:32.427Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624673/ouojoqocuw2v8olkici8.webp'
    ],
    _id: '5fa4a1222c8d37522027d9bc',
    id: 88409165,
    name: 'Abyss Warrior',
    type: 'Effect Monster',
    desc:
      "Once per turn: You can discard 1 WATER monster to the Graveyard, then target 1 monster in either player's Graveyard; return that target to either the top or bottom of the Deck.",
    atk: 1800,
    def: 1300,
    level: 4,
    race: 'Aqua',
    attribute: 'WATER',
    createdAt: '2020-11-06T01:04:34.266Z',
    updatedAt: '2020-11-06T01:04:34.266Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624676/ws44gocy3msq09td67hk.webp'
    ],
    _id: '5fa4a1242c8d37522027d9bd',
    id: 19596712,
    name: 'Abyss-scale of Cetus',
    type: 'Spell Card',
    desc:
      'Equip only to a "Mermail" monster. It gains 800 ATK. When a Trap effect that was activated on your opponent\'s side of the field resolves, negate that effect, then send this card to the Graveyard.',
    race: 'Equip',
    archetype: 'Mermail',
    createdAt: '2020-11-06T01:04:36.625Z',
    updatedAt: '2020-11-06T01:04:36.625Z',
    __v: 0
  },
  {
    duelLinksRarity: 'N',
    card_images: [
      'http://res.cloudinary.com/yugiohdeckbuilder/image/upload/v1604624678/dufh0klmuisxmuhn2dm9.webp'
    ],
    _id: '5fa4a1262c8d37522027d9be',
    id: 8719957,
    name: 'Abyss-scale of the Kraken',
    type: 'Spell Card',
    desc:
      'Equip only to a "Mermail" monster. It gains 400 ATK. When a monster effect that was activated on your opponent\'s side of the field resolves, negate that effect, then send this card to the Graveyard.',
    race: 'Equip',
    archetype: 'Mermail',
    createdAt: '2020-11-06T01:04:38.762Z',
    updatedAt: '2020-11-06T01:04:38.762Z',
    __v: 0
  }
]

const d = { ...data, rarity: 'UR' }
import { CardProps } from 'components/Card'

const testDeck = Array.from(new Array(20)).reduce((acc) => {
  acc = acc.concat(d)
  return acc
}, [])

type DraggabledItemProps = {
  index: number
  dragOrigin: string
}

function Deck() {
  const [deck, setDeck] = useState<CardProps[]>(testDeck)
  const [stack, setStack] = useState<CardProps[]>(testDeck.slice(0, 5))
  const [displaySearch, setDisplaySearch] = useState<boolean>(false)

  const removeCard = (index: number, source: string) => {
    if (source === 'deck') {
      const c: CardProps[] = Object.assign([], deck)
      const result: CardProps[] = c.splice(index, 1)
      setDeck(() => Object.assign([], c))

      return result[0]
    } else {
      const c: CardProps[] = Object.assign([], stack)
      const result: CardProps[] = c.splice(index, 1)
      console.log('result', result, c)
      setStack(() => Object.assign([], c))

      return result[0]
    }
  }

  const addCard = (card: CardProps, destiny: string) => {
    console.log('chamei add')
    if (destiny === 'deck') {
      console.log('destiny deck')
      const c = Object.assign([], deck)
      c.push(card)
      sortCards(c)

      // setDeck(() => Object.assign([], c))
    } else {
      const c = Object.assign([], stack)
      c.push(card)
      setStack(() => Object.assign([], c))
    }
  }

  const sortCards = (cards: CardProps[]) => {
    const cardsClone: CardProps[] = Object.assign([], cards)
    const ur: CardProps[] = cardsClone
      .filter((c) => c?.duelLinksRarity.match(/ur/i))
      .sort((a, b) => b?.name.localeCompare(a?.name))
    const sr: CardProps[] = cardsClone
      .filter((c) => c?.duelLinksRarity.match(/sr/i))
      .sort((a, b) => b?.name.localeCompare(a?.name))
    const rare: CardProps[] = cardsClone
      .filter((c) => c?.duelLinksRarity === 'R')
      .sort((a, b) => b?.name.localeCompare(a?.name))
    const normal: CardProps[] = cardsClone
      .filter((c) => c?.duelLinksRarity === 'N')
      .sort((a, b) => b?.name.localeCompare(a?.name))

    console.log('sorted: ', ur)

    setDeck(() => Object.assign([], [...ur, ...sr, ...rare, ...normal]))
  }

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item: DragObjectWithType & DraggabledItemProps) => {
      if (isOver) {
        if (item.dragOrigin === 'deck') {
          const c = removeCard(item.index, item.dragOrigin)
          addCard(c, 'stack')
        }
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })

  return (
    <DeckBuilder refProp={drop}>
      <Overlay hideOverlay={() => setDisplaySearch(false)} show={displaySearch}>
        <div style={{ padding: '5rem 0' }}>
          <Container>
            <Heading color="light">Search</Heading>
          </Container>
        </div>
      </Overlay>
      <S.DeckBuilderContainer>
        <MediaMatch greaterThan="medium">
          <CardGrid removeCard={removeCard} addCard={addCard} reduced={true}>
            {allCards &&
              allCards.map((card, index) => {
                return (
                  <Card
                    executeDeckAction={() => ({})}
                    index={index}
                    dragOrigin="deck"
                    {...card}
                    rarity={card.duelLinksRarity}
                    release="2019-01-01"
                    amount={[0]}
                    key={index}
                    boxAmount={0}
                    displayCardInfos={false}
                  />
                )
              })}
          </CardGrid>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <CardGrid removeCard={removeCard} addCard={addCard} reduced={true}>
            {allCards &&
              allCards.map((card, index) => {
                return (
                  <Card
                    executeDeckAction={() => ({})}
                    index={index}
                    dragOrigin="deck"
                    {...card}
                    rarity="R"
                    release="2019-01-01"
                    amount={[0]}
                    key={index}
                    boxAmount={0}
                    displayCardInfos={false}
                  />
                )
              })}
          </CardGrid>
        </MediaMatch>
        <div>
          <Heading color="light" size="small">
            Search Result
          </Heading>
          <div style={{ margin: '2rem 0 4rem 0' }}>
            <Button onClick={() => setDisplaySearch(true)}>Search cards</Button>
          </div>
          <MediaMatch greaterThan="medium">
            <S.FiltersContainer>
              {stack &&
                stack.map((_, index) => {
                  return (
                    <Card
                      dragOrigin="stack"
                      {...d}
                      rarity="UR"
                      duelLinksRarity="UR"
                      key={index}
                      index={index}
                      thresholdIndex={2}
                      displayCardInfos={false}
                    />
                  )
                })}
            </S.FiltersContainer>
          </MediaMatch>
          <MediaMatch lessThan="medium">
            <S.FiltersContainer>
              {stack &&
                stack.map((_, index) => {
                  return (
                    <Card
                      executeDeckAction={() => ({})}
                      dragOrigin="stack"
                      {...d}
                      duelLinksRarity="R"
                      rarity="UR"
                      key={index}
                      index={index}
                      thresholdIndex={2}
                      displayCardInfos={false}
                    />
                  )
                })}
            </S.FiltersContainer>
          </MediaMatch>
        </div>
      </S.DeckBuilderContainer>
    </DeckBuilder>
  )
}

export default Deck
