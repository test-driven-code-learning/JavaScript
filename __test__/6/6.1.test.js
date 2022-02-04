const deepClone = require('../../6.deep_clone/6.1')

// string、number、boolean、undefined、null、symbol、bigInt、array、set、object、map、function、Date、RegExp

// function 怎么复制

let arrayData =  [1, 2, 3]
let setData = new Set([1, 2, 3])
let objectData =  { name: 'jack', age: 25, arrayData, setData }
let mapData = new Map()
let regExpData =  new RegExp(/ab+c/)

let obj = {
  name: 'jack',
  age: 25,
  isMale: true,
  weight: undefined,
  height: null,
  nickName: Symbol('jack'),
  assets: BigInt(1000000),
  birthday: new Date('1999-1-1'),
  arrayData,
  setData,
  objectData,
  mapData,
  regExpData,
  objects: [ arrayData, setData, objectData, mapData, regExpData ]
}


test('校验值是否宽松相等', () => {
  expect(deepClone(obj)).toEqual(obj)
})


test('校验是否为深拷贝', () => {
  const newObj = deepClone(obj)
  expect(newObj.objects[1]).toEqual(obj.objects[1])
  expect(newObj.objects[1]).not.toBe(obj.objects[1])
  
  expect(newObj.objects[2].arrayData).toEqual(obj.objects[2].arrayData)
  expect(newObj.objects[2].arrayData).not.toBe(obj.objects[2].arrayData)

  expect(newObj.objects[2].setData).toEqual(obj.objects[2].setData)
  expect(newObj.objects[2].setData).not.toBe(obj.objects[2].setData)

})



