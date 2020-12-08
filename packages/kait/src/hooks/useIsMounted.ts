import { useEffect, useRef, useCallback } from 'react'

/**
 * Returns if the component the hook currently sits in is mounted or not.
 */
export default function useIsMounted(): () => boolean {
  const ref = useRef(false)

  useEffect(() => {
    ref.current = true

    return () => {
      ref.current = false
    }
  }, [])

  return useCallback(() => ref.current, [])
}
