## interview

### 解释下什么是 Event Bubbling （事件冒泡） 以及如何避免
* 指某个事件不仅会触发当前元素，还会以嵌套顺序传递到父元素中。  
  即某个子元素的点击事件会被父元素的点击事件处理器捕获。
* 解决方法
```js
if(ev && ev.stopPropagation) {
  // 非IE浏览器
  ev.stopPropagation();
} else {
  // IE浏览器(IE11以下)
  ev.cancelBubble = true;
}
```

### == 和 === 区别
* === 会判断类型和值，== 只会判断值，不会判断类型
```js 
0 === false // false
0 == false  // true

1 == '1'  // true
1 === '1' // false
```

### null 和 undefined 的区别
* typeof(null) typeof(undefined)
```js 
typeof(null) // 'object'
typeof(undefined) // 'undefined'
```
* undefined 
1. 定义了但未赋值
2. 函数未传参
3. 函数默认返回值
```js 
let num;
console.log(num); // undefined

function name(params) {
  console.log(params); // undefined
}
name()

function name1(params) {
  return
}
name1() // undefined
```
* null 表示没有对象，此处不应该有值
1. 原型链的终点

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
* 作用 
> 可以读取函数内部的变量  
> 让这些变量的值始终保持在内存中，不会在调用后被自动清除  
* 用途  
> 采用函数引用方式的setTimeout调用，原生的setTimeout有一个缺陷，你传递的第一个函数不能带参数   
> 封装相关的功能集   

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
* 最好使用 typeof 判断基本数据类型(除了 null)，避免对 null 的判断
* 对变量比较准确的判断 使用 Object.prototype.toString.call()

## instanceof
* https://juejin.im/post/5b0b9b9051882515773ae714
* 通过原型链判断的，A instanceof B, 在A的原型链中层层查找，是否有原型等于B.prototype 
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

## 事件冒泡和事件捕获
* 事件捕获 事件首先由最外层的元素捕获，然后传播到最内层元素  
  假设单击事件发生在li元素中，在这种情况下，捕获事件将首先处理div，然后处理ul，最后命中目标元素li
```
<div>
  <ul>
    <li>
    </li>
  </ul>
</div>
```
* 事件冒泡 事件由最内部元素处理，然后传播到外部元素  
  假设click事件确实发生在冒泡模型中的li元素中，该事件将首先由li处理，然后由ul处理，最后由div元素处理。

## 节流 防抖
* 防抖 当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，  
  如果设定的时间到来之前，又一次触发了事件，就重新开始延时
```
function debounce(fn, wait) {
  var timeout = null;
  return function() {
    if(timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  }
}
// 处理函数
function handle() {
  console.log(Math.random()); 
}
// 滚动事件
window.addEventListener('scroll', debounce(handle, 1000));
```
* 节流 当持续触发事件时，保证一定时间段内只调用一次事件处理函数
```
时间戳
var throttle = function(func, delay) {
  var prev = Date.now();
  return function() {
    var context = this;
    var args = arguments;
    var now = Date.now();
    if (now - prev >= delay) {
      func.apply(context, args);
      prev = Date.now();
    }
  }
}
function handle() {
  console.log(Math.random());
}
window.addEventListener('scroll', throttle(handle, 1000));

定时器
var throttle = function(func, delay) {
  var timer = null;
  return function() {
    var context = this;
    var args = arguments;
    if (!timer) {
        timer = setTimeout(function() {
          func.apply(context, args);
          timer = null;
        }, delay);
    }
  }
}
function handle() {
  console.log(Math.random());
}
window.addEventListener('scroll', throttle(handle, 1000));
```
* 函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，  
  而函数防抖只是在最后一次事件后才触发一次函数。 比如在页面的无限加载场景下，  
  我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。  
  这样的场景，就适合用节流技术来实现。

### POST 和 GET 的区别
* get 请求能缓存，post 不能
* post 相对安全一点，因为 get 请求都包含在 URL 里，且会被浏览器保存历史纪录
* Post 可以通过 request body 来传输比 Get 更多的数据，Get 没有这个技术
* Post 支持更多的编码类型且不对数据类型限制

### delete Vue.delete 的区别
```
let a = [1, 2, 3, 4]
let b = [1, 2, 3, 4]
delete a[1]
console.log(a, 'delete') // [1, empty, 3, 4]
this.$delete(b, 1) 
console.log(b, 'Vue.delete') // [1, 3, 4]
```

### 响应式布局 兼容不同分辨率
* Meta标签定义  
```
使用 viewport meta 标签在手机浏览器上控制布局
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
通过快捷方式打开时全屏显示
<meta name="apple-mobile-web-app-capable" content="yes" />
隐藏状态栏
<meta name="apple-mobile-web-app-status-bar-style" content="blank" />
iPhone会将看起来像电话号码的数字添加电话连接，应当关闭
<meta name="format-detection" content="telephone=no" />
```
* 使用Media Queries适配对应样式
```
设备类型(media type):
all所有设备；
screen 电脑显示器；
print打印用纸或打印预览视图；
handheld便携设备；
tv电视机类型的设备；
speech语意和音频盒成器；
braille盲人用点字法触觉回馈设备；
embossed盲文打印机；
projection各种投影设备；
tty使用固定密度字母栅格的媒介，比如电传打字机和终端。

设备特性(media feature):
width浏览器宽度；
height浏览器高度；
device-width设备屏幕分辨率的宽度值；
device-height设备屏幕分辨率的高度值；
orientation浏览器窗口的方向纵向还是横向，当窗口的高度值大于等于宽度时该特性值为portrait，否则为landscape；
aspect-ratio比例值，浏览器的纵横比；
device-aspect-ratio比例值，屏幕的纵横比。
/* for 240 px width screen */
　　@media only screen and (max-device-width:240px){
　　 selector{ ... }
　　}
　　/* for 320px width screen */
　　@media only screen and (min-device-width:241px) and (max-device-width:320px){
　　 selector{ ... }
　　}
　　/* for 480 px width screen */
　　@media only screen (min-device-width:321px)and (max-device-width:480px){
　　selector{ ... }
　　}
```

