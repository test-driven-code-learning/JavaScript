/* 
  请实现一个 Array.prototype.myMap 方法, 效果表现尽可能的和 Array.prototype.map 相同
*/

Array.prototype.myMap = function (mapFn) {
  const arr = this
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(mapFn(arr[i], i, arr))
  }
  return result
}