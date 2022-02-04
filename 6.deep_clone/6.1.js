/* 
  请实现一个深拷贝方法 deepClone, 尽可能的考虑多种情况
*/
// string、number、boolean、undefined、null、symbol、bigInt、array、set、object、map、function、Date、RegExp
function deepClone(obj, weakMap = new WeakMap()) {
  // Date、RegExp、function
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  if (typeof obj === 'function') return new Function('return ' + obj.toString())()

  // string、number、boolean、undefined、null、symbol、bigInt
  if (typeof obj !== 'object' || obj === null) return obj

  // 下面可能会有循环引用
  if (weakMap.get(obj)) return weakMap.get(obj)

  // array、object、set、map
  let construction = obj.constructor //  构造方法

  let newObj = new obj.constructor()

  switch (construction) {
    case Array:
    case Object:
      for (let key in obj) {
        newObj[key] = deepClone(obj[key], weakMap)
      }
      break
    case Set:
      for (let item of obj) {
        newObj.add(deepClone(item, weakMap))
      }
      break
    case Map:
      for (let item of obj) {
        const [key, value] = item
        newObj.set(deepClone(key, weakMap), deepClone(value, weakMap))
      }
  }
  weakMap.set(obj, newObj)
  return newObj
}

module.exports = deepClone