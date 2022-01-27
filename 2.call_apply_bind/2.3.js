
/* 
 请实现一个 myBind 方法，效果表现尽可能地和 Function.prototype.bind 相同
 由于 Node 中没有 window 对象，可以使用 global 代替 window ，也可以自行在浏览器环境进行测试
*/


Function.prototype.myBind = function(context, ...args) {
   if([null, undefined].includes(context)) {
    context = global
  } else if (['string', 'number', 'boolean'].includes(typeof context)) {
    context = new context.constructor(context)
  }
  const fn = Symbol('fn')
  context[fn] = this
  return function() {
    setTimeout(() => {
      delete context[fn]
    }, 0)
    return context[fn](...args)
  }
}