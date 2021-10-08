import { ComponentStory, ComponentMeta } from '@storybook/react'

import ButtonMenu from '../components/atoms/ButtonMenu'

export default {
  title: 'components/atoms',
  component: ButtonMenu,
} as ComponentMeta<typeof ButtonMenu>

const Template: ComponentStory<typeof ButtonMenu> = (args) => <ButtonMenu {...args} />

export const DefaultMenu = Template.bind({})

DefaultMenu.args = {
  title: 'Test Contents',
  contents: [
    { menu: ' Test1', path: '/' },
    { menu: 'Test2', path: '/' },
    { menu: 'Test3', path: '/' },
    { menu: 'Test4', path: '/' },
  ],
}
