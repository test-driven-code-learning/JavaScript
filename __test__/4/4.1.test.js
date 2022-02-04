const myInstanceof = require('../../4.instanceof/4.1')

// 3. 向上查找左侧对象的 __proto__ 属性，看其是否与右侧对象的 prototype 属性相等
// 4. 左侧查找至 null 仍然不相等，则返回false


test('右侧不是引用类型，则报错', () => {
  expect(() => { myInstanceof('', '') }).toThrow()
  expect(() => { myInstanceof('', true) }).toThrow()
  expect(() => { myInstanceof('', 123) }).toThrow()
})


function Person(name) {
  this.name = name
}
Person.prototype[Symbol.hasInstance] = function(left) {
  if(typeof left === 'string') return true
  return left.name === 'jack'
}
var jack = new Person('jack')
var john = new Person('john')

test('如果右侧对象或者其原型链上定义[Symbol.hasInstance]方法 ，则返回此方法的调用结果', () => {
  expect(myInstanceof('', jack)).toBe('' instanceof jack)
  expect(myInstanceof('', john)).toBe('' instanceof john)
  expect(myInstanceof({ name: 'john' }, jack)).toBe({ name: 'john' } instanceof jack)
  expect(myInstanceof({ name: 'jack' }, john)).toBe({ name: 'jack' } instanceof john)
})


test('不改写 hasInstance 方法的前提下，string、number、boolean 这三种类型均返回false', () => {
  expect(myInstanceof('', String)).toBe('' instanceof String)
  expect(myInstanceof(123, Number)).toBe(123 instanceof Number)
  expect(myInstanceof(true, Boolean)).toBe(true instanceof Boolean)
})

test('测试正常情况', () => {
  expect(myInstanceof([], Array)).toBe([] instanceof Array)
  expect(myInstanceof([], Object)).toBe([] instanceof Object)
  var f = function() {}
  var arrowF = () => {}
  expect(myInstanceof(f, Function)).toBe(f instanceof Function)
  expect(myInstanceof(arrowF, Function)).toBe(arrowF instanceof Function)
})





