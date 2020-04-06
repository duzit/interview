
## 原型链
* JavaScript只有一种结构：对象。  
  每个实例对象都有一个私有属性（__proto__）指向它的构造函数的原型对象（prototype），  
  该原型对象也有一个自己的原型对象（__proto__），层层向上直到一个对象的原型对象为null，  
  根据定义，null是没有原型的，并作为这个原型链中的最后一个环节。  
  几乎所有JavaScript中的对象都是位于原型链顶端的Object实例。
* JavaScript有一个指向一个原型对象的链，当试图访问对象的属性时，它不仅仅在该对象上搜寻，  
  还会搜寻该对象的原型，以及该对象的原型的原型，一次层层向上搜索，直到找到一个名字匹配的  
  属性或到达原型链的末尾。

* 继承方法
* 在JavaScript里，任何函数都可以添加到对象上作为对象的属性。  
* 当继承的函数被调用时，this指向的是当前继承的函数，而不是继承的函数所在的原型对象  

## 面向对象的三大特性
* 继承 多态 封装

## 闭包的理解
* 链式作用域结构，子对象会一级一级地向上寻找所有父对象的变量。  
  所以，父对象的所有变量，对子对象都是可见的，反之则不成立。
* 优缺点  
> 优点：可以避免全局变量的污染  
> 缺点：常驻内存，增加内存使用量，使用不当容易造成内存泄露。  
* 特性  
> 函数嵌套函数  
> 在函数内部可以引用外部的参数和变量  
> 参数和变量不会以垃圾回收机制回收  

## Vue 通信
* props
* $emit
* $refs
* $parent  $children
* eventBus

## Vue Loader

## Vuex
### Vuex 和单纯的全局对象有以下两点不同
* Vuex 的状态储存是响应式的。若store中的状态发生改变，那么相应的组件也会得到高效更新。
* 不能直接改变store的状态。改变store中的状态唯一途径是显示的提交（commit）mutation。  
  因为想要更明确地追踪状态的变化

### 在 Vue 组件中获得 Vuex 状态
* Vuex 通过在根实例中注册 store 选项，提供一种机制将状态从根组件注入到每一个子组件中  
 （需调用Vue.use(Vuex) ）。 子组件能通过 this.$store 访问到。
### Mutation 必须是同步函数
* 任何在回调函数中进行的状态的改变都是不可追踪的

### Action
* Action 提交的是 mutation ，而不是直接改变状态。
* Action 可以包含任意异步操作

### Module
* 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，  
  就有可能变得相当臃肿。 为解决以上问题，Vuex允许将store分割成模块（Module）。

## typeof null === 'object'
* 在js最初的实现中，js中的值是由一个表示类型的标签和实际数据值表示的，对象（object）的类型标签是0。  
  由于null代表空指针（大多数平台下的值为0x00），因此，null的类型标签是0。
* JavaScript 在底层存储变量的时候，会在变量的机器码的低位 1-3位存储其类型信息
1. 000 对象
2. 010 浮点数
3. 100 字符串
4. 110 布尔
5. 1 整数
* 最好使用 typeof 判断基本数据类型，避免对 null 的判断
* 对变量比较准确的判断 使用 Object.prototype.toString.call()

## instanceof
* https://juejin.im/post/5b0b9b9051882515773ae714
```
function new_instance_of(leftVaule, rightVaule) { 
    let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
    leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
    while (true) {
    	if (leftVaule === null) {
          return false;	
        }
        if (leftVaule === rightProto) {
          return true;	
        } 
        leftVaule = leftVaule.__proto__ 
    }
}
```
* 实现原理 只要右边变量的 prototype 在左边变量的原型链上即可。
```
function foo() {

}
Object instanceof Object // true
Function instanceof Function // true
Function instanceof Object // true
foo instanceof foo // false
foo instanceof Object // true
foo instanceof Function // true
```

## Javascript 严格模式
* 消除 JavaScript 语法的一些不合理、不严谨之处
* 消除代码运行的不安全之处，保证代码运行的安全
* 提高编译器效率，增加运行速度
* 为未来的 JavaScript 版本做好铺垫

## 为什么JavaScript是单线程
* 作为浏览器脚本语言，JavaScript 的主要用途是与用户互动，以及操作DOM。  
  这决定了它只能是单线程，否则会带来很复杂的同步问题。
### 任务队列 同步任务和异步任务
* 同步任务，在主线程上排队执行的任务，只有前一个任务执行完毕，才执行下一个任务。
* 异步任务，不进入主线程，而进入任务队列的任务，只有任务队列通知主线程，某个任务可以执行了，  
  该任务才进入主线程执行。
* 只要主线程空了，就会去读取"任务队列"，这就是JavaScript的运行机制。这个过程会不断重复。
* 任务队列是一个事件的队列，IO设备完成一项任务，就在任务队列中添加一个事件，表示相关的异步任务  
  可以进入执行栈了。主线程读取任务队列，就是读取里面有哪些事件。异步任务必须指定回调函数，当主线程开始  
  执行异步任务，其实就是执行对应的回调函数。

### 定时器
* setTimeout(function() {}, time) 一次性执行  
  只是将事件插入了任务队列，必须等主线程执行完，才会去执行它指定的回调函数
* setInterval(function() {}, time) 循环执行

## IIFE 立即调用函数表达式

### HTML5 存储
* sessionStorage: 大小上限为5Mb(不同浏览器会有差异)，页面关闭时清空。
* localStorage: 大小上限为5Mb(不同浏览器会有差异)，页面关闭时不会清空。
* cookie 是服务器写入浏览器的一小段信息，只有同源的网页才能共享。  
  如果两个网页的一级域名相同，只是次级域名不同，浏览器允许通过设置 document.domain 共享 cookie
* 对于完全不同源的网站，两种方法解决跨域窗口通信问题
1. 片段识别符（URL的 '#' 后面的部分）
```html
<!-- 父窗口 -->
var message = originURL + '#' + data
document.getElementIdById('myIframe').src = message
<!-- 子窗口 -->
window.onhashchange = checkMessage
function checkMessage() {
  var message = window.location.hash
}
```
2. 跨文档通信api
```
window.postMessage()
var open = window.open('url', 'title')
open.postMessage('hello world', 'url')

window.addEventListener('message', function(e) {
  console.log(e.data)
  console.log(e.source)
  console.log(e.origin)
})
event.source：发送消息的窗口
event.origin: 消息发向的网址
event.data: 消息内容
```

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
* undeclared js语法错误，没有声明直接使用，js无法找到对应的上下文

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

## 箭头函数和普通函数的区别
* 箭头函数作为匿名函数，不能作为构造函数，不能使用 new
* 箭头函数不能绑定 arguments ，使用 ...
* 箭头函数会捕捉上下文的 this 值，作为自己的 this
* 箭头函数当方法使用时没有定义this绑定
* 箭头函数没有原型属性
* 箭头函数不能换行

## 改变 this 指向
* 使用 es6 箭头函数
* 在函数内部使用 _this = this
* 使用 apply call bind
* new 实例化一个对象

## apply call bind
* apply(thisArgs, [argsArray])  b.apply(a,[1,2]) 
* call(this.Args[, arg1[, arg2[, ...]]])  b.call(a,1,2) 
* bind()方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，  
  在调用新函数时，在任何提供之前提供一个给定的参数序列。b.bind(a,1,2)()
