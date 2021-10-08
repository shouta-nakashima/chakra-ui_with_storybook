import { VFC } from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

type Props = {
  contents: { menu: string; path: string }[]
  title: string
}

const ButtonMenu: VFC<Props> = (props) => {
  const { contents, title } = props
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {title}
      </MenuButton>
      <MenuList>
        {contents &&
          contents.map((content) => (
            <MenuItem m={0} key={content.menu}>
              {content.menu}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  )
}

export default ButtonMenu
