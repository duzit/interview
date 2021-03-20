## sass @mixin @include

### 定义和使用混入
```css
@mixin text-common {
  color: red;
  font-size: 14px;
}

.text {
  @include text-common;
  background: #fff;
}

/* 混入中嵌入混入 */
@mixin text-big {
  @include text-common;
  font-weight: bold;
}
```

### 向混入传递参数
```css
@mixin border($color, $width) {
  border: $width solid $color;
}

/* 默认参数值 */
@mixin border($color: red, $width: 1px) {
  border: $width solid $color;
}

.border {
  @include border(#ccc, 2px)
}
```