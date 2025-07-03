官网（企业官网、品牌官网、产品官网等）常见的动画效果主要有以下几类，这些动画不仅提升视觉体验，还能增强用户的交互感和品牌印象：

1. 页面加载动画（Loading/Intro）
   Logo 动画、进度条、骨架屏等
   让用户在等待内容加载时有视觉反馈
2. 滚动触发动画（Scroll Animation）
   元素随滚动渐显/淡出（fade in/out）
   滑入滑出（slide in/out）
   缩放（scale）、旋转（rotate）
   视差（Parallax）背景或图片随滚动产生深度感
   数字滚动增长（数字动画）
3. 导航与菜单动画
   汉堡菜单展开/收起
   下拉菜单、侧边栏滑入滑出
   菜单项 hover 动画
4. 轮播/滑块（Carousel/Slider）
   Banner 轮播、图片滑块、客户评价轮播等
   支持自动播放、手动切换、响应式
5. 按钮与交互反馈
   按钮点击/悬停（hover）时的缩放、颜色变化、波纹（ripple）等
   表单输入聚焦、校验提示动画
6. 卡片/内容块动画
   卡片悬停浮起、阴影变化
   卡片翻转（flip）、展开收起
7. 3D/立体动画
   3D 模型展示、卡片立体翻转
   鼠标跟随的 3D 视角变化
8. 背景动画
   粒子背景、动态渐变、波浪、流体等
   视频背景、Canvas/SVG 动画

   - 设计师可用 After Effects 制作动画，通过 Lottie 导出为 JSON，前端用 lottie-web 播放。
   - particles.js：快速实现粒子背景。Vanta.js：多种酷炫背景（波浪、鸟群、云、网格等），集成简单。Vanta.js 官网。 GSAP：配合 Canvas/SVG 实现复杂动画。
   - three.js 3D 粒子
   - pixi.js 动态背景
   - video
   - svg 动态动画
   - canvas 动画 particles.js、three.js、pixi.js）。 粒子背景、流体、波浪、复杂

9. SVG 路径动画
   路径描边（stroke）动画
   图标/Logo 动画化展示
10. 文本动画
    打字机效果（Typewriter）
    逐字/逐行显现
    文字变色、抖动、波浪等
11. 模态框/弹窗动画
    弹窗弹出/关闭的缩放、淡入淡出等
12. 锚点平滑滚动
    点击导航后页面平滑滚动到指定位置
