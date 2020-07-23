console.log("curry");

// https://www.jianshu.com/p/2975c25e4d71

function add(x, y) {
  return x + y;
}

function curryAdd(x) {
  return function (y) {
    return x + y;
  };
}

console.log(add(1, 2)); // 3
console.log(curryAdd(1)(2)); // 3

// 科里化的好处
// 1. 参数复用
function check(reg, txt) {
  return reg.test(txt);
}

console.log(check(/\d+/g, "test")); // false
console.log(check(/[a-z]+/g, "test")); // true

function curryCheck(reg) {
  return function (txt) {
    return reg.test(txt);
  };
}

// 复用正则
let hasNumber = curryCheck(/\d+/g);
let hasLetter = curryCheck(/[a-z]+/g);

console.log(hasNumber("test123")); // true
console.log(hasNumber("test")); // false
console.log(hasLetter("test")); // true

// 支持多参数传递
function progressCurrying(fn, args) {
  var _this = this;
  var len = fn.length;

  var args = args || [];

  return function () {
    var _args = Array.prototype.slice.call(arguments);
    Array.prototype.push.apply(args, _args);

    // 如果参数个数小于最初的fn.length，则递归调用，继续收集参数
    if (_args.length < len) {
      return progressCurrying.call(_this, fn, _args);
    }

    // 参数收集完毕，则执行fn
    return fn.apply(this, _args);
  };
}

function fn() {
  return 20;
}
// 隐式转换
fn.toString = function () {
  return 10;
};

console.log(fn() + 10); // 30
console.log(fn + 10); // 20

// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

function addCurry() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var _args = Array.prototype.slice.call(arguments);

  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var _adder = function () {
    _args.push(...arguments);
    return _adder;
  };

  // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  _adder.toString = function () {
    return _args.reduce(function (a, b) {
      return a + b;
    });
  };
  return _adder;
}

console.log(addCurry(1)(2)(3)); // 6
console.log(addCurry(1, 2, 3)(4)); // 10
console.log(addCurry(1)(2)(3)(4)(5)); // 15
console.log(addCurry(2, 6)(1)); // 9
