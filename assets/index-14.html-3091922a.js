import{_ as e,p as a,q as i,a1 as t}from"./framework-e8cb8151.js";const s="/assets/image-20230728224251945-69f61ca9.png",d="/assets/image-20230728224303939-b4800a2f.png",n="/assets/image-20230728224319429-6823339d.png",r="/assets/image-20230728224326703-3724b80e.png",l="/assets/image-20230728224336255-1a770549.png",c="/assets/image-20230728224343694-a202d2a1.png",p="/assets/image-20230728224350706-d0bcf78b.png",g="/assets/image-20230728224401228-b1f87573.png",o="/assets/image-20230728224408086-46db8841.png",m="/assets/image-20230728224414474-cb0cbbb8.png",u={},v=t(`<h1 id="_14-删除过期分支-清理无意义的分支数据" tabindex="-1"><a class="header-anchor" href="#_14-删除过期分支-清理无意义的分支数据" aria-hidden="true">#</a> 14-删除过期分支：清理无意义的分支数据</h1><p><img src="https://img2.mukewang.com/5daee0480001a05206400359.jpg" alt="img"></p><blockquote><p>成功的奥秘在于目标的坚定。——迪斯雷利</p></blockquote><p>Git 会保留从项目最开始保留所有的数据，当一个代码仓库长期使用后，会发现代码仓库越来越大，分支也越来越多；这些都会影响到我们 Git 仓库的速度，如果发现一些分支不需要了，我们可以手动删除，以此提高响应速度； 一般两类分支可能需要清理：</p><ol><li>本地不存在，远程存在该分支，但不需要了</li><li>远程不存在，本地存在该分支，也不需要了</li></ol><h2 id="_14-1-清理远程分支" tabindex="-1"><a class="header-anchor" href="#_14-1-清理远程分支" aria-hidden="true">#</a> 14.1 清理远程分支</h2><p>很多时候我们删除分支实际上只是在本地将分支删除，但远程依然会存在，如果我们确认远程也不需要该分支可以手动给删除一下，一般有两个步骤需要操作，首先查看远程分支列表，参考命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行命令后，结果如下图所示：</p><p><img src="`+s+`" alt="image-20230728224251945"></p><p>在图中可以看到本地分支和远程分支，远程分支显示颜色为红色，可以看到都是以 <code>remotes</code> 开头的，把需要删除的分支记录下来，然后执行删除远程分支命令，参考命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push origin --delete dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行命令后，结果如下图所示： <img src="`+d+`" alt="image-20230728224303939"></p><p>在图中可以看到返回了 <code>[deleted]</code> 等信息，说明我们已经成功将远程分支删除。</p><h2 id="_14-2-清理本地分支" tabindex="-1"><a class="header-anchor" href="#_14-2-清理本地分支" aria-hidden="true">#</a> 14.2 清理本地分支</h2><p>有些时候我们在本地新建了一个临时分支，或者服务器已经将某一分支删除，本地遗留了很多废弃的分支，当我们想进行清理的时候，如果一个个删除的话效率非常低；这里教大家使用一种比较简单的方法来清理这些分支；我们可以根据分支在远程是否存在作为依据，决定是否将它删除，如果不存在则删除，反之则保留，具体操作如下。</p><h3 id="_14-2-1-模拟场景" tabindex="-1"><a class="header-anchor" href="#_14-2-1-模拟场景" aria-hidden="true">#</a> 14.2.1 模拟场景</h3><p>下面我新建一些分支，这些分支只存在本地，来模拟上述提到的情况，新建分支参考命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout -b test1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行后，会以当前所处的分支基础上新建一个分支，执行返回结果如下：</p><p><img src="`+n+`" alt="image-20230728224319429"></p><p>接着我们查看当前的版本库的分支列表，参考命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行后，返回结果如下：</p><p><img src="`+r+`" alt="image-20230728224326703"></p><p>在图中可以看到所有的分支信息，绿色的代表当前所处的分支，红色的代表远程存在的分支，可以看出刚才新建的分支远程中并不存在；</p><p>现在继续将 test1 分支推送到远程服务器当中，推送的参考命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push --set-upstream origin test1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行后，返回结果如下图所示：</p><p><img src="`+l+`" alt="image-20230728224336255"></p><p>在图中可以看到远程仓库提示已经成功新建了一个分支，我们还可以使用查看远程仓库的信息，参考命令如下 ：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote show origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行后，返回结果信息如下图所示：</p><p><img src="`+c+`" alt="image-20230728224343694"></p><p>在图中可以看到 origin 的具体地址，远程分支列表，以及本地分支与远程分支相对应的关联关系等信息，接下来我们只需要删除远程分支，便完成了模拟场景的最后一步，操作命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push origin --delete test1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行命令之后，返回结果如下图所示：</p><p><img src="`+p+`" alt="image-20230728224350706"></p><p>从图中的返回信息中心可以看出，远程的 test1 分支已经删除成功。</p><h3 id="_14-2-1-清理本地分支" tabindex="-1"><a class="header-anchor" href="#_14-2-1-清理本地分支" aria-hidden="true">#</a> 14.2.1 清理本地分支</h3><p>经过上面的场景模拟，现在我们可以开始进行正式清理分支操作了，首先我们查看分支情况，参考命令如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch -a 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行命令之后，返回的信息如下图所示</p><p><img src="`+g+`" alt="image-20230728224401228"></p><p>从图中可以看出，本地存在 <code>test1</code> 分支，远程不存在此分支；说明删除远程已经被删除，但本地还存在的分支，我们如果想将远程的分支与本地保持一致，直接使用 <code>git pull</code> 是不够的，可以使用 <code>git fetch --prune origin</code>，参考命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git fetch --prune origin 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行之后，返回信息如下图所示：</p><p><img src="`+o+`" alt="image-20230728224408086"></p><p>Git 会从拉取远程的分支信息与本地的进行对比，当发现远程的分支已经删除，便会对本地的分支进行标注；我们可以使用 Git 的命令查看关联失效的分支，参考命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch -vv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令执行之后，返回结果如下图所示：</p><p><img src="`+m+`" alt="image-20230728224414474"></p><p>在分支列表中，test1 分支后面有一个 <code>：gone</code> 的标识，说明远程分支已经被删除，通过这个标识我们能够很清晰的知道该需要删除那些分支，删除分支的命令参考如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch -d test1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_14-3-小结" tabindex="-1"><a class="header-anchor" href="#_14-3-小结" aria-hidden="true">#</a> 14.3 小结</h2><p>在本节内容中主要讲解了如何清理 Git 分支，清理分支主要原因是版本库太大会导致速度变慢，通常会清理两种情况的分支：</p><ol><li>清理远程仓库分支，本地已删除但远程未删除</li><li>清除本地仓库分支，远程已删除但本地未删除的分支</li></ol>`,57),h=[v];function b(x,_){return a(),i("div",null,h)}const k=e(u,[["render",b],["__file","index-14.html.vue"]]);export{k as default};
