// .storybook/preview.js
import * as React from 'react'
import { ChungkingProvider } from '../src'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const decorators = [
  (Story) => (
    <ChungkingProvider>
      <Story />
    </ChungkingProvider>
  )
]
