## JavaScript

### 你必须要懂的原生JS知识点
[你必须要懂的原生JS知识点](https://juejin.im/post/5cb7b62b5188253772753c01)

### 面试题
```js
let a = {a: 10};
let b = {b: 10};
let obj = {
  a: 10
};
obj[b] = 20;
console.log(obj[a]); // 20
```
> 这道题目主要考对JS数据类型的熟练度以及对ES6中属性名表达式的理解。
  在上题中obj[b] = 20的赋值操作后，obj其实已经变成了{a: 10, [object Object]: 20}，
  这是因为如果属性名表达式是一个对象的话，那么默认情况下会自动将对象转为字符串[object Object]，
  最后一步获取obj[a]时，a本身也是一个对象，所以会被转换为获取obj['[object Object]']也就是上一步赋值的20。