# 为什么要避免 v-if v-for 同时使用

- Vue 对指令的优先级处理，v-for 优于 v-if ，所以在同一层级中使用会有不必要的性能问题。
- 比如有100条数据，根据判断可能只需要展示20条，如果同时使用，Vue还是会先遍历100次，然后再做 vif 的判断，
  造成不必要的消耗

- bad 
```html
<h3 v-if="status" v-for="item in 100" :key="item">{{item}}</h3>
```

- good 
```html
<template v-if="status" >
  <h3 v-for="item in 100" :key="item">{{item}}</h3>
</template>
```