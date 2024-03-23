import{_ as s,M as r,p as a,q as c,R as i,t as e,N as d,a1 as l}from"./framework-e8cb8151.js";const v={},u=l(`<h1 id="_19-使用-grid-构建创意性-web-布局" tabindex="-1"><a class="header-anchor" href="#_19-使用-grid-构建创意性-web-布局" aria-hidden="true">#</a> 19-使用 Grid 构建创意性 Web 布局</h1><p>CSS 网格模块为 Web 布局提供了前所未有的可能性。我们可以用更少的元素（更简洁的 HTML 结构）构建更复杂的设计。相对而言，它要比 Flexbox 布局模块强很多。CSS 网格布局除了能轻易构建常见的 Web 布局之外，还可以实现很多有创意的响应式布局效果，让你对 Web 布局有一种焕然一新的感觉。</p><p>在这节课中，我们就来看看 CSS 网格如何构建这些具有创意性的 Web 布局效果。</p><h2 id="网格能构建哪些有创意性的-web-布局" tabindex="-1"><a class="header-anchor" href="#网格能构建哪些有创意性的-web-布局" aria-hidden="true">#</a> 网格能构建哪些有创意性的 Web 布局？</h2><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7b2444f91776410eaac521e8b74bdbc9~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>如上图所示，在 Web 中类似于杂志类排版的布局越来越多，以往要实现杂志报刊类 Web 布局是件痛苦的事情，即使能实现，也会让 HTML 结构变得臃肿复杂。现在我们只需要在 CSS 网格模块的基础上，再结合一些其他的 CSS 特性就可以实现。换句话说，实现类似杂志、报刊类的 Web 布局，你可能还会用到以下 CSS 特性：</p><ul><li><strong>多列布局</strong>，可以将同一元素里内容自动分成多栏；</li><li><strong>CSS Regions 和 Exclusions</strong>，可以很好地解决文本围绕图片的效果，只是目前支持的浏览器非常的少；</li><li><strong>CSS Shapes</strong>，可以让内容在任何不规则的容器中流动，文本也可以围绕着任意不规则的图形排列；</li><li><strong>CSS Clipping 和 Masking</strong>，可以裁剪出不规则的图形或形状，也可以让元素按不规则形状展示；</li><li><strong>CSS 书写模式和逻辑属性</strong>，可以让文本竖排，也可以按不同的书写（阅读）方式排列；</li><li><strong>首字下沉</strong>，是杂志报刊类常见的一种效果，可以使用 <code>initial-letters</code> 轻易实现首字下沉的效果；</li><li><strong>Web Fonts 和可变字体</strong>，可以让文本更具艺术效果，视觉更具冲击性。</li></ul><p>注意，在接下来介绍的报刊杂志类的 Web 布局案例，我们可能只会用到上面所列的部分技术，比如<strong>多列布局</strong> 、<strong>CSS 剪切（Clipping）和蒙板（Masking）</strong> 以及 <strong>CSS 书写模式</strong>等。</p><p>除了杂志类的 Web 布局之外，CSS 网格布局技术、 CSS 的 <code>clip-path</code> （剪切）和 <code>mask</code> （蒙板）等技术的结合，还可以实现类似海报、漫画类的 Web 布局：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3531955f55d44916ad72e8480b65cc0b~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>除此之外，还可以让一些常规的 Web 布局在视觉上的效果与众不同。虽然视觉上变得更复杂了，但实现的过程却不见得更复杂，有些甚至变得更简单。比如下图中的卡片、图文层叠、混排等效果：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b22ae88097024aeb9e6b6a7607d3f836~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>接下来，我们一起动手，写几个 Demo。希望大家能在下面这几个实战的案例进一步加强 CSS 网格布局的理解！</p><h2 id="杂志报刊类布局" tabindex="-1"><a class="header-anchor" href="#杂志报刊类布局" aria-hidden="true">#</a> 杂志报刊类布局</h2><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f974e31b3a44d5ba1e590486e8e41fa~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>这是一个简化版的杂志类风格的 Web 布局效果。它有着几个明显的特征：</p><ul><li>左侧英雄图（Hero）是不规则的；</li><li>标题背景是个平形四边形；</li><li>内容第一个段落首字母下沉；</li><li>标题和英雄图有部分重叠。</li></ul><p>假设构建上图中的效果所需的 HTML 是：</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;body&gt;
    &lt;!-- 英雄图（Hero） --&gt;
    &lt;figure&gt;&lt;img src=&quot;&quot; alt=&quot;&quot; /&gt;&lt;/figure&gt;
    
    &lt;!-- 标题 --&gt;
    &lt;h1&gt;标题&lt;/h1&gt;
    
    &lt;!-- 主内容 --&gt;
    &lt;div class=&quot;content-wrap&quot;&gt;
        &lt;div class=&quot;content&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    
    &lt;!-- 引言 --&gt;
    &lt;blockquote&gt;&lt;/blockquote&gt;
    
    &lt;!-- 媒体链接 --&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt;&lt;svg&gt;&lt;/svg&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HTML 结构简洁清晰。对于实现所需的布局效果也很简单。</p><p>假设设计师在设计图上就给 Web 上每个内容区域定义好网格的区域和位置等，如下图所示：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/80c4035645e04ffa959ba7d6345970a0~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>很明显，它就是一个两行八列（<code>2 x 8</code>）的网格。用 CSS 网格的 <code>grid-template-rows</code> 和 <code>grid-template-columns</code> 很容易就定义出这样的网格：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>body {
    display: grid;
    
    grid-template-columns: repeat(8, minmax(0, 1fr));
    grid-template-rows: auto minmax(0, 1fr);
    gap: 2rem;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dae5c4c8ef5d4a1dbf23d6384113cefd~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>从设计稿上，不难发现 Web 页同上的每个区域都被划分在指定的网格线围绕的区域内：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/47f40c80da6441d1a0ae1ff56285114f~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>你可能已经想到了。CSS 网格模块中的 <code>grid-area</code> 、<code>grid-row</code> 和 <code>grid-column</code> 可以很容易实现它：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>figure {
    grid-column: 1 / span 4;
    grid-row: 1 / span 2;
}

h1 {
    grid-row: 1;
    grid-column: 4 / 8;
    z-index: 2;
}

blockquote {
    grid-row: 2;
    grid-column: 5 / 7;
    justify-self: end;
}

.content-wrapper {
    grid-row: 2;
    grid-column: 7 / 9;
    min-height: 0;
}

ul {
    grid-column: 4 / span 3;
    grid-row: 2;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果仅仅是实现内容区域在网格中的位置、大小等效果，上面的代码就足够了！而这个效果还需要额外处理一下才能达到。首先左侧英雄图（Hero），它并不是一个矩形图，它是一个多边形的图片。在 CSS 中，使用剪切（Clipping）特性 <code>clip-path</code> 就可以实现：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>figure {
    clip-path: polygon(0 0, 100% 0, 65% 100%, 0 100%);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b067d646e2204627bf1c0c46705edd61~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>标题背景（平形四边形）的效果，对于大家来说应该不会有任何难度了。这里为了避免文本也因 <code>transform</code> 的 <code>skewX()</code> 变形（扭曲），所以标题背景通过 <code>h1</code> 的伪元素 <code>::after</code> 来实现：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>h1::after {
    content: &quot;&quot;;
    position: absolute;
    inset: 0;
    background-color: #fff;
    z-index: -1;
    transform: skewX(-20deg);
    border-radius: 5px;
    filter: drop-shadow(8px 8px 0 rgb(0 0 0 / 0.5));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后一个效果就是主内容第一个段落的首字母下沉的效果。 CSS 中有一个属性可以直接实现首字下沉的排版效果，即 <code>initial-letter</code> ：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>.content p:first-child::first-letter {
    initial-letter: 3;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于不支持 <code>initial-letter</code> 的浏览器，依旧可以使用浮动来实现首字下沉的效果。当然，你还可以通过 <code>@supports</code> 来做一个判断，最终使用哪种方案交由浏览器自己决定：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>@supports not (initial-letter: 3;) {
    .content p:first-child::first-letter {
        color: #000;
        float: left;
        font-size: 6em;
        margin: 0 0.2em 0 0;
    }
}

@supports (initial-letter: 3;) {
    .content p:first-child::first-letter {
        initial-letter: 3;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后再修饰一下，该居底部的居底部，该右对齐的右对齐。</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>blockquote {
    justify-self: end;
}
ul {
    align-self: end;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个简单的杂志类布局效果就完成了：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4e4f91bc86dd4d59bdf48a7ee37ff83f~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p>`,42),o={href:"https://codepen.io/airen/full/qBKpJRX",target:"_blank",rel:"noopener noreferrer"},t=l(`<p>上面这个效果只在宽屏的时候还不错，在窄屏下效果就差强人意了。不过不用担心，只需要通过 <code>@media</code> 稍加处理一下，就可以实现一个具有响应式杂志类排版效果：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>body {
    display: grid;
    grid-template-rows: auto minmax(0, 1fr) auto auto;
    grid-template-columns: 1rem 1fr 1rem;
    gap: 2rem;
}

figure {
    grid-row: 1 / -1;
    grid-column: 1 / -1;
}

h1 {
    grid-row: 1;
    grid-column: 2 / 3;
    z-index: 2;
}

blockquote {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    z-index: 2;
}

.content-wrapper {
    min-height: 0;
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    z-index: 2;
}

ul {
    grid-row: 4 / 5;
    grid-column: 2 / 2;
    z-index: 2;
}

@media only screen and (min-width: 768px) {
    body {
        grid-template-columns: repeat(8, minmax(0, 1fr));
        grid-template-rows: auto minmax(0, 1fr);
    }

    h1 {
        grid-row: 1;
        grid-column: 4 / 8;
    }

    figure {
        grid-column: 1 / span 4;
        grid-row: 1 / span 2;
    }

    blockquote {
        grid-row: 2;
        grid-column: 5 / 7;
        justify-self: end;
    }

    .content-wrapper {
        grid-row: 2;
        grid-column: 7 / 9;
        min-height: 0;
    }

    ul {
        grid-column: 4 / span 3;
        grid-row: 2;

        align-self: end;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6f69bfd14dd54a04b6715c55fe5a56a0~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p>`,3),m={href:"https://codepen.io/airen/full/XWYVoMw",target:"_blank",rel:"noopener noreferrer"},b=i("p",null,[i("strong",null,"作业"),e(" ：使用 CSS 网格和媒体查询完成下图的布局效果：")],-1),p=i("p",null,[i("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5d8ec338acb54086a103348e7a693f12~tplv-k3u1fbpfcp-zoom-1.image",alt:"img"})],-1),g=i("h2",{id:"动漫和画报类布局",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#动漫和画报类布局","aria-hidden":"true"},"#"),e(" 动漫和画报类布局")],-1),f=i("p",null,"你可能会觉得杂志报刊类的 Web 布局没有太多的挑战性，那么接下来的动漫和画报类的布局，可能会更有意思一些。",-1),h=i("p",null,[i("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/608a9cde7e554c34b8a0502deb335908~tplv-k3u1fbpfcp-zoom-1.image",alt:"img"})],-1),S=i("p",null,[i("em",null,"漫画类布局效果"),e("！")],-1),y={href:"https://stuffandnonsense.co.uk/artdirectionfortheweb/index.html",target:"_blank",rel:"noopener noreferrer"},k=l(`<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f34a7a6f1f949099b7a2bdf4ce1baea~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p><em>画报（海报）类布局效果</em> ！</p><p>我们先来看漫画类的布局效果！</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b2543fdf29e040948e94c47587170f1c~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>这个故事中包括了六个元素（移动端只有五个元素）：</p><ul><li>标题；</li><li>主内容；</li><li>摘要；</li><li>漫画图1；</li><li>漫画图2；</li><li>漫画图3。</li></ul><p>在两个断点下有不同的排版效果，比如浏览器视窗宽度小于 <code>1024px</code> 是平板和移动端中的布局效果（上图中左侧效果），大于 <code>1024px</code> 则是桌面端的布局效果（上图中右侧效果）。</p><p>先不考虑布局效果，根据漫画中的主要元素来编写所需的 HTML 结构，如果以内容先行的话，它的结构可能会像下面这样：</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;body&gt;
    &lt;h1&gt;故事标题&lt;/h1&gt;
    &lt;aside&gt;故事摘要&lt;/aside&gt;
    &lt;main&gt;故事内容&lt;/main&gt;
    &lt;figure&gt;&lt;img src=&quot;&quot; alt=&quot;漫画图1&quot; /&gt;&lt;/figure&gt;
    &lt;figure&gt;&lt;img src=&quot;&quot; alt=&quot;漫画图2&quot; /&gt;&lt;/figure&gt;
    &lt;figure&gt;&lt;img src=&quot;&quot; alt=&quot;漫画图3&quot; /&gt;&lt;/figure&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们将使用网格来构建所需要的布局效果。简单地说，我们需要在不同断点下构建不同的网格，如下图所示：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a88123220194864a39d64dc7b476ff3~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>正如上图所示，左侧是平板和移动端（断点小于 <code>1024px</code> ），即默认的列网格轨道数量和尺寸：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>body {
    display: grid;
    
    grid-template-columns: 1rem min-content minmax(0, 1fr) 1rem;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>网格轨道的第一列和最后一列定义的尺寸是 <code>1rem</code> ，这是为了给页面留白，第二列设置 <code>min-content</code> 是为了让该列网格轨道尺寸和“漫画图 1”设置的尺寸相同，最后网格容器剩下的空间都给第三列。</p><p>浏览器视窗宽度大于 <code>1024px</code> 时，除了第一列和最后一列留白（即 <code>1rem</code> ）之外，将剩余下的网格容器空间分成五个等份。而且列与列之间有一定的间距，假设是 <code>10px</code> 。那么我们就可以使用 <code>@media</code> 重新调整 <code>body</code> 的 <code>grid-template-columns</code> 属性值，并且添加 <code>gap</code> 属性：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>@media only screen and (min-width: 1024px) {
    body {
        grid-template-columns: 1rem repeat(5, minmax(0, 1fr)) 1rem;
        column-gap: 10px;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按同样的方式，使用 <code>grid-template-rows</code> 定义行网格轨道数量和尺寸：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>body {
    display: grid;
    
    grid-template-columns: 1rem min-content minmax(0, 1fr) 1rem;
    grid-template-rows: repeat(4, auto);
}

@media only screen and (min-width: 1024px) {
    body {
        grid-template-columns: 1rem repeat(5, minmax(0, 1fr)) 1rem;
        column-gap: 10px;
        grid-template-rows: repeat(3, auto);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里，需要的网格就定义好了。浏览器客户端会根据定义好的网格创建网格线名称，我们就可以使用 <code>grid-row</code> 、<code>grid-column</code> 和 <code>grid-area</code> 根据网格线名称来放置网格项目。</p><p>由于这个网格在浏览器视窗断点不同时，定义的网格也不同，将会造成网格线的索引编号也不同。如果继续使用网格线索引号来放置网格项目的话，就需要在不同断点下调整网格线的名称。为了减少这种重复性的工作，在定义网格的时候，可以使用 <code>grid-template-areas</code> 给网格区域命名：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>body {
    display: grid;
    
    grid-template-columns: 1rem min-content minmax(0, 1fr) 1rem;
    grid-template-rows: repeat(4, auto);
    
    grid-template-areas:
        &quot;.  fig-1   aside  .&quot;
        &quot;.  .       title  .&quot;
        &quot;.  banner  banner .&quot;
        &quot;.  .       main   .&quot;;
}

@media only screen and (min-width: 1024px) {
    body {
        grid-template-columns: 1rem repeat(5, minmax(0, 1fr)) 1rem;
        column-gap: 10px;
        grid-template-rows: repeat(3, auto);
        
        grid-template-areas:
            &quot;.  .      aside  .       fig-2   fig-2   .&quot;
            &quot;.  title  title  banner  banner  banner  .&quot;
            &quot;.  fig-1  main   banner  banner  banner  .&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>漫画中每个部分对应一个网格区域名称：</p><ul><li>标题 » <code>title</code>；</li><li>主内容 » <code>main</code>；</li><li>摘要 » <code>aside</code>；</li><li>漫画图1 » <code>fig-1</code>；</li><li>漫画图2 » <code>banner</code>；</li><li>漫画图3 » <code>fig-2</code>。</li></ul><p>如此一来，放置网格项目只需要使用已命名好的网格区域名称即可：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>.title {
    grid-area: title;
}

aside {
    grid-area: aside;
}

main {
    grid-area: main;
}

.banner {
    grid-area: banner;
}

.fig-1 {
    grid-area: fig-1;
}

.fig-2 {
    grid-area: fig-2;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候你看到布局越来越接近所期望的了：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7d0a32785ec7440c994bcd1efee066d8~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>需要注意的是，“漫画图3” 只在浏览器视窗宽度大于 <code>1024px</code> 中显示，因此为了让布局不因它打破，需要在小于 <code>1024px</code> 断点下将其隐藏：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>.fig-2 {
    display: none;
}

@media only screen and (min-width: 1024px) {
    .fig-2 {
        display: block;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在剩下的就是完善 Web 页面元素的其他样式了。最终你看到的效果如下：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/877cdeed0b1443238b4096970893a96e~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p>`,31),_={href:"https://codepen.io/airen/full/QWxaYYj",target:"_blank",rel:"noopener noreferrer"},C={href:"https://stuffandnonsense.co.uk/artdirectionfortheweb/index.html",target:"_blank",rel:"noopener noreferrer"},w=l(`<p>再来看另一个案例，即“画报类”布局效果：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9eb462f7b1214a7ab38ecf046b805a8a~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>其实这个示例的布局是非常简单的。它和我们前面课程中看到的“图片墙”、“九宫格”以及“交叉类”布局是非常相似的。简单地说，它就是一个多行多列的的网格，并且因部分网格项目放置同一个网格单元格，它们有相互重叠的效果。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/97a175fd46b5479780f82acef7d58689~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>就上图而言，不规则的效果并不是因为网格产生，而是在不同的网格项目上使用了 <code>clip-path</code> 特性，裁剪出不同的多边形形状，并且在网格中堆叠在一起。最后实现类似画报（或海报）类的布局效果。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/17a7063c011746a28c7a4fa35a73e576~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>有了这个基础，我们就可以开始动手实现画报类的布局了。</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;body&gt;
    &lt;figure&gt;
        &lt;img src=&quot;&quot; alt=&quot;&quot; /&gt;
    &lt;/figure&gt;
    &lt;!-- 省略其他的 figure --&gt;    
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分别在不同的断点下定义网格：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>/* Mobile Layout */
body {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 200px;
    grid-auto-rows: 200px;
    row-gap: 1rem;
    grid-auto-flow: dense;
}

/* Tablet Layout */
@media only screen and (min-width: 768px) {
    body {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
    }
}

/* Desktop Layout*/
@media only screen and (min-width: 1024px) {
    body {
        grid-template-columns: 1.167fr 0.45fr 0.225fr 0.3fr 0.8fr;
        grid-template-rows: 0.44fr 0.1875fr 0.4fr 0.9fr 0.1875fr 0.44fr;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在移动端（Mobile），网格项目是自动放置的，相当于它们的 <code>grid-column</code> 和 <code>grid-row</code> 值为 <code>auto</code> 。在网格布局中，如果网格项目是自动放置的话，它将根据自动放置算法来处理，我们不需要去额外做什么，但是为了避免网格洞现象出现，可以在网格容器上显式设置 <code>grid-auto-flow</code> 值为 <code>dense</code> 。</p><p>平板端（视窗断点大于 <code>768px</code> ，小于 <code>1024px</code> ），部分网格项目会合并行或列：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>@media only screen and (min-width: 768px){
    figure:nth-of-type(2),
    figure:nth-of-type(5),
    figure:nth-of-type(10),
    figure:nth-of-type(12),
    figure:nth-of-type(16) {
        grid-row: auto / span 2;
    }
    
    figure:nth-of-type(16) {
        grid-column: 2;
    }
    
    figure:nth-of-type(4),
    figure:nth-of-type(8),
    figure:nth-of-type(11),
    figure:nth-of-type(15),
    figure:nth-of-type(19) {
        grid-column: auto / span 2;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>桌面端（视窗断点大于 <code>1024px</code>）和平板端是相似的，使用 <code>grid-row</code> 和 <code>grid-column</code> 指部分网格项目的位置。</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>@media only screen and (min-width: 1024px) {
    figure:nth-of-type(1) {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
    }

    figure:nth-of-type(2) {
        grid-column: 2 / 4;
        grid-row: 1 / 3;
    }

    figure:nth-of-type(3) {
        grid-column: 4 / 6;
        grid-row: 1 / 2;
    }

    figure:nth-of-type(4) {
        grid-column: 1 / 2;
        grid-row: 2 / 4;
    }

    figure:nth-of-type(5) {
        grid-column: 2 / 4;
        grid-row: 3 / 4;
    }

    figure:nth-of-type(6) {
        grid-column: 4 / 6;
        grid-row: 2 / 4;
    }

    figure:nth-of-type(7) {
        grid-column: 1 / 2;
        grid-row: 4 / 6;
    }

    figure:nth-of-type(8) {
        grid-column: 2 / 3;
        grid-row: 4 / 6;
    }

    figure:nth-of-type(9) {
        grid-column: 3 / 5;
        grid-row: 4 / 6;
    }

    figure:nth-of-type(10) {
        grid-column: 5 / 6;
        grid-row: 4 / 6;
    }

    figure:nth-of-type(11) {
        grid-column: 1 / 3;
        grid-row: 5 / 7;
    }

    figure:nth-of-type(12) {
        grid-row: 5 / 7;
        grid-column: 3 / 4;
    }

    figure:nth-of-type(13) {
        grid-column: 4 / 5;
        grid-row: 5 / 7;
    }

    figure:nth-of-type(14) {
        grid-column: 5 / 6;
        grid-row: 6 / 7;
    }

    figure:nth-of-type(15) {
        grid-column: 1 / 2;
        grid-row: 7 / 8;
    }
    
    figure:nth-of-type(16) {
        grid-row: 7 / 8;
        grid-column: 2 / 5;
    }

    figure:last-child {
        grid-column: 3 / 6;
        grid-row: 8 / 9;
    }
    
    figure:nth-of-type(19) {
        grid-column: auto;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你现在看到的网格是这样的：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cb03bdceff264fa89676145d570fcfea~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>根据需要，在网格项目上使用 <code>clip-path</code> 裁剪出不同（或相同）风格的多边形形状的效果：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>@media only screen and (min-width: 768px) {
    figure:nth-of-type(1),
    figure:nth-of-type(6),
    figure:nth-of-type(9),
    figure:nth-of-type(14),
    figure:nth-of-type(18) {
        clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
    }
    
    figure:nth-of-type(3),
    figure:nth-of-type(7),
    figure:nth-of-type(13),
    figure:nth-of-type(17),
    figure:nth-of-type(20) {
        clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 100%);
    }
}

@media only screen and (min-width: 1024px) {
    figure:nth-of-type(1) {
        clip-path: polygon(0 0, 100% 0, 100% 66%, 0% 85%);
    }
    
    figure:nth-of-type(4) {
        clip-path: polygon(0 22%, 100% 4px, 100% 100%, 0% 100%);
    }
    
    figure:nth-of-type(8) {
        clip-path: polygon(0 20%, 100% 14px, 100% 59%, 0% 90%);
    }
    
    figure:nth-of-type(9) {
        clip-path: polygon(0 30%, 100% 4px, 100% 80%, 0% 60%);
    }
    
    figure:nth-of-type(11) {
        clip-path: polygon(0 10px, 100% 60%, 100% 100%, 0% 100%);
    }
    
    figure:nth-of-type(15) {
        clip-path: polygon(0 0, 100% 20%, 100% 100%, 0% 100%);
    }
    
    figure:nth-of-type(16) {
        clip-path: polygon(0 20%, 100% 0%, 100% 100%, 0% 100%);
    }
    
    figure:nth-of-type(18) {
        clip-path: polygon(0 0, 80% 0%, 100% 100%, 0% 100%);
    }
    
    figure:last-child {
        clip-path: polygon(20% 0, 100% 0%, 100% 100%, 0% 100%);
    }
    
    figure:nth-of-type(19) {
        clip-path: polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2425fa4c25a8461c9fc521b3f34e136a~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>剩余的就是往里面填画报图（或海报图）了。我在示例中填充的是一些随机图片。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/256bccdc7e49413c841f620bec88c151~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p>`,22),x={href:"https://codepen.io/airen/full/NWzygOd",target:"_blank",rel:"noopener noreferrer"},j=i("p",null,[i("strong",null,"作业"),e(" ，使用 CSS 网格构建下图布局效果：")],-1),q=i("p",null,[i("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/317f17d155c0475db228d0e5ba2c773c~tplv-k3u1fbpfcp-zoom-1.image",alt:"img"})],-1),z=i("h2",{id:"堆叠布局",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#堆叠布局","aria-hidden":"true"},"#"),e(" 堆叠布局")],-1),W=i("p",null,[i("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03df128044f7477aaa3f52ae532343e7~tplv-k3u1fbpfcp-zoom-1.image",alt:"img"})],-1),M={href:"https://codepen.io/mor10/full/oNBdamz",target:"_blank",rel:"noopener noreferrer"},L=i("p",null,[e("我们在介绍 CSS 网格模块理论知识的时候，就多次提到过，"),i("strong",null,[e("使用 CSS 网格实现堆叠布局效果，要比其他的布局技术简单"),i("strong",null,[i("strong",null,"得")]),e("多")]),e(" 。另外，堆叠的布局效果在 Web 中也随处可见，比如下图这种卡片组件：")],-1),T=i("p",null,[i("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bedaf68e1c4446848999da31a37c1dd4~tplv-k3u1fbpfcp-zoom-1.image",alt:"img"})],-1),H={href:"https://codepen.io/airen/full/MWvyGWp",target:"_blank",rel:"noopener noreferrer"},Y=i("p",null,"这是普通类的堆叠布局效果。",-1),D={href:"https://twitter.com/andybarefoot",target:"_blank",rel:"noopener noreferrer"},B={href:"http://andybarefoot.com/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://codepen.io/andybarefoot",target:"_blank",rel:"noopener noreferrer"},G=i("p",null,[i("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/08df9e24a0a14049b76acc9b13a6a43b~tplv-k3u1fbpfcp-zoom-1.image",alt:"img"})],-1),R={href:"https://codepen.io/andybarefoot/full/eYzMoYv",target:"_blank",rel:"noopener noreferrer"},V={href:"https://codepen.io/andybarefoot/full/wvKJweJ",target:"_blank",rel:"noopener noreferrer"},N={href:"https://codepen.io/andybarefoot/full/YQwbbb",target:"_blank",rel:"noopener noreferrer"},A={href:"https://codepen.io/andybarefoot/full/GMyREX",target:"_blank",rel:"noopener noreferrer"},X={href:"https://codepen.io/andybarefoot/full/ypPgod",target:"_blank",rel:"noopener noreferrer"},K={href:"https://codepen.io/andybarefoot/full/VwZjVma",target:"_blank",rel:"noopener noreferrer"},I={href:"https://codepen.io/andybarefoot/full/PBPrex",target:"_blank",rel:"noopener noreferrer"},O={href:"https://codepen.io/andybarefoot/full/XxqveV",target:"_blank",rel:"noopener noreferrer"},E={href:"https://codepen.io/andybarefoot/full/oNjxYYG",target:"_blank",rel:"noopener noreferrer"},J=l(`<p>这几个案例除了创意新颖之外，还有一个共同的特性，具有响应式网格布局：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e162a18c53b4cbe9ef8a8ed965443dd~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>接下来，我们以列表中的编号是 ② 和 ⑨ 为例，了解如何使用网格布局技术来实现具有响应式的堆叠效果：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/851bedb76d6f4fc3986b15c533c6e926~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>除了具有响应式效果之外，它们还有一个共同的特征：不同层的叠加。另外，它们都采用了相似的 CSS 特性，比如 CSS 网格布局、自定义属性和媒体查询等。</p><p>它们所需的 HTML 结构：</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;!-- 编号 ② --&gt;
&lt;ul&gt; 
    &lt;li&gt; 
        &lt;img src=&quot;fashion1.png&quot; &gt; 
        &lt;div&gt; 
            &lt;h2&gt; The Ruched Air Blouse&lt;/h2&gt; 
            &lt;p&gt;$55&lt;/p&gt; 
         &lt;/div&gt; 
     &lt;/li&gt; 
     &lt;!-- 省略其他 li --&gt;
&lt;/ul&gt;

&lt;!-- 编号 ⑨ --&gt;  
&lt;ul&gt; 
    &lt;li&gt; 
        &lt;img src=&quot;book.png&quot; /&gt; 
    &lt;/li&gt; 
    &lt;!-- 省略其他 li --&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们将要实现的一个具有响应式布局的效果。同样遵循<strong>移动动先行原则</strong> ，在移动端只有一列，因此使用自定义属性 <code>--columns</code> 来定义列数：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>/* Mobile */ 
:root { 
    --columns: 1; 
} 

/* 定义网格，列数由 --columns 来决定 */ 
ul { 
    display: grid; 
    grid-template-columns: repeat(var(--columns), minmax(0,1fr)); 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，编号 ⑨ 案例的 <code>--columns</code> 的值为 <code>3</code> 。移动端（Mobile）下编号 ② 和 ⑨ 对应的网格如下图所示：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7554ab3c900b44cc9cec8b185dffc6e4~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>使用 <code>@media</code> 在不同断点改变 <code>--columns</code> 的值，就可以在不同断点下得到不一样的网格：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>/* Case 1: Product (编号 ②) */ 
@media (min-width:600px){ 
    :root { 
        --columns: 2; 
     } 
} 

@media (min-width:900px){ 
    :root { 
        --columns: 3; 
     }
} 

@media (min-width:1200px){ 
    :root { 
        --columns: 4; 
    } 
} 

@media (min-width:1500px){ 
    :root { 
        --columns: 5; 
    } 
} 

@media (min-width:1800px){ 
    :root { 
        --columns: 6; 
     } 
} 

/* Case 2: Book （编号⑨）*/ 
@media (min-width:600px){ 
    :root { 
        --columns: 5; 
    } 
} 

@media (min-width:900px){ 
    :root { 
        --columns: 7; 
    } 
} 

@media (min-width:1200px){ 
    :root { 
        --columns: 9; 
    } 
} 

@media (min-width:1500px){ 
    :root { 
        --columns: 11; 
    } 
} 

@media (min-width:1800px){ 
    :root { 
        --columns: 13; 
    } 
} 

@media (min-width:2100px){ 
    :root { 
        --columns: 15; 
    } 
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eb8602eb9d2d41c789c240552449f090~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>定义好网格之后只需要使用 <code>grid-*</code>（比如 <code>grid-column</code>、<code>grid-row</code> 或 <code>grid-area</code>）来明确放置网格项目：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>/* Case 2: Book 编号⑨ */ 
li { 
    grid-column-end: span 2; 
} 

li:nth-child(2n) { 
    grid-column-start: 2; 
} 

@media (min-width: 600px) { 
    li:nth-child(2n) { 
        grid-column-start: auto; 
    } 
    
    li:nth-child(4n-1) { 
        grid-column-start: 2; 
    } 
} 

@media (min-width: 900px) { 
    li:nth-child(4n-1) { 
        grid-column-start: auto; 
    } 
    
    li:nth-child(6n-2) { 
        grid-column-start: 2; 
    } 
} 

@media (min-width: 1200px) { 
    li:nth-child(6n-2) { 
        grid-column-start: auto; 
    } 
    
    li:nth-child(8n-3) { 
        grid-column-start: 2; 
    } 
} 

@media (min-width: 1500px) { 
    li:nth-child(8n-3) { 
        grid-column-start: auto; 
    } 
    
    li:nth-child(10n-4) { 
        grid-column-start: 2; 
    } 
} 

@media (min-width: 1800px) { 
    li:nth-child(10n-4) { 
        grid-column-start: auto; 
    } 
    
    li:nth-child(12n-5) { 
        grid-column-start: 2; 
    } 
} 

@media (min-width: 2100px) { 
    li:nth-child(12n-5) { 
        grid-column-start: auto; 
    } 
    
    li:nth-child(14n-6) { 
        grid-column-start: 2; 
    } 
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编号 ② 相对于 编号 ⑨ 要简单得多，它的网格项目是自动放置的，即 <code>grid-row</code> 、<code>grid-column</code> 的值为 <code>auto</code> 。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f5369025347448199a270364908ee0c5~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>如果只是要实现具有响应式的网格布局，那么到这里就结束了。但我们的示例还有另外一个特征，那就是多层堆叠在一起，构建出具有层次感的产品展示效果。</p><p>不难发现，这两个案例，每个 <code>li</code> （单个网格项目）都由四个层级堆叠在一起：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0e44350f28194dd299991d98691471da~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>为了减少额外的 HTML 标签元素，这里使用了 CSS 的伪元素 <code>::before</code> 和 <code>::after</code> 来替代空的 HTML 标签元素。它们之间的层级关系如下：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c00c697acefa4b0480e0a63a1a680384~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p>`,23),F={href:"https://codepen.io/airen/full/RwgVOYb",target:"_blank",rel:"noopener noreferrer"},Q=l(`<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c1eab26d8926438d9822ec7d6aa98380~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>实现这个效果关键点是在 <code>li::before</code> 和 <code>li::after</code> 层，因为 <code>li</code> 层是一个纯色，<code>img</code> 层就是一个图片元素。这里使用了 CSS 的圆锥渐变 <code>conic-gradient()</code> 来绘制 <code>li::before</code> 和 <code>li::after</code> 层：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>li {
    background-color: #eebc1f;
}

li::before { 
    background: conic-gradient(#eebc1f 25%, #068d7e 0 50%, #eebc1f 0) 100% 100% / 180% 180%; 
} 

li::after { 
    background: conic-gradient(#eebc1f 75%, #068d7e 0) 0 0 / 180% 180%; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a627aa5114774dd4924f2e30f4970e69~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>注意，它们的大小都是 <code>1:1</code> 的，你可以使用 <code>aspect-ratio: 1</code> ，根据元素宽度实现一个正方形，并且放置 <code>45deg</code> 就能实现类似上图的效果。但这还是不够的，我们还需要使用 <code>clip-path</code> 对 <code>li::before</code> 和 <code>li::after</code> 做一些裁剪，不然会遮盖住产品图 <code>img</code> ：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>li::before { 
    clip-path: polygon(0 0, 100% 0, 100% 20%, 20% 20%, 20% 100%, 0 100%); 
} 

li::after { 
    clip-path: polygon(80% 20%, 100% 0, 100% 100%, 0% 100%, 20% 80%, 80% 80%); 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d1bffa2589b45418bc27349e194425f~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>将它们合成在一起就得到我们想要的效果：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/20d24036f084485596219383511ceea8~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p>`,9),Z={href:"https://codepen.io/airen/full/vYNdrLL",target:"_blank",rel:"noopener noreferrer"},$=i("p",null,[e("注意，不管是编号 ② 还是编号 ⑨ ，单个卡片的层级都是在同一个网格项目中子元素，所以层堆效果采用的还是绝对定位实现的。不过你可以考虑使用子网格来实现同等的效果。这里采用绝对定位实现 "),i("code",null,"z"),e(" 轴堆叠效果，是因为它们在同一个容器中，而容器的布局是由网格构成，不会因为容器位置受到影响。相对于子网格而言，要更简便，但也不失灵活性和适配性。")],-1),U=i("p",null,"最终你将看到的效果如下：",-1),ii=i("p",null,[i("strong",null,"编号 ②"),e(" :")],-1),ei=i("p",null,[i("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f0a2fefee3264c51a0664dba5dc06d61~tplv-k3u1fbpfcp-zoom-1.image",alt:"img"})],-1),ni={href:"https://codepen.io/airen/full/dyKddzV",target:"_blank",rel:"noopener noreferrer"},di=i("p",null,[i("strong",null,"编号 ⑨"),e(" ：")],-1),li=i("p",null,[i("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d80930e6e2a54a15a4b7308890b9e6b4~tplv-k3u1fbpfcp-zoom-1.image",alt:"img"})],-1),si={href:"https://codepen.io/airen/full/wvXyyqR",target:"_blank",rel:"noopener noreferrer"},ri=l('<p><strong>作业</strong> ，使用 CSS 网格布局技术实现下图时间轴效果：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ea1cb27cf7242649456bd10a6dff666~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><h2 id="剪贴簿布局-scrapbook-layout" tabindex="-1"><a class="header-anchor" href="#剪贴簿布局-scrapbook-layout" aria-hidden="true">#</a> 剪贴簿布局（Scrapbook Layout）</h2><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/62b633ea9b9f4cdaa9d533e242ee2fec~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>上图中的效果是不是很像贴满标签的标签簿（或墙）：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f659f996dcf4e8784f4db9dd2ee219c~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>我把这种布局效果称之为<strong>剪贴簿布局（Scrapbook Layout）</strong> ，不过这里不会花时间来阐述什么是“剪贴簿布局”。将会介绍实现类似剪贴簿布局效果的新的布局方式，这种新的布局方式也是基于网格布局的，只不过它被称为<strong>复合网格布局</strong> 。</p>',7),ai=i("strong",null,"State of the browser",-1),ci={href:"https://2019.stateofthebrowser.com/speakers/andy-clarke/",target:"_blank",rel:"noopener noreferrer"},vi={href:"https://www.smashingmagazine.com/2019/07/inspired-design-decisions-pressing-matters/",target:"_blank",rel:"noopener noreferrer"},ui=l(`<p>在前面课程中所涉及到的网格，大多数都是类似于我们熟知的标准网格，比如 <code>12</code> 列或 <code>24</code> 列网格，它们一般情况下具有相同的<strong>列宽</strong>和<strong>列间距。<strong>而 @Andy Clarke 所说的复合网格是</strong>由两个或多个网格分层创建的</strong> ，类似于将五列网格叠加到四列网格上的并列排列所产生的有节奏图案，并且比规则网格具有更多的动态布局可能性。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/47a88a42d75e4103a41086784c54ceca~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>如果你仔细观察，你应该会注意到复合网格是如何将你的设计引向与 <code>12</code> 列对称列不同的方向的。如上图所示，通过在一个四列网格上叠加了一个五列的网格，将创建一个八列的网格，而且这复合网格的列轨道尺寸是 <code>4fr 1fr 3fr 2fr 2fr 3fr 1fr 4fr</code> ，即：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>.composite-grid {
    grid-template-columns: 4fr 1fr 3fr 2fr 2fr 3fr 1fr 4fr;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>fr</code> 单位可以很好地将复合网格转换为 CSS 网格。你可能会说，多个网格叠加重新合成出来的新网格（也就是复合网格）和普通网格并没有两样呀。是的，这从心理学和技术角度来说，<strong>尽管使用复合网格，也完全有可能构建一个非常普通的布局</strong> 。比如 stuffandnonsense.co.uk 首页中的一部分：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09ae43f6c49a4139a3726b6cca7a7e79~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>采用的模式就是 <code>6 | 1 | 4 | 3 | 3 | 4 | 1 | 6</code> ，即：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>.grid {
    grid-template-columns: 6fr 1fr 4fr 3fr 3fr 4fr 1fr 6fr;
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),oi={href:"https://www.smashingmagazine.com/2019/07/inspired-design-decisions-pressing-matters/",target:"_blank",rel:"noopener noreferrer"},ti=i("p",null,[i("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3125a851bda0466ea8dd8195e7a40b9d~tplv-k3u1fbpfcp-zoom-1.image",alt:"img"})],-1),mi=i("p",null,"虽然复合网格这想法在 Web 布局中很有创意，也能更好地创建出不是对称性的网格，但在生成新的网格轨道数量和尺寸，对于 Web 开发者来说是额外的成本。尤其是制作复杂的网格时，计算它们的过程更复杂，还有可能是个障碍。",-1),bi={href:"https://codepen.io/michellebarker/full/zYOMYWv",target:"_blank",rel:"noopener noreferrer"},pi=i("code",null,"10",-1),gi=i("code",null,"grid-template-columns",-1),fi=i("p",null,[i("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c86d3e2fb54849a8843091fc2df6fbd7~tplv-k3u1fbpfcp-zoom-1.image",alt:"img"})],-1),hi={href:"https://codepen.io/michellebarker/full/zYOMYWv",target:"_blank",rel:"noopener noreferrer"},Si=l(`<p>你可能已经看到了，一个 <code>4</code> 列网格和一个 <code>6</code> 列网格合成，生成的复合网格的 <code>grid-template-columns</code> 值是 <code>2fr 1fr 1fr 2fr 2fr 1fr 1fr 2fr</code>。</p><p>另外，你可以借助 CSS 自定义属性，把你认为是常用的复合网格存为一个自定义属性，比如：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>:root {
    --grid-2-3: 2fr 1fr 1fr 2fr;
    --grid-2-5: 2fr 2fr 1fr 1fr 2fr 2fr;
    --grid-2-7: 2fr 2fr 2fr 1fr 1fr 2fr 2fr 2fr;
    --grid-2-9: 2fr 2fr 2fr 2fr 1fr 1fr 2fr 2fr 2fr 2fr;
    
    --grid-3-4: 3fr 1fr 2fr 2fr 1fr 3fr;
    --grid-3-5: 3fr 2fr 1fr 3fr 1fr 2fr 3fr;
    --grid-3-7: 3fr 3fr 1fr 2fr 3fr 2fr 1fr 3fr 3fr;
    --grid-3-8: 3fr 3fr 2fr 1fr 3fr 3fr 1fr 2fr 3fr 3fr;
    --grid-3-10: 3fr 3fr 3fr 1fr 2fr 3fr 3fr 2fr 1fr 3fr 3fr 3fr;
    
    --grid-4-5: 4fr 1fr 3fr 2fr 2fr 3fr 1fr 4fr;
    --grid-4-6: 2fr 1fr 1fr 2fr 2fr 1fr 1fr 2fr;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在你对复合网格可能有了一个基础认识，接下来我们就使用复合网格来构建像下图这样的剪贴簿布局效果：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/884ca69cf6fc4543b64d3485e3457022~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p>`,5),yi={href:"https://codepen.io/airen/full/poKLjBr",target:"_blank",rel:"noopener noreferrer"},ki=l(`<p>在这个布局效果中，采用了 <code>5</code> 列网格与 <code>6</code> 网格的合成：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7657a914735848248005be2d1e7ba847~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>即：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>.grid {
    --grid-5-6: 5fr 1fr 4fr 2fr 3fr 3fr 2fr 4fr 1fr 5fr;
    display: grid;
    grid-template-columns: var(--grid-5-6);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从效果图中不难发现，相邻两图片之间有重叠，为了控制这个重叠部分的大小，可以使用 CSS 自定义属性来设置，比如 <code>--overlap</code> ：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c37aebaa8c284f268c91ed0e86cdf4e7~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>就这个示例网格来说，网格列轨道数量和尺寸都定义好了，关键是行网格轨道的数量和尺寸。由于我们无法提前知道网格中的网格项目有多少，为此便于网格自行扩展。使用了 <code>grid-template-rows</code> 和 <code>grid-auto-rows</code> 来定义网格行轨道的尺寸：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>.grid {
    --grid-5-6: 5fr 1fr 4fr 2fr 3fr 3fr 2fr 4fr 1fr 5fr;
    --overlap: 6rem;
    --verticalPadding: 2rem;
    display: grid;
    grid-template-columns: var(--grid-5-6);
    grid-template-rows: auto 3rem;
    grid-auto-rows: 
        minmax(var(--verticalPadding), auto) 
        minmax(0, auto) 
        minmax(var(--verticalPadding), auto) 
        var(--overlap);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，每一张图片都有一个简短的文字描述，在文字的上方和下方要有一定的空间，避免文字上下图片重叠或碰撞。这意味着在文字上方和下方添加一个网格行，示例中使用 <code>--verticalPadding</code> 来定义其大小。这样一来，你将得到像下面这样的一个网格：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f0f3232cbf404eea9acc23f493b2110e~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>定义好网格之后，就可以使用 <code>grid-row</code> 、<code>grid-column</code> 或 <code>grid-area</code> 来放置网格项目了。在这个示例中，每个图片至少要跨越 <code>4</code> 行，顶部有重叠的图片需要越 <code>5</code> 行：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/21b5ef81d29e4cab8b0e08429c33238d~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p><p>注意，你可以根据自己设计的需要来调整跨越的行数。正如上图所示，图片对应的文字尽可能地放在离顶部和底部图片有一个行的网格轨道。</p><p>示例最终代码如下：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>.grid {
    --verticalPadding: 2rem;
    --overlap: 6rem;
    --grid-5-6: 5fr 1fr 4fr 2fr 3fr 3fr 2fr 4fr 1fr 5fr;
    display: grid;
    grid-template-columns: var(--grid-5-6);
    grid-template-rows: auto 3rem;
    grid-auto-rows: 
        minmax(var(--verticalPadding), auto) 
        minmax(0, auto)
        minmax(var(--verticalPadding), auto) 
        var(--overlap);
    gap: 1rem;
    align-items: center;
}

header {
    grid-column: 1 / -2;
    grid-row: 1 / span 2;
}

figure:nth-of-type(1) {
    grid-column: span 5 / -1;
}

figure:nth-of-type(2) {
    grid-column: 1 / span 7;
}

figure:nth-of-type(3) {
    grid-column: span 5 / -2;
}

figure:nth-of-type(4) {
    grid-column: 1 / span 6;
}

figure:nth-of-type(5) {
    grid-column: span 6 / -1;
}

figure:nth-of-type(6) {
    grid-column: 1 / span 7;
}

figure:nth-of-type(2n + 1) {
    grid-row-end: span 5;
}

figure:nth-of-type(2n) {
    grid-row-end: span 4;
}

figure:nth-of-type(1) {
    grid-row-start: 2;
}

figure:nth-of-type(2) {
    grid-row-start: 6;
}

figure:nth-of-type(3) {
    grid-row-start: 9;
}

figure:nth-of-type(4) {
    grid-row-start: 13;
}

figure:nth-of-type(5) {
    grid-row-start: 16;
}

figure:nth-of-type(6) {
    grid-row-start: 20;
}

p:first-of-type {
    grid-column: 3 / span 4;
    grid-row: 4;
}

p:nth-of-type(2) {
    grid-column: span 4 / -2;
    grid-row: 8;
}

p:nth-of-type(3) {
    grid-column: 2 / span 5;
    grid-row: 11;
}

p:nth-of-type(4) {
    grid-row: 14;
    grid-column: span 6 / -2;
}

p:nth-of-type(5) {
    grid-row: 18;
    grid-column: span 4 / -6;
}

p:last-of-type {
    grid-row: 22;
    grid-column: span 4 / -2;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/54975980195048cba472e99ca6f76450~tplv-k3u1fbpfcp-zoom-1.image" alt="img"></p>`,16),_i={href:"https://codepen.io/airen/full/poKLjBr",target:"_blank",rel:"noopener noreferrer"},Ci=l('<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>在这节课程中，我们主要介绍了如何使用 CSS 网格来构建一些具有创意性的 Web 布局，比如<strong>杂志报刊</strong> 、<strong>动漫（故事画）</strong> 、<strong>画报（海报）</strong> 、<strong>堆叠</strong>和<strong>剪贴簿布局</strong> 等。文中提到的示例只是其中的一小部分，事实上，使用 CSS 网格布局技术，加上你的创意，可以构建出与众不同的 Web 布局。</p><p>如果你感兴趣的话，不妨发挥你的创意，然后立马动手使用 CSS 网格布局技术，构建出更有创意的 Web 布局！</p>',3);function wi(xi,ji){const n=r("ExternalLinkIcon");return a(),c("div",null,[u,i("blockquote",null,[i("p",null,[e("Demo 地址："),i("a",o,[e("https://codepen.io/airen/full/qBKpJRX"),d(n)])])]),t,i("blockquote",null,[i("p",null,[e("Demo 地址："),i("a",m,[e("https://codepen.io/airen/full/XWYVoMw"),d(n)])])]),b,p,g,f,h,S,i("blockquote",null,[i("p",null,[e("特别声明：该插图来自于 @Andy Clarke 的 《"),i("a",y,[e("Art Direction for the Web"),d(n)]),e("》一书")])]),k,i("blockquote",null,[i("p",null,[e("Demo 地址： "),i("a",_,[e("https://codepen.io/airen/full/QWxaYYj"),d(n)]),e(" （"),i("strong",null,[e("特别声明：该插图来自于 @Andy Clarke 的《"),i("a",C,[e("Art Direction for the Web"),d(n)]),e("》一书")]),e(" ！）")])]),w,i("blockquote",null,[i("p",null,[e("Demo 地址： "),i("a",x,[e("https://codepen.io/airen/full/NWzygOd"),d(n)])])]),j,q,z,W,i("blockquote",null,[i("p",null,[e("上图来 Fork 自"),i("a",M,[e("@Morten Rand-Hendriksen 写的 Demo"),d(n)]),e("!")])]),L,T,i("blockquote",null,[i("p",null,[e("Demo 地址： "),i("a",H,[e("https://codepen.io/airen/full/MWvyGWp"),d(n)])])]),Y,i("p",null,[e("事实上，基于该原理，稍微发挥你的创意，同样是展示产品，可以有更好的创意。比如 "),i("a",D,[e("@Andy Barefoot"),d(n)]),e(" 在"),i("a",B,[e("他的个人网站"),d(n)]),e(" 和 "),i("a",P,[e("Codepen"),d(n)]),e(" 上提供了很多有创意的响应式布局效果。")]),G,i("ul",null,[i("li",null,[e("①："),i("a",R,[e("Technical Product Grid"),d(n)]),e("；")]),i("li",null,[e("②："),i("a",V,[e("Responsive Product Grid with layered background"),d(n)]),e("；")]),i("li",null,[e("③："),i("a",N,[e("Grid of Thrones (Complete)"),d(n)]),e("；")]),i("li",null,[e("④："),i("a",A,[e("CSS Grid Responsive Perspective layout"),d(n)]),e("；")]),i("li",null,[e("⑤："),i("a",X,[e("Responsive Stacked Cubes - CSS Grid"),d(n)]),e("；")]),i("li",null,[e("⑥："),i("a",K,[e("Tessellations eCommerce"),d(n)]),e("；")]),i("li",null,[e("⑦："),i("a",I,[e("Isometric eCommerce CSS Grid"),d(n)]),e("；")]),i("li",null,[e("⑧："),i("a",O,[e("Skewed Responsive eCommerce CSS Grid"),d(n)]),e("；")]),i("li",null,[e("⑨："),i("a",E,[e("Responsive CSS Grid - Books"),d(n)]),e("。")])]),J,i("p",null,[e("我们以编号 ⑨ 为例，因为编号 ② 比较简单（编号 ② 的"),i("a",F,[e("单个 li 的堆叠效果"),d(n)]),e("）。")]),Q,i("blockquote",null,[i("p",null,[e("Demo 地址："),i("a",Z,[e("https://codepen.io/airen/full/vYNdrLL"),d(n)])])]),$,U,ii,ei,i("blockquote",null,[i("p",null,[e("Demo 地址："),i("a",ni,[e("https://codepen.io/airen/full/dyKddzV"),d(n)])])]),di,li,i("blockquote",null,[i("p",null,[e("Demo 地址："),i("a",si,[e("https://codepen.io/airen/full/wvXyyqR"),d(n)])])]),ri,i("blockquote",null,[i("p",null,[e("复合网格这个概念是由 @Andy Clarke 提出的。他在 2019 年的 "),ai,e(" 大会分享《"),i("a",ci,[e("Inspired by CSS Grid"),d(n)]),e("》 主题中，谈到了如何将平面设计的想法应用到 Web 上以创建引人注目的布局，以及 CSS Grid 如何制作有创意的布局。其中一个原则是使用复合网格。你还可以在 @Andy Clarke 的《"),i("a",vi,[e("Inspired Design Decisions: Pressing Matters"),d(n)]),e("》博文中进一步了解复合网格、模块化网格和窄列是如何改变你对 Web 布局的看法的。")])]),ui,i("p",null,[e("虽然它看上去和前面课程中所介绍的网格没啥区别，但使用更有趣的网格可以激发创造力！正如 @Andy Clarke 的《"),i("a",oi,[e("Inspired Design Decisions: Pressing Matters"),d(n)]),e("》文章中所说的一样，可以创建出更创意的 Web 布局。")]),ti,mi,i("p",null,[e("幸运的是，"),i("a",bi,[e("@Michelle Barker 在 Codepen 上提供了一个生成复合网格的小工具"),d(n)]),e("，只需要输入不同网格的列数（每个网格最多 "),pi,e(" 列），然后点击生成器按钮就可以将两个网格组合起来，生成一个复合网格。这个小工具会生成 "),gi,e(" 属性所需要的值：")]),fi,i("blockquote",null,[i("p",null,[e("复合网格生成器："),i("a",hi,[e("https://codepen.io/michellebarker/full/zYOMYWv"),d(n)])])]),Si,i("blockquote",null,[i("p",null,[e("Demo 地址："),i("a",yi,[e("https://codepen.io/airen/full/poKLjBr"),d(n)])])]),ki,i("blockquote",null,[i("p",null,[e("Demo 地址： "),i("a",_i,[e("https://codepen.io/airen/full/poKLjBr"),d(n)])])]),Ci])}const zi=s(v,[["render",wi],["__file","index-19.html.vue"]]);export{zi as default};
