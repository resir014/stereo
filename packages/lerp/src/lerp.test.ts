import lerp from './lerp'

describe('lerp', () => {
  test('returns the correct values', () => {
    expect(lerp(1, 2, 0.5)).toEqual(1.5)
  })
})
