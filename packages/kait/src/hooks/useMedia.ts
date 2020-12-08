import { useState, useEffect } from 'react'

/**
 * Listens for changes in screen size and matches it based on the passed media query.
 *
 * @param query A media query string accepted by `window.matchMedia()`.
 */
export default function useMedia(query: string): boolean {
  const initial = typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  const [matches, setMatches] = useState(initial)

  useEffect(() => {
    let media: MediaQueryList | undefined

    if (typeof window !== 'undefined') {
      media = window.matchMedia(query)
    }

    const listener = () => {
      if (media) {
        setMatches(media.matches)
      }
    }

    if (media) {
      if (media.matches !== matches) {
        setMatches(media.matches)
      }

      media.addEventListener('change', listener)
    }

    return () => {
      if (media) {
        media.removeEventListener('change', listener)
      }
    }
  }, [query])

  return matches
}
