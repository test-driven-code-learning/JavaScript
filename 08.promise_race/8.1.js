/* 
  请实现一个 Promise.myRace 方法，效果表现尽可能与 Promise.race 相同
*/
Promise.myRace = function (pList) {
  if (!Array.isArray(pList)) {
    throw TypeError('must be a array')
  }
  return new Promise((resolve, reject) => {
    let len = pList.length
    for(let i = 0; i < len; i++) {
      pList[i].then(resolve, reject)
    }
  })
}