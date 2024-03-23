import{_ as n,M as s,p as o,q as r,R as e,t,N as i,a1 as a}from"./framework-e8cb8151.js";const d="/assets/image-20230723230955625-d366bb6b.png",c="/assets/image-20230723231104068-047deb3e.png",h="/assets/image-20230723231208739-8b7d7f5f.png",u="/assets/image-20230723231906786-3c92fa5d.png",g="/assets/image-20230723232639127-2d1868f5.png",_="/assets/image-20230723232743413-1b0542e7.png",p="/assets/image-20230723232901963-44e7970a.png",m="/assets/image-20230723233351441-a59cdb5e.png",b={},f=a('<h1 id="_04-前端性能检测工具-lighthouse、webpagetest-的介绍与实践" tabindex="-1"><a class="header-anchor" href="#_04-前端性能检测工具-lighthouse、webpagetest-的介绍与实践" aria-hidden="true">#</a> 04-前端性能检测工具 Lighthouse、WebPageTest 的介绍与实践</h1><h2 id="_01-性能检测工具概述" tabindex="-1"><a class="header-anchor" href="#_01-性能检测工具概述" aria-hidden="true">#</a> 01：性能检测工具概述</h2><h3 id="性能检测概述" tabindex="-1"><a class="header-anchor" href="#性能检测概述" aria-hidden="true">#</a> 性能检测概述</h3><ul><li>如何快读定位性能瓶颈？ <ul><li>比对着优化知识点清单，一项一项手动排查或者完全凭借经验去处理吗？（不推荐）</li><li>我们需要有一整套清晰科学的优化流程和检测工具，来进行高效、准确及全面的性能分析与瓶颈定位**（推荐）**</li></ul></li></ul><h3 id="性能检测本质-原则" tabindex="-1"><a class="header-anchor" href="#性能检测本质-原则" aria-hidden="true">#</a> 性能检测本质 &amp; 原则</h3><ul><li>本质：后续优化工作提供指导方向、参考基线以及前后对比的依据</li><li>原则： <ul><li>性能检测需要多维度，并不是单一指标</li><li>需要进行多次检测，排除，几次检测带来的偶然性</li><li>区分开发环境、线上环境对性能造成的额外的影响因素</li></ul></li></ul><h3 id="devtools-network" tabindex="-1"><a class="header-anchor" href="#devtools-network" aria-hidden="true">#</a> devtools-NetWork</h3><img src="'+d+'" alt="image-20230723230955625"><h3 id="devtools-performance" tabindex="-1"><a class="header-anchor" href="#devtools-performance" aria-hidden="true">#</a> devtools-Performance</h3><img src="'+c+'" alt="image-20230723231104068"><h3 id="devtools-performance-monitor" tabindex="-1"><a class="header-anchor" href="#devtools-performance-monitor" aria-hidden="true">#</a> devtools-Performance monitor</h3><p><img src="'+h+'" alt="image-20230723231208739"></p><h2 id="_02-lighthouse-介绍" tabindex="-1"><a class="header-anchor" href="#_02-lighthouse-介绍" aria-hidden="true">#</a> 02：Lighthouse 介绍</h2><ul><li>chrome 扩展程序 <ul><li>chrome 网上应用商店搜索扩展程序，进行添加之后就可以使用（高版本已经继承，不用此方法）</li></ul></li><li>Lighthouse Tab <ul><li>在 chrome 开发者工具的 moretools 里面直接选择 LightHouse，然后在工具面板上就会展示这个 tab (<strong>直接推荐使用</strong>)</li></ul></li><li>命令行工具 <ul><li>直接使用 Node Cli 命令行工具来进行分析网站页面</li></ul></li></ul><h3 id="lighthouse-的结果分析" tabindex="-1"><a class="header-anchor" href="#lighthouse-的结果分析" aria-hidden="true">#</a> lightHouse 的结果分析</h3>',15),v=e("p",null,"第一部分：性能指标评估结果",-1),w=e("li",null,"FC：首次内容绘制时间，白屏时间",-1),k=e("li",null,"TTI：可交互前的耗时",-1),x=e("li",null,"SI (Speed Index)：首屏展现平均值",-1),T=e("li",null,"LCP：最大内容耗时，视屏时间",-1),L={href:"https://web.dev/fcp/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://web.dev/tti/",target:"_blank",rel:"noopener noreferrer"},C=e("li",null,"CLS（Cumulative Layout Shift）：累积布局偏移，指一个页面的布局在加载时的偏移程度",-1),I=e("img",{src:u,alt:"image-20230723231906786"},null,-1),N=e("li",null,[e("p",null,"第二部分：优化建议，lightHouse 给出一些切实可行的一些建议"),e("ul",null,[e("li",null,[e("img",{src:g,alt:"image-20230723232639127"})])])],-1),P=e("li",null,[e("p",null,"第三部分：诊断结果，给出页面中影响性能的各个方面"),e("ul",null,[e("li",null,[e("img",{src:_,alt:"image-20230723232743413"})])])],-1),S=e("li",null,[e("p",null,"第四部分：已经通过的性能检测"),e("ul",null,[e("li",null,[e("img",{src:p,alt:"image-20230723232901963"})])])],-1),E=a(`<h2 id="_03-webpagetest-介绍" tabindex="-1"><a class="header-anchor" href="#_03-webpagetest-介绍" aria-hidden="true">#</a> 03：WebPageTest 介绍</h2><ul><li>环境高度自定义化，可以模拟用户的使用场景</li><li>清晰详细的瀑布流</li><li>使用 webpagetest 可以测试已经已经上线的页面，<strong>如何处理还没上线的页面？？</strong> – webpagetest 本地部署</li></ul><blockquote><p>使用官方的 webpagetest/server 以及 webpagetest/agent 包进行 docker 部署</p></blockquote><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>$ docker run -d -p 4000:80 --rm webpagetest/server

$ docker run -d -p 4001:80 \\
--network=&quot;host&quot; \\
-e &quot;SERVER_URL=http://localhost:4000/work/&quot; \\
-e &quot;LOCATION=Test&quot; \\
webpagetest/agent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),B=e("p",null,[t("官方包在 mac 上会报 Error configuring traffic-shaping 错误，这是因为 OSX 下还没有实现 "),e("code",null,"traffic-shapping")],-1),V=e("p",null,[e("img",{src:m,alt:"image-20230723233351441"})],-1),R={href:"https://cloud.tencent.com/developer/article/1651120",target:"_blank",rel:"noopener noreferrer"},F={href:"https://www.webpagetest.org/",target:"_blank",rel:"noopener noreferrer"};function H(O,W){const l=s("ExternalLinkIcon");return o(),r("div",null,[f,e("ul",null,[e("li",null,[v,e("ul",null,[w,k,x,T,e("li",null,[t("TBT (Total Blocking Time)：总阻塞时间，测量"),e("a",L,[t("First Contentful Paint 首次内容绘制 (FCP)"),i(l)]),t("与"),e("a",q,[t("Time to Interactive 可交互时间 (TTI)"),i(l)]),t("之间的总时间，这期间，主线程被阻塞的时间过长，无法作出输入响应。")]),C]),I]),N,P,S]),E,e("ul",null,[e("li",null,[B,V,e("ul",null,[e("li",null,[t("替代方案：需要自己制作镜像，具体详细步骤参考："),e("a",R,[t("https://cloud.tencent.com/developer/article/1651120"),i(l)])])])])]),e("p",null,[e("a",F,[t("https://www.webpagetest.org/"),i(l)])])])}const y=n(b,[["render",H],["__file","index-04.html.vue"]]);export{y as default};
