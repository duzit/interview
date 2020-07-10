
if (false) {
  var a = 1;
  let b = 2;
}
console.log(a); // undefined
// console.log(b); // error
// 等价于
// var a;
// if (false) {
//   var a = 1;
//   let b = 2;
// }

var a1 = 1;
if (true) {
  // let 的暂时性死区 let 不会变量提升
  // console.log(a1); // Uncaught ReferenceError: Cannot access 'a1' before initialization
  let a1 = 2;
}

var a2 = { n: 1 };
var b2 = a2;
// a2.x = a2 = { n: 2 };
// 等价于
a2.x = { n: 2 }; // b = { n: 1, x: { n: 2 } }
a2 = { n: 2 }; // a2 = { n: 2 }

console.log(a2.n, b2.n); // 2, 1
console.log(a2.x, b2.x); // undefined, { n: 2 }

console.log('----------------');

// 变量提升优先级  函数声明 > arguments > 变量声明
console.log(c); // 函数c 的声明提升至此 打印函数c
var c;

function c(a) {
  console.log(a); // 函数a 声明提升至此 打印函数a，入参a级别小于函数a
  var a3 = 3;
  function a() {
    
  }
}

c(2);

console.log('----------------');

var c2 = 1;
function c2(c2) {
  console.log('c2');
  var c2 = 3;
}
console.log(c2); // 函数c2提升至 var c2 = 1 的前面 这里的 c2 已经被赋值为 1
// c2(2) // c2 是变量 不是函数 Uncaught TypeError: c2 is not a function

console.log('--------------');

var name = 'hello';
(function() {
  if (typeof name === 'undefined') {
    var name = 'chen';
    console.log(name);
  } else {
    console.log(name);
  }
})(); // chen
// 等价于
var name = 'hello';
(function() {
  var name; // 变量提升
  if (typeof name === 'undefined') {
    name = 'chen';
    console.log(name);
  } else {
    console.log(name);
  }
})(); // chen

console.log('---------');

var a4 = 10;
function test() {
  a4 = 100;
  console.log(a4); // 100
  console.log(this.a4); // 10
  var a4;
  console.log(a4); // 100
}
test()
// 等价于 
var a4 = 10;
function test() {
  var a4; // a4 提升到这里
  a4 = 100;
  console.log(a4); // 100
  console.log(this.a4); // 10
  // var a4;
  console.log(a4); // 100
}
test()
// 如果去掉 test 中的 var a4;
var a4 = 10;
function test() {
  a4 = 100;
  console.log(a4); // 100
  console.log(this.a4); // 100
  // var a4;
  console.log(a4); // 100
}
test()

console.log('----------');

var val = 1;
var obj = {
  val: 2,
  del: function() {
    console.log(this); // 指向 obj
    this.val *= 2;
    console.log(val); // 1 在函数作用域中访问val，由于函数没有定义变量val，所以访问的是全局的val 
  }
}
obj.del()

console.log('------------');

var name1 = 'erdong';
var object = {
  name1: 'chen',
  getName: function() {
    // 返回一个函数 再执行时this指向的是window
    return function() {
      return this.name1;
    }
  }
}
console.log(object.getName()());
