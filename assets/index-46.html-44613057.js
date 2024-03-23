import{_ as n,p as s,q as a,a1 as e}from"./framework-e8cb8151.js";const p={},t=e(`<h1 id="_46-es6-常用语法" tabindex="-1"><a class="header-anchor" href="#_46-es6-常用语法" aria-hidden="true">#</a> 46-ES6 常用语法</h1><p>ES6 是 ECMAScript 6 的简称。也是 ECMAScript 新标准的一种统称。</p><p>之所以要单独将 ES6 拿出来学习，是因为与之前的版本相比较，它的语法很大程度上改变了我们的编程习惯。虽然在某种程度上来说， ES6 的出现，增加了我们的学习成本。但是它对于前端开发带来的改变是非常令人惊喜的。</p><p>在实践中，大多数前端团队已经将 ES6 全面运用到了工作中。</p><p>ES6 是前端必须掌握的技能。网络上也越来越多的优质资源开始使用 ES6 进行知识分享，包括我们之前的许多案例。</p><p>目前大多数最新版本的浏览器都能够直接支持 ES6 的许多特性。在开发中，我们也能够借助 babel 提供的编译工具，来解决兼容性的问题，这极大的推动了业内前端团队对 ES6 的接受。</p><blockquote><p>ES6 于 2015 年 6 月正式发布，因此又被称为 ES2015，并在 2016 年进行了修改。在未来会每一年命名一个版本，如 2017 年发布的版本，会称为 ES7，或者 ES2017，依次往后类推。</p></blockquote><p>我们可以使用 babel 官方提供的在线编译工具，将 ES6+ 编译为对应的 ES5 代码。观察两者的不同有助于深入理解 ES6+。</p><p>https://babeljs.io/repl</p><h2 id="新的声明方式-let-const" tabindex="-1"><a class="header-anchor" href="#新的声明方式-let-const" aria-hidden="true">#</a> <strong>新的声明方式 let/const</strong></h2><p>在 ES5 中，我们使用 <code>var</code> 来声明一个变量。</p><p>新的变量声明方式带来了一些不一样的特性。其中最重要的就是具备了块级作用域。</p><p>通过两个简单的例子就能说明</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">20</span>
<span class="token punctuation">}</span>

<span class="token comment">// Uncaught ReferenceError: a is not defined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token comment">// ES5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span>
<span class="token comment">// ES6</span>
<span class="token comment">// Uncaught ReferenceError: Cannot access &#39;a&#39; before initialization</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以看到，</p><p><code>var</code> 声明一个变量时，声明被提前，并且会得到一个值为 <code>undefined</code> 的赋值。</p><p><code>let</code> 声明一个变量时，声明被提前，但不会得到任何赋值。因此无法访问，当我们试图访问没有赋值的变量时，报错信息为 Cannot access &#39;a&#39; before initialization。</p><p>这就是<strong>暂时性死区</strong></p><p><code>let/const</code> 声明的暂时性死区，需要与自身形成的块级作用域结合起来理解。例如下面的例子，报错信息仍然一样</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// Cannot access &#39;a&#39; before initialization</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">30</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，在我们的实践代码中，需要注意这些异常，尽量将声明主动放置于代码的最前面。</p><p>我们知道新的语法中，会使用 <code>let/const</code> 取代 var。那么一个新的问题就会出现：什么时候使用 <code>let</code>，什么时候使用 <code>const</code> ？</p><p><strong>我们常常使用 let 来声明一个引用可以被改变的变量，而使用 const 来声明一个引用不能被改变的变量。</strong></p><p>引用不能被改变的变量对应的值，可以是常量。也可以是引用数据类型。</p><p>我们会使用 let 来声明一个值总是会改变的变量</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">20</span>
a <span class="token operator">=</span> <span class="token number">30</span>
a <span class="token operator">=</span> <span class="token number">40</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们会使用 const 来声明一个常量。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.1415</span>
<span class="token keyword">const</span> <span class="token constant">MAX_LENGTH</span> <span class="token operator">=</span> <span class="token number">100</span>

<span class="token comment">// 试图改变常量的值</span>
<span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3</span> <span class="token comment">// Untaught TypeError: Assignment to constant variable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除此之外，当我们声明一个引用类型的数据时，也会使用 const。尽管我们可能会改变该数据的值，但是必须保持它的引用不变。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
a<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// [1]</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
b<span class="token punctuation">.</span>max <span class="token operator">=</span> <span class="token number">20</span>
b<span class="token punctuation">.</span>min <span class="token operator">=</span> <span class="token number">0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// { max: 20, min: 0 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大家可以领会一个这个例子。想想能不能这样用？想完之后，在浏览器中运行试试看吧。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> temp <span class="token operator">=</span> item <span class="token operator">+</span> <span class="token number">1</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="箭头函数-arrow-function" tabindex="-1"><a class="header-anchor" href="#箭头函数-arrow-function" aria-hidden="true">#</a> <strong>箭头函数 arrow function</strong></h2><p>箭头函数是一个更为简洁的函数写法，我们先看看基本语法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// es5</span>
<span class="token keyword">var</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>

<span class="token comment">// es6 箭头函数写法，当函数直接被return时，可以省略函数体的括号</span>
<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b

<span class="token comment">// es5</span>
<span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">30</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>

<span class="token comment">// es6</span>
<span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">20</span>
  <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">30</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，箭头函数只能替换函数表达式，也就是使用 var/let/const 声明的函数。而直接使用 function 声明的函数是不能使用箭头函数替换掉的。</p><p>除了写法的不同，箭头函数还有一个非常重要的特性需要我们掌握。</p><p>学习过之前的 this 专题的话我想大家应该能够知道，函数内部的 this 指向，与它的调用者有关。或者使用 call/apply/bind 也可以修改内部的 this 指向。</p><p>通过下面的例子简单复习一下。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;TOM&#39;</span>
<span class="token keyword">var</span> <span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Alex&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getName</span><span class="token operator">:</span> getName<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> other <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Jone&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 独立调用，this 指向 undefined，并自动转向 window</span>
person<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 被 person 调用，this指向 person</span>
<span class="token function">getName</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>other<span class="token punctuation">)</span> <span class="token comment">// call 修改this，指向 other</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>明白了 this 的指向，那么就能够很简单的知道这几个不同的方法调用时会输出什么结果。但是当我们将最初声明的 getName 方法修改为箭头函数的形式，输出结果会发生什么变化呢？我们来看一下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;TOM&#39;</span>

<span class="token comment">// 更改为箭头函数的写法</span>
<span class="token keyword">var</span> <span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Alex&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getName</span><span class="token operator">:</span> getName<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> other <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Jone&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
person<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">getName</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>other<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过运行我们发现，三次调用都输出了 TOM。</p><p>这也正是我要跟大家分享的箭头函数的不同。<strong>箭头函数中的 this，就是声明函数时所处上下文中的 this，并且不会被其他方式所改变。</strong></p><p>或者通俗一点来说，就是箭头函数自身没有 this 属性。</p><p>因此这个例子中，getName 在全局上下文中声明，那么 this 就会指向 window 对象。所以输出的结果全是 TOM。</p><p>在实践中，我们常常会遇到 this 在传递过程中的改变给我们带来的困扰。例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">Mot</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>
<span class="token class-name">Mot</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">constructor</span><span class="token operator">:</span> Mot<span class="token punctuation">,</span>
  <span class="token function-variable function">do</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    document<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">new</span> <span class="token class-name">Mot</span><span class="token punctuation">(</span><span class="token string">&#39;Alex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">do</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子中当我们调用 do 方法时，我们期望点击 document 时，仍然也会输出 ‘Alex’。但是很遗憾，在 onclick 的回调函数中，this 的指向其实已经发生了变化，它指向了 document，因此此时我们肯定就得不到我们想要的结果。通常的解决方案我相信大家应该知道，这里也可以使用箭头函数来避免这样的困扰。</p><p>除此之外，arguments 还有一个需要大家注意的不同。<strong>在箭头函数中，没有 arguments 对象</strong>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment">// 结果输出一个类数组对象</span>
<span class="token comment">/*
[
0: 1,
1: 2,
length: 2,
callee: ƒ (a, b),
Symbol(Symbol.iterator): ƒ values()
]
*/</span>
<span class="token keyword">var</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// arguments is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","index-46.html.vue"]]);export{r as default};
