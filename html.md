# HTML
-----
### DOCTYPE 的作用 
* 告知浏览器解析器用什么标准解析这个文档
* 标准模式和兼容模式

### 一个网页从开始请求到最终显示的过程
* 在浏览器中输入URL
* 发送至服务器，获得对应的web服务器的IP地址
* 拿到IP地址后建立TCP连接
* 浏览器发送http请求
* web服务器响应请求并返回相应的数据
* 浏览器解析html源文件，解析完成后在浏览器中显示页面

### 行内元素  块级元素  空（void）元素
* 行内元素  span  a  i img textarea
* 块级元素  div p h1 h2 ul li
* 空元素 br hr

### h5 新标签兼容问题
* document.creatElement() 
* html5shiv.js
* https://www.cnblogs.com/wuqilang/p/11366962.html

### h5 新特性
* 语义化标签 header footer nav aside video audio  页面结构化 更清晰 便于阅读 维护
* 表单元素 email month time date 
* 表单属性 placeholder required autocomplete maxlength max min disabled 
* 新技术 canvas svg webworker websocket 

### canvas 
* getContext() 方法可返回一个对象，该对象提供了用于在画布上绘图的方法和属性
* <canvas id="myCanvas" width="200" height="100"></canvas>
* Canvas 坐标 ctx.fillRect(0,0,150,75)
* Canvas - 路径  ctx.moveTo(0,0); ctx.lineTo(200,100);  
  arc(x,y,r,start,stop) 圆形
* Canvas - 文本 ctx.font="30px Arial"; ctx.fillText("Hello World",10,50);
* https://www.runoob.com/w3cnote/html5-canvas-intro.html

### iframe 缺点
* 阻塞主页面 onload 事件
* 搜索引擎的检索程序无法解读这种页面，不利于SEO

### label 的作用是什么
* 用来定义表单控制间的关系，当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上

### HTML5的form如何关闭自动完成功能
* `autocomplete = off`

### 如何实现浏览器内多个标签页之间的通信？
* localStorage cookies

### 实现 不使用 border 画出 1px 高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果？
* <div style="height:1px;overflow:hidden;background:#ccc"></div>