import React from 'react'
import { Story, Meta } from '@storybook/react'

import ResponsiveWrapper, { ResponsiveWrapperProps } from './ResponsiveWrapper'
import ResponsiveIframe from './ResponsiveIframe'

export default {
  title: 'Components/Iframe',
  component: ResponsiveWrapper,
  subcomponents: { ResponsiveIframe }
} as Meta<ResponsiveWrapperProps>

export const Responsive: Story<ResponsiveWrapperProps> = (args) => {
  return (
    <ResponsiveWrapper width="100%" maxWidth={500} {...args}>
      <ResponsiveIframe
        src="https://www.youtube-nocookie.com/embed/P_mQpbCSQOo"
        frameBorder={0}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </ResponsiveWrapper>
  )
}

Responsive.args = {
  ratio: 16 / 9
}
