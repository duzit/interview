

# JS

- 基本数据类型 

- 常用操作数组 字符串的方法 ES6新增数组方法(find findIndex copyWithin fill includes flat)

- 箭头函数 和 普通函数 区别  不应该使用箭头函数的一些情况

- 事件循环的理解 eventloop

- js继承的几种方式 原型继承 构造函数继承 组合继承 Class继承

- forEach 使用 break 是否会终止

- for...in for...of(不能遍历对象) 区别

- Map Object 区别  Map 与 WeakMap 的区别

- Promise 与 async/await 区别

- Promise 怎么实现链式调用  跟 返回不同的状态  then的参数是什么？

- JS深拷贝的方法 递归 JSON（无法实现对象中方法的深拷贝） Object.assign(一级属性拷贝)

- JS模块化 CommonJs(required) ES6(import) 

- call(this, a,b,c) apply(this, [a,b,c])

- 判断数组的几种方法 Array.isArray() instanceof constructor Object.prototype.toString.call()


# Vue

- 联调 接口请求在哪个生命周期 axios 拦截器封装

- 组件的封装 像使用 elementUI 组件一样使用 事件 属性 怎么做？

- 父子组件通信方法 常用哪些？ 修改 props ？ 数组和对象 可以直接进行修改，如果是字符串，单向数据流 报错

- 父子组件生命周期执行顺序  子组件更新过程 父beforeUpdate -> 子beforeUpdate -> 子updated -> 父updated

- data 定义为函数的原因 

- 如何获取 DOM 

- 数组内容修改 可以响应式的方法 修改下标和长度 不可触发视图修改   
  splice()、 push()、pop()、shift()、unshift()、sort()、reverse()

- 双向绑定的原理 defineProperty 有几个参数 Object.defineProperty(obj, prop, descriptor)

- 自定义指令 钩子函数 bind inserted update

- nextTick 的原理以及运行机制 

- 项目中的优化 

## Vuex 

- Vuex的使用场景 刷新是否存在 怎么解决

- actions  mutations 区别

## Vue Router

- 守卫 参数

- 路由 { path: '', query: {} } { name: '', params: {} }

- 路由的懒加载


# webpack 

- webpack entry 多个入口配置，n个入口怎么配置

- output 中 publicPath 的作用

- 配置文件大小限制 大于某个值后的处理 

- webpack loader 的作用

- sass less 需要使用loader style-loader css-loader sass-loader 作用顺序

- webpack的生命周期，及钩子 compiler compilation

# Http 浏览器

- 常见状态码 及 意义  401 请求要求用户的身份认证 404 服务器无法根据客户端的请求找到资源

- url 到加载渲染全过程 

- 浏览器缓存策略 

- 垃圾回收机制 

# CSS HTML

- BFC 块级格式化上下文 围城  内部的块级元素的垂直方向的距离 由 margin 决定  相邻块级元素 margin 发生重叠   
  BFC 的条件 float 除 none 以外; overflow 除 visible 

- flex 0 1 auto 

- 避免css全局污染的方法  scoped 原理

- box-sizing 

- 两列布局 左侧固定宽度 右侧自适应 几种方法 

## [参考](https://mp.weixin.qq.com/s/Y2Mx5O3MOFlf-wW-XVivLw)

