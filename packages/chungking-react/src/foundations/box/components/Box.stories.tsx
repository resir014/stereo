import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { Box, BoxProps } from './Box'

export default {
  title: 'Components/Box',
  component: Box
} as Meta<BoxProps>

export const Example: Story = () => {
  return <Box>I'm inside a box!</Box>
}

export const StyleProps: Story = () => {
  return (
    <Box backgroundColor="grey.900" color="white" p="md">
      I'm inside a box!
    </Box>
  )
}

export const PseudoElements: Story = () => {
  return (
    <Box p="md" _hover={{ backgroundColor: 'grey.900' }}>
      I'm inside a box!
    </Box>
  )
}
