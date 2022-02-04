require('../../9.array_push_filter_map/9.2')

let array = [1, 2, 3, 4, 5, 6]

test('测试 myFilter 结果是否正确', () => {
  expect(array.myFilter((val, index, arr) => {
    return val % 2 === 0
  })).toEqual([2, 4, 6])

  expect(array.myFilter((val, index, arr) => {
    return index % 2 === 0
  })).toEqual([1, 3, 5])

  expect(array.myFilter((val, index, arr) => {
    return [0, 1, 2].includes(arr.indexOf(val))
  })).toEqual([1, 2, 3])
})

