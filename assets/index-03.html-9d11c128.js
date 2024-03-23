import{_ as p,M as o,p as c,q as i,R as n,t as a,N as t,a1 as e}from"./framework-e8cb8151.js";const l="/assets/image-20230806205912732-b7ba1dfe.png",u="/assets/image-20230806230153730-6dd117d1.png",r="/assets/image-20230806230234643-b5aa0fbf.png",d="/assets/image-20230806232522483-10509aba.png",k="/assets/image-20230806232928201-05c6a968.png",m="/assets/image-20230806233207228-a78ba8ad.png",h={},v=e('<h1 id="_03-渲染优化" tabindex="-1"><a class="header-anchor" href="#_03-渲染优化" aria-hidden="true">#</a> 03- 渲染优化</h1><blockquote><p>与浏览器为友，共进退</p></blockquote><h2 id="_01-浏览器渲染原理和关键渲染路径" tabindex="-1"><a class="header-anchor" href="#_01-浏览器渲染原理和关键渲染路径" aria-hidden="true">#</a> 01: 浏览器渲染原理和关键渲染路径</h2><blockquote><p>【大厂前端面试必考】</p></blockquote><h3 id="浏览器的渲染流程" tabindex="-1"><a class="header-anchor" href="#浏览器的渲染流程" aria-hidden="true">#</a> 浏览器的渲染流程</h3><p><img src="'+l+'" alt="image-20230806205912732"></p><h3 id="浏览器构建对象模型" tabindex="-1"><a class="header-anchor" href="#浏览器构建对象模型" aria-hidden="true">#</a> 浏览器构建对象模型</h3><ul><li><p>构建 DOM 对象</p><p>HTML =&gt; DOM</p></li><li><p>构建 CSSOM 对象</p><p>CSS =&gt; CSSOM</p></li></ul><h3 id="浏览器构建渲染树" tabindex="-1"><a class="header-anchor" href="#浏览器构建渲染树" aria-hidden="true">#</a> 浏览器构建渲染树</h3><p>DOM + CSSOM =&gt; Render Tree</p><p>Javascript =&gt; style =&gt; layout =&gt; paint =&gt; Composite</p><h2 id="_02-回流与重绘-如何避免布局抖动" tabindex="-1"><a class="header-anchor" href="#_02-回流与重绘-如何避免布局抖动" aria-hidden="true">#</a> 02：回流与重绘, 如何避免布局抖动</h2>',12),b={href:"https://juejin.cn/post/6844904083212468238",target:"_blank",rel:"noopener noreferrer"},f=e('<h3 id="布局与绘制" tabindex="-1"><a class="header-anchor" href="#布局与绘制" aria-hidden="true">#</a> 布局与绘制</h3><ul><li>渲染树只包含网页需要的节点</li><li>布局计算每个节点精确的位置和大小 - “盒模型”</li><li>绘制是像素画每个节点的过程</li></ul><h3 id="影响回流-重排-的操作" tabindex="-1"><a class="header-anchor" href="#影响回流-重排-的操作" aria-hidden="true">#</a> 影响回流(重排)的操作</h3><ul><li>添加、删除元素</li><li>操作 styles</li><li>display: none</li><li>offsetLeft、scrollTop、clientWidth</li><li>移动元素位置</li><li>修改浏览器大小，字体大小</li></ul><h3 id="避免-layout-thrashing" tabindex="-1"><a class="header-anchor" href="#避免-layout-thrashing" aria-hidden="true">#</a> 避免 layout thrashing</h3><ul><li>避免回流，尽量批量操作</li><li>读写分离</li></ul><h2 id="_03-使用fastdom【防止布局抖动的利器】" tabindex="-1"><a class="header-anchor" href="#_03-使用fastdom【防止布局抖动的利器】" aria-hidden="true">#</a> 03: 使用FastDom【防止布局抖动的利器】</h2>',7),g={href:"https://github.com/wilsonpage/fastdom",target:"_blank",rel:"noopener noreferrer"},_=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fastdom<span class="token punctuation">.</span><span class="token function">measure</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;measure&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fastdom<span class="token punctuation">.</span><span class="token function">mutate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mutate&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fastdom<span class="token punctuation">.</span><span class="token function">measure</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;measure&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fastdom<span class="token punctuation">.</span><span class="token function">mutate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mutate&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 输出结果</span>
measure
measure
mutate
mutate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),x={href:"http://wilsonpage.github.io/fastdom/examples/animation.html",target:"_blank",rel:"noopener noreferrer"},w=e(`<h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3><p>业务场景：给页面上的card设置图片宽度。</p><h4 id="未使用fastdom" tabindex="-1"><a class="header-anchor" href="#未使用fastdom" aria-hidden="true">#</a> 未使用fastDOM</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 获取所有的卡片</span>
<span class="token keyword">let</span> cards <span class="token operator">=</span> documentdocument<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&quot;MuiCardMedia&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 轮循更新卡片的图片宽度</span>
<span class="token keyword">const</span> <span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">timestamp</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cards<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// 获取offsetTop,设置新的width</span>
		cards<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span>cards<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>offsetTop <span class="token operator">+</span> timestamp <span class="token operator">/</span> <span class="token number">1000</span> <span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">500</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>update<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码会不停的回流和重绘。</p><p>在performance中会看到类似下图中的很多的长任务。</p><p><img src="https://img-blog.csdnimg.cn/202102261456506.png" alt="在这里插入图片描述"></p><h4 id="使用fastdom" tabindex="-1"><a class="header-anchor" href="#使用fastdom" aria-hidden="true">#</a> 使用fastDOM</h4><p><strong>使用npm安装或者直接script引入到代码中</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 获取所有的卡片</span>
<span class="token keyword">let</span> cards <span class="token operator">=</span> documentdocument<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&quot;MuiCardMedia&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 轮循更新卡片的图片宽度</span>
<span class="token keyword">const</span> <span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">timestamp</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cards<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
		fastdom<span class="token punctuation">.</span><span class="token function">measure</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// 读取top值</span>
     <span class="token keyword">let</span> top <span class="token operator">=</span> cards<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>offsetTop<span class="token punctuation">;</span>
      <span class="token comment">// 写入新的width值</span>
      fastdom<span class="token punctuation">.</span><span class="token function">mutate</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cards<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span> top <span class="token operator">+</span> timestamp <span class="token operator">/</span> <span class="token number">1000</span> <span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">500</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>update<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次查看 performance 后，就可以看到已经没有警告了</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><ul><li>什么是 FastDom</li><li>如何使用 FastDom 的 APIs</li></ul><h2 id="_04-复合线程与图层【深入渲染流水线的最后一站】" tabindex="-1"><a class="header-anchor" href="#_04-复合线程与图层【深入渲染流水线的最后一站】" aria-hidden="true">#</a> 04: 复合线程与图层【深入渲染流水线的最后一站】</h2><h3 id="符合线程做什么" tabindex="-1"><a class="header-anchor" href="#符合线程做什么" aria-hidden="true">#</a> 符合线程做什么</h3><ul><li>将页面拆分图层进行绘制在进行复合</li><li>利用 DevTools 了解网页的图层拆分情况</li><li>哪些样式仅仅影响复合线程：使用 transform、opactity</li></ul><p><img src="`+u+'" alt="image-20230806230153730"></p><p><img src="'+r+'" alt="image-20230806230234643"></p><h2 id="_05-避免重绘-repain【必学-加速页面呈现】" tabindex="-1"><a class="header-anchor" href="#_05-避免重绘-repain【必学-加速页面呈现】" aria-hidden="true">#</a> 05: 避免重绘 repain【必学，加速页面呈现】</h2><p>尽可能动画时候使用 transform 并把要做动画的元素单独设置为一个图层上，使用属性 will-change: true</p><h3 id="减少重绘的方案" tabindex="-1"><a class="header-anchor" href="#减少重绘的方案" aria-hidden="true">#</a> 减少重绘的方案</h3><ul><li>利用 DevTools 是被 paint 的瓶颈</li><li>利用 will-change 创建新的图层（需要考虑有没有必要创建图层，不要滥用）</li><li>尽量使用 transform 或者 opacity 来达到动画，提高渲染效率的目的</li></ul><h2 id="_06-高频事件防抖【解救页面卡顿的秘药】" tabindex="-1"><a class="header-anchor" href="#_06-高频事件防抖【解救页面卡顿的秘药】" aria-hidden="true">#</a> 06: 高频事件防抖【解救页面卡顿的秘药】</h2><p>使用 <code>requestAnimationFrame</code></p><p>每一帧的生命周期</p><p><img src="'+d+'" alt="image-20230806232522483"></p><h2 id="_07-react-时间调度实现【中高级前端需要了解的react调度原理】" tabindex="-1"><a class="header-anchor" href="#_07-react-时间调度实现【中高级前端需要了解的react调度原理】" aria-hidden="true">#</a> 07: React 时间调度实现【中高级前端需要了解的React调度原理】</h2>',27),y={href:"https://zhuanlan.zhihu.com/p/384525799",target:"_blank",rel:"noopener noreferrer"},M=n("h3",{id:"基本原理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基本原理","aria-hidden":"true"},"#"),a(" 基本原理")],-1),q=n("ul",null,[n("li",null,"requestIdleCallback 的问题"),n("li",null,"通过 rAF 模拟 rIC")],-1),C=n("p",null,[n("img",{src:k,alt:"image-20230806232928201"})],-1),j=n("p",null,[n("img",{src:m,alt:"image-20230806233207228"})],-1);function D(S,T){const s=o("ExternalLinkIcon");return c(),i("div",null,[v,n("p",null,[n("a",b,[a("重排(reflow)和重绘(repaint)"),t(s)])]),f,n("p",null,[n("a",g,[a("https://github.com/wilsonpage/fastdom"),t(s)])]),_,n("ul",null,[n("li",null,[n("a",x,[a("Animation example"),t(s)]),a(" 官方文档里面的例子也可以展示出使用了 fastDom 后的优化效果")])]),w,n("p",null,[n("a",y,[a('React源码细读-深入了解scheduler"时间管理大师"'),t(s)])]),M,q,C,j])}const F=p(h,[["render",D],["__file","index-03.html.vue"]]);export{F as default};
