# CSS

## atomic
```scss
$primary: #0a71ce;
$success: #67c23a;
$warning: #e6a23c;
$danger: #f56c6c;
$info: #909399;

.container {
  width: 100%;
  background: #ffffff;
  box-shadow: 0px -1px 0px 0px #e6e8ed;
}
.handle-button {
  border-top: 1px solid #ccc;
  position: static;
  bottom: 0px;
  padding: 20px 24px;
  margin-top: 48px;
}
// 颜色
.color-white {
  color: #fff;
}
.color-success {
  color: $success;
}
.color-warning {
  color: $warning;
}
.color-danger {
  color: $danger;
}
.color-info {
  color: $info;
}
.color-primary {
  color: $primary;
}
/* 宽度 */
.w-100 {
  width: 100vw;
}
.w-all {
  width: 100%;
}
.h-all {
  height: 100%;
}
/* flex 布局 */
.flex {
  display: flex !important;
  flex-direction: row;
}
.flex-row {
  flex-direction: row !important;
}
.flex-col {
  flex-direction: column !important;
}
.flex-row-reverse {
  flex-direction: row-reverse !important;
}
.flex-col-reverse {
  flex-direction: column-reverse !important;
}
.flex-wrap {
  flex-wrap: wrap;
}
.flex-nowrap {
  flex-wrap: nowrap;
}
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.justify-between {
  justify-content: space-between;
}

.justify-around {
  justify-content: space-around;
}

.justify-evenly {
  justify-content: space-evenly;
}

.justify-center {
  justify-content: center;
}
.align-center {
  align-items: center;
}
.align-stretch {
  align-items: stretch;
}
.align-start {
  align-items: flex-start;
}
.align-end {
  align-items: flex-end;
}

.content-start {
  align-content: flex-start;
}
.content-end {
  align-content: flex-end;
}
.content-center {
  align-content: center;
}
.content-between {
  align-content: space-between;
}
.content-around {
  align-content: space-around;
}
.content-stretch {
  align-content: stretch;
}

.flex-1 {
  flex: 1;
}
.flex-2 {
  flex: 2;
}
.flex-3 {
  flex: 3;
}
.flex-4 {
  flex: 4;
}
.flex-5 {
  flex: 5;
}

.flex-shrink {
  flex-shrink: 0;
}

// 定义内外边距，历遍1-60
@for $i from 0 through 60 {
  // 能被5除尽的数
  .px-#{$i} {
    padding-left: $i + px !important;
    padding-right: $i + px !important;
  }
  .py-#{$i} {
    padding-top: $i + px !important;
    padding-bottom: $i + px !important;
  }
  .mx-#{$i} {
    margin-left: $i + px !important;
    margin-right: $i + px !important;
  }
  .my-#{$i} {
    margin-top: $i + px !important;
    margin-bottom: $i + px !important;
  }
  .m-#{$i} {
    margin-left: $i + px !important;
    margin-right: $i + px !important;
    margin-top: $i + px !important;
    margin-bottom: $i + px !important;
  }
  .p-#{$i} {
    padding-left: $i + px !important;
    padding-right: $i + px !important;
    padding-top: $i + px !important;
    padding-bottom: $i + px !important;
  }
  .ml-#{$i} {
    margin-left: $i + px !important;
  }
  .mt-#{$i} {
    margin-top: $i + px !important;
  }
  .mr-#{$i} {
    margin-right: $i + px !important;
  }
  .mb-#{$i} {
    margin-bottom: $i + px !important;
  }
  .pl-#{$i} {
    padding-left: $i + px !important;
  }
  .pt-#{$i} {
    padding-top: $i + px !important;
  }
  .pr-#{$i} {
    padding-right: $i + px !important;
  }
  .pb-#{$i} {
    padding-bottom: $i + px !important;
  }
}

.m-auto {
  margin: auto;
}

// 定义字体(px)单位，
@for $i from 12 through 60 {
  .font-#{$i} {
    font-size: $i + px;
  }
}
// line-height
@for $i from 12 through 60 {
  .line-#{$i} {
    line-height: $i + px;
  }
}
// 圆角
@for $i from 4 through 40 {
  .rounded-#{$i} {
    border-radius: $i + px;
  }
}

.rounded-c {
  border-radius: 50%;
}

.ls {
  letter-spacing: 5px;
}
.ls-1 {
  letter-spacing: 10px;
}
.ls-2 {
  letter-spacing: 20px;
}
.ls-3 {
  letter-spacing: 30px;
}
.ls-4 {
  letter-spacing: 40px;
}
.ls-7 {
  letter-spacing: 70px;
}

/* 内容溢出 */
.overflow-hidden {
  overflow: hidden;
}
.overflow-y-hidden {
  overflow-y: hidden;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-auto {
  overflow-y: auto;
}
.overflow-y-scroll {
  overflow-y: scroll;
}
.overflow-x-scroll {
  overflow-y: scroll;
}
/* 文字缩进 */

.text-indent {
  text-indent: 2;
}

/* 文字划线 */
.text-through {
  text-decoration: line-through;
}
/* 文字对齐 */
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.text-center {
  text-align: center;
}
/* 文字换行溢出处理 */
.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-ellipsis-2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; //多行在这里修改数字即可
  overflow: hidden;
  -webkit-box-orient: vertical;
}

/* 文字粗细和斜体 */
.font-weight-light {
  font-weight: 300;
} /*细*/
.font-weight-lighter {
  font-weight: 100;
} /*更细*/
.font-weight-normal {
  font-weight: 400;
} /*正常*/
.font-weight-bold {
  font-weight: 600;
} /*粗*/
.font-weight-bolder {
  font-weight: bold;
} /*更粗*/
.font-italic {
  font-style: italic;
} /*斜体*/

/* 文字颜色 */
.text-white {
  color: #ffffff;
}
.text-gray {
  color: #999999;
}
.text-main {
  color: #842ab5;
}
.text-primary {
  color: #0076f6;
}
.text-hover-primary {
  color: #0056b3;
}
.text-secondary {
  color: #6c757d;
}
.text-hover-secondary {
  color: #494f54;
}
.text-success {
  color: #28a745;
}
.text-hover-success {
  color: #19692c;
}
.text-info {
  color: #17a2b8;
}
.text-hover-info {
  color: #0f6674;
}
.text-warning {
  color: #ffc107;
}
.text-hover-warning {
  color: #ba8b00;
}
.text-danger {
  color: #dc3545;
}
.text-hover-danger {
  color: #a71d2a;
}
.text-light {
  color: #f8f9fa;
}
.text-hover-light {
  color: #cbd3da;
}
.text-dark {
  color: #343a40;
}
.text-hover-dark {
  color: #121416;
}
.text-body {
  color: #333333;
}
.text-muted {
  color: #6c757d;
}
.text-light-muted {
  color: #a9a5a0;
}
.text-light-black {
  color: rgba(0, 0, 0, 0.5);
}
.text-light-white {
  color: rgba(255, 255, 255, 0.5);
}

$borderWidth: 1px;
// 边框
.border {
  border-width: $borderWidth;
  border-style: solid;
  border-color: #dee2e6;
}
.border-top {
  border-top-width: $borderWidth;
  border-top-style: solid;
  border-top-color: #dee2e6;
}
.border-right {
  border-right-width: $borderWidth;
  border-right-style: solid;
  border-right-color: #dee2e6;
}
.border-bottom {
  border-bottom-width: $borderWidth;
  border-bottom-style: solid;
  border-bottom-color: #dee2e6;
}
.border-left {
  border-left-width: $borderWidth;
  border-left-style: solid;
  border-left-color: #dee2e6;
}

/* 定位 */
.position-relative {
  position: relative;
}
.position-absolute {
  position: absolute;
}
.position-fixed {
  position: fixed;
}
/* 定位 - 固定顶部 */
.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}
/* 定位 - 固定底部 */
.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}
.top-0 {
  top: 0;
}
.left-0 {
  left: 0;
}
.right-0 {
  right: 0;
}
.bottom-0 {
  bottom: 0;
}
.cursor-pointer {
  cursor: pointer;
}
```