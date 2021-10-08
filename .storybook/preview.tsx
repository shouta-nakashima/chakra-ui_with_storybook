import { ChakraProvider } from '@chakra-ui/react'
import { Story } from '@storybook/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import * as nextImage from 'next/image'

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
})

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
    type: 'mobile',
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
  actions: { argTypesRegex: '^on[A-Z].*' },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  viewport: {
    viewports: customViewports,
    defaultViewport: 'base',
  },
}
