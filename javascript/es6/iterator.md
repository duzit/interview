# Iterator 

## 概念 
- 不是对象 也不是任何一种数据类型  
- 是一种标准，是统一所有可遍历类型的遍历方式
- `Iterator` 标准的具体实现是 `Iterator` 遍历器  
  `Iterator` 标准规定，所有部署了 key 值为 [Symbol.iterator] ，  
  且 [Symbol.iterator] 的value是 标准的 iterator 接口函数（标准的iterator接口函数：  
  该函数必须返回一个对象，且对象中包含next()方法，且执行next()方法能返回包含 value、done 属性的iterator对象）的对象，  
  都称之为可遍历对象。  

```js
// obj就是可遍历的，因为它遵循了Iterator标准，且包含[Symbol.iterator]方法，方法函数也符合标准的Iterator接口规范。
// obj.[Symbol.iterator]() 就是Iterator遍历器
let obj = {
  data: [ 'hello', 'world' ],
  [Symbol.iterator]() {
    const self = this;
    let index = 0;
    return {
      next() {
        if (index < self.data.length) {
          return {
            value: self.data[index++],
            done: false
          };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};
```

- ES6 给 Set Map Array String 都加上 [Symbol.iterator] 方法

```js
const arr = ['Ben', 'Lee'];
console.log(arr[Symbol.iterator]()); // Array Iterator
console.log(arr[Symbol.iterator]().next()); // { value: 'Ben', done: false }

const str = 'abc';
console.log(str[Symbol.iterator]()); // StringIterator
console.log(str[Symbol.iterator]().next()); // { value: 'a', done: false }

const set = new Set(['a', 'b']);
console.log(set); // __proto__: Set
console.log(set[Symbol.iterator]()); // SetIterator
console.log(set[Symbol.iterator]().next()); // { value: 'a', done: false }

const map = new Map();
const obj = { age: 12 };
map.set(obj, 'objValue');
console.log(map); // __proto__: Map
console.log(map[Symbol.iterator]()); // MapIterator
console.log(map[Symbol.iterator]().next()); // { value: [{ age: 12}, 'objValue'], done: false }
```
