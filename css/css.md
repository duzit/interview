## CSS
-----------
### 盒子模型
* 分类： IE盒子模型 W3C标准盒模型
* 四个组成部分  
  content（内容） border（边框） padding（填充） margin（边界）
* 区别：   
  标准盒模型的 width height 只包含 content，不包含border 和 padding  
  IE盒模型的 width height 包含 content border 和 padding
* 一般来说，可以通过修改元素的 box-sizing 属性来改变元素的盒模型  content-box(盒式模型)  border-box(IE盒子)

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

### css 继承的属性
#### 可继承
* font 系列
* text 文本系列
* list 列表属性
* cursor 光标属性
* visibility 元素可见性
#### 不可继承
* width height border padding margin 

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
  并且该父元素必须设置有position属性，可以将position设置为relative
* fixed 相对于浏览器窗口定位
* relative 相对于元素本身的正常位置定位
* static 默认值。没有定位，元素出现在正常的流中

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

### dispaly
* block
* none
* inline-block 像行内元素一样显示 但其内容像块类型元素一样显示
* list-item 

### float
* 具有BFC模型特性  
  当给元素添加float 属性后，元素便会具有 BFC 模型的效果，内联元素也可以设置宽高。
* 当给元素添加绝对定位 absolute 或者 fixed 后，元素的浮动效果就会消失，float 失效
* 破坏父元素高度，当父元素没有设置高度，也不是 BFC 模型时，如果给子元素添加浮动效果，  
  那么便会造成父元素高度的坍塌。  
  1. 将父元素也设为 BFC 即可。
  2. 添加 .clearfix 的类 
```
.clearfix {
  zoom: 1;
}
.clearfix::after {
  content: '';
  display: table;
  clear: both;
}
```
* 浮动元素不会超过父元素的内边距 padding
* 两个相邻的浮动元素，当第一个浮动元素的宽度为100%时，第二个浮动元素会被挤到下面，  
  通过添加负的 margin-left 或者 margin-right 值（绝对值最少等于它自身的宽度），可以使它回到第一行。

### css 权重选择器
* 权重等级   
  ！important > 内联样式 style > id 选择器 > 类 class、伪类、属性选择器 > 标签选择器、伪元素 > 

### normalize vs reset
* normalize 保留了有价值的默认值，不用再为公共的元素设置样式。reset 强行给所有元素设置默认样式。
* normalize 修复了常见的浏览器bug，例如 html5 元素的显示设置，font-size 问题等
* normalize 是模块化的，有详细的文档

### css 框架的优缺点
* **优点**  
  1. 加速开发 CSS框架提供通用的代码，许多丰富的UI组件样式  
  2. 兼容性较好 CSS框架解决了各个浏览器下的兼容性问题
  3. 合理的布局 CSS框架建立了基于网格的预定义宽度多列布局
  4. 保持页面风格的一致性 
* **缺点**   
  1. 限制自由 CSS框架中的网格，选择器和其它样式，限制了我们可以设计的东西: 如布局，网格宽度，UI样式
  2. 添加额外代码覆盖框架样式
  3. 强迫使用框架规则 比如命名规范

### 水平 垂直 居中
#### 水平居中
* margin 满足3个条件
1. 元素定宽  
2. 元素为块级元素或行内元素设置display:block  
3. 元素的margin-left和margin-right都必须设置为auto  
`margin: 0 auto;`

* 定位法
1. 元素定宽
2. 元素绝对定位，并设置left:50%
3. 元素负左边距margin-left为宽度的一半
```
demo1
.md-warp{
  position: relative;
}
.md-main{
  position: absolute;
  left: 50%;
  margin-left: -50px;
}

demo2
.md-warp{
    position: relative;
}
// 注意此时md-main不设置width为100px
.md-main{
  position: absolute;
  left: 50%;
  -webkit-transform: translate(-50%,0);
  -ms-transform: translate(-50%,0);
  -o-transform: translate(-50%,0);
  transform: translate(-50%,0);
}
```
* 文字水平居中  
  对于单行文字来说，直接使用text-align: center即可。  
  多行文字可以看作一个块级元素参考margin法和定位法。  

#### 垂直居中
[链接](https://juejin.im/post/5854e137128fe100698e6271)
* 定位法
```
.md-warp{
    position: relative;
}
.md-main{
    position: absolute;
    /* 核心 */
    top: 50%;
    margin-top: -50px;
}

.md-warp{
  position: relative;
}
.md-main{
  position: absolute;
  /* 核心 */
  top: calc(50% - 50px);
}

.md-warp{
  position: relative;
}
.md-main{
  position: absolute;
  top: 50%;
  // 注意此时md-main不设置height为100px
  -webkit-transform: translate(0,-50%);
  -ms-transform: translate(0,-50%);
  -o-transform: translate(0,-50%);
  transform: translate(0,-50%);
}
```
* 单行文本垂直居中
  元素内容是单行，并且其高度是固定不变的。  
  将其line-height设置成和height的值一样
```
div{
  width: 400px;
  height: 300px;
  border: 1px solid #000;
}
span{
  line-height: 300px;
}
```
* 视窗单位的解决办法
```
.md-warp{
  position: relative;
}
.md-main{
  position: absolute;
  margin: 50vh auto 0;
  transform: translateY(-50%);
}
```

#### 水平垂直居中
```
.md-warp{
  display:flex;
}
.md-main{
  margin: auto;
}

.md-warp{
  display:flex;
}
.md-main{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}
```

#### 绝对垂直居中
```
.md-warp{
  position: relative;
}
.md-main{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
```

### BFC 
* Block Formatting Context 块格式化上下文
