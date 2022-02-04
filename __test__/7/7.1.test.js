require('../../7.array_flat/7.1')

let arr = [1,2,3,[4,5,[6,7, new Set([1,2,3])]]]

test('校验扁平化结果是否与原生flat方法相同', () => {
  expect(arr.myFlat([])).toEqual(arr.flat([]))
  expect(arr.myFlat(undefined)).toEqual(arr.flat(undefined))
  expect(arr.myFlat(-2)).toEqual(arr.flat(-2))
  expect(arr.myFlat()).toEqual(arr.flat())
  expect(arr.myFlat(2)).toEqual(arr.flat(2))
  expect(arr.myFlat(3)).toEqual(arr.flat(3))
  expect(arr.myFlat(4)).toEqual(arr.flat(4))
  expect(arr.myFlat(5)).toEqual(arr.flat(5))
})




