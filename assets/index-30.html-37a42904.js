import{_ as n,p as s,q as a,a1 as p}from"./framework-e8cb8151.js";const t="/assets/1-20240301171327552-99706ac7.png",e={},o=p(`<h1 id="_30-构造函数" tabindex="-1"><a class="header-anchor" href="#_30-构造函数" aria-hidden="true">#</a> 30-构造函数</h1><p>在上一章节中，为了帮助大家能够更加清晰的了解到面向对象思维的必要性，我们通过一步一步的场景分析，给出了最后的解决方案。创建对象的方式大概如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createPerson</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>
createPerson<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">调用此方法</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">就会开始奔跑</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token function">New</span><span class="token punctuation">(</span>createPerson<span class="token punctuation">,</span> <span class="token string">&#39;TOM&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token function">New</span><span class="token punctuation">(</span>createPerson<span class="token punctuation">,</span> <span class="token string">&#39;Jake&#39;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> p3 <span class="token operator">=</span> <span class="token function">New</span><span class="token punctuation">(</span>createPerson<span class="token punctuation">,</span> <span class="token string">&#39;Amy&#39;</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们需要关注两个点，createPerson 与 聚合共有方法的原型对象。</p><p>createPerson 会在实例被创建时执行，这样的函数，我们称之为<strong>构造函数</strong>。也正因此如此，构造函数常常被用于初始化实例对象。</p><p><strong>构造函数中，this 指向实例对象</strong></p><p>上一章节，为了让构造函数，与 run 方法的内部函数 this 指向同样的对象，通过高阶函数 New 强制约定了构造函数内部的 this 指向，当构造函数通过 New 创建实例对象时，构造函数内部的 this 指向，会指向实例对象。</p><p>在标准的语法中，使用如下方式创建新的实例</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>new 关键字是官方支持的语法，思路与我们上一章节的分析几乎一致。因此，当我们使用 new 创建实例时，构造函数依然会被立即执行，并且构造函数的内部 this 会指向实例对象 p1。</p><p><strong>构造函数内部声明的属性，属于单个实例特有</strong></p><p>在构造函数中，我们会将一些属性或者方法挂载到 this 对象上。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上一章节的分析我们知道，<strong>属于属于所有实例共享的属性与方法，都被抽离出来放在了原型对象中，而属于每一个实例特有的属性与方法，都会留在构造函数。</strong></p><p>例如，每一个实例的名字，只能属于每个实例特有，不可能所有实例共享名字。</p><p><strong>new 关键字都干了什么</strong></p><p>构造函数与普通函数并无不同，使用场景的不同，导致了构造函数拥有特殊的含义。因此，我们约定，所有的构造函数，首字母都需要大写。便于一眼就能够分辨出来该函数的用意。</p><p>我们都知道，构造函数需要与 new 关键字结合使用，new 关键字可以理解为构造函数的高阶函数，用以增强构造函数的逻辑**，因此，构造函数在创建之初，就需要考虑到与 new 关键字的配合，**这样才能完美的实现逻辑。因此，new 关键干了什么，就是我们每个人都需要了解的重要知识。</p><p>上一章节中，我们已经自己实现过了 new 的逻辑，因此此处只需要总结一下即可：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 将构造函数以参数形式传入</span>
<span class="token keyword">function</span> <span class="token function">New</span><span class="token punctuation">(</span><span class="token parameter">func</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 声明一个中间对象，该对象为最终返回的实例</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>func<span class="token punctuation">.</span>prototype <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将实例的原型指向构造函数的原型</span>
    res<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> func<span class="token punctuation">.</span>prototype
  <span class="token punctuation">}</span>

  <span class="token comment">// ret为构造函数执行的结果，这里通过apply，将构造函数内部的this指向修改为指向res，即为实例对象</span>
  <span class="token keyword">const</span> ret <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token comment">// 当我们在构造函数中明确指定了返回对象时，那么new的执行结果就是该返回对象</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> ret <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> ret <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> ret <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> ret
  <span class="token punctuation">}</span>

  <span class="token comment">// 如果没有明确指定返回对象，则默认返回res，这个res就是实例对象</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建一个空的实例对象，等待被初始化</li><li>将空实例对象的原型，指向构造函数的原型</li><li>将构造函数内部的 this，强制指向该实例对象，并执行构造函数，初始化实例对象</li><li>最后返回该实例对象</li></ul><p>有如下代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Jake&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该案例中，构造函数，原型对象，实例对象之间的关系，如下图所示：</p><p><img src="`+t+`" alt="img"></p><p>构造函数的 prototype 与所有实例的 <strong>_proto_</strong> 都指向原型对象，原型对象中有一个 constructor 属性，指向构造函数。</p><p>需要注意的是，如果构造函数与原型对象中，同时声明了同名的方法/属性时，会优先访问构造函数中的方法/属性，如下例</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;你访问了构造函数中的 getName&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;你访问了原型对象中的 getName&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">)</span>
p1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 你访问了构造函数中的 getName</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>思考题</strong></p><p>你如何看待构造函数返回值的问题？</p>`,30),c=[o];function i(l,u){return s(),a("div",null,c)}const k=n(e,[["render",i],["__file","index-30.html.vue"]]);export{k as default};
