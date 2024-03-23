import{_ as n,p as s,q as a,a1 as e}from"./framework-e8cb8151.js";const t="/assets/1-3e6ff18c.png",p="/assets/装饰器模式-71dda195.png",o="/assets/AOP-9a118ad2.png",c={},i=e('<h1 id="_09-装饰器模式" tabindex="-1"><a class="header-anchor" href="#_09-装饰器模式" aria-hidden="true">#</a> 09-装饰器模式</h1><h2 id="_01-开始" tabindex="-1"><a class="header-anchor" href="#_01-开始" aria-hidden="true">#</a> 01: 开始</h2><h3 id="主要内容" tabindex="-1"><a class="header-anchor" href="#主要内容" aria-hidden="true">#</a> 主要内容</h3><ul><li>概念介绍 + 解决的问题</li><li>代码演示和 UML 类图</li><li>使用场景：ES Decorator 和 AOP</li></ul><h3 id="学习方法" tabindex="-1"><a class="header-anchor" href="#学习方法" aria-hidden="true">#</a> 学习方法</h3><ul><li>结合场景学习</li><li>代码结合 UML 类图</li></ul><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3><ul><li>Angular 只为演示，国内应用不多</li><li>AOP 先了解概念，不急于详细掌握（需要长时间才能理解，如 OOP ）</li></ul><h2 id="_02-介绍" tabindex="-1"><a class="header-anchor" href="#_02-介绍" aria-hidden="true">#</a> 02: 介绍</h2><blockquote><p>装饰器模式（Decorator Pattern）允许向一个现有的对象添加新的功能，同时又不改变其结构。这种类型的设计模式属于结构型模式，它是作为现有的类的一个包装。动态地给一个对象添加一些额外的职责。就增加功能来说，装饰器模式相比生成子类更为灵活。</p></blockquote><ul><li>针对一个对象</li><li>动态的添加新功能</li><li>但是不改变原有的功能</li></ul><p>例如，手机上套一个壳可以保护手机，壳上粘一个指环，可以挂在手指上不容易滑落，这就是一种装饰。手机还是那个手机，手机的功能一点都没变，只是在手机的外面装饰了一些其他附加的功能。日常生活中，这样的例子非常多。</p><p><img src="'+t+`" alt=""></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">decorate</span><span class="token punctuation">(</span>phone<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  phone<span class="token punctuation">.</span><span class="token function-variable function">fn3</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;指环&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> phone <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;iphone12&#39;</span><span class="token punctuation">,</span>
  <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> newPhone <span class="token operator">=</span> <span class="token function">decorate</span><span class="token punctuation">(</span>phone<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而 ES 语法允许我们这样写（其实就是语法糖），后面会详细讲</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 伪代码，不能运行</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">decorate</span></span>
<span class="token keyword">const</span> phone <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-演示" tabindex="-1"><a class="header-anchor" href="#_03-演示" aria-hidden="true">#</a> 03: 演示</h2><h3 id="uml-类图以及-代码演示" tabindex="-1"><a class="header-anchor" href="#uml-类图以及-代码演示" aria-hidden="true">#</a> UML 类图以及 代码演示</h3><p><img src="`+p+`" alt=""></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
  <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;画一个圆&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Decorator</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> circle<span class="token operator">:</span> Circle
  <span class="token function">constructor</span><span class="token punctuation">(</span>circle<span class="token operator">:</span> Circle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>circle <span class="token operator">=</span> circle
  <span class="token punctuation">}</span>
  <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>circle<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 原有属性</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setBorder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 装饰方法</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">private</span> <span class="token function">setBorder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;设置边框颜色&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
circle<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> decorator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Decorator</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span>
decorator<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="是否符合设计原则" tabindex="-1"><a class="header-anchor" href="#是否符合设计原则" aria-hidden="true">#</a> 是否符合设计原则？</h3><p>5 大设计原则中，最重要的就是：<strong>开放封闭原则</strong>，对扩展开放，对修改封闭</p><ul><li>装饰器和目标分离，解耦</li><li>装饰器可自行扩展</li><li>目标也可自行扩展</li></ul><h2 id="_04-场景" tabindex="-1"><a class="header-anchor" href="#_04-场景" aria-hidden="true">#</a> 04: 场景</h2><p>ES 引入了 Decorator 语法，TS 也支持</p><p>PS：在 tsconfig.json 中加 <code>experimentalDecorators: true</code></p><h3 id="装饰-class" tabindex="-1"><a class="header-anchor" href="#装饰-class" aria-hidden="true">#</a> 装饰 class</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 装饰器</span>
<span class="token keyword">function</span> <span class="token function">testable</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  target<span class="token punctuation">.</span>isTestable <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">testable</span></span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> isTestable<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Foo<span class="token punctuation">.</span>isTestable<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以传入参数</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 装饰器工厂函数</span>
<span class="token keyword">function</span> <span class="token function">testable</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 装饰器</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">.</span>isTestable <span class="token operator">=</span> val
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">testable</span></span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> isTestable<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Foo<span class="token punctuation">.</span>isTestable<span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="装饰-class-方法" tabindex="-1"><a class="header-anchor" href="#装饰-class-方法" aria-hidden="true">#</a> 装饰 class 方法</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">readOnly</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> descriptor<span class="token operator">:</span> PropertyDescriptor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// console.log(&#39;target&#39;, target)</span>
  <span class="token comment">// console.log(&#39;key&#39;, key)</span>
  descriptor<span class="token punctuation">.</span>writable <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">configurable</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> descriptor<span class="token operator">:</span> PropertyDescriptor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    descriptor<span class="token punctuation">.</span>configurable <span class="token operator">=</span> val
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> _name <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span>
  <span class="token keyword">private</span> _age <span class="token operator">=</span> <span class="token number">20</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">readOnly</span></span>
  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">configurable</span></span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_age
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// f.getName = () =&gt; { return &#39;hello&#39; } // 会报错</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// @ts-ignore</span>
<span class="token comment">// console.log( Object.getOwnPropertyDescriptor(f.__proto__, &#39;getAge&#39;) ) // { configurable: false }</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>getAge<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PS：其实 TS 本身有 <code>readOnly</code> 语法，但这里就是一个演示。</p><h3 id="react-redux" tabindex="-1"><a class="header-anchor" href="#react-redux" aria-hidden="true">#</a> react-redux</h3><p>react-redux 的基本使用如下。文档参考 https://www.redux.org.cn/docs/basics/UsageWithReact.html</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>

<span class="token keyword">const</span> VisibleTodoList <span class="token operator">=</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>TodoList<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> VisibleTodoList
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用装饰器就是</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>

<span class="token comment">// 装饰器</span>
@<span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> VisibleTodoList <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="angular-定义组件" tabindex="-1"><a class="header-anchor" href="#angular-定义组件" aria-hidden="true">#</a> Angular 定义组件</h3><p>文档 https://angular.io/start</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> OnInit <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span>

<span class="token comment">// 装饰器，定义 class 为组件</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  selector<span class="token operator">:</span> <span class="token string">&#39;app-product-alerts&#39;</span><span class="token punctuation">,</span>
  templateUrl<span class="token operator">:</span> <span class="token string">&#39;./product-alerts.component.html&#39;</span><span class="token punctuation">,</span>
  styleUrls<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;./product-alerts.component.css&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ProductAlertsComponent</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><ul><li>装饰 class 和 class 方法</li><li>装饰器是一个函数，结合 ES 的 Decorator 语法</li><li>react-redux 和 Angular</li></ul><h2 id="_05-aop" tabindex="-1"><a class="header-anchor" href="#_05-aop" aria-hidden="true">#</a> 05: AOP</h2><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><p>AOP - Aspect Oriented Programming 面向切面编程</p><p>简单来说：业务和系统基础功能分离，用 Decorator 很合适</p><p><img src="`+o+`" alt=""></p><p>PS：AOP 和 OOP 并不冲突</p><h3 id="实现-log" tabindex="-1"><a class="header-anchor" href="#实现-log" aria-hidden="true">#</a> 实现 log</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> descriptor<span class="token operator">:</span> PropertyDescriptor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> oldValue <span class="token operator">=</span> descriptor<span class="token punctuation">.</span>value <span class="token comment">// fn1 函数</span>

  <span class="token comment">// 重新定义 fn1 函数</span>
  descriptor<span class="token punctuation">.</span><span class="token function-variable function">value</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">记录日志...</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">oldValue</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">log</span></span> <span class="token comment">// 不影响业务功能的代码，只是加了一个 log 的“切面”</span>
  <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;业务功能1&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
f<span class="token punctuation">.</span><span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_06-总结" tabindex="-1"><a class="header-anchor" href="#_06-总结" aria-hidden="true">#</a> 06: 总结</h2><h3 id="内容回顾" tabindex="-1"><a class="header-anchor" href="#内容回顾" aria-hidden="true">#</a> 内容回顾</h3><ul><li>概念介绍 + 解决的问题</li><li>代码演示和 UML 类图</li><li>使用场景：ES Decorator 和 AOP</li></ul><h3 id="重要细节" tabindex="-1"><a class="header-anchor" href="#重要细节" aria-hidden="true">#</a> 重要细节</h3><ul><li>tsconfig.json 中 <code>experimentalDecorators: true</code></li><li>装饰器如何传递参数（装饰器工厂函数）</li><li>装饰器函数的第三个参数：属性描述符</li></ul><h3 id="注意事项-1" tabindex="-1"><a class="header-anchor" href="#注意事项-1" aria-hidden="true">#</a> 注意事项</h3><ul><li>Angular 只为演示，国内应用不多</li><li>AOP 先了解概念，不急于详细掌握（需要长时间才能理解，如 OOP ）</li></ul>`,58),l=[i];function u(r,d){return s(),a("div",null,l)}const v=n(c,[["render",u],["__file","index-09.html.vue"]]);export{v as default};
