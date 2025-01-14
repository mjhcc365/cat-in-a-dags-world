## 设计方案

## 1. 猜测设计稿是 650 以及 大于 650 的设计稿，

## root{} size 计算 fontsize 的大小

默认 --size:375 ； 为什么是
大于 650，--size:1800,

- 1. 添加一个 shadow,使用::before,::after 来创建新的元素

```css
.btn::after {
  background-color: rgba(0, 0, 0, 0.15);
  bottom: -0.7rem;
  content: "";
  height: 100%;
  position: absolute;
  right: -0.7rem;
  width: 100%;
  z-index: 1;
  border-radius: inherit;
}
```

- 2. 添加一个动画

```css
@media (hover: hover) and (pointer: fine) {
  .btn__content {
    transition: transform 0.65s cubic-bezier(0.19, 1, 0.22, 1);
  }
  .btn:hover .btn__content {
    transform: translate(0.7rem, 0.7rem);
  }
}
```

- 3. 添加一个图片，且添加动画

动画库的使用：
`js-marquee`: 可能用于跑马灯效果
`js-i-split`: 可能用于文字分割动画
`js-i-up`: 可能用于向上滑入动画
`ScrollTrigger`:可能使用了滚动触发动画库
`SplitText`:可能使用了文字分割动画库

[react-spring](https://github.com/pmndrs/react-spring?tab=readme-ov-file)
[]

- 4. 动画组件库的选择

  - GSAP，功能更强大但学习曲线更陡
  - React Spring：基于弹簧物理的动画，API 相对复杂，不支持 SVG 动画
  - React Motion 维护较少，API 较老，功能相对有限
  - CSS Animations 功能有限，难以处理复杂的交互，状态管理困难

- SEO 优化策略

```html
<!-- 专业的SEO meta标签设置 -->
<meta
  data-n-head="ssr"
  data-hid="description"
  name="description"
  content="MEW - cat in a dogs world"
/>
<meta
  data-n-head="ssr"
  data-hid="og:type"
  property="og:type"
  content="website"
/>
```

## 区分动画相关的单词

`transforms` 变换
`Translate` 位移
`trasition` 过渡的方式

```css
.element {
  /* 单个属性过渡 */
  transition: property duration timing-function delay;
  /* 或分开写 */
  transition-property: transform; /* 要过渡的属性 */
  transition-duration: 0.3s; /* 过渡持续时间 */
  transition-timing-function: ease; /* 过渡时间函数 */
  transition-delay: 0s; /* 延迟开始时间 */
}
```

```css
/* 卡片悬浮效果 */
.card {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
  /* 平滑过渡两个css属性 transform 和  box-shadow  */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
```
