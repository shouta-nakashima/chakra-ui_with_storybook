import { ChakraProvider } from '@chakra-ui/react'
import { Story } from '@storybook/react'

const withChakra = (Story: Story) => {
  return (
    <ChakraProvider>
      <Story />
    </ChakraProvider>
  )
}

export const decorators = [withChakra]

const customViewports = {
  /** iPhone X */
  base: {
    name: 'base',
    styles: {
      width: '375px',
      height: '812px',
    },
    type: 'mobile',
  },
  sm: {
    name: 'sm',
    styles: {
      width: '320px',
      height: '1024px',
    },
    type: 'tablet',
  },
  /** iPad */
  md: {
    name: 'md',
    styles: {
      width: '768px',
      height: '1024px',
    },
    type: 'tablet',
  },
  /** MacBook Air */
  lg: {
    name: 'lg',
    styles: {
      width: '1280px',
      height: '800px',
    },
    type: 'desktop',
  },
}

export const parameters = {
  viewport: {
    viewports: customViewports,
    defaultViewport: 'base',
  },
}
