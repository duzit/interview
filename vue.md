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