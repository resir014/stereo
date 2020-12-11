import { useEffect, useRef } from 'react'

/**
 * Returns if the component the hook currently sits in is mounted or not.
 */
export default function useIsMounted(): React.MutableRefObject<boolean> {
  const ref = useRef(false)

  useEffect(() => {
    ref.current = true

    return () => {
      ref.current = false
    }
  }, [])

  return ref
}
