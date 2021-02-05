
/** 
 * 原型链 继承属性
 */

let f = function() {
  this.a = 1
  this.b = 2
}

let o = new f()
// 在 f 函数的原型上定义属性
// 不要在 f 函数的原型上直接定义 f.prototype = {b:3,c:4};这样会直接打破原型链
f.prototype.b = 3
f.prototype.c = 4

// 综上 整个原型链如下：
// { a: 1, b: 2 } => { b: 3, c: 4 } => Object.prototype => null

// a是o的自身属性吗？是的，该属性的值为 1
console.log(o.a, 'o.a')
// b是o的自身属性吗？是的，该属性的值为 2
// 原型上也有一个'b'属性，但是它不会被访问到。
// 这种情况被称为"属性遮蔽 (property shadowing)"
console.log(o.b, 'o.b')
// c是o的自身属性吗？不是，那看看它的原型上有没有
// c是o.[[Prototype]]的属性吗？是的，该属性的值为 4
console.log(o.c, 'o.c')
// d 是 o 的自身属性吗？不是，那看看它的原型上有没有
// d 是 o.[[Prototype]] 的属性吗？不是，那看看它的原型上有没有
// o.[[Prototype]].[[Prototype]] 为 null，停止搜索
// 找不到 d 属性，返回 undefined
console.log(o.d, 'o.d')

/**
 * 继承方法
 */
console.log('继承方法---')

let o1 = {
  a: 2,
  m: function() {
    return this.a + 1
  }
}
// 当调用 o.m 时，this 指向了 o.
console.log(o1.m(), 'o1.m()') // 3

// p0 是继承自 o1 的对象
let p0 = Object.create(o1)

console.log(p0.m(), 'p0.m() 未赋值 a') // 3
// 创建 p 的自身属性 'a'
p0.a = 3
// 调用 p.m 时，'this' 指向了 p
// 又因为 p 继承了 o 的 m 函数
// 所以，此时的 'this.a' 即 p.a，就是 p 的自身属性 'a'
console.log(p0.m(), 'p0.m() 已赋值 a') // 4

console.log('闭包---')

function f1() {
  var n = 999
  nAdd = function() {
    n += 1
  }

  function f2() {
    console.log(n, 'f1 f2')
  }
  return f2
}
/**
 * 函数f1中的局部变量一直保存在内存中，并没有在调用f1后被自动清除。
 * 原因是f1是f2的父函数，而f2被赋予了一个全局变量，这导致f2始终在内存中，  
 * 而f2的存在依赖于f1，因此f1也始终在内存中，不会在调用结束后，被垃圾回收机制回收。
 */

var rest = f1()
rest() // 999 
nAdd()
rest() // 1000

function mathPow() {
  return function (x) {
    return x * x
  }
}
let mathPowF1 = mathPow()
console.log(mathPowF1(3), 'mathPow')

function mul(x) {
  return function(y) {
    return function(z) {
      return x * y * z
    }
  }
}

console.log(mul(1)(2)(3), 'mul')

var name0 = 'xiaoMing'
var obj = {
  name0: 'xiaoZhang',
  getNameFunc: function() {
    return function() {
      return this.name0
    }
  }
}
console.log(obj.getNameFunc()(), '111111...') // xiaoMing

var name1 = 'xiaoMing'
var obj = {
  name1: 'xiaoZhang',
  getNameFunc: function() {
    var that = this
    return function() {
      return that.name1
    }
  }
}
console.log(obj.getNameFunc()(), '22222...') // xiaoZhang 

function count() {
  var arr = []
  for (let index = 1; index <= 3; index++) {
    arr.push(function() {
      return index * index
    })
    
  }
  return arr
}
var f0 = count()
// 如果用 let 结果分别是 1 4 9
// 如果用 var 结果分别是 16 16 16
console.log(f0[0]())
console.log(f0[1]())
console.log(f0[2]())

console.log('typeof 判断 object')

console.log(typeof NaN, 'NaN') // number

