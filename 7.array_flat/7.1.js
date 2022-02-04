/* 
  请实现一个 Array.prototype.myFlat 方法, 效果表现尽可能的和 Array.prototype.flat 相同
*/

Array.prototype.myFlat = function(depth = 1) {
  let arr = this
  if (typeof depth !== 'number' || depth <= 0) return arr
  let result = []
  arr.forEach(item => {
    if(Array.isArray(item)) {
      result = result.concat(item.myFlat(--depth))
    } else {
      result.push(item)
    }
  })
  return result
}