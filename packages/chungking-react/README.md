# @resir014/chungking-react

> @resir014's personal design system.

## Install

```bash
# yarn
$ yarn add @resir014/chungking-react @emotion/react @emotion/styled
# npm
$ npm i @resir014/chungking-react @emotion/react @emotion/styled
```

## Usage

First, wrap your entire app inside `ChungkingProvider`. This will apply the Emotion theme provider, as well as style resets.

```tsx
import { ChungkingProvider } from '@resir014/chungking-react'

export default function MyApp() {
  return (
    <ChungkingProvider>
      <App />
    </ChungkingProvider>
  )
}
```

> For Next.js, you need to set this up in `pages/_app.js` or `pages/_app.tsx`

### Example

The following is an example for the Button component.

```tsx
import * as React from 'react'
import { Button } from '@resir014/chungking-react'

export default function Component() {
  return <Button>Push Me</Button>
}
```
