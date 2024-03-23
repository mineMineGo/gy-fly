import{_ as p,M as t,p as o,q as c,R as n,t as s,N as l,a1 as a}from"./framework-e8cb8151.js";const i={},r=a(`<h1 id="_54-es6-modules" tabindex="-1"><a class="header-anchor" href="#_54-es6-modules" aria-hidden="true">#</a> 54-ES6 Modules</h1><p>Create React App 是一个用于学习 React 的集成环境。与此同时，他也是一个学习 ES6 Modules 的舒适环境。因此为了降低学习成本，我们直接使用该环境来学习 ES6 Moduels 语法。</p><h2 id="_1-创建项目" tabindex="-1"><a class="header-anchor" href="#_1-创建项目" aria-hidden="true">#</a> 1-创建项目</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx create-react-app my-app <span class="token parameter variable">--template</span> typescript
<span class="token builtin class-name">cd</span> my-app
<span class="token function">npm</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>项目启动需要花费一点时间，启动之后，通常浏览器会自动打开一个新的页面运行项目，我们也可以在浏览器中输入 http://localhost:3000 来运行项目。</p><h2 id="_2-认识项目" tabindex="-1"><a class="header-anchor" href="#_2-认识项目" aria-hidden="true">#</a> 2-认识项目</h2><p><strong>package.json 与 yarn.lock</strong></p><p>这两个文件是构建工具需要的配置信息与项目依赖包信息。目前暂时不用过多的考虑他们的用处，等之后大家在深入学习构建工具时自然会明白他们的作用。</p><p><strong>node_modules</strong></p><p>项目依赖包的安装目录。当我们创建项目时，会根据配置文件 package.json 中的依赖包信息把所有需要的插件工具模块等都安装在该目录下。</p><p><strong>public</strong></p><p>用于存放静态文件。主要作用是 html 入口文件的存放。我们也可以存放其他公用的静态资源，如图片，css 文件等。其中的 index.html 就是我们项目的入口 html 文件。</p><p><strong>src</strong></p><p>模块与组件的存放目录。在 create-react-app 创建的项目中，每一个单独的文件都可以被看成一个单独的模块，单独的 image，单独的 css，单独 js 等，而所有的组件都存放于 src 目录中，其中 index.tsx 则是 js 的入口文件。虽然我们并没有在 index.html 中使用 script 标签引入它，但是他的作用就和此一样。</p>`,14),d={href:"https://github.com/yangbo5207/jsCore/tree/master/6.8.1+%E6%A8%A1%E5%9D%97%E5%8C%96%E8%AF%AD%E6%B3%95/my-app",target:"_blank",rel:"noopener noreferrer"},u=a(`<blockquote><p>typescript 可以通过阅读最后的附录章节学习</p></blockquote><blockquote><p>如果你要直接使用我的项目，则需要先使用 <code>npm run install</code> 重新安装依赖才能正常使用</p></blockquote><p>项目中的 <code>src/index.tsx</code> 是项目的入口文件，其他的代码我们先不关注，在 src 目录下创建一个新的模块用于学习。</p><h2 id="_3-创建模块" tabindex="-1"><a class="header-anchor" href="#_3-创建模块" aria-hidden="true">#</a> 3-创建模块</h2><p>一个 js/ts 文件就是一个单独的模块。模块创建的目的，就是让其他模块能够使用该模块的功能。因此，除了主模块，其他的模块都需要抛出接口，以决定该模块中那些能够可以被其他模块使用。</p><p>通过 <code>export</code> 关键字可以对外抛出接口。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> name1 <span class="token operator">=</span> <span class="token string">&#39;TOM&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>export</code> 可以多次使用，抛出多个接口。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// module01.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> name1 <span class="token operator">=</span> <span class="token string">&#39;TOM&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> name2 <span class="token operator">=</span> <span class="token string">&#39;Jake&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们在其他模块引入该模块的接口时，如果只需要其中一个接口</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> name1 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./module01&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是如果我们需要引入该模块中所有的对外接口，一种方式是在大括号中将所有的名称都列出来，另外一种方式就是使用通配符与 as 配合。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> name1<span class="token punctuation">,</span> name2 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./module01&#39;</span>

<span class="token comment">// or 利用别名的方式</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> module01 <span class="token keyword">from</span> <span class="token string">&#39;./module01&#39;</span>
<span class="token comment">// 那么就有</span>
name1 <span class="token operator">=</span> module01<span class="token punctuation">.</span>name1
name2 <span class="token operator">=</span> module01<span class="token punctuation">.</span>name2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还可以通过 <code>export default</code> 来对外提供接口，这种情况下，对外的接口通常都是一个对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 修改module01.js</span>
<span class="token keyword">const</span> name1 <span class="token operator">=</span> <span class="token string">&#39;TOM&#39;</span>
<span class="token keyword">const</span> name2 <span class="token operator">=</span> <span class="token string">&#39;Jake&#39;</span>

<span class="token comment">// ES6对象的简写语法</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name1<span class="token punctuation">,</span>
  name2<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么，在引入模块时的写法我们需要相应的做一些调整。当模块中有 <code>export default</code> 命令抛出接口时，引入模块时就可以直接这样写：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> module01 <span class="token keyword">from</span> <span class="token string">&#39;./module01&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时的 <code>module01</code> 就是 <code>export default</code> 抛出的对象。</p><p>需要注意的是，一个模块中只允许出现一次 <code>export default</code>。</p><p>不过可以同时拥有多个 <code>export</code> 与一个 <code>export default</code>。</p><h3 id="_3-1-创建模块-1" tabindex="-1"><a class="header-anchor" href="#_3-1-创建模块-1" aria-hidden="true">#</a> <strong>3.1 创建模块 1</strong></h3><p>开始尝试使用一些简单的 ts 语法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/person.ts</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string
  <span class="token keyword">private</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Person
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在其他模块使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/index.tsx</span>
<span class="token keyword">import</span> Person <span class="token keyword">from</span> <span class="token string">&#39;./person&#39;</span>

<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-创建模块-2" tabindex="-1"><a class="header-anchor" href="#_3-2-创建模块-2" aria-hidden="true">#</a> <strong>3.2 创建模块 2</strong></h3><p>该案例演示多个 <code>export</code> 与一个 <code>export default</code> 同时存在的情况。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/person2.ts</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this is a function named fn.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello everybody.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string
  <span class="token keyword">private</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Person<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用时，写法如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Person2<span class="token punctuation">,</span> <span class="token punctuation">{</span> fn<span class="token punctuation">,</span> bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./person2&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,30);function k(v,m){const e=t("ExternalLinkIcon");return o(),c("div",null,[r,n("p",null,[s("项目地址："),n("a",d,[s("点这里"),l(e)])]),u])}const g=p(i,[["render",k],["__file","index-54.html.vue"]]);export{g as default};
