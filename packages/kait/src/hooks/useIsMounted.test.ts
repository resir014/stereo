import { renderHook, act } from '@testing-library/react-hooks'
import useIsMounted from './useIsMounted'

describe('useIsMounted', () => {
  test('returns true if the component is mounted', () => {
    const { result } = renderHook(() => useIsMounted())
    expect(result.current).toBe(true)
  })

  test('returns false if the component is unmounted', () => {
    const { result, unmount } = renderHook(() => useIsMounted())
    expect(result.current).toBe(true)

    act(() => {
      unmount()
    })

    expect(result.current).toBe(false)
  })
})
