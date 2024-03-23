import{_ as e,p as a,q as t,a1 as i}from"./framework-e8cb8151.js";const s="/assets/image-20230728214947213-4e2a12ed.png",d="/assets/image-20230728214956249-28cf4d55.png",n="/assets/image-20230728215005311-d1efd3c9.png",c="/assets/image-20230728215014717-e8f490ed.png",r="/assets/image-20230728215025068-25fea28b.png",p="/assets/image-20230728215033029-0aa3bae2.png",o="/assets/image-20230728215043908-8cee00b8.png",g="/assets/image-20230728215052909-aca64d7a.png",l="/assets/image-20230728215103845-231ef418.png",m="/assets/image-20230728215109729-9efb4dab.png",h="/assets/image-20230728215118032-ddc57ec5.png",u="/assets/image-20230728215128241-772e2c80.png",_={},v=i('<h1 id="_11-文件忽略进阶-忽略已加入版本控制器的文件" tabindex="-1"><a class="header-anchor" href="#_11-文件忽略进阶-忽略已加入版本控制器的文件" aria-hidden="true">#</a> 11-文件忽略进阶：忽略已加入版本控制器的文件</h1><p><img src="https://img3.mukewang.com/5da6e2640001257306400359.jpg" alt="img"></p><blockquote><p>对自己不满是任何真正有才能的人的根本特征之一。 ——契诃夫</p></blockquote><p>在前面我们学习常见的忽略文件操作方法，大多数情况下已经满足日常使用，但有时候也会有一些特殊需求用之前的方法并不好处理。</p><p>比如说，想忽略某一个文件夹下的绝大多数文件，保留个别文件；再比如已经加入到版本控制器的文件，再去设置忽略规则不起效果等问题，这些问题通过本节内容，你可以轻松的应对，主要内容有：设置忽略排除、忽略已提交的文件。</p><h2 id="_11-1-设置忽略排除" tabindex="-1"><a class="header-anchor" href="#_11-1-设置忽略排除" aria-hidden="true">#</a> 11.1 设置忽略排除</h2><p>按照前面所学的知识，在设置文件忽略时候，我们会在<code>.gitignore</code> 文件中将目录添加进去，比如，在你的项目中如果使用了 composer，那么通常会产生一个 vendor 文件夹，这个文件夹通常是由 composer 管理，所以一般我们会在<code>.gitignore</code> 文件添加路径忽略它，如下图编辑 .gitignore 文件所示。</p><h3 id="_11-1-1-忽略文件夹" tabindex="-1"><a class="header-anchor" href="#_11-1-1-忽略文件夹" aria-hidden="true">#</a> 11.1.1 忽略文件夹</h3><p><img src="'+s+`" alt="image-20230728214947213"> 在图中可以看到，路径中会设置星号，这是表示匹配所有文件 (<strong>因为后续需要排除此文件夹下的某个文件，所以这里的星号一定要加上</strong>)，保存修改后，我们再回到终端交互中，查看当前文件的修改，参考命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行之后，返回结果如下图所示：</p><p><img src="`+d+`" alt="image-20230728214956249"></p><p>在图中可以看到 git 并没有提示我们心中了一个 test 文件夹，说明成功忽略了 <code>test</code> 文件夹以及下面的文件。</p><h3 id="_11-1-2-设置反向排除" tabindex="-1"><a class="header-anchor" href="#_11-1-2-设置反向排除" aria-hidden="true">#</a> 11.1.2 设置反向排除</h3><p>接下来我们再次去编辑 <code>.gitignore</code> 文件，设置忽略规则里面加上排除规则，参考规则如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>!/test/index.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 vim 编辑界面如下图所示： <img src="`+n+`" alt="image-20230728215005311"></p><p>在图中的 <code>!</code> 表示要排除的意思，因此在<code>.gitignore</code> 文件夹中加入 <code>!</code> 也可以理解为取反的意思。</p><h3 id="_11-1-3-反向排除结果验证" tabindex="-1"><a class="header-anchor" href="#_11-1-3-反向排除结果验证" aria-hidden="true">#</a> 11.1.3 反向排除结果验证</h3><p>接着我们保存修改，然后回到终端进行交互，再次使用 git 的查看文件状态命令，参考命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行后，返回结果如下图所示：</p><p><img src="`+c+`" alt="image-20230728215014717"></p><p>在图中可以看到 Git 提示新增了一个 <code>test</code> 文件夹，这便是因为我们刚才对 <code>test/index.php</code> 文件设置反向忽略规则，所以此时 <code>test</code> 文件夹依然会显示出来，此时设置反向忽略就成功实现了。</p><h2 id="_11-2-忽略已提交文件" tabindex="-1"><a class="header-anchor" href="#_11-2-忽略已提交文件" aria-hidden="true">#</a> 11.2 忽略已提交文件</h2><p>有的时候，可能一不小心把某一个原本应该忽略的目录提交到了版本控制器中，再使用 <code>.gitignore</code> 文件去忽略的时候，发现无论如何都无法再次将其忽略，只好默默忍受；其实这是因为 git 已经索引了该文件而导致，接下来我带着大家复现并解决此问题。</p><h3 id="_11-2-1-问题复现" tabindex="-1"><a class="header-anchor" href="#_11-2-1-问题复现" aria-hidden="true">#</a> 11.2.1 问题复现</h3><p>我先来让这个问题复现，让大家感受一下这个问题，首先我在版本库中创建一个目录并新增一个文件，提交文件到版本控制器中，参考命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir test2 &amp;&amp; echo &#39;1231&#39; &gt; test2/test.txt &amp;&amp; git add . &amp;&amp; git commit . -m ;测试忽略已提交的文件&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行后，返回结果如下图所示：</p><p><img src="`+r+`" alt="image-20230728215025068"></p><p>通过图中可以看出，我新增了一个目录和文件，并提交到版本库成功。</p><p>接着我在<code>.gitignore</code> 文件中加入，忽略规则，规则参考如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>test2/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 vim 编辑 <code>.gitignore</code> 文件如下图所示：</p><p><img src="`+p+`" alt="image-20230728215033029"></p><p>增加忽略规则之后，使用 <code>:wq</code> 命令保存，并回到终端交互窗口中，然后去修改我们刚才要忽略的文件，修改之后再查看 Git 会不会提示刚才设置了忽略的文件的修改，参考命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo ‘添加到忽略文件后再次修改’ &gt;&gt; test2/test.txt &amp;&amp; git status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行完毕之后，返回结果如下图所示：</p><p><img src="`+o+`" alt="image-20230728215043908"></p><p>在图中依然可以看到已经设置了忽略的文件，git 依然提示改文件被修改。</p><h3 id="_11-2-2-忽略已存在的文件" tabindex="-1"><a class="header-anchor" href="#_11-2-2-忽略已存在的文件" aria-hidden="true">#</a> 11.2.2 忽略已存在的文件</h3><p>遇到上面这种情况时候，我们需要先删除掉该文件的缓存，才能让他成功忽略，所以正确的操作步骤是先在 .gitignore 中设置该文件为忽略，然后执行删除缓存命令，参考命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git rm --cached test2/index.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行命令之后，再使用 git status 查看是否成功忽略，结果如下所示：</p><p><img src="`+g+'" alt="image-20230728215052909"></p><p>可以看到 <code>test2/test.txt</code> 已经不再提示被修改了，说明成功了。</p><h3 id="_11-2-3-忽略已存在的文件夹" tabindex="-1"><a class="header-anchor" href="#_11-2-3-忽略已存在的文件夹" aria-hidden="true">#</a> 11.2.3 忽略已存在的文件夹</h3><p>忽略已存在的文件夹方式和上面基本一致，我现在模拟一个已经存在的文件夹，如下图所示：</p><p><img src="'+l+'" alt="image-20230728215103845"></p><p>然后编辑 <code>.gitignore</code> 文件，在文件中加入要忽略文件夹，如下图所示：</p><p><img src="'+m+`" alt="image-20230728215109729"></p><p>然后使用删除该文件夹的缓存，参考命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git rm -r --cached test3/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行后，同样适用 <code>git status</code> 查看当前的工作区状态，返回结果如下图所示：</p><p><img src="`+h+`" alt="image-20230728215118032"></p><p>在图中可以看到 test3 文件夹已经从缓存中删除了。</p><p>接着我们需要将此修改提交，因为在忽略文件里已经忽略了该文件夹，所以在提交的时候需要注意加上 <code>-f</code> 参数，表示强制添加，参考命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git add -f test3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行后，返回结果如下图所示：</p><p><img src="`+u+'" alt="image-20230728215128241"></p><p>在图中已经看不到 <code>test3</code> 文件夹的修改信息，说明忽略已存在的文件夹也成功了。</p><h2 id="_11-3-小结" tabindex="-1"><a class="header-anchor" href="#_11-3-小结" aria-hidden="true">#</a> 11.3 小结</h2><p>在这一节中，我们更进一步的学习了如何处理需要忽略的文件，主要内容有反向忽略规则，和忽略已加入版本控制器的文件，有两点需要注意：</p><ol><li>反向忽略应用场景是该文件夹大部分文件需要被忽略，只需要保留少部分的时候</li><li>忽略已存在的文件夹最后一步需要使用 <code>-f</code> 进行强制添加，否则会提示操作失败</li></ol>',65),x=[v];function b(f,k){return a(),t("div",null,x)}const w=e(_,[["render",b],["__file","index-11.html.vue"]]);export{w as default};
