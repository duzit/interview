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

