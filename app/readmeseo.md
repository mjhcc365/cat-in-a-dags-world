## 1.基础 SEO Meta 标签

帮助搜索引擎理解页面内容,在搜索结果中显示页面描述,提高搜索相关性

```html
<!-- 页面描述 -->
<meta name="description" content="MEW - cat in a dogs world" />
<!-- 关键词 -->
<meta name="keywords" content="MEW, cat, cryptocurrency" />
<!-- 作者信息 -->
<meta name="author" content="MEW Team" />
```

## 2. Open Graph (og) 标签

优化社交媒体分享效果,控制分享时的标题、图片和描述,提升社交媒体曝光度

```html
<!-- 基本信息 -->
<meta property="og:title" content="MEW - cat in a dogs world" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://mew.xyz/" />
<meta
  property="og:image"
  content="https://www.datocms-assets.com/133929/1731618648-share.png"
/>

<!-- 额外信息 -->
<meta property="og:description" content="MEW - cat in a dogs world" />
<meta property="og:site_name" content="MEW" />
```

## 3. Open Graph (og) 标签

优化 Twitter 分享效果,显示大图预览,提供更好的社交体验

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@mew" />
<meta name="twitter:title" content="MEW - cat in a dogs world" />
<meta name="twitter:description" content="MEW - cat in a dogs world" />
<meta
  name="twitter:image"
  content="https://www.datocms-assets.com/133929/1731618648-share.png"
/>
```

## 4. 其他重要标签

```html
<!-- 移动设备优化 -->
<meta name="viewport" content="width=device-width, initial-scale=1" />
<!-- 字符编码 -->
<meta charset="utf-8" />
<!-- 规范链接 -->
<link rel="canonical" href="https://mew.xyz/" />
```

## 5. 性能优化

```html
<!-- 预加载关键资源 -->
<link rel="preload" href="critical.css" as="style" />
<link rel="preconnect" href="https://www.google-analytics.com" />
```

## 6. 结构化数据

这段 JSON-LD (JavaScript Object Notation for Linked Data) 代码是一种结构化数据标记，主要用于帮助搜索引擎更好地理解网站内容：

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MEW",
    "url": "https://mew.xyz"
  }
</script>
```

## 7. 多语言支持

```html
<meta property="og:locale" content="en_US" />
<link rel="alternate" hreflang="zh" href="https://mew.xyz/zh" />
```