let bar = {}
let arr = []
console.log(typeof bar === 'object', 'typeof {}') // true
console.log(typeof arr === 'object', 'typeof []') // true
console.log(typeof null === 'object', 'typeof null') // true

console.log('Object.prototype.toString.call()')
console.log(Object.prototype.toString.call(bar) === '[object Object]', '[object Object]') // true
console.log(Object.prototype.toString.call(arr) === '[object Array]', '[object Array]') // true
console.log(Object.prototype.toString.call(null) === '[object Null]', '[object Null]') // true

console.log('NaN---')
console.log(isNaN(NaN), 'isNaN(NaN)')
console.log(isNaN(false), 'isNaN(false)')
console.log(isNaN(true), 'isNaN(true)')
console.log(NaN === NaN, 'NaN === NaN')
console.log(NaN === undefined, 'NaN === undefined')

// 是否回文字符串
function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}
console.log(isPalindrome('12321'), "isPalindrome('12321')")

// reverse() slice()
let a1 = 'john'.split('')
let a2 = a1.reverse()
let a3 = 'johns'.split('')
console.log(a1, 'a1')
console.log(a2, 'a2')
console.log(a3, 'a3')
a2.push(a3)
console.log('after a2.push(a3)')
console.log(a1, 'a1')
console.log(a2, 'a2')
console.log(a3, 'a3')
// reverse() 会改变数组本身，并返回原数组的引用。
// slice() 不会改变原数组 返回新数组

// 数字字符串之前存在数字中的正负号（+/-）时，会被转为数字
console.log(1 + +'1') // 2
console.log(1 + -'1') // 0
console.log(1 - -'1') // 2
// 对于运算结果不能转为数字的 将返回NaN
console.log('a' - 'b') // NaN
console.log('a' - 'b' + 123) // NaN
console.log('a' - 'b' + '123') // NaN123

// setTimeout
setTimeout(function() {
  console.log('set timeout 111')
}, 0)
console.log('set timeout 222')

for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}
// var 每一个按钮点击都输出 5
// let 每一个按钮点击都输出 0 1 2 3 4

function Foo() {
  // 此处 没有 var 定义 是函数赋值语句
  // 先向当前 Foo 函数作用域内寻找 getName 变量，没有。再向当前函数作用域上层，即外层作用域内寻找是否含有 getName 变量
  // 此处实际上是将外层作用域内的 getName 函数修改了 console.log(4) ==> console.log(1)
  // 注意：此处若依然没有找到会一直向上查找到window对象，若window对象中也没有getName属性，就在window对象中创建一个getName变量。
  getName = function() {
    console.log(1)
  }
  // this的指向是由所在函数的调用方式决定的。而此处的直接调用方式，this指向window对象。
  // Foo函数返回的是window对象，相当于执行window.getName()
  return this
}

Foo.getName = function () {
  console.log(2)
}

Foo.prototype.getName = function () {
  console.log(3)
}

// 此处 函数声明 变量提升
getName() // 5

// 函数表达式
var getName = function () {
  console.log(4)
}

// 此处 函数表达式 覆盖 函数声明
getName() // 4

// 函数声明
function getName() {
  console.log(5)
}

Foo.getName() // 2
getName() // 4
Foo().getName() // 1
getName() // 1 
// 优先级 new(带参数) > new(不带参数)
// new (Foo.getName)()
new Foo.getName() // 2
// (new Foo()).getName() 一样的优先级 从左至右
// 由于返回的是this，而this在构造函数中本来就代表当前实例化对象，最终Foo函数返回实例化对象。
// 之后调用实例化对象的getName函数，因为在Foo构造函数中没有为实例化对象添加任何属性，当前对象的原型对象(prototype)中寻找getName函数。
new Foo().getName() // 3
new new Foo().getName() // 3 

