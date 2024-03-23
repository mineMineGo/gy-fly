import{_ as n,p as s,q as a,a1 as e}from"./framework-e8cb8151.js";const t={},p=e(`<h1 id="_07-泛型从入门到深度掌握" tabindex="-1"><a class="header-anchor" href="#_07-泛型从入门到深度掌握" aria-hidden="true">#</a> 07-泛型从入门到深度掌握</h1><h2 id="_01-本章概述" tabindex="-1"><a class="header-anchor" href="#_01-本章概述" aria-hidden="true">#</a> 01: 本章概述</h2><ul><li>为什么要用泛型？泛型定义</li><li>泛型在类中的应用？封装一个面向对象的 ArrayList 类</li><li>泛型默认值</li><li>泛型约束</li><li>泛型在 Vue3 源码中的应用</li><li>extends keyof + keyof 的联合应用</li><li>泛型反向赋值</li></ul><h2 id="_02-泛型从入门到深入掌握" tabindex="-1"><a class="header-anchor" href="#_02-泛型从入门到深入掌握" aria-hidden="true">#</a> 02：泛型从入门到深入掌握</h2><h3 id="具有以下特点的数据类型叫做泛型" tabindex="-1"><a class="header-anchor" href="#具有以下特点的数据类型叫做泛型" aria-hidden="true">#</a> 具有以下特点的数据类型叫做泛型</h3><ul><li>特点一：定义时不明确使用时必须明确成某种具体数据类型的数据类型【泛型的宽泛】</li><li>特点二：编译期间进行数据类型检查的数据类型【泛型的严谨】</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">类名<span class="token operator">&lt;</span>泛型形参类型<span class="token operator">&gt;</span></span> 
泛型形参类型一般有两种表示：
	<span class="token number">1</span><span class="token operator">:</span> <span class="token constant">A</span><span class="token operator">-</span><span class="token constant">Z</span> 任何一个字符 
  <span class="token number">2</span><span class="token operator">:</span> 语义化的单词来表示
绝大多数情况下，泛型都是采用第一种形式表示，如下
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">ArrayList<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  array<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
  <span class="token function">add</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-泛型的真实应用" tabindex="-1"><a class="header-anchor" href="#_03-泛型的真实应用" aria-hidden="true">#</a> 03：泛型的真实应用</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">ArrayList<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  arr<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
  index<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token function">add</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>index<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> ele
  <span class="token punctuation">}</span>
  <span class="token function">get</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
arr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;唐僧&#39;</span><span class="token punctuation">)</span>
arr<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList<span class="token operator">&lt;</span><span class="token punctuation">{</span> usename<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
arr2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span> usename<span class="token operator">:</span> <span class="token string">&#39;唐僧&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
arr2<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">// 如果不写值会推断为 unknow</span>
<span class="token keyword">const</span> arr3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// const arr3: ArrayList&lt;unknown&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_04-泛型的默认值" tabindex="-1"><a class="header-anchor" href="#_04-泛型的默认值" aria-hidden="true">#</a> 04: 泛型的默认值</h2><blockquote><p>上一节中最后，我们泛型不传递，会推断为 unknown,我们可以设置一个默认值来规避此问题</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 泛型设置默认值为 string</span>
<span class="token keyword">class</span> <span class="token class-name">ArrayList<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  arr<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
  index<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token function">add</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>index<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> ele
  <span class="token punctuation">}</span>
  <span class="token function">get</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 这里会推断类型为默认值 string</span>
<span class="token keyword">const</span> arr3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// const arr3: ArrayList&lt;string&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_05-泛型约束和它的真实应用" tabindex="-1"><a class="header-anchor" href="#_05-泛型约束和它的真实应用" aria-hidden="true">#</a> 05: 泛型约束和它的真实应用</h2><blockquote><p>keyof: 表示获取一个类或者一个对象类型或者一个接口类型的所有属性名 [key] 组成的联合类型，索引类型访问</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Order</span> <span class="token punctuation">{</span>
  orderid<span class="token operator">!</span><span class="token operator">:</span> <span class="token builtin">number</span>
  ordername<span class="token operator">!</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token keyword">static</span> count<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token function">printOrd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">static</span> <span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">OrderIdType</span> <span class="token operator">=</span> Order<span class="token punctuation">[</span><span class="token string">&#39;orderid&#39;</span><span class="token punctuation">]</span> <span class="token comment">// type OrderIdType = number</span>
<span class="token keyword">type</span> <span class="token class-name">OrderInstanceAttrNames</span> <span class="token operator">=</span> <span class="token keyword">keyof</span> Order <span class="token comment">// orderid | ordername | printOrd</span>

<span class="token keyword">type</span> <span class="token class-name">InstancePropKeys<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token keyword">keyof</span> <span class="token constant">T</span>
<span class="token keyword">type</span> <span class="token class-name">orderPropKeys</span> <span class="token operator">=</span> InstancePropKeys<span class="token operator">&lt;</span>Order<span class="token operator">&gt;</span> <span class="token comment">// orderid | ordername | printOrd</span>
<span class="token keyword">type</span> <span class="token class-name">stringKeys</span> <span class="token operator">=</span> InstancePropKeys<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token comment">// type stringKeys = number | typeof Symbol.iterator | &quot;toString&quot; | &quot;charAt&quot; | &quot;charCodeAt&quot; | &quot;concat&quot; | &quot;indexOf&quot; | &quot;lastIndexOf&quot; | &quot;localeCompare&quot; | &quot;match&quot; | &quot;replace&quot; | &quot;search&quot; | &quot;slice&quot; | ... 28 more ... | &quot;sup&quot;</span>
<span class="token comment">// 这里 T 可以是任意类型，但是我们想让他针对于 object 类型，而不是 string number 之类的</span>
<span class="token comment">// 可以修改如下</span>

<span class="token comment">// 使用泛型约束</span>
<span class="token keyword">type</span> <span class="token class-name">NewInstancePropKeys<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> object<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token keyword">keyof</span> <span class="token constant">T</span>
<span class="token comment">// type NewStringKeys = NewInstancePropKeys&lt;string&gt; // Type &#39;string&#39; does not satisfy the constraint &#39;object&#39;.ts(2344)</span>
<span class="token keyword">type</span> <span class="token class-name">NewOrrderPropKeys</span> <span class="token operator">=</span> NewInstancePropKeys<span class="token operator">&lt;</span>Order<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_06-在-vue3-源码深刻掌握泛型约束" tabindex="-1"><a class="header-anchor" href="#_06-在-vue3-源码深刻掌握泛型约束" aria-hidden="true">#</a> 06：在 Vue3 源码深刻掌握泛型约束</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 以下是 vue3 中的源码片段</span>
<span class="token comment">// 这里使用了 泛型约束</span>
<span class="token keyword">class</span> <span class="token class-name">ObjectRefImpl<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> object<span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">readonly</span> __v_isRef <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> _object<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token keyword">private</span> <span class="token keyword">readonly</span> _key<span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_object<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>_key<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">set</span> <span class="token function">value</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_object<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>_key<span class="token punctuation">]</span> <span class="token operator">=</span> newVal
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用代码如下</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ObjType</span> <span class="token operator">=</span> <span class="token punctuation">{</span> username<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">ObjKeysType<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> object<span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span> <span class="token operator">?</span> <span class="token constant">K</span> <span class="token operator">:</span> <span class="token builtin">never</span>

<span class="token keyword">type</span> <span class="token class-name">TestObjKeysType</span> <span class="token operator">=</span> ObjKeysType<span class="token operator">&lt;</span>ObjType<span class="token punctuation">,</span> <span class="token string">&#39;username&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;age&#39;</span><span class="token operator">&gt;</span> <span class="token comment">// type TestObjKeysType =  &quot;age&quot; | &quot;username&quot;</span>
<span class="token keyword">type</span> <span class="token class-name">TestObjKeysType2</span> <span class="token operator">=</span> ObjKeysType<span class="token operator">&lt;</span>ObjType<span class="token punctuation">,</span> <span class="token string">&#39;username&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;age&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;address&#39;</span><span class="token operator">&gt;</span> <span class="token comment">// type TestObjKeysType2 = &quot;age&quot; | &quot;username&quot;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectRefImpl<span class="token operator">&lt;</span>ObjType<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> username<span class="token operator">:</span> <span class="token string">&#39;孙悟空&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_07-高频使用的泛型赋值——反向为泛型赋值" tabindex="-1"><a class="header-anchor" href="#_07-高频使用的泛型赋值——反向为泛型赋值" aria-hidden="true">#</a> 07：高频使用的泛型赋值——反向为泛型赋值</h2><blockquote><p>上一节中最后我们知道前面的类型 &quot;age&quot; 确定后，后面的传递参数值就确定了，必须是 age，由此可以进行反向推导赋值</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">ObjectRefImpl<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> object<span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">readonly</span> __v_isRef <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> _object<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token keyword">private</span> <span class="token keyword">readonly</span> _key<span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_object<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>_key<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">set</span> <span class="token function">value</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_object<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>_key<span class="token punctuation">]</span> <span class="token operator">=</span> newVal
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 这里可以反向推断出类型，const obj: ObjectRefImpl&lt;{ username: string, age: number }, &quot;age&quot;&gt;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectRefImpl</span><span class="token punctuation">(</span><span class="token punctuation">{</span> username<span class="token operator">:</span> <span class="token string">&#39;孙悟空&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","index-07.html.vue"]]);export{u as default};
