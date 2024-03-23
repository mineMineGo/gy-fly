import{_ as l,M as i,p as c,q as o,R as n,t as s,N as t,a1 as a}from"./framework-e8cb8151.js";const p={},u=a(`<h1 id="_08-综合实战-ant-design-pro-管理系统" tabindex="-1"><a class="header-anchor" href="#_08-综合实战-ant-design-pro-管理系统" aria-hidden="true">#</a> 08-综合实战 Ant Design Pro 管理系统</h1><h2 id="_01-章节介绍" tabindex="-1"><a class="header-anchor" href="#_01-章节介绍" aria-hidden="true">#</a> 01: 章节介绍</h2><h3 id="学习目的" tabindex="-1"><a class="header-anchor" href="#学习目的" aria-hidden="true">#</a> 学习目的</h3><ul><li>对之前讲解的知识点进行综合实战训练，如：弹性布局、网格布局、响应式布局等</li><li>通过综合实战训练，理解项目开发流程及项目开发规范等</li></ul><h3 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h3><ul><li>CSS 文件划分及功能分类</li><li>CSS 方法论以及样式规范</li></ul><h3 id="项目开发" tabindex="-1"><a class="header-anchor" href="#项目开发" aria-hidden="true">#</a> 项目开发</h3><ul><li>框架搭建</li><li>侧边栏结构编写</li><li>侧边栏样式编写</li><li>侧边栏交互编写</li><li>侧边栏折叠交互</li><li>主体头部尾部实现</li><li>主体网格布局实现</li><li>设置模块主题色交互</li><li>设置模块切换按钮交互</li><li>响应式内容及菜单实现</li></ul><h2 id="_02-css-文件划分及功能分类" tabindex="-1"><a class="header-anchor" href="#_02-css-文件划分及功能分类" aria-hidden="true">#</a> 02: CSS 文件划分及功能分类</h2><h3 id="css-文件划分" tabindex="-1"><a class="header-anchor" href="#css-文件划分" aria-hidden="true">#</a> CSS 文件划分</h3><ul><li>在中大型项目中，一般会对 CSS 进行文件划分，根据文件的性质与用途，大概会分成： <ul><li>公共型样式</li><li>特殊型样式</li><li>皮肤型样式</li></ul></li><li>公共型样式可命名为 global.css 或 common.css 等名字，主要包括网站通用样式编写，例如：重置默认样式 reset、网站通用布局、通用模块和元件、通用响应式系统等。<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>  <span class="token comment">/* 重置样式 */</span>
  省略css代码...
  <span class="token comment">/* 网站通用布局 */</span>
  省略css代码...
  <span class="token comment">/* 通用模块 */</span>
  省略css代码...
  <span class="token comment">/* 通用元件 */</span>
  省略css代码...
  <span class="token comment">/* 通用响应式系统 */</span>
  省略css代码...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>特殊型样式主要是根据当前页面来决定的文件，只针对当前页面做出特殊处理的样式，例如只在首页中用到的样式可放置到 index.css 中，在登录页中用到的样式可放置到 login.css 中。</li><li>皮肤型样式是针对网站需要皮肤功能时，把颜色、背景等抽离出来放到文件中的形式，例如 theme-pink.css、theme-skyblue.css 等。</li><li>CSS 文件的引入顺序如下：<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/css/global.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/css/index.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/css/theme.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="css-功能分类" tabindex="-1"><a class="header-anchor" href="#css-功能分类" aria-hidden="true">#</a> CSS 功能分类</h3><ul><li><p>上面提到了公共型样式，在文件中具体包括哪些常见的功能呢？大概可分为如下几类：</p><ul><li>重置样式</li><li>网站通用布局</li><li>通用模块</li><li>通用元件</li><li>通用响应式系统</li></ul></li><li><p>重置样式在前面章节中有介绍过，主要是去除默认样式和统一不同设备下的表现形态。通常为 Reset CSS 代码和 Normalize CSS 代码的结合版本。在本套课程中已经把二者结合成为了一个 reset.css 文件，并在多个综合案例中进行使用过。</p></li><li><p>网站通用布局主要指的是对网站中出现的大块结构进行排版。如：PC 端中的菜单、内容的左右布局方案；移动端中的头部、列表、尾部的上中下布局方案等。</p><div align="center"><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e3b517df893e4607a9751bb729c1db68~tplv-k3u1fbpfcp-watermark.image"><div>菜单、内容的左右布局</div></div><div align="center"><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/913ea2f44bea4e46b5ba2c60a9841357~tplv-k3u1fbpfcp-watermark.image"><div>头部、列表、尾部的上中下布局</div></div></li></ul><ul><li>通用模块指的是网页中可以重复使用的较大的整体，比如导航、登录、注册、各种列表、评论、搜索等。</li><li>通用原件指的是不可再分的较为小巧的个体，通常被重复用于各种模块中，比如按钮、输入框、loading、图标等。</li><li>通用响应式系统指的是在不同设备下要实现响应式布局，当满足了某个断点设定后调用的相应变化样式，比如浮动添加、栅格生效、显示隐藏、版心宽度等。</li></ul><h2 id="_03-css方法论及样式规范" tabindex="-1"><a class="header-anchor" href="#_03-css方法论及样式规范" aria-hidden="true">#</a> 03: CSS方法论及样式规范</h2><h3 id="css方法论" tabindex="-1"><a class="header-anchor" href="#css方法论" aria-hidden="true">#</a> CSS方法论</h3>`,16),d={href:"https://www.kancloud.cn/pwstrick/fe-questions/1627447",target:"_blank",rel:"noopener noreferrer"},r=a(`<li><p>常见的CSS方法论有：</p><ul><li><strong>OOCSS</strong></li><li><strong>BEM</strong></li><li><strong>SMACSS</strong></li><li><strong>Atomic CSS</strong></li></ul></li><li><p>我们的实战项目主要采用 BEM + SMACSS 这两种方法论的结合命名约定，所以下面对这两种方法论进行简单介绍。</p></li><li><p>BEM（Block Element Modifier）是指块级元素修饰符，BEM分为三部分：</p><ol><li>块（Block）是一个独立实体，最高级抽象，例如菜单、文本框等。</li><li>元素（Element）是块的组成部分，被包含在块中，无法自成一体，例如菜单项、标题等。</li><li>修饰符（Modifier）是块或元素的状态，可更改它们的外观或行为，例如高亮、选中等。</li></ol></li><li><p>BEM中的块、元素和修饰符需要全部小写，名称中的单词用连字符（-）分隔，元素由双下划线（__）分隔，修饰符由双连字符（--）分隔。注意，块和元素都既不能是HTML元素名或ID，也不依赖其它块或元素。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.setting-menu</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.setting-menu--open</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.setting-menu__head</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.setting-menu__head--fixed</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.setting-menu__content</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>上面代码中，<code>.setting-menu</code>表示一个独立实体，<code>.setting-menu__head</code>、<code>.setting-menu__content{}</code>表示独立实体的组成部分，<code>.setting-menu--open{}</code>是对配置菜单展开状态的一种行为描述，<code>.setting-menu__head--fixed{}</code>是对配置菜单头部固定状态的一种行为描述。</p></li><li><p>SMACSS（Scalable and Modular Architecture for CSS）是指可伸缩及模块化的CSS架构，由Jonathan Snook在2011年雅虎工作时提出。他在OOCSS和BEM的基础上添加了五种类别的组件的处理规则，具体如下所列。</p><ol><li><p>基础（Base）是为HTML元素定义默认样式，可以包含属性、伪类等选择器。</p></li><li><p>布局（Layout）会将页面分为几部分，可作为高级容器包含一个或多个模块，例如左右分栏、栅格系统等。</p></li><li><p>模块（Module）又名对象或块，是可重用的模块化部分，例如导航栏、产品列表等。</p></li><li><p>状态（State）描述的是任一模块或布局在特定状态下的外观，例如隐藏、激活等。</p></li><li><p>主题（Theme）也就是换肤，描述了页面的外观，它可修改前面四个类别的样式，例如链接颜色、布局方式等。</p></li></ol></li><li><p>通过相应的命名前缀来完成对类别的表示，<code>l-</code>用作布局的前缀，例如.l-inline、.layout-grid等；<code>m-</code>模块命名前缀，例如.m-profile、.field等；<code>is-</code>用作状态的前缀，例如.is-collapsed、.is-active等；<code>theme-</code>用作主题的前缀，例如.theme-a-background、.theme-l-grid等。</p></li><li><p>在实际工作中，不需要局限于某一个CSS方法论，很多时候可以结合使用，共享模块化CSS的规则。例如遵循BEM的命名约定，以及SMACSS的分类前缀，具体如下所列。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.m-setting-menu</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.m-setting-menu--open</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.m-setting-menu__head</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.m-setting-menu__head--fixed</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.m-setting-menu__content</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>任何软件设计都存在不完美的地方，CSS方法论也是一样。比如：命名过长不易维护；HTML不够简洁等。但是它带来的巨大优势也是非常明显的，比如：样式不容易冲突，尤其是复杂的样式结构；清晰的CSS架构，对大型CSS项目管理维护非常重要等。</p></li>`,9),m=a('<h3 id="样式规范" tabindex="-1"><a class="header-anchor" href="#样式规范" aria-hidden="true">#</a> 样式规范</h3><ol><li><p>使用类选择器，放弃ID选择器：ID在一个页面中的唯一性导致了如果以ID为选择器来写CSS，就无法重用。</p></li><li><p>命名应简约而不失语义：反对过长命名和没有语义的命名，如：<code>.m-navigation</code>、<code>.m-abc</code>，推荐<code>.m-nav</code>。</p></li><li><p>相同语义的不同类命名：直接加数字或字母区分即可（如：<code>.m-list</code>、<code>.m-list2</code>、<code>.m-list3</code>等，都是列表模块，但是是完全不一样的模块）。</p></li><li><p>防止污染和被污染：为了防止后代选择器污染，尽量采用 <code>&gt;</code> 方式，例如：<code>-m-nav&gt;li</code>，而不是<code>-m-nav li</code>。</p></li><li><p>最后一个值也以分号结尾：通常在大括号结束前的值可以省略分号，但是这样做会对修改、添加和维护工作带来不必要的失误和麻烦。</p></li><li><p>省略值为0时的单位：为节省不必要的字节同时也使阅读方便，我们将0px、0em、0%等值缩写为0。</p></li><li><p>根据属性的重要性按顺序书写：先显示定位布局类属性，后盒模型等自身属性，最后是文本类及修饰类属性。例如：<code>.m-box{position:relative;width:600px;margin:0 auto 10px;text-align:center;color:#000;}</code>。</p></li><li><p>CSS需要进行格式化和对齐处理：推荐vsCode插件：<code>formate: CSS/LESS/SCSS formatter</code>。</p></li></ol><h2 id="_04-实战项目" tabindex="-1"><a class="header-anchor" href="#_04-实战项目" aria-hidden="true">#</a> 04: 实战项目</h2>',3),h={href:"https://github.com/gy1001/Javascript/blob/main/front-layout/chapter_8/8_4/index.html",target:"_blank",rel:"noopener noreferrer"},k=n("h2",{id:"_05-章节总结",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_05-章节总结","aria-hidden":"true"},"#"),s(" 05: 章节总结")],-1),v=n("ul",null,[n("li",null,"掌握 CSS 文件如何划分及样式命名规范"),n("li",null,"如何划分样式，使得样式更加健壮"),n("li",null,"综合运用：flex、grid、@media 等知识点"),n("li",null,"配合简单的 JavaScript 完成交互实现")],-1);function S(g,b){const e=i("ExternalLinkIcon");return c(),o("div",null,[u,n("ul",null,[n("li",null,[n("p",null,[s("方法论是一个哲学术语，会对一系列具体的方法进行分析研究、系统总结并最终提出较为一般性的原则。CSS方法论是一种面向CSS、由个人和组织设计、已被诸多项目检验且公认有效的最佳实践。这些方法论都会涉及结构化的命名约定，并且在组织CSS时可提供相应的指南，从而提升代码的性能、可读性以及可维护性。(引自："),n("a",d,[s("前端躬行记"),t(e)]),s(")")])]),r]),m,n("p",null,[n("a",h,[s("源码地址"),t(e)])]),k,v])}const f=l(p,[["render",S],["__file","index-08.html.vue"]]);export{f as default};
