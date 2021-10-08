import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Card from '../components/molecules/cards/Card'

export default {
  title: 'components/molecules/cards',
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const NewCard = Template.bind({})
NewCard.args = {
  badge: 'New',
  ratings: true,
  property: {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  },
}

export const Sold = Template.bind({})
Sold.args = {
  badge: 'Sold',
  ratings: true,
  property: {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 3,
  },
}
