## 设计方案

## 1. 猜测设计稿是 650 以及 大于 650 的设计稿，

## root{} size 计算 fontsize 的大小

默认 --size:375 ； 为什么是
大于 650，--size:1800,

- 1. 添加一个 shadow

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
