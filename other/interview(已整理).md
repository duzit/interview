## interview

### == 和 === 区别
* === 会判断类型和值，== 只会判断值，不会判断类型
```js 
0 === false // false
0 == false  // true

1 == '1'  // true
1 === '1' // false
```

## 面向对象的三大特性
* 继承 多态 封装

## Vue Loader

### 定时器
* setTimeout(function() {}, time) 一次性执行  
  只是将事件插入了任务队列，必须等主线程执行完，才会去执行它指定的回调函数
* setInterval(function() {}, time) 循环执行

## IIFE 立即调用函数表达式

## JavaScript 重定向到另一个页面
* window.location.href = url
* window.location.replace(url)

## splice() slice() 区别
* slice(start, end) 从 start 到 end(不包含) 截取  
  不改变原数组，返回选定的元素
* splice(start, length, params)  
  start 开始元素 
  length 截取长度
  params 替换元素
  返回截取的元素，改变原数组

## null和undefined、undeclared的区别是什么
* 当声明的变量还未初始化时，变量的默认值为undefined ,
  null 用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象。
* undefined 表示“缺少值”， 即此处应该有一个值，但是还没有定义，典型用法是如下。
    如果变量声明了，但没有赋值，它就等于undefined 。
    当调用函数时，如果没有提供应该提供的参数，该参数就等于undefined 。
    如果对象没有赋值，该属性的值为undefined 。
    当函数没有返回值时， 默认返回undefined 。
  null 表示“ 没有对象” ， 即此处不应该有值，典型用法是如下。
    作为函数的参数， 表示该函数的参数不是对象。
    作为对象原型链的终点。

## 深拷贝与浅拷贝的区别
* 深拷贝递归复制原数据的值或属性，浅拷贝只是复制引用
* 深拷贝，修改新数据不会影响原数据   
  浅拷贝，修改新数据会影响原数据  

## 宿主对象 原生对象 内置对象
* 宿主对象  
  ECMAScript官方未定义的对象都属于宿主对象，因为其未定义的对象大多数是自己通过ECMAScript程序创建的对象，BOM，DOM等。
* 内置对象  
  在引擎初始化阶段被创建好的对象，是原生对象的子集
* 原生对象  
  Object、Function、Array、String、Boolean、Number、Date等  
  ECMA-262 定义的类（引用类型）  

## 如何将 JS 日期转换为ISO标准
```
let date = new Date()
let isoDate = date.toISOString()
"2020-03-24T03:10:30.530Z"
```

## encodeURI() encodeURIComponent() 
* 统一资源标识符
* encodeURI 操作的是完整的 URI，假定 URI 中的任何保留字符都有特殊意义，所有不会编码它们。
* encodeURIComponent 操作的是组成 URI 的个别组件，假定任何保留字符都代表普通文本，  
  所以必须编码它们，所以它们（保留字符）出现在一个完整 URI 的组件里面时不会被解释成保留字符了。

## substr() substring()
* substr(start, length)
* substring(start, end)

## require.context()
* 创建自己的模块上下文
* require.context(dir, useSubdirectories = false, regExp = /^\.\/)  
  dir 要搜索的文件夹目录  
  useSubdirectories 是否搜索子集目录  
  regExp 匹配文件的正则

## head body 引入js 区别
* head 页面加载前被加载
* body 页面加载后被加载
* html 加载时自上而下的，谁在前先加载谁

## JS 数据类型转换
* 强制类型转换
  Number()  parseInt()  parseFloat()  toString()  String()  Boolean()
* 隐式类型转换
  逻辑运算符（&& || !） 运算符（+ -） 关系操作符（> = <= ==）

## 跨域 同源策略
* 协议 域名 端口号 相同
* 同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互，  
  用于隔离潜在恶意文件
* 跨域方法  
  jsonp  get请求  
  cors  
  nginx 反向代理  
  websocket  
  postMessage  

## 改变 this 指向
* 使用 es6 箭头函数
* 在函数内部使用 _this = this
* 使用 apply call bind
* new 实例化一个对象

