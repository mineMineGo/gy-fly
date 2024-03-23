import{_ as n,p as s,q as a,a1 as e}from"./framework-e8cb8151.js";const p="/assets/1-20240301115936634-24f6e132.png",t="/assets/1-20240301115936641-eae6d68e.png",o="/assets/1-20240301115936640-6a87997a.png",c="/assets/1-20240301115936648-cb829460.png",i="/assets/1-20240301115936645-994ce5d3.png",l="/assets/1-20240301115936694-fce64e2b.png",r="/assets/1-20240301115936670-fd42f005.png",u="/assets/1-20240301115936766-9af21c37.png",d={},k=e('<h1 id="_60-为什么要学习-typescript" tabindex="-1"><a class="header-anchor" href="#_60-为什么要学习-typescript" aria-hidden="true">#</a> 60-为什么要学习 TypeScript</h1><p>因为大家都在说要掌握？当然不是！</p><p>或者换一个问题，为什么在项目中，我们要选择使用 typescript？也许你还不知道，一起跟着我的思路捋一捋。</p><h2 id="_01-基础动因" tabindex="-1"><a class="header-anchor" href="#_01-基础动因" aria-hidden="true">#</a> 01-基础动因</h2><p>对 JS 执行原理有过了解的同学应该知道，JS 代码边解析边执行，也就意味着，<strong>JS 的语法规则检测，是在执行过程中才会进行的一个步骤</strong>。</p><p>带来的后果就是，在开发过程中的所有语法错误，我们都没办法通过某种方式去完全预知到，而必须在浏览器里执行一次看到报错之后才知道自己某个地方写错了。</p><p>当项目稍微复杂一点，无法预知语法错误可以说是一场灾难。一个单词拼错，就足以让你陷入困境。</p><p>JS 同时也是一门弱类型语言。我们声明一个变量之后，它可以是任意类型，可以在任何时候修改为别的类型。这极大的提高 JS 代码灵活性的同时，带来的副作用也同样明显，<strong>一个变量在我们的应用中无法预知它扮演的角色，维护成本远超想象。</strong></p><p>在复杂项目中，我们无法承受 JS 弱类型的副作用，这是 typescript 出现的基础动因，它让 JavaScript 具备了强类型语言的特征。当然，除了解决这些基础问题，ts 还有许多别的特性。</p><h2 id="_02-什么是-typescript-「后面简称-ts」" tabindex="-1"><a class="header-anchor" href="#_02-什么是-typescript-「后面简称-ts」" aria-hidden="true">#</a> 02-什么是 typescript 「后面简称 ts」</h2><p>官方文档解释说，<strong>ts 是 JavaScript 的超集，它可以编译成纯 JavaScript</strong>。</p><p>估计一看这个解释有的同学不太能理解。可以做一个简单的类比，我们在实践开发中，通常使用 ES6 开发，并且编译成 ES5 的代码给浏览器执行。所以 ES6 和 ts 扮演的角色比较类似。之所以说是 JavaScript 的超集，就是在 JavaScript 的语法基础上，新增了更多的语法规则，让 JavaScript 具备我们期望的特性。<strong>所以我们学习 ts，其实就是学习这些新的特性，和新特性的应用场景。</strong></p><p>总的来说，ts 是一套语法规则，也是一套语法规范，它能帮助我们约束自己的代码，以具备更强的可维护性和健壮性。</p><h2 id="_03-作用-1-直接在开发过程中暴露错误" tabindex="-1"><a class="header-anchor" href="#_03-作用-1-直接在开发过程中暴露错误" aria-hidden="true">#</a> 03-作用 1：直接在开发过程中暴露错误</h2><p>如图所示。</p><p>试图修改 const 声明的常量</p><p><img src="'+p+'" alt="img"></p><p>执行未定义的函数，通常是拼错了已经定义的方法名</p><p><img src="'+t+'" alt="img"></p><p>与 eslint 类似，具体的报错语法我们可以通过 <code>tslint</code> 来配置规则。</p><h2 id="_04-作用-2-约束变量类型" tabindex="-1"><a class="header-anchor" href="#_04-作用-2-约束变量类型" aria-hidden="true">#</a> 04-作用 2：约束变量类型</h2><p>当我们给变量 foo 设定为 number 之后，如果我们试图将其他类型的值赋值给变量 foo，那么编辑器就会抛出异常，因为这违反了类型约束的规定。</p><p><img src="'+o+'" alt="img"></p><h2 id="_05-作用-3-描述函数规则-即明确的告诉使用者该函数的参数类型与返回值类型" tabindex="-1"><a class="header-anchor" href="#_05-作用-3-描述函数规则-即明确的告诉使用者该函数的参数类型与返回值类型" aria-hidden="true">#</a> 05-作用 3：描述函数规则，即明确的告诉使用者该函数的参数类型与返回值类型</h2><p>当我们定义了 add 函数，要求传入该函数的参数分别为 2 个 number 类型，并且返回值也为 number 类型。那么在使用时，不符合这个规则的用法都会报错。</p><ul><li>error: 传入非 number 类型的参数</li><li>error: 传入了 3 个参数</li></ul><p><img src="'+c+`" alt="img"></p><p>在这个点上，ts 还有一个隐性的好处就是简化代码判断边界逻辑。</p><p>如果我们用 js 声明一个函数，为了确保函数总能正常执行，往往需要对传入的参数类型进行判断</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> a <span class="token operator">!=</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> b <span class="token operator">!=</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 ts 对参数进行限制之后，我们就可以不需要做这些判断，在使用时，就能够提示我们，传入的参数类型不对而确保函数总能正确执行</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码习惯不好的人，就不会觉得应该做这样的判断，所以他们无法感知 ts 的好处，他们写出来的代码，往往也禁不住考验。</strong></p><h2 id="_06-作用-4-使用-interface-描述复杂数据" tabindex="-1"><a class="header-anchor" href="#_06-作用-4-使用-interface-描述复杂数据" aria-hidden="true">#</a> 06 作用 4：使用 interface 描述复杂数据</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IParamA</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">fetchList</span><span class="token punctuation">(</span>params<span class="token operator">:</span> IParamA<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/demo&#39;</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">fetchList</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;alex&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上所示的例子，当我们定义 <code>fetchList</code> 时，会传入一个 JSON 对象作为参数，此时我们需要描述该参数的数据类型，借助 <code>interface</code> 即可做到，当传入的参数不符合描述的规则时，会抛出对应的错误。</p><p><img src="`+i+`" alt="img"></p><p>在实践中，数据的复杂程度远不止于此，因此我们还需要借助更多的知识点来描述不同的参数类型，这也是我们学习 ts 的 5 重点与难点。</p><p>例如枚举类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 枚举 */</span>
<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  up <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  down<span class="token punctuation">,</span>
  left<span class="token punctuation">,</span>
  right<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 三种运动方式 */</span>
<span class="token keyword">type</span> <span class="token class-name">MoveType</span> <span class="token operator">=</span> <span class="token string">&#39;linear&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;ease&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;bounce&#39;</span>

<span class="token keyword">function</span> <span class="token function">moveToDemo</span><span class="token punctuation">(</span>ease<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> direction<span class="token operator">:</span> Direction<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token comment">// .. todo</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ease<span class="token punctuation">,</span> direction<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">moveTo</span><span class="token punctuation">(</span>ease<span class="token operator">:</span> MoveType<span class="token punctuation">,</span> direction<span class="token operator">:</span> Direction<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ease<span class="token punctuation">,</span> direction<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token string">&#39;bounce&#39;</span><span class="token punctuation">,</span> Direction<span class="token punctuation">.</span>down<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个例子中，我们自定义了一个函数 moveTo，该函数接收两个参数</p><ul><li><strong>运动的动画曲线类型</strong>，我们期望在使用该函数时只能传入 <code>linear, ease, bounce</code>中的一个</li><li>运动方向， 我们期望只能传入上下左右四个方向值</li></ul><p>这里我们借助了 <code>type</code> 语法与 <code>枚举enum</code> 语法实现了类似的效果。</p><p><img src="`+l+`" alt="img"></p><h2 id="_07-描述-class-对象" tabindex="-1"><a class="header-anchor" href="#_07-描述-class-对象" aria-hidden="true">#</a> 07-描述 class 对象</h2><p>与 ES6 语法几乎一样。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token keyword">private</span> age<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;alex&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
p1<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
p1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+'" alt="img"></p><h2 id="_08-总结-ts-的主要作用在于约束" tabindex="-1"><a class="header-anchor" href="#_08-总结-ts-的主要作用在于约束" aria-hidden="true">#</a> 08-总结：<strong>ts 的主要作用在于约束</strong></h2><p>通过上面的几个简单的例子，我们可以知道，ts 的主要作用在于通过各种方式约束我们的代码。也可以这样理解：<strong>ts 是一套约束规则</strong>。而我们只要掌握了这套约束规则，必然的，我们的代码习惯就会变得更好，除此之外，另一个好处就是，我们可以更加容易的读懂别人的代码。</p><p>也正因为约束规则的存在，IDE「例如 vscode」就可以很容易的做到智能提示，这也是我们要在实践中使用 ts 的另一个重要原因。</p><p>因此，我们学习 ts 的过程，其实就是学习一套约束规则的过程。</p><h2 id="_09-快速读懂别人的代码" tabindex="-1"><a class="header-anchor" href="#_09-快速读懂别人的代码" aria-hidden="true">#</a> 09-快速读懂别人的代码</h2><p>完善的类型约束与友好的声明文件，能够非常完整的表达一个函数一个组件的作用，因此我们能够非常轻松的读懂别人的代码想要做的事情。更高的可读性，必然也带来的维护成本的降低。bug 修改速度加快。</p><p><img src="'+u+'" alt="img"></p><h2 id="_10-typescript-的重要性" tabindex="-1"><a class="header-anchor" href="#_10-typescript-的重要性" aria-hidden="true">#</a> 10-typescript 的重要性</h2><p>在团队协作中，衡量一个人代码水平最重要的因素是<strong>代码可读性</strong>。在我看来，它是比性能和技巧更为重要的一个标准。</p><p>而 typescript 在复杂项目中，对于代码可读性带来的增强是非常具有吸引力的。因此越来越多的团队在项目中深度使用 ts。甚至在 angular 团队中，整个<code>angular</code>都是直接使用 ts 开发。vue3 也是。</p><p>typescript 已经成为了前端开发者的必备技能之一。</p><p>而由于 WebAssembly 的原因，typescript 可以轻松编译成 WebAssembly 字节码格式，ts 甚至将会是 JavaScript 的未来。</p><h2 id="_11-代价" tabindex="-1"><a class="header-anchor" href="#_11-代价" aria-hidden="true">#</a> 11-代价</h2><p>是约束，就会有代价。</p><p>正如写文档一样，所有人都知道文档有无穷的好处，可是，写文档无疑带来了额外的工作量。ts 也一样，带来更高可读性的同时，必然会带来更多的代码量。</p><p>总体来说，我们需要手写的额外的代码量并不少。</p><p>但是根据我的工作经验，这些额外的工作量，并不会影响我们的开发进度，反而因为减少了错误，大大增加了开发效率。所以建议大家，接受这样的代码。</p><p>除此之外，对于大多数人而言，更多的时间代价，是在如何解决 ts 的语法报错上。因此，很多人将 ts 使用成了 anyScript，不过这基本上都是由于无法明白 ts 真实含义以及掌握不够熟练导致。</p>',66),v=[k];function m(b,g){return s(),a("div",null,v)}const y=n(d,[["render",m],["__file","index-60.html.vue"]]);export{y as default};
