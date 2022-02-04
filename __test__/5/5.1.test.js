require('../../5.promise_all/5.1')

let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'p1')
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, 'p2')
})

let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, 'p3')
})

test('入参必须为数组', () => {
  expect(() => { Promise.myAll(p1) }).toThrow()
})

test('校验返回参数和顺序是否正确', () => {
  return Promise.myAll([p1, p2, p3]).then(data => {
    expect(data).toEqual(['p1', 'p2', 'p3']);
  })
})

test('校验 reject 异常处理', () => {
  let p4 = new Promise((resolve, reject) => {
    setTimeout(reject, 50, 'p4')
  })
  return Promise.myAll([p1, p2, p4]).then().catch(err => expect(err).toBe('p4'))
})


test('校验 error 异常处理', () => {
  let p5 = new Promise((resolve, reject) => {
    console.log(a)
  })
  return Promise.myAll([p1, p2, p5]).then().catch(err => expect(err).toEqual(new ReferenceError('a is not defined')))
})