## JavaScript 三类错误
* 加载时错误，如语法错误
* 运行时错误 滥用html语言中的命令导致的错误
* 逻辑错误 

## JavaScript 的作用域链 和 作用
* 变量取值会先在当前作用域中查找，如果没有查到会向上查找上级作用域，直到查到全局作用域，这样一个查到过程形成的链  
  叫做作用域链
* 主要用于解析变量的值，如果没有这个，在不同作用域定义许多变量，JavaScript 很难为变量选择值

## 匿名函数
```
(function(x, y) {
  console.log(x + y)
})(2, 3)
```

## 宿主对象 和 原生对象
* 宿主对象 运行环境提供的对象，在不同的运行环境是不同的。 window DOM
* 原生对象 js内置对象，全局对象，不收运行环境影响。Object String function 


### Object.assign() 是深拷贝吗？
* 可以把 n 个源对象拷贝到目标对象中去
* 第一级属性深拷贝，以后级别属性浅拷贝 

### 如何判断一个变量是不是数组
* Array.isArray 
* instanceof Array
* Object.prototype.toString.call [Object Array]
```
function fn() {
  console.log(Array.isArray(arguments));   //false; 因为arguments是类数组，但不是数组
  console.log(Array.isArray([1,2,3,4]));   //true
  console.log(arguments instanceof Array); //fasle
  console.log([1,2,3,4] instanceof Array); //true
  console.log(Object.prototype.toString.call(arguments)); //[object Arguments]
  console.log(Object.prototype.toString.call([1,2,3,4])); //[object Array]
  console.log(arguments.constructor === Array); //false
  arguments.constructor = Array;
  console.log(arguments.constructor === Array); //true
  console.log(Array.isArray(arguments));        //false
}
fn(1,2,3,4);
```

### 常见的继承方法
* 扩展原型对象实现继承
```js
function Person() {
  Person.prototype.name = 'hello'

}
let per = new Person()
console.log(per.name) // hello
```
* 经典继承
```js
function create(o) {
  function F(){}
  F.prototype = o
  return new F()
}
let o = {
  name: 'ww',
  age: 10
}
let o2 = create(o)
```
* 借助构造函数实现继承
```js
function f1(name, age) {
  this.name = name
  this.age = age
}
function f2(name, age) {
  f1.call(this, name, age)
}
let f3 = new f2('qq', 10)
```

### setTimeout() 代替 setInterval() 
```js
let timer = setTimeout(function() {
  index++ 
  if (index > 5) {
    clearTimeout(timer)
  } else {
    timer = setTimeout(arguments.callee, 1000)
  }
}, 1000)
```

### 一次性渲染大量数据到页面上 而不卡
* requestAnimationFrame(callback)  
  告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。  
  该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
```js
setTimeout(() => {
  // 插入十万条数据
  const total = 100000
  // 一次插入 20 条，如果觉得性能不好就减少
  const once = 20
  // 渲染数据总共需要几次
  const loopCount = total / once
  let countOfRender = 0
  let ul = document.querySelector("ul");
  function add() {
    // 优化性能，插入不会造成回流
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < once; i++) {
      const li = document.createElement("li");
      li.innerText = Math.floor(Math.random() * total);
      fragment.appendChild(li);
    }
    ul.appendChild(fragment);
    countOfRender += 1;
    loop();
  }
  function loop() {
    if (countOfRender < loopCount) {
      window.requestAnimationFrame(add);
    }
  }
  loop();
}, 0);
```

### 列举几种类型的DOM节点
* 元素节点 span ul li
* 文本节点 <span>欢迎你</span>
* 属性节点 title 

### JavaScript有哪些垃圾回收机制
* 标记清除
  > 垃圾回收器会在运行的时候给存储在内存中的所有变量加上标记，然后去掉环境中的变量，
    以及被环境中变量所引用的变量的标记，在完成这些之后仍然存在的标记就是要删除的变量。