/**
 * 调用公有方法，公有属性，我们必需先实例化对象，也就是用new操作符实化对象，就可构造函数实例化对象的方法和属性，
 * 并且公有方法是不能调用私有方法和静态方法的
 * 
 * 静态方法和静态属性就是我们无需实例化就可以调用
 * 
 * 而对象的私有方法和属性,外部是不可以访问的
 */

 /**
  * JavaScript 解释器中存在一种变量声明被提升的机制，也就是说函数声明会被提升到作用域的最前面，
  * 即使写代码的时候是写在最后面，也还是会被提升至最前面。
  * 
  * 而用函数表达式创建的函数是在运行时进行赋值，且要等到表达式赋值完成后才能调用
  */

/**
 * js构造函数中可以有返回值也可以没有
 * 没有返回值则返回实例化对象
 * 有返回值则检查其返回值是否为引用类型，如果是非引用类型（如基本类型 String Number Null Undefined Boolean），则与无返回值相同，返回实例化对象
 * function Foo(name) {
 *   this.name = name
 *   return 520 // 或者没有 return 
 * }
 * 若返回值是引用类型，则返回这个引用类型
 * function Foo(name) {
 *   this.name = name
 *   return {
 *     age: 11
 *   }
 * }
 */

// function User(name) {    
//   var name = name; // 私有属性    
//   this.name = name; // 公有属性    
//   function getName() { // 私有方法        
//     return name;    
//   }
// }
// User.prototype.getName = function() { // 公有方法    
//   return this.name;
// }
// User.name = 'Wscats'; // 静态属性
// User.getName = function() { // 静态方法    
//   return this.name;
// }
// var Wscat = new User('Wscats'); //实例化


// 冒泡排序
console.log('冒泡排序---')

function bubbingSort(arr) {
  let { length } = arr
  for (let i = 0; i < length - 1; i++)
   for (let j = 0; j < length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let tmp = arr[j + 1]
      arr[j + 1] = arr[j]
      arr[j] = tmp
    }
   }
  return arr
}

console.log(bubbingSort([3, 1, 2]))
console.log(bubbingSort([1, 2, 3]))

console.log('sort 排序---')

let arr0 = [9, 5, 4, 6, 7, 1, 3, 2]
arr0.sort(function(a, b) {
  return a - b
})
console.log(arr0, 'sort')

// instanceof
console.log('instanceof---')

function foo0() {

}

console.log(Object instanceof Object, 'Object instanceof Object')
console.log(Function instanceof Function, 'Function instanceof Function')
console.log(Function instanceof Object, 'Function instanceof Object')
console.log(foo0 instanceof Object, 'foo0 instanceof Object')
console.log(foo0 instanceof foo0, 'foo0 instanceof foo0')

// 翻转字符串方法
console.log('翻转字符串---')
let ss = '123'
console.log(ss)
let s1 = ss.split('')
s1.reverse()
console.log(s1.join(''))

// splice() slice()
console.log('splice() slice()')
let spliceArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// splice() 除第一 第二 参数 其余的参数会插入 start 位置
let retSplice = spliceArr.splice(1, 2, 'a', 'b', 'c')
console.log(retSplice, spliceArr, 'splice')

let sliceArr = ['a', 'b', 'c', 'd', 'e', 'f']
let retSlice = sliceArr.slice(1, 2)
console.log(retSlice, sliceArr, 'slice')

// reduce()
console.log('reduce---')
/**
 * array.reduce(callback, initValue)
 * callback 回调函数
 * 参数 (total, value, index, array)
 * total 累计器完成计算的返回值
 * value 当前元素
 * index 当前元素的索引
 * array 当前元素所属的数组对象
 * 
 * initValue 初始值 可选
 */

function reduceAdd(...vals) {
  return vals.reduce((t, v) => t + v)
}
console.log(reduceAdd(1, 2, 3, 4, 5), 'add')

const scores = [
  { score: 1, subject: "math", weight: 1 },
  { score: 1, subject: "chinese", weight: 0.5 },
  { score: 1, subject: "english", weight: 0.2 }
]
const result = scores.reduce((t, v) => t + v.score * v.weight, 0)
console.log(result)

