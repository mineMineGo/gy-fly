import{_ as n,p as s,q as a,a1 as e}from"./framework-e8cb8151.js";const t={},p=e(`<h1 id="new-关键字" tabindex="-1"><a class="header-anchor" href="#new-关键字" aria-hidden="true">#</a> new 关键字</h1><h2 id="_1、执行过程" tabindex="-1"><a class="header-anchor" href="#_1、执行过程" aria-hidden="true">#</a> 1、执行过程</h2><blockquote><p>使用 new 来调用函数，或者说发生构造函数调用时，会自动执行下面的操作</p></blockquote><ol><li>创建（或者说构造）一个全新的对象</li><li>这个新对象会被执行[[原型]]链接</li><li>这个新对象会绑定到函数调用的 this</li><li>如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象</li></ol><h2 id="_2、代码模拟" tabindex="-1"><a class="header-anchor" href="#_2、代码模拟" aria-hidden="true">#</a> 2、代码模拟</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mynew</span><span class="token punctuation">(</span><span class="token parameter">Func<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.创建一个新对象</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// 2.新对象原型指向构造函数原型对象</span>
    obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">Func</span><span class="token punctuation">.</span>prototype
    <span class="token comment">// 3.将构建函数的this指向新对象</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">Func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token comment">// 4.根据返回值判断</span>
    <span class="token keyword">return</span> result <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> result <span class="token operator">:</span> obj
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token function">mynew</span><span class="token punctuation">(</span>Person<span class="token punctuation">,</span> <span class="token string">&quot;huihui&quot;</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token comment">// Person {name: &quot;huihui&quot;, age: 123}</span>
p<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// huihui</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","new.html.vue"]]);export{r as default};
