/* 
  请实现一个 Array.prototype.myFilter 方法, 效果表现尽可能的和 Array.prototype.filter 相同
*/

Array.prototype.myFilter = function (filterFn) {
  const arr = this
  let result = []
  for (let i = 0; i < arr.length; i++) {
    filterFn(arr[i], i, arr) && result.push(arr[i])
  }
  return result
}