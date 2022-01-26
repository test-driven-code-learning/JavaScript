const myNew = require('../1.the_new_operator/1.1')


function Person(name, age) {
	this.name = name
	this.age = age
}


Person.prototype.getInfo = function() {
	return this.name + this.age
}

test('构造函数通常没有 return 语句，会自动返回实例', () => {
  expect(myNew(Person, 'jack', 25)).toEqual(new Person('jack', 25))
})
test('测试构造函数原型上的属性', () => {
  expect(myNew(Person, 'jack', 25).getInfo()).toBe('jack25')
})


function PersonWithReturn(name, age) {
	this.name = name
	this.age = age
	return {
		name, age
	}
}
test('若构造函数 return 了一个对象，则返回这个对象', () => {
  expect(myNew(PersonWithReturn, 'jack', 25)).toEqual({ name: 'jack', age: 25 })
})


function PersonWithReturnStr(name, age) {
	this.name = name
	this.age = age
	return name + age
}
test('若构造函数 return 了一个原始类型，则正常返回实例', () => {
  expect(myNew(PersonWithReturnStr, 'jack', 25)).toEqual(new Person('jack', 25))
})



const fakePerson = 'not a constructor'
test('若入参不是 function 类型，则抛出 TypeError', () => {
  expect(() => { myNew(fakePerson, 'jack', 25) }).toThrow()
})


const ArrowPerson = (name, age) => {
	this.name = name
	this.age = age
}
test('若入参是箭头函数，则抛出 TypeError', () => {
  expect(() => { myNew(ArrowPerson, 'jack', 25) }).toThrow()
})