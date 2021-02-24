## instanceof
* https://juejin.im/post/5b0b9b9051882515773ae714
* 通过原型链判断的，A instanceof B, 在A的原型链中层层查找，是否有原型等于B.prototype 
```
function new_instance_of(leftVaule, rightVaule) { 
    let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
    leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
    while (true) {
    	if (leftVaule === null) {
          return false;	
        }
        if (leftVaule === rightProto) {
          return true;	
        } 
        leftVaule = leftVaule.__proto__ 
    }
}
```
* 实现原理 只要右边变量的 prototype 在左边变量的原型链上即可。
```
function foo() {

}
Object instanceof Object // true
Function instanceof Function // true
Function instanceof Object // true
foo instanceof foo // false
foo instanceof Object // true
foo instanceof Function // true
```