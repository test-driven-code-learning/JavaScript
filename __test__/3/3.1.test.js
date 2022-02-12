require('../../03.object_create/3.1')

var obj = {
  name: 'jack'
}

var propertiesObject = {
  age: {
    value: 25,
    writable: true,
    enumerable: false,
    configurable: true
  }
}

var newObj = Object.myCreate(obj, propertiesObject)

// newObj 自身的 propertyDescriptors
var selfPropertiesObject = Object.getOwnPropertyDescriptors(newObj)

// newObj 隐式原型的 propertyDescriptors
var protoPropertiesObject = Object.getOwnPropertyDescriptors(newObj.__proto__)

// obj 的 propertyDescriptors
var objPropertiesObject = Object.getOwnPropertyDescriptors(obj)


test('新对象的隐式原型 __proto__ 指向第一个参数', () => {
  expect(JSON.stringify(protoPropertiesObject) === JSON.stringify(objPropertiesObject)).toBe(true)
})


test('校验 propertiesObject 参数', () => {
  expect(JSON.stringify(selfPropertiesObject) === JSON.stringify(propertiesObject)).toBe(true)
})



