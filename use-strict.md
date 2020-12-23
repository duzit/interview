## use strict 严格模式

1. 消除代码的不安全之处，保证代码运行的安全
2. 提高编译器效率

```js
'use strict'
x = 1; // error  undefined

function func() {
  y = 2; // error undefined
}
```

```js
x = 3.14;       // 不报错
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // 报错 (y 未定义)
}
```