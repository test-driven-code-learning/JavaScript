/* 
  请实现一个 myInstanceof 方法，效果表现尽可能与 instanceof 相同
*/

function myInstanceof(left, right) {
  // 右侧不是引用类型，报错
  if (right === null || !['function', 'object'].includes(typeof right)) {
    throw new TypeError("Right-hand side of 'instanceof' is not an object")
  }

  // 查找 right 的 Symbol.hasInstance
  while(right) {
    if(right[Symbol.hasInstance]) {
      return right[Symbol.hasInstance](left)
    } else {
      right = right.__proto__
    }
  }

  const prototype = right.prototype
  while (left) {
    if (Object.getPrototypeOf(left) === prototype) return true
    left = Object.getPrototypeOf(left)
  }
  return false
}

module.exports = myInstanceof
