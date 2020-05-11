# Vue
-----
### Vue 生命周期
* beforeCreate() Vue 实例挂载元素 $el 和数据对象 data 都为 undefined
* created() 实例的数据对象 methods 有了  但还没 $el
* beforeMount() $el 和 data 都初始化了 为虚拟的dom节点 还未挂载实例   
  不能直接操作页面的dom和获取dom对象  data.message 还未替换 
* mounted() Vue 实例挂载完成 data.message 成功渲染
* beforeUpdate()  data 变化时触发 页面中数据还是旧的 还没有同步最新数据
* updated() data 变化时触发 最新的数据
* beforeDestoryed() 这个时候上所有的data和 methods、指令、过滤器 ……都是处于可用状态。还没有真正被销毁
* destoryed() 这个时候上所有的data和methods、指令、过滤器 ……都是处于不可用状态。组件已经被销毁

### v-if  v-show
* v-if 销毁 创建的过程 
* v-show 一直都存在  控制 display 显隠   频繁切换可用

### v-for 中的 key
* 为每一个节点设置唯一的标识，主要是为了更高效的更新dom

### v-if 和 v-for 一起使用
* v-for 比 v-if 优先级高，这意味着 v-if 将重复运行在每个 v-for 循环中

### transition 
* 给元素或组件添加进入和离开的过渡
* 有个基本的 class  
  v-enter 定义进入过渡的开始状态，在元素被插入之前生效，在元素被插入的下一帧移除 
  v-enter-active  定义进入过渡生效时的状态  
  v-enter-to 结束状态，在元素被插入的下一帧生效，同时v-enter 被移除
  v-leave 离开过渡的开始状态
  v-leave-active 离开过渡生效时的状态
  v-leave-to 离开过渡的结束状态
* 钩子函数  
  before-enter  enter after-enter enter-cancelled before-leave leave after-leave leave-cancelled
* duration 设置过渡时间 
  <transition :duration="{ enter: 500, leave: 800 }">...</transition>
* CSS 动画用法同 CSS 过渡，区别是在动画中 v-enter 类名在节点插入 DOM 后不会立即删除，  
  而是在 animationend 事件触发时删除。
* 在同时使用过渡和css动画的时候 可以设置type属性来制定vue内部机制监听transitioned  
  或者animationed事件来完成过渡还是动画的监听
* 过渡模式  in-out  out-in

### Vue 路由模式
* hash 在浏览器中的符号"#"，以及#后面的字符，window.location.hash 获取  
  但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。
* history pushState() replaceState() 可以对浏览器的历史记录栈进行修改，  
  前端的URL 必须跟向后端发送请求的URL 一致，否则会404  
> 需要后台配置  
```js
// nginx
location / {
  try_files $uri $uri/ /index.html;
}
// node js express
connect-history-api-fallback
```

### 前端性能优化方法
* 减少需要传输的文件大小，压缩文件
* 编码时减少不必要的样式代码
* 减少不必要的请求
* 浏览器缓存技术
* html引入的js文件，放在标签后面加载
* 页面懒加载 

### Vue 首页白屏问题解决
* 路由懒加载
* vue-cli 使用插件（compression-webpack-plugin）开启gzip压缩，后台配合gzip访问
* 进行cdn加速
* 开启vue服务渲染模式 安装prerender-spa-plugin插件 在webpack中配置
* 在生产环境中删除不必要的 console.log
* nginx gzip 压缩 
* 增加 loading 

### v-model
* v-bind 
* v-on 绑定 input 事件

### computed  watch
* computed 不在data中定义，响应式变化，描述的是一个值依赖另一个值  
  methods 调用才有效
* watch 监听 data 中定义的值，允许异步操作

### $nextTick

### router  route
* router 示例对象 push go
* route 当前的路由信息 path query params

### beforeMount() mounted() 实例 $el 挂载
* 在 beformount 阶段，是通过 {{msg}} 进行占位的，因为此时还有挂在到页面上，  
  还是JavaScript中的虚拟DOM形式存在的，在mounted之后可以看到div中的内容发生了变化
* beformount：虚拟dom创建完成
* mounted：渲染出真实dom，组件已经出现在页面中，数据，事件，都DOM都处理好了

### keep-alive
* 会缓存不活动的组件实例，而不是销毁它们，主要用于保留组件状态或避免重新渲染
* 它自身不会渲染一个 DOM 元素，也不会出现在组件的父组件链中
* <keep-alive> 是用在其一个直属的子组件被开关的情形。如果你在其中有 v-for 则不会工作
* 如果有上述的多个条件性的子元素，<keep-alive> 要求同时只有一个子元素被渲染
* include 和 exclude 属性允许组件有条件地缓存。二者都可以用逗号分隔字符串、正则表达式或一个数组来表示
* 匹配首先检查组件自身的 name 选项，如果 name 选项不可用，  
  则匹配它的局部注册名称 (父组件 components 选项的键值)。匿名组件不能被匹配
* max 最多可以缓存多少组件实例。一旦这个数字达到了，在新实例被创建之前，  
  已缓存组件中最久没有被访问的实例会被销毁掉。

### diff 
[链接](https://segmentfault.com/a/1190000008782928)
* 设置key和不设置key的区别  
  不设key，newCh和oldCh只会进行头尾两端的相互比较，设key后，除了头尾两端的比较外，  
  还会从用key生成的对象oldKeyToIdx中查找匹配的节点，所以为节点设置key可以更高效的利用dom。