import{_ as e,p as t,q as a,a1 as d}from"./framework-e8cb8151.js";const i="/assets/image-20230729133047304-7a793273.png",c="/assets/image-20230729133053535-d69b6481.png",s="/assets/image-20230729133100366-df35d0a0.png",o="/assets/image-20230729133108107-dd2d635b.png",n="/assets/image-20230729133132710-01afa904.png",r="/assets/image-20230729133139862-059b9add.png",p="/assets/image-20230729133147204-905fc414.png",l="/assets/image-20230729133153257-06c55413.png",g="/assets/image-20230729133200177-cd7e64f0.png",m={},u=d(`<h1 id="_25-复制记录到当前分支-cherry-pick命令使用方法" tabindex="-1"><a class="header-anchor" href="#_25-复制记录到当前分支-cherry-pick命令使用方法" aria-hidden="true">#</a> 25-复制记录到当前分支: cherry-pick命令使用方法</h1><p><img src="https://img2.mukewang.com/5dd1d3370001aa0f06400359.jpg" alt="img"></p><blockquote><p>勤学如春起之苗，不见其增，日有所长。——陶潜</p></blockquote><p>有时候需要把另一个分支中的某个版本单独复制到当前分支中，如果直接使用 <code>git merge</code> 或者 <code>git rebase</code> 进行合并的话，会把另一个分支所有的版本记录都合并过来，这显然不是我们所需要的。</p><p>Git 当中提供了一个功能，它可以将另外一个分支中的某个版本单独复制到当前的分支中来，这就是我们这节要学的 <code>git cherry-pick</code> 命令。</p><h2 id="_25-1-构造环境" tabindex="-1"><a class="header-anchor" href="#_25-1-构造环境" aria-hidden="true">#</a> 25.1 构造环境</h2><p>为了让大家更好的理解，我构建一个实验环境，首先在 <code>test</code> 分支的基础上新建一个分支，名字为 <code>test09</code>，参考命令如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout -b test09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行完毕之后，Git 返回的信息如下图所示：</p><p><img src="`+i+`" alt="image-20230729133047304"></p><p>在上图中，可以看到新建分支成功，并且已经切换到了 <code>test09</code> 分支上来，接着随意修改一个文件，然后提交一个新版本记录，修改文件的命令如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo &#39;123123123&#39;  &gt; aa.txt  &amp;&amp; git status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行完毕之后，通过 <code>git status</code> 展示文件状态如下图所示：</p><p><img src="`+c+`" alt="image-20230729133053535"></p><p>在上图中可以看到新增了一个 <code>aa.txt</code> 的文件，我们将这个文件添加到新版本里面去，使用 commit 提交到新版本的命令如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git add . &amp;&amp; git commit . -m &#39;随意修改一个文件&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行完毕之后，Git 返回的信息如下图所示：</p><p><img src="`+s+`" alt="image-20230729133100366"></p><p>在上图中可以看到新增文件 <code>aa.txt</code> 成功，接着我们通过 <code>git log</code> 查看版本记录，查看版本记录执行命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行完毕之后，Git 返回的版本记录列表如下图所示：</p><p><img src="`+o+`" alt="image-20230729133108107"></p><p>在上图中，可以看到刚才提交的版本记录 commitid 值为 <code>1033b5a07e727fed2fb77155c9d3ba25b246669e</code>，我们将这个值先复制下来，然后通过 <code>git checkout</code> 命令切换到 <code>test</code> 分支，执行命令如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行完毕之后，返回的信息如下图所示：</p><p><img src="`+n+`" alt="image-20230729133132710"></p><p>在上图中，可以看到已经成功切换到 test 分支当中，接下来，我们就可以开始将刚才在 <code>test09</code> 分支提交的版本记录复制到当前的分支下。</p><h2 id="_25-2-复制版本记录" tabindex="-1"><a class="header-anchor" href="#_25-2-复制版本记录" aria-hidden="true">#</a> 25.2 复制版本记录</h2><p>在复制版本记录前，我们先来使用 <code>git log</code> 命令看看当前最新的版本号是多少，查看版本记录列表执行命令如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行完毕之后，Git 返回的版本列表如下图所示：</p><p><img src="`+r+`" alt="image-20230729133139862"></p><p>在上图中可以看到，当前最新版本的备注信息是<code>测试2</code>，一会我们将 <code>test09</code> 分支的指定版本记录复制过来之后，这里应该会发生变化。</p><p>现在正式开始复制版本记录了，我们可以使用 <code>git cherry-pick</code> 命令将 <code>test09</code> 分支中的第一条记录复制过来，这里需要将开始复制下来的 commitid 复制下来，然后组装成一条复制版本的命令，执行的命令如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git cherry-pick 1033b5a07e727fed2fb77155c9d3ba25b246669e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行完毕之后，Git 返回的提示信息如下图所示：</p><p><img src="`+p+`" alt="image-20230729133147204"></p><p>在上图中可以看到之前在 <code>test09</code> 分支提交的版本备注信息，和新增的文件名被显示了出来，到这里就已经成功了。</p><h2 id="_25-3-结果验证" tabindex="-1"><a class="header-anchor" href="#_25-3-结果验证" aria-hidden="true">#</a> 25.3 结果验证</h2><p>接下来，我们通过 <code>git log</code> 查看版本记录列表的方式验证一下，执行命令如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行完毕之后，Git 返回的版本信息如下图所示：</p><p><img src="`+l+`" alt="image-20230729133153257"></p><p>在上图中可以看到，最新的版本已经不是原来那个备注为<code>测试2</code> 的版本了，而是我们在 <code>test09</code> 分支提交的版本，接下来我们再验证文件是否也被改过来，通过 <code>cat</code> 命令查看文件，执行命令如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> cat aa.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行完毕之后，<code>aa.txt</code> 文件内容如下图所示：</p><p><img src="`+g+'" alt="image-20230729133200177"></p><h2 id="_25-4-小结" tabindex="-1"><a class="header-anchor" href="#_25-4-小结" aria-hidden="true">#</a> 25.4 小结</h2><p><code>git cherry-pick</code> 命令是一个使用频率比较低，但在需要使用的场景时候非常省事，比如说，你在 develop 分支中开发，提交了 10 个版本，只有 2 个版本是稳定可以测试的，另外几个版本不可以，然后需要赶紧将两个稳定的版本提测，这个时候就可以使用 <code>git cherry-pick</code> 命令了，在操作的过程中大致有这几个操作步骤：</p><ol><li>在 develop 分支找到稳定版本的 commitid</li><li>切换分支到 test 然后依次执行 <code>git cherry-pick</code> 命令</li><li>通过 <code>git log</code> 检查是否正确</li></ol>',50),h=[u];function v(x,b){return t(),a("div",null,h)}const f=e(m,[["render",v],["__file","index-25.html.vue"]]);export{f as default};
