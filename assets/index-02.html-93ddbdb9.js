import{_ as t,M as p,p as e,q as c,R as n,t as s,N as o,a1 as l}from"./framework-e8cb8151.js";const i={},u=n("h1",{id:"vue-组件间的事件透传-02-vue2-x",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-组件间的事件透传-02-vue2-x","aria-hidden":"true"},"#"),s(" Vue 组件间的事件透传 (02)--Vue2.x")],-1),r=n("h2",{id:"官方文档",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#官方文档","aria-hidden":"true"},"#"),s(" 官方文档")],-1),k=n("blockquote",null,[n("p",null,[s("你可能有很多次想要在一个组件的根元素上直接监听一个原生事件。这时，你可以使用 "),n("code",null,"v-on"),s(" 的 "),n("code",null,".native"),s(" 修饰符：")])],-1),d={href:"https://link.juejin.cn?target=https%3A%2F%2Fv2.cn.vuejs.org%2Fv2%2Fguide%2Fcomponents-custom-events.html%23%E5%B0%86%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%88%B0%E7%BB%84%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"},v=l(`<h2 id="父子组件" tabindex="-1"><a class="header-anchor" href="#父子组件" aria-hidden="true">#</a> 父子组件</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// parent.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    我是父组件
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">&#39;./child.vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;parent-demo&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">Child</span><span class="token operator">:</span> Child<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">handleClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;parent&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>


// child.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是子组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;child-index&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;默认name&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;child&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面看到我们在 <code>chiild.vue</code> 中绑定了 <code>click</code> 事件，然后在 <code>parent.vue</code> 中也绑定了 <code>click</code> 事件，那么会是如何执行呢？？？？</p><h2 id="效果" tabindex="-1"><a class="header-anchor" href="#效果" aria-hidden="true">#</a> 效果</h2><p>我们在浏览器中点击子组件时候，触发 log 如下</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/022b61db87fb4ef289d2586198a0b3e4~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=720&amp;h=206&amp;s=22398&amp;e=png&amp;b=ffffff" alt="image.png"></p><p>我们发现它只触发了子组件的事件，并没有触发在父组件中绑定的 click 事件 ？？？</p><p>如果我想在父组件中直接绑定 click 事件，该如何处理？</p><ul><li>一个是通过子组件属性监听，然后 emit 出去，</li><li>一个就是通过上面文档中提到的 <code>native</code> 修饰符的</li></ul><h2 id="native-修饰符" tabindex="-1"><a class="header-anchor" href="#native-修饰符" aria-hidden="true">#</a> native 修饰符</h2><p>我们修改 <code>parent.vue</code> 中的代码，最后如下</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    我是父组件
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">@click.native</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child</span><span class="token punctuation">&gt;</span></span> // 注意：这里添加了 native 修饰符
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">&#39;./child.vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;parent-demo&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">Child</span><span class="token operator">:</span> Child<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">handleClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;parent&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开浏览器控制台，点击子组件，效果如下</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/91d3a2b4cf1542af8820f465964e3c81~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=863&amp;h=255&amp;s=27302&amp;e=png&amp;b=ffffff" alt="image.png"></p><p><strong>先触发子组件事件，然后再触发父组件绑定的事件</strong></p><h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h2><ol><li>如果我们想在父组件中，给引入的子组件绑定事件（注意：需要原生支持），可以通过 <strong>.native 修饰符</strong>直接绑定即可</li><li>注意执行顺序：<strong>先执行子组件中先绑定的事件回调，然后再触发父组件中绑定的事件</strong></li></ol>`,17);function m(g,b){const a=p("ExternalLinkIcon");return e(),c("div",null,[u,r,k,n("p",null,[n("a",d,[s("Vu2.x 将原生事件绑定到组件"),o(a)])]),v])}const f=t(i,[["render",m],["__file","index-02.html.vue"]]);export{f as default};
