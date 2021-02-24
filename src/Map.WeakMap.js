// 第一次手动清理垃圾以确保为最新状态，观察内存情况
global.gc();
console.log(
  `第一次垃圾回收，当前内存使用情况：${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`
);

// const m = new Map();
const m = new WeakMap();

let key = {};
m.set(key, new Array(114514 * 19));
// 手动清理一下垃圾 观察内存占用情况
global.gc();
console.log(
  `第二次垃圾回收，当前内存使用情况：${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB，
  当前Map的长度: ${m.size}`
);

// 此时把 key键 的引用进行断开，并观察内存占用情况
key = null;
global.gc();
console.log(
  `第三次垃圾回收，当前内存使用情况：${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB，
  当前Map的长度: ${m.size}`
);

// 清除Map所有键值对 Map时不注释
// m.clear();

global.gc();
console.log(
  `第四次垃圾回收，当前内存使用情况：${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB，
  当前Map的长度: ${m.size}`
);

// node --expose-gc Map.WeakMap.js
// --expose-gc 该选项将向该global对象添加gc()函数