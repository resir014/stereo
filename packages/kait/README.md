# @resir014/kait

> @resir014's personal reusable hooks.

## Install

```bash
# yarn
$ yarn add @resir014/kait
# npm
$ npm i @resir014/kait
```

## Hooks

Below is a documentation of the hooks included in this package.

### `useVerticalScroll`

Handles checking if the user has scrolled to a certain vertical scroll position.

```jsx
const shallowThreshold = useVerticalScroll(0, 249)
const mediumThreshold = useVerticalScroll(250, 499)
const deepThreshold = useVerticalScroll(500)
```

### `useMedia`

Listens for changes in screen size and matches it based on the passed media query.

```jsx
import * as React from 'react'
import { useMedia } from '@resir014/kait'

function MediaExample() {
  const mobile = useMedia('(max-width: 640px)')

  return <Layout>{mobile ? <MobileHeader /> : <DesktopHeader />}</Layout>
}
```

### `useIsMounted`

Returns if the component the hook currently sits in is mounted or not.

```jsx
import * as React from 'react'
import { useIsMounted } from '@resir014/kait'

function IsMountedExample() {
  const [data, setData] = React.useState(null)
  const isMounted = useIsMounted()

  React.useEffect(() => {
    fetchFromAPI().then((res) => {
      if (isMounted.current) {
        setData(res)
      }
    })
  }, [])

  // ...
}
```
