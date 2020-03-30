## CSS
-----------
### 盒子模型
* 分类： IE盒子模型 W3C标准盒模型
* 四个组成部分  
  content（内容） border（边框） padding（填充） margin（边界）
* 区别：   
  标准盒模型的 width height 只包含 content，不包含border 和 padding  
  IE盒模型的 width height 包含 content border 和 padding
* 一般来说，可以通过修改元素的 box-sizing 属性来改变元素的盒模型

### css 选择符
* class 类选择器 .className { ... }
* id 选择器 #id { ... }
* div span 标签选择器 span { font-size: 16px }
* 后代选择器 h1 em { color: red } 只对 h1 元素中的 em 元素应用样式
* 相邻后代子元素选择器 h1 > p { ... } 
* 相邻兄弟选择器 可选择紧接在另一元素后的元素，且二者有相同父元素 h1 + p { ... }
* 通配符选择器（*）
* 伪类 :active :focus :hover :visited :first-child :last-child :lang
* 伪元素 :first-letter :first-line :before :after

### ::before :after 双冒号和单冒号的区别
* css3中单冒号表示伪类，双冒号表示伪元素
* 伪类一般匹配的是元素的一些特殊状态，如 hover，link。  
  伪元素一般匹配特殊的位置，如 before，after。

### css 可以继承的属性
* font 系列
* text 文本系列
* list 列表属性
* cursor 光标属性
* visibility 元素可见性

### css3 新特性（伪类）
* ele:nth-child(n)  
  n 从1开始 li:nth-child(3)  
  可以为函数 li:nth-child(2n + 1)  
  n 为负数 可以选择前n个元素的效果 li:nth-child(-n + 3) 前3个
  n 为 odd 奇数   even  偶数
* ele:nth-last-child()
* ele:nth-of-type(n) 选择父元素下第 n 个 ele 元素
* ele:first-of-type 和 ele:last-of-type
* ele:only-of-type 父元素下只能有一个ele元素 然后选中

### position 的值 relative 和 absolute 定位原点是?
* absolute 相对于 position 值不为 static 的第一个父元素的 paddingbox 进行定位
* fixed 相对于浏览器窗口定位
* relative 相对于元素本身的正常位置定位

### 为什么要初始化 CSS 样式？
* 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，  
  如果没对CSS初始化往往会出现浏览器之间的页面显示差异。

### width:auto 和 width:100%的区别
* width:100%会使元素box的宽度等于父元素的contentbox的宽度  
  width:auto会使元素撑满整个父元素，margin、border、padding、content区域会自动分配水平空间。

### style 标签写在 body 后与 body 前有什么区别？
* 页面加载自上而下当然是先加载样式。写在body标签后由于浏览器以逐行方式对HTML文档进行解析，  
  当解析到写在尾部的样式表（外联或写在style标签）会导致浏览器停止之前的渲染，  
  等待加载且解析样式表完成之后重新渲染

### css 预处理器
* CSS预处理器用一种专门的编程语言，进行Web页面样式设计，然后再编译成正常的CSS文件。

### 单（多）行文本溢出  
* 单行
```
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```
* 多行
```
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
line-height: 1.5rem;
height: 3rem;
```

### 常见页面布局方式
* 流式布局（百分比布局）
* 弹性布局（flex）
* 浮动布局（float）
* 定位布局（position）

### display: none 和 visibility: hidden
* display: none  元素不会在页面上渲染  
  触发reflow，整个页面重排，可能打乱原来页面的规划  
  无法响应任何事件  
  无法获取焦点  
  父元素为none，子元素也无法显示
* visibility 不触发布局的情况下隐藏元素  
  父级元素设为hidden，子集设为visible有效  
  无法获得焦点
  能响应事件
  不会触发reflow，不会改变元素布局相关的属性
  css的counter不会忽略

### z-index
* 如果不考虑 CSS3，只有定位元素(position:relative/absolute/fixed)的 z-index 才有作用
* 顺序 从小到大  
  层叠上下文 backgroud border   
  负z-index   
  block 块状水平盒子  
  float 浮动盒子  
  inline inline-block 水平盒子
  z-index auto 或者 z-index 0  
  正z-index  


