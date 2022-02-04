const currying = require('../../10.curry/10.1')

function add(...args) {
  return args.reduce((a, b) => a + b)
}
let addCurry = currying(add)

test('测试返回值是否正确', () => {
  expect(addCurry(1)(2)(3)()).toBe(6)
  expect(addCurry(1)(2)(3, 4)()).toBe(10)
  expect(addCurry(1)(2)(3, 4)(5)()).toBe(15)
})

