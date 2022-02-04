/*
  请实现一个 Object.myCreate 方法，效果表现尽可能与 Object.create 相同
*/

Object.myCreate = function(proto, propertiesObject = {}) {
  let result = {}
  result.__proto__ = proto
  return Object.defineProperties(result, propertiesObject)
}