require('../../2.call_apply_bind/2.1')


global.name = 'jack'
global.age = '25'

function print(height, weight) {
  return `${this.name}-${this.age}-${height}-${weight}`
}

var obj = {
  name: 'lisa',
  age: '20'
}

test('传入 null/undefined, 上下文指向当前环境的全局对象', () => {
  expect(print.myCall(null, '180', '60')).toBe('jack-25-180-60')
  expect(print.myCall(undefined, '180', '60')).toBe('jack-25-180-60')
})


// 测试 this.__proto__ 是否指向 String/Number/Boolean 的 prototype
function printString() {
  return Object.getPrototypeOf(this) === String.prototype
}
function printNumber() {
  return Object.getPrototypeOf(this) === Number.prototype
}
function printBoolean() {
  return Object.getPrototypeOf(this) === Boolean.prototype
}

test('传入原始值, 上下文指向原始值的包装对象', () => {
  expect(printString.myCall('string')).toBe(true)
  expect(printNumber.myCall(123)).toBe(true)
  expect(printBoolean.myCall(true)).toBe(true)
})


test('上下文改变成功', () => {
  expect(print.myCall(obj, '180', '60')).toBe('lisa-20-180-60')
})

test('上下文的原有属性没有被改变', done => {
  let snapshot = { } // 记录属性快照
  Object.getOwnPropertyNames(obj).forEach(key => snapshot[key] = obj[key])
  Object.getOwnPropertySymbols(obj).forEach(key => snapshot[key] = obj[key])

  // 判断属性是否被修改
  function isNotModify(snapshot, obj) {
    return Object.getOwnPropertyNames(obj).every(key => obj[key] === snapshot[key]) 
    && Object.getOwnPropertySymbols(obj).every(key => obj[key] === snapshot[key])
  }

  expect(print.myCall(obj, '180', '60')).toBe('lisa-20-180-60')
  setTimeout(() => {
    expect(isNotModify(snapshot, obj)).toBe(true)
    done()
  }, 0)

})

