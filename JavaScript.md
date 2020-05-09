## JavaScript
---
### cdn-content delivery network 内容分发网络
* CDN 是构建在网络之上的内容分发网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，  
  使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率
* 静态资源 js css 图片等，cdn加载后支持缓存
* 第三方资源 vue vue-router vuex lodash echarts element-ui等  
  需修改 webpack 配置
```html
<html>
  <head>
    <link href="https://cdn.bootcss.com/element-ui/2.4.4/theme-chalk/index.css" rel="stylesheet">
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
    <script src="https://cdn.bootcss.com/vue/2.5.16/vue.min.js"></script>
    <script src="https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js"></script>
    <script src="https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js"></script>
    <script src="https://cdn.bootcss.com/three.js/100/three.min.js"></script>
    <script src="https://cdn.bootcss.com/echarts/4.1.0/echarts.min.js"></script>
    <script src="https://cdn.bootcss.com/axios/0.17.1/axios.min.js"></script>
    <script src="https://cdn.bootcss.com/element-ui/2.4.4/index.js"></script>
    <script src="https://cdn.bootcss.com/babel-polyfill/6.26.0/polyfill.min.js"></script>
  </body>
</html>
```
```js
module.exports = {
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'three': 'THREE',
    'echarts': 'echarts',
    'axios': 'axios',
    'element-ui': 'ElementUI',
    'babel-polyfill': '_babelPolyfill'
  }
}
```

