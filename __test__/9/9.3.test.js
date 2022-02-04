require('../../9.array_push_filter_map/9.3')

let array = [4, 9, 16]

test('测试 myMap 结果是否正确', () => {
  expect(array.myMap((val, index, arr) => {
    return Math.sqrt(val)
  })).toEqual([2, 3, 4])

  expect(array.myMap(Math.sqrt)).toEqual([2, 3, 4])

  expect(array.myMap((val, index, arr) => {
    return arr.indexOf(val)
  })).toEqual([0, 1, 2])

  expect(array.myMap((val, index, arr) => {
    return val + index
  })).toEqual([4, 10, 18])
 
})
