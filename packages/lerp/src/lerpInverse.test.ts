import lerpInverse from './lerpInverse'

describe('lerpInverse', () => {
  test('returns the correct values', () => {
    expect(lerpInverse(1.5, 1, 2)).toEqual(0.5)
  })
})
