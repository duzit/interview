## JavaScript
---
### cdn-content delivery network 内容分发网络
* CDN 是构建在网络之上的内容分发网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，  
  使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率
* 静态资源 js css 图片等，cdn加载后支持缓存
* 第三方资源 vue vue-router vuex lodash echarts element-ui等  
  需修改 webpack 配置
```html
<html>
  <head>
    <link href="https://cdn.bootcss.com/element-ui/2.4.4/theme-chalk/index.css" rel="stylesheet">
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
    <script src="https://cdn.bootcss.com/vue/2.5.16/vue.min.js"></script>
    <script src="https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js"></script>
    <script src="https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js"></script>
    <script src="https://cdn.bootcss.com/three.js/100/three.min.js"></script>
    <script src="https://cdn.bootcss.com/echarts/4.1.0/echarts.min.js"></script>
    <script src="https://cdn.bootcss.com/axios/0.17.1/axios.min.js"></script>
    <script src="https://cdn.bootcss.com/element-ui/2.4.4/index.js"></script>
    <script src="https://cdn.bootcss.com/babel-polyfill/6.26.0/polyfill.min.js"></script>
  </body>
</html>
```
```js
module.exports = {
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'three': 'THREE',
    'echarts': 'echarts',
    'axios': 'axios',
    'element-ui': 'ElementUI',
    'babel-polyfill': '_babelPolyfill'
  }
}
```

### async/await
* [链接](https://segmentfault.com/a/1190000007535316)
* await 命令后面的 Promise 对象，运行结果可能是 rejected，所以最好把 await 命令放在 try...catch 代码块中。
```js
async function myFunction() {
  try {
    await somethingThatReturnsAPromise();
  } catch (err) {
    console.log(err);
  }
}

// 另一种写法
async function myFunction() {
  await somethingThatReturnsAPromise().catch(function (err){
    console.log(err);
  });
}
```

### 几种继承的方法
* [链接](https://www.jianshu.com/p/3eb7a1843009)
* 原型链继承
```js
function parent2() {
  this.name = 'lee'
  this.age = 10
  this.arr = [1, 2]
}

parent2.prototype.say = function() {
  console.log('say hello')
}

function child2() {
  this.addr = 'hz'
}

child2.prototype = new parent2()
var c1 = new child2()
var c2 = new child2()
console.log(c1.name, '原型链继承') // lee
console.log(c2.age, '原型链继承') // 10 
// 可以继承父类中的方法
console.log(c1.say(), '原型链继承') // say hello
c1.arr.push(3)
console.log(c2.arr, '原型链继承') // [1, 2, 3]
console.log(c1.addr, 'addr')
c1.addr = 'nj'
console.log(c1.addr, 'addr')
console.log(c2.addr, 'addr')
```
* 构造函数继承  
  子类构造函数向父类构造函数传参
```js
function parent1() {
  this.name = 'ben'
  this.age = 10
}

parent1.prototype.say = function() {
  console.log('say hello')
}

function child1(addr) {
  // 通过call()方法改变child1的this指向使子类的函数体内执行父级的构造函数从而实现继承效果
  parent1.call(this)
  this.addr = addr || 'qu'
}

// 可以传参
var inherit1 = new child1('hang')
console.log(inherit1.addr, 'addr')
console.log(inherit1.name, 'name')
console.log(inherit1.age, 'age')
// 无法继承 say() 方法
// console.log(inherit1.say(), 'say()') // Uncaught TypeError: inherit1.say is not a function
```

### JavaScript 运行机制详解
* http://www.ruanyifeng.com/blog/2014/10/event-loop.html


