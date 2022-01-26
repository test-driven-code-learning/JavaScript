# Test-driven-js-learning
借助一些典型的习题，配合充分的测试用例，帮助开发者更好的掌握JS常见语法的底层原理

## 环境要求
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) version 12.16.1+

## 安装
1. Clone this repo:

  ``` bash
  git clone git@github.com:test-driven-code-learning/JavaScript.git
  ```

2. Install dependencies (for automated tests):

  ``` bash
  cd vue-advanced-workshop
  npm install
  ```

## 使用
### 编写代码
打开对应的文件，编写题目要求的方法或功能，比如在 1.1.js 中编写一个 myNew 方法 


### 提交测试

运行下面的npm脚本，会执行 __test__ 目录下的 1.1.test.js 测试用例，并会明确给出测试反馈

``` bash
npm test 1.1
```

当然也可以开启 jest 的 watch 模式，下列命令会监听对应文件变化，然后自动执行对应的测试用例

``` bash
npm run watch 1.1
```
