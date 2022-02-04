require('../../9.array_push_filter_map/9.1')

let arr = [1, 2, 3]

test('测试数组元素是否按照预期改变', () => {
  arr.myPush(4, 5, 6)
  expect(arr).toEqual([1, 2, 3, 4, 5, 6])
})

test('测试方法返回值是否正确', () => {
  expect(arr.myPush(7, 8)).toBe(8)
})