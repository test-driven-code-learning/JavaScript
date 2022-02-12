/* 
	请实现一个 "myNew" 方法，效果表现尽可能地和原生的 new 操作符保持一致
*/

function myNew(fn, ...rest) {
  if(typeof fn !== 'function' || !fn.prototype) {
		throw new TypeError(`${fn} is not a constructor`)
	}
	let obj = Object.create(fn.prototype)
	let result = fn.call(obj, ...rest)   // 或者利用 result[Symbol('fn')] = fn; result[Symbol('fn')](..rest) 执行，自动挂载
	return typeof result === 'object' ? result : obj
}

module.exports = myNew