let psA1 = [1, 2, 3]
let psA2 = [4, 2, 3]
let psA3 = [4, 5, 3]
function arrFlat(...params) {
  let newArr = Array.prototype.slice.apply(arguments)
  // let newArr = Array.prototype.slice.apply(params)
  console.log(newArr, 'Object.prototype.slice.apply()')

  // 数组扁平化
  newArr = newArr.reduce((x, y) => x.concat(y))
  console.log(newArr, '数组扁平化')

  // 数组去重
  // console.log(new Set(newArr, 'new Set()'))
  newArr = newArr.reduce((t, v) => t.includes(v) ? t : [...t, v], [])
  console.log(newArr, '数组去重')
}

arrFlat(psA1, psA2, psA3)

// filter 去重
function filterSet(filterArr) {
  let retFilters = filterArr.filter(function(ele, index, arr) {
    return index === arr.indexOf(ele)
  })
  return retFilters
}
console.log(filterSet([1, 2, 3, 4, 1, 2, 3, 4]), 'filter 去重')

// Math
console.log('Math()---')

let mathArr = [1, 2, 3, 4]
console.log(Math.max(...mathArr), 'Math.max()')
console.log(Math.min(...mathArr), 'Math.min()')
// 返回 x 的 y 次幂
console.log(Math.pow(2, 3), 'Math.pow(2, 3)')
// 返回 0 到 1 之间的伪随机数 [0,1)
console.log(Math.random(), 'Math.random()')
// 返回四舍五入后的整数
console.log(Math.round(1.5), 'Math.round(1.5)')
console.log(Math.round(1.4), 'Math.round(1.4)')
console.log(Math.round(0.4), 'Math.round(0.4)')
console.log(Math.round(0.5), 'Math.round(0.5)')
// 返回小于或等于一个给定数字的最大整数
console.log(Math.floor(2), 'Math.floor(2)')
console.log(Math.floor(1.9), 'Math.floor(1.9)')
console.log(Math.floor(0.9), 'Math.floor(0.9)')

// 匿名函数
let noNameFunc = function(a, b) {
  return a + b
}
console.log(noNameFunc(2, 3), '匿名函数')

// encodeURI()  encodeURIComponent()
let encodeURL = 'http://www.baidu.com'
console.log(encodeURI(encodeURL), 'encodeURI')
console.log(encodeURIComponent(encodeURL), 'encodeURIComponent')

// substr() substring()
/**
 * substr(start, length)
 * start 开始索引
 * length 截取字符串长度
 */
/**
 * substring(start, end)
 * start 开始索引
 * end 结束索引
 */
let substrStr = 'abcdefg'
console.log(substrStr.substr(1, 3), 'substr()')
console.log(substrStr.substring(1, 3), 'substring()')

// JS 数据类型转换
console.log('JS 数据类型转换---')

Number(true) // 1
Number(false) // 0
Number('11') // 11
Number('0x11') // 17
Number('12qq') // NaN

parseInt(111) // 111
parseInt('') // NaN
parseInt('1a') // 1
parseInt('a1') // NaN
parseInt([]) // NaN

/**
 * 箭头函数 和 普通函数
 */

// 箭头函数没有原型属性
let jiantouA = () => {
  console.log(1)
}
function funB() {
  console.log(2)
}
console.log(jiantouA.prototype, 'jiantouA.prototype') // undefined
console.log(funB.prototype, 'funB.prototype')

// this 永远指向最后调用它的那个对象
// var thisName = 'windowName'
// function thisFun() {
//   var thisName = 'interName'
//   // 使用let 和 var 定义有区别 
//   // let 定义这里是undefined var定义是 windowName
//   console.log(this.thisName, 'thisName') // windowName thisName
//   console.log(`inter:${this}`) // inter:[object Window]
// }
// thisFun()
// console.log(`out:${this}`) // out:[object Window]

var thisName = 'windowName'
var a = {
  thisName: 'interName',
  fn: function() {
    console.log(this.thisName, 'thisName')
  }
}
a.fn() // interName thisName


