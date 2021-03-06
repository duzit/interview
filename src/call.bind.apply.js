
const name = 'Ben';

const obj = {
  name: 'Lee',
  fn: function() {
    console.log(this.name);
  }
}

obj.fn(); // Lee
setTimeout(() => {
  obj.fn(); // Lee
}, 1);

setTimeout(obj.fn, 0); // Ben this指向window
setTimeout(obj.fn.bind(obj), 0); // Lee

// apply
function applyFn(...args) {
  console.log(this, 'this');
  console.log(args, 'args');
}

applyFn.apply(obj, [1,2,3]);
// obj { name: '', fn: () }
// [1,2,3]
// 当第一个参数为null undefined 时 this默认指向window
applyFn.apply(null, [1, 2, 3]);
// window 
// [1, 2, 3]

// bind
const bindFn = applyFn.bind(obj, 1, 2, 3);
bindFn(); // [1,2,3]
bindFn(4, 5, 6); // [1,2,3,4,5,6]
