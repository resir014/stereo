import { useState, useEffect } from 'react'

/**
 * Handles checking if the user has scrolled to a certain vertical scroll position.
 *
 * @param topThreshold The top threshold of the scroll event (in px).
 * @param bottomThreshold The bottom threshold of the scroll event (in px).
 */
export default function useVerticalScroll(topThreshold: number, bottomThreshold?: number): boolean {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    if (bottomThreshold) {
      if (window.scrollY >= topThreshold && window.scrollY <= bottomThreshold) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    } else if (window.scrollY >= topThreshold) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    // Initial check, in case the user refreshed.
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [topThreshold, bottomThreshold])

  return scrolled
}
