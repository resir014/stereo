import { renderHook } from '@testing-library/react-hooks'
import useVerticalScroll from './useVerticalScroll'

describe('useVerticalScroll', () => {
  test('returns false in default scroll state', () => {
    const { result } = renderHook(() => useVerticalScroll(80))
    expect(result.current).toBe(false)
  })

  test('returns true when topThreshold is reached', () => {
    const { result } = renderHook(() => useVerticalScroll(0))
    expect(result.current).toBe(true)
  })
})