* 引用计数
  > 策略是跟踪记录每个值被引用的次数，当声明了一个变量并将一个引用类型赋值给该变量时，
    这个值的引用次数就+1，如果该变量的值变成了另一个，这个值的引用次数就-1。当这个值的引用
    次数为0时，就说明没有变量在使用这个值，可以将它占用的空间回收，垃圾回收器会在运行时清理
    引用次数为0的值占用的空间。

### JavaScript标签中defer和async属性的区别
* defer 属性规定是否延迟执行脚本，直到页面加载为止。async 属性规定脚本一旦可用，就异步执行。
* defer 并行加载JavaScript 文件， 会按照页面上script 标签的顺序执行。async 并行加载JavaScript 文件，
  下载完成立即执行，不会按照页面上JavaScript 标签的顺序执行。


### 如何实现浏览器内多个标签页之前的通信
* localStorage()
* cookie

### Vue中key的作用
* 准确：如果不加key，那么Vue会选择复用节点(就地更新策略)，导致之前节点的状态保留下来，会产生一系列bug。
* 快速：key的唯一性可以被Map数据结构充分利用。

### css选择器 特性 优先级
#### 特性
* 继承-子类继承父类
* 优先级-不同类别样式的权重
* 层叠-后者覆盖前者
#### 优先级
* !important > 行内样式(style) > ID选择器 > 类选择器 > 标签 > 通配符

### BFC的理解
* Block Formatting Context 是web页面可视化css渲染的一部分，是块盒子的布局过程发生的区域，
  也是浮动元素和其他元素交互的区域。HTML元素在这个环境中按照一定规则进行布局。
* 具有BFC特性的元素可以看做是隔离的独立容器，容器里面的元素不会在布局上影响到外面的元素。
#### 触发BFC
* body根元素
* 浮动元素 float 除 none 以外
* 绝对定位元素 position(absolute，fixed)
* display为inline-block table-cell flex
* overflow除visible以外的值
#### 特性
* 同一个BFC下外边距会发生折叠
* 清除浮动(包含浮动的元素)
* 阻止元素被浮动元素覆盖

### Vue中的data为什么是函数不是对象
* 组件中写成函数，数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的data，
  类似给每个实例组件创建一个私有的数据空间，让每个组件实例维护各自的数据。而单纯的写成
  对象形式，就使得所有组件共用一份data，会相互影响。

### 面试题链接
* https://zhuanlan.zhihu.com/p/63962882
* https://mp.weixin.qq.com/s/kB1Ncsbccd110LSW5qnxQA

### 为什么最好把css的link标签放在<head>之间？
* 是规范要求，这种做法可以让页面逐步呈现，提高用户体验，防止呈现给用户空白或没有样式的内容。
### 为什么最好把JS的<script>标签放在<body/>之前，有例外吗？
* 脚本在下载和执行期间会阻止HTML解析，把script放在底部保证HTML首先完成解析，将页面尽早
  呈现给用户。
* 例外情况是脚本里包含document.write()

### 请简述JavaScript中的this  如何确定this指向

### 可以在哪些生命周期内调用异步请求
* created(), beforeMount(), mounted() 因为这三个钩子函数中的data已经创建，可以将服务器端的数据进行赋值
* 建议在created()调用
  > 能更快的获取服务端数据，减少页面loading时间
  > 服务器端渲染(SSR)不支持beforeMount(), mounted()钩子函数


### 深入响应式原理
* 当把一个普通的JavaScript对象传入Vue实例作为data选项，Vue将遍历此对象所有的属性，并使用 
  Object.defineProperty()(2.x版本， 3.x版本使用proxy)
  把这些属性全部转为 getter/setter。这些 getter/setter 对用户不可见，但是在内部他们让Vue追踪依赖，在属性被访问和
  修改时通知变更。每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把接触过的数据属性记录为依赖，之后当依赖
  项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。

### SSR
* 默认情况下，可以在浏览器中输出Vue组件，进行生成DOM和操作DOM。然而，也可以将同一个组件渲染为服务器端的html字符串，
  将它们直接发送到浏览器，最后将这些静态标记激活为客户端完全可以交互的应用程序。
 
