import{_ as n,p as s,q as a,a1 as p}from"./framework-e8cb8151.js";const t={},e=p(`<h1 id="_24-纯函数" tabindex="-1"><a class="header-anchor" href="#_24-纯函数" aria-hidden="true">#</a> 24-纯函数</h1><p>相同的输入总会得到相同的输出，并且不会产生副作用的函数，就是纯函数。</p><p>这里需要关注两个重点</p><p><strong>相同的输入总会得到相同的输出</strong></p><p>一个非常简单的例子来说明纯函数与其他函数的不同</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span>

<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  a <span class="token operator">+=</span> b
  <span class="token keyword">return</span> a
<span class="token punctuation">}</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 11</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 12</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 13</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 14</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该例子中，多次调用 add 方法，我们发现，每次的返回结果都不一样。虽然传入的参数每次都是一样的，但是返回结果发生了变化，返回结果无法准确预测，因此此处的 add 方法，就不是纯函数。</p><p>再来一个例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该例子中，相同的输入总能返回同样的值，因此满足了纯函数的定义。</p><p>也就是说，纯函数有一个非常重要的特点，<strong>那就是除了传入的参数之外，不依赖任何外界的信息与状态</strong>。例如下面这个不纯的例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;Jake&#39;</span>

<span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;Hello, &#39;</span> <span class="token operator">+</span> name
<span class="token punctuation">}</span>

<span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Hello, Jake</span>

<span class="token comment">// 当我们有其他需求需要改变name的值</span>
name <span class="token operator">=</span> <span class="token string">&#39;Tom&#39;</span>
<span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Hello, Tom</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样的调用，但是由于 sayHello 函数依赖于外界的 name 变量，因此当外界发生变化时，函数的运行结果就变得不一样。很显然这并不是我们封装函数时希望看到的状况。因为这样的变化无法预测。因此，如果优化上面的例子，那么我们应该把 name 当做一个参数传入，这样我们就能够直观的知道，该函数执行时会输出上面结果。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;Hello, &#39;</span> <span class="token operator">+</span> name
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>纯函数另外一个重要的特点，就是</p><p><strong>不会产生副作用</strong></p><p>副作用的意思，就是产生了额外的影响。例如我们吃了感冒药常常会犯困，或者一些过敏反应，这些都是副作用。我吃感冒药只想要治疗感冒，但是结果犯困和过敏。</p><p>在我们的函数里也是一样，我只想获得函数的最后一项，但是却把函数的最后一项给删除了，这就是副作用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getLast</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getLast_</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> source <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>

<span class="token keyword">var</span> last <span class="token operator">=</span> <span class="token function">getLast</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span> <span class="token comment">// 返回结果4  原数组不变</span>
<span class="token keyword">var</span> last_ <span class="token operator">=</span> <span class="token function">getLast_</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span> <span class="token comment">// 返回结果4 原数据最后一项被删除，产生了副作用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>getLast 与 getLast_ 虽然同样能够获得数组的最后一项值，但是 getLast_ 改变了原数组。而当原始数组被改变，那么当我们再次调用该方法时，得到的结果就会变得不一样。这样不可预测的封装方式，在我们看来是非常糟糕的。它会把我们的数据搞得非常混乱。在 JavaScript 原生支持的数据方法中，也有许多不纯的方法，我们在使用时需要非常警惕，我们要清晰的知道原始数据的改变是否会留下隐患。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> source <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>

source<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 纯函数 返回[2, 3] source不变</span>
source<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 不纯的 返回[2, 3, 4] source被改变</span>

source<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 不纯的</span>
source<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token comment">// 不纯的</span>
source<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 不纯的</span>
source<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 不纯的</span>
source<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 不纯的</span>

<span class="token comment">// 我也不能短时间知道现在source被改变成了什么样子，干脆重新约定一下</span>
source <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>

source<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 纯函数 返回[1, 2, 3, 4, 5, 6, 7] source不变</span>
source<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 纯函数 返回1-2-3-4-5 source不变</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与这种会改变原始数据的函数相比，纯函数明显更加可靠。很显然谁都不希望自己的数据经过几次调用之后就变得一团糟。</p><h2 id="_01-纯函数的可移植性" tabindex="-1"><a class="header-anchor" href="#_01-纯函数的可移植性" aria-hidden="true">#</a> 01-纯函数的可移植性</h2><p>无论在封装一个函数，一个库还是一个组件时，都期望一次封装，多处使用。而纯函数刚好具备这样的特性。</p><p>纯函数不依赖参数之外的值，因此纯函数的依赖非常明确。</p><p>一个页面的 url 里常常会在 &quot;?&quot; 后面带有参数，例如</p><p>https://www.baidu.com/s?tn=baidu&amp;wd=javascript&amp;rsv_sug=1</p><p>应用中常常需要从这段 url 中，获取到某些参数对应的值。例如这个例子中的 &quot;wd&quot; 的值为 javascript。那么想要封装这样一个纯函数我们应该怎么做呢？如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getParams</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> param</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\?</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> search <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token keyword">var</span> array <span class="token operator">=</span> search<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&amp;&#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> tmp <span class="token operator">=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;=&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>tmp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> param<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>tmp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">&#39;https://www.baidu.com/s?tn=baidu&amp;wd=javascript&amp;rsv_sug=1&#39;</span>
<span class="token function">getParams</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token string">&#39;wd&#39;</span><span class="token punctuation">)</span> <span class="token comment">// javascript</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然 getParams 并非完全健壮，但是已经足以体现纯函数可移植的特点。我们可以在任何需要从 url 中取得参数对应值的地方调用该方法。</p><h2 id="_02-纯函数的可缓存性" tabindex="-1"><a class="header-anchor" href="#_02-纯函数的可缓存性" aria-hidden="true">#</a> 02-纯函数的可缓存性</h2><p>因为相同的输入总能得到相同的输出，因此，如果函数内部计算非常复杂，当我们发现输入与上一次相同时，可以直接返回结果而不用经过内部的计算。这是一种性能优化的策略。</p><p>项目中我们可能会处理大量的数据，例如根据日期，得到当日相关的数据，并处理成为我们前端能够使用的数据。假设封装一个 process 方法来处理每天的数据，而这个处理过程会很复杂。如果我们不缓存处理结果，那么每次想要得到当天的数据时，就不得不从原始数据再转换一次。我们可以利用纯函数的可缓冲性策略，减少冗余的转换计算过程。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 传入日期，获取当天的数据</span>
<span class="token keyword">function</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token parameter">date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>

  <span class="token comment">// 假设这中间经历了复杂的处理过程</span>

  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">withProcess</span><span class="token punctuation">(</span><span class="token parameter">base</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> date <span class="token operator">=</span> arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cache<span class="token punctuation">[</span>date<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> cache<span class="token punctuation">[</span>date<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    cache<span class="token punctuation">[</span>date<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">base</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
    <span class="token keyword">return</span> cache<span class="token punctuation">[</span>date<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> _process <span class="token operator">=</span> <span class="token function">withProcess</span><span class="token punctuation">(</span>process<span class="token punctuation">)</span>

<span class="token comment">// 经过上面一句代码处理之后，我们就可以使用_process来获取我们想要的数据，</span>
<span class="token comment">// 如果数据存在，会返回缓存中的数据，</span>
<span class="token comment">// 如果不存在，则会调用process方法重新获取。</span>
<span class="token function">_process</span><span class="token punctuation">(</span><span class="token string">&#39;2017-06-03&#39;</span><span class="token punctuation">)</span>
<span class="token function">_process</span><span class="token punctuation">(</span><span class="token string">&#39;2017-06-04&#39;</span><span class="token punctuation">)</span>
<span class="token function">_process</span><span class="token punctuation">(</span><span class="token string">&#39;2017-06-05&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中利用了闭包的特性，将处理过的数据都缓存在 cache 中。这种方式算是高阶函数的一种运用。我们将在下面一个小节介绍高阶函数。也正是因为纯函数的可靠性，才能够让我们非常放心的确保缓存的数据一定就是我们想要的正确结果。</p><p>我想到这里，大家已经明白了什么是纯函数，纯函数有什么特点，以及我们为什么要尽量使用纯函数。当然在实践中并不是所有的场景都能够使用纯函数，我们只需要在合适的场景使用即可。</p>`,36),c=[e];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","index-24.html.vue"]]);export{r as default};
