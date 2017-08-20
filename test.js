const indicesOf = require('./')

test('should be defined', () => {
  expect(indicesOf).toBeDefined()
})

test('should get matching indices', () => {
  const arr = [1, 6, 2, 3, 4, 5, 2, 9, 13, 6, 6, 5]

  expect(indicesOf(arr, 6).length).toBe(3)
  expect(indicesOf(arr, 5).length).toBe(2)
  expect(indicesOf(arr, 99).length).toBe(0)
})
