/* 
  请实现一个 Array.prototype.myPush 方法, 效果表现尽可能的和 Array.prototype.push 相同
*/

Array.prototype.myPush = function () {
  for(let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i]
  }
  return this.length
}