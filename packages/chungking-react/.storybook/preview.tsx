// .storybook/preview.js
import * as React from 'react'
import { ChungkingProvider } from '../src'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

const withThemeProvider = (Story: React.FC) => {
  return (
    <ChungkingProvider>
      <Story />
    </ChungkingProvider>
  )
}

export const decorators = [withThemeProvider]
