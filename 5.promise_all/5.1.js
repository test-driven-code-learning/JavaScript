/* 
  请实现一个 Promise.myAll 方法，效果表现尽可能与 Promise.all 相同
*/
Promise.myAll = function(pList) {
  if(!Array.isArray(pList)) {
    throw TypeError('must be a array')
  }
  return new Promise((resolve, reject) => {
    let result = [], len = pList.length, count = 0
    for(let i = 0; i < len; i++) {
      pList[i].then(res => {
        result[i] = res
        count++
        if(count === len) {
          resolve(result)
        }
      }).catch(err => reject(err))
    }
  })
}