### JavaScript 柯里化函数
[链接](https://www.jianshu.com/p/2975c25e4d71)
* 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数
```
// 普通的add函数
function add(x, y) {
  return x + y
}

// Currying后
function curryingAdd(x) {
  return function (y) {
    return x + y
  }
}

add(1, 2)           // 3
curryingAdd(1)(2)   // 3
```
* 柯里化作用
> 参数复用  
> 提前确认  
> 延迟执行  

* 经典面试题
```
function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function() {
        _args.push(...arguments);
        return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}

add(1)(2)(3)                // 6
add(1, 2, 3)(4)             // 10
add(1)(2)(3)(4)(5)          // 15
add(2, 6)(1)   
```

### Object.assign() 是深拷贝吗？
* 可以把 n 个源对象拷贝到目标对象中去
* 第一级属性深拷贝，以后级别属性浅拷贝 

### 你必须要懂的原生JS知识点
[你必须要懂的原生JS知识点](https://juejin.im/post/5cb7b62b5188253772753c01)

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

### 闭包的理解
* 优缺点
  > 优点：可以避免全局变量的污染
  > 缺点：常驻内存，增加内存使用量，使用不当容易造成内存泄露。
* 特性
  > 函数嵌套函数
  > 在函数内部可以引用外部的参数和变量
  > 参数和变量不会以垃圾回收机制回收

### 如何实现浏览器内多个标签页之前的通信
* localStorage()
* cookie

### null和undefined、undeclared的区别是什么
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

### SPA(single-page application)的理解及优缺点
* SPA只在页面初始化时加载相应的html，js和css。一旦页面加载完成，SPA不会因为用户的操作而
  重新加载或跳转，而是利用路由机制实现HTML内容的切换、UI与用户的交互，避免页面重新加载。
* 优点
  > 用户体验好，页面流畅，内容的改变不会重新加载整个页面，避免了不必要的跳转和重新渲染
  > 相对于服务器压力较小
  > 前后端职责分离，架构清晰。
* 缺点
  > 初次加载消耗多，资源一次性统一加载
  > 前进后退路由管理，不能使用浏览器的前进后退功能，所有页面的切换需要自己建立堆栈管理
  > SEO难度较大

### Vue单向数据流的理解
* 所有的prop都使得父子prop之间形成一个单向下行绑定，父级prop的更新会向下流动到子组件中，
  反之则不行。这样可以阻止子组件改变父组件的状态，从而导致应用数据流难以理解。每次父组件
  prop值更新时，子组件所有的prop都将刷新为最新的值。子组件想要修改父组件的prop，只能通过
  $emit派发一个自定义事件，父组件可在该事件中触发prop更新。

### computed和watch的区别
* computed 计算属性，依赖其他属性值，并且值有缓存，避免了每次获取时都要重新计算，只有它依赖的属性值发生变化时，下一次获取
  computed的值才会重新计算
* watch 更多的是观察的作用，类似于某些数据的监听回调，每当监听的数据变化时都会执行回调操作

### 可以在哪些生命周期内调用异步请求
* created(), beforeMount(), mounted() 因为这三个钩子函数中的data已经创建，可以将服务器端的数据进行赋值
* 建议在created()调用
  > 能更快的获取服务端数据，减少页面loading时间
  > 服务器端渲染(SSR)不支持beforeMount(), mounted()钩子函数

### keep-alive的理解
* <keep-alive>包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。自身不会渲染一个DOM元素，也不会出现在父组件链中
* 当组件在<keep-alive>内被切换时，它的activated()和deactivated()这两个生命周期函数将会被执行
* include 和 exclude 属性允许组件有条件的缓存，可用逗号分隔符，正则表达式，数组标识；匹配首先检查组件自身的name选项，
  如果name选项不可用，则匹配它的局部注册名称(父组件components选项的键值)。匿名组件不能被匹配
* max 最多可以缓存多少组件实例。一旦这个数字达到了，在新实例创建之前，已缓存组件中最久没有被访问的实例会被销毁掉

### 深入响应式原理
* 当把一个普通的JavaScript对象传入Vue实例作为data选项，Vue将遍历此对象所有的属性，并使用 
  Object.defineProperty()(2.x版本， 3.x版本使用proxy)
  把这些属性全部转为 getter/setter。这些 getter/setter 对用户不可见，但是在内部他们让Vue追踪依赖，在属性被访问和
  修改时通知变更。每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把接触过的数据属性记录为依赖，之后当依赖
  项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。

### SSR
* 默认情况下，可以在浏览器中输出Vue组件，进行生成DOM和操作DOM。然而，也可以将同一个组件渲染为服务器端的html字符串，
  将它们直接发送到浏览器，最后将这些静态标记激活为客户端完全可以交互的应用程序。
 