/**
 * flat([depth]) 扁平化数组 
 * depth 表示拉平的层级 默认为1
 * depth = Infinity 不管有多少层嵌套，都要转成一维数组
 */
let flatArr0 = [1, 2, [3, 4]]
console.log(flatArr0.flat(), 'flat') // [1, 2, 3, 4] 
let flatArr1 = [1, 2, [3, 4, [5, 6]]]
console.log(flatArr1.flat(), 'flat') // [1, 2, 3, 4, [5, 6]] 
console.log(flatArr1.flat(2), 'flat') // [1, 2, 3, 4, 5, 6]
console.log(flatArr1.flat(Infinity), 'flat') // [1, 2, 3, 4, 5, 6]

// Object.assign()
console.log('Object.assign()---------')
let assignObj = {
  name: {
    name: '10'
  },
  age: 10
}
let retAssignObj = Object.assign({}, assignObj)
retAssignObj.age = 12
retAssignObj.name.name = 'lee'

console.log(assignObj, 'before assign')  // { name : { name: 'lee'}, age: 10}
console.log(retAssignObj, 'after assign') // { name : { name: 'lee'}, age: 12}
// retAssignObj.age 的修改不会影响 assignObj.age
// retAssignObj.name.name 的修改会影响 assignObj.name.name

// 判断一个变量是不是数组
function isArrayFunction() {
  let tmpArr = [1, 2, 3, 4]
  console.log(arguments, 'arguments isArray')
  console.log(Array.isArray(arguments)) // false  arguments 是类数组
  console.log(Array.isArray(tmpArr)) // true
  console.log(arguments instanceof Array) // false
  console.log(tmpArr instanceof Array) // true
  console.log(Object.prototype.toString.call(arguments)) // [object Arguments]
  console.log(Object.prototype.toString.call(tmpArr)) // [object Array]
}
isArrayFunction(1,2,3,4)

// 私有变量
function funcPrivateVal() {
  var a = 1
  return function() {
    return a
  }
}

console.log(funcPrivateVal()(), '私有变量')

// 继承
console.log('---继承---')

function parent1() {
  this.name = 'ben'
  this.age = 10
}

parent1.prototype.say = function() {
  console.log('say hello')
}

function child1(addr) {
  // 通过call()方法改变child1的this指向使子类的函数体内执行父级的构造函数从而实现继承效果
  parent1.call(this)
  this.addr = addr || 'qu'
}

var inherit1 = new child1('hang')
console.log(inherit1.addr, 'addr') // hang
console.log(inherit1.name, 'name') // ben
console.log(inherit1.age, 'age') // 10
// console.log(inherit1.say(), 'say()') // Uncaught TypeError: inherit1.say is not a function

function parent2() {
  this.name = 'lee'
  this.age = 10
  this.arr = [1, 2]
}

parent2.prototype.say = function() {
  console.log('say hello')
}

function child2() {
  this.addr = 'hz'
}

child2.prototype = new parent2()
var c1 = new child2()
var c2 = new child2()
console.log(c1.name, '原型链继承') // lee
console.log(c2.age, '原型链继承') // 10 
// 可以继承父类中的方法
console.log(c1.say(), '原型链继承') // say hello
c1.arr.push(3)
console.log(c2.arr, '原型链继承') // [1, 2, 3]
console.log(c1.addr, 'addr')
c1.addr = 'nj'
console.log(c1.addr, 'addr')
console.log(c2.addr, 'addr')

// 宏任务 --> 微任务
// 宏任务： 主线程 setTimeout
// 微任务： Promise()
setTimeout(() => {
  console.log(999999);
}, 0);

new Promise((resolve) => {
  console.log(888888);
  setTimeout(() => {
    console.log('Promise setTimeout');
  }, 0);
  resolve(123);
})
  .then(res => {
    console.log('res', res);
    setTimeout(() => {
      console.log('then setTimeout');
    }, 0);
  })

setTimeout(() => {
  console.log(777777);
}, 0);
// 888888  res 123  999999  Promise setTimeout  777777  then setTimeout