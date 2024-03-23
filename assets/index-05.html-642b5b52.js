import{_ as t,M as h,p as n,q as d,R as i,t as a,N as e,a1 as r}from"./framework-e8cb8151.js";const s="/assets/image-20230727233342339-b1d4f681.png",o="/assets/image-20230727233518544-bd4548ce.png",c="/assets/image-20230727233644441-e26fe9c5.png",u="/assets/image-20230802222314493-5658fb4a.png",g="/assets/image-20230802222356090-11e484a6.png",p={},_=r('<h1 id="_05-场景五-自动化流程及缺陷管理" tabindex="-1"><a class="header-anchor" href="#_05-场景五-自动化流程及缺陷管理" aria-hidden="true">#</a> 05- 场景五：自动化流程及缺陷管理</h1><h2 id="_01-四款文档管理工具介绍最近学习" tabindex="-1"><a class="header-anchor" href="#_01-四款文档管理工具介绍最近学习" aria-hidden="true">#</a> 01: 四款文档管理工具介绍最近学习</h2><h3 id="协同工具" tabindex="-1"><a class="header-anchor" href="#协同工具" aria-hidden="true">#</a> 协同工具</h3><ul><li>国内 <ul><li>Wps 云</li><li>石墨</li><li>有道云</li><li>一起写</li><li>其他</li></ul></li><li>国外 <ul><li>Google Docs</li><li>Office 365</li><li>Alfresco</li><li>LogicalDOC CE</li></ul></li></ul><h3 id="接口文档" tabindex="-1"><a class="header-anchor" href="#接口文档" aria-hidden="true">#</a> 接口文档</h3>',5),f={href:"https://www.showdoc.com.cn/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.eolink.com/#/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://mindoc.com.cn/docs/yqlj",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.apizza.net/?utm_source=juejin&utm_medium=blog&utm_campaign=product&utm_content=0001",target:"_blank",rel:"noopener noreferrer"},w=r('<h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3><ul><li>gitbook</li><li>blog</li><li>注释产出 API 文档</li><li>mock</li></ul><h3 id="接口文档工具" tabindex="-1"><a class="header-anchor" href="#接口文档工具" aria-hidden="true">#</a> 接口文档工具</h3><ul><li><strong>接口模板，分组</strong></li><li>权限控制、团队协作</li><li>版本控制、本地部署</li></ul><h2 id="_02-项目开发团队协作——版本管理" tabindex="-1"><a class="header-anchor" href="#_02-项目开发团队协作——版本管理" aria-hidden="true">#</a> 02: 项目开发团队协作——版本管理</h2><h3 id="git-flow-重点" tabindex="-1"><a class="header-anchor" href="#git-flow-重点" aria-hidden="true">#</a> git Flow (重点)</h3><h3 id="经典模型的问题" tabindex="-1"><a class="header-anchor" href="#经典模型的问题" aria-hidden="true">#</a> 经典模型的问题</h3><img src="'+s+'" alt="image-20230727233342339"><h3 id="git-flow" tabindex="-1"><a class="header-anchor" href="#git-flow" aria-hidden="true">#</a> Git Flow</h3><img src="'+o+'" alt="image-20230727233518544"><img src="'+c+'" alt="image-20230727233644441"><h2 id="_03-关于-git-你需要知道的知识点" tabindex="-1"><a class="header-anchor" href="#_03-关于-git-你需要知道的知识点" aria-hidden="true">#</a> 03: 关于 Git 你需要知道的知识点</h2><h2 id="_04-缺陷控制概念-最佳实践" tabindex="-1"><a class="header-anchor" href="#_04-缺陷控制概念-最佳实践" aria-hidden="true">#</a> 04: 缺陷控制概念&amp;最佳实践</h2><p>软件开发</p><h3 id="需求不明确-可能会导致返工" tabindex="-1"><a class="header-anchor" href="#需求不明确-可能会导致返工" aria-hidden="true">#</a> 需求不明确 =&gt; 可能会导致返工</h3><ol><li>需求不明确</li><li>需求文档不清晰</li><li>客户未确定需求</li><li>内部反推动的工作风气</li><li>功能模块未讨论清楚，分工不具体，人员未指定</li><li>。。。。</li></ol><h3 id="进度有超期-可能会导致加班" tabindex="-1"><a class="header-anchor" href="#进度有超期-可能会导致加班" aria-hidden="true">#</a> 进度有超期 =&gt; 可能会导致加班</h3><ol><li>经常项目上线加班</li><li>经常前期推不动，重度依赖 UI 设计，产品经理</li><li>无人 PUSH 放风式管理</li><li>自驱力不足</li><li>。。。</li></ol><h3 id="工程有-bug-可能会导致难维护" tabindex="-1"><a class="header-anchor" href="#工程有-bug-可能会导致难维护" aria-hidden="true">#</a> 工程有 Bug =&gt; 可能会导致难维护</h3><ol><li>无代码风格指南</li><li>无代码质量监控</li><li>测试流程紊乱</li><li>没有自动化测试闭环</li><li>发布环境/测试环境</li><li>。。。</li></ol><h3 id="协同有问题-可能会导致效率地下" tabindex="-1"><a class="header-anchor" href="#协同有问题-可能会导致效率地下" aria-hidden="true">#</a> 协同有问题 =&gt; 可能会导致效率地下</h3><ol><li>项目经理太忙</li><li>项目经验经验不足</li><li>有想法的人太多</li><li>没有具体的分工</li><li>缺少协同工具，人员的协同能力不同</li></ol><h3 id="缺陷控制概念" tabindex="-1"><a class="header-anchor" href="#缺陷控制概念" aria-hidden="true">#</a> 缺陷控制概念</h3><p><strong>缺陷控制</strong>就是在项目全生命周期中，<strong>保障项目质量的</strong>一系列行为。</p><p><strong>缺陷跟踪系统/软件</strong>是被设计用来帮助质量保证和程序员在工作中维护软件缺陷的跟踪报告，或者称作问题跟踪管理系统</p><p>主要的作用是提供<strong>集中概览、开发状态、提供报告</strong></p><h3 id="缺陷控制方法" tabindex="-1"><a class="header-anchor" href="#缺陷控制方法" aria-hidden="true">#</a> 缺陷控制方法</h3><ul><li>需求不明确 =&gt; 持续沟通/督办</li><li>进度有超期 =&gt; 缺陷跟踪</li><li>工程有 Bug =&gt; 代码 Lint/规范</li><li>协同有问题 =&gt; 清单/待办</li></ul><h3 id="总结办法" tabindex="-1"><a class="header-anchor" href="#总结办法" aria-hidden="true">#</a> 总结办法</h3><ul><li>分工明确，责任道人</li><li>借助工具，提升效率</li><li><strong>量体裁衣，按需取用</strong></li></ul><p><strong>用动态的眼光看问题，长远的角度实施计划</strong></p><h3 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h3><ul><li>小公司团队/扁平管理/项目外包/业务多样简单</li><li>传统团队/二级公司/流程冗长/业务花样复杂</li><li>中大型公司/KPI 驱动/技术单一/业务重复度高/技术深入</li></ul><h3 id="总结案例" tabindex="-1"><a class="header-anchor" href="#总结案例" aria-hidden="true">#</a> 总结案例</h3><ul><li>无章办事/代码优化/代码质量</li><li>督办意识/工具看板/轻重缓急</li><li>意识薄弱/形同虚设/领导意识/团队意识</li></ul><h3 id="看似美好-实则难办" tabindex="-1"><a class="header-anchor" href="#看似美好-实则难办" aria-hidden="true">#</a> 看似美好，实则难办？</h3><h4 id="流程介绍" tabindex="-1"><a class="header-anchor" href="#流程介绍" aria-hidden="true">#</a> 流程介绍</h4><p>代码 =&gt; 团队 =&gt; 项目 =&gt; 公司</p><ul><li>代码阶段 <ul><li>自检代码</li><li>质量监控</li><li>版本控制</li><li>代码风格</li><li>Snippets</li></ul></li><li>团队 <ul><li>互相监督</li><li>意识形态</li><li>定期培训、自检</li><li>分工明确</li><li>协同待办</li><li>代码 Review</li></ul></li><li>项目 <ul><li>指定计划</li><li>项目经理 push</li><li>版本控制</li><li>协商沟通</li><li>定期检验</li><li>纠正措施</li><li>备选方案</li></ul></li><li>公司 <ul><li>缺陷管理软件</li><li>公司流程</li><li>奖惩有度</li><li>抽样检查</li><li>质量改进</li><li>总结推演</li></ul></li></ul><h2 id="_05-eslint-是如何使用和实现的" tabindex="-1"><a class="header-anchor" href="#_05-eslint-是如何使用和实现的" aria-hidden="true">#</a> 05: ESLint 是如何使用和实现的？</h2><h2 id="_06-什么是前端自动化-什么是-cicd" tabindex="-1"><a class="header-anchor" href="#_06-什么是前端自动化-什么是-cicd" aria-hidden="true">#</a> 06: 什么是前端自动化？什么是 CICD？</h2><p><img src="'+u+'" alt="image-20230802222314493"></p><p><img src="'+g+'" alt="image-20230802222356090"></p><h3 id="自动化相关概念" tabindex="-1"><a class="header-anchor" href="#自动化相关概念" aria-hidden="true">#</a> 自动化相关概念</h3><p><strong>前端自动化</strong>是指前端代码的自动化构建、打包、测试以及部署等流畅</p><p>持续集成（Continuous Integration)</p><p>持续部署（Continuous Deployment)</p><p>前端自动化通常与 <strong>CI/CD</strong> 流程相结合</p><h3 id="为什么要结合自动化流程" tabindex="-1"><a class="header-anchor" href="#为什么要结合自动化流程" aria-hidden="true">#</a> 为什么要结合自动化流程？</h3><h4 id="自动化流程的意义" tabindex="-1"><a class="header-anchor" href="#自动化流程的意义" aria-hidden="true">#</a> 自动化流程的意义</h4><ul><li><strong>减少人为失误，提高软件质量</strong></li><li>效率迭代，便捷部署</li><li>快速交付，便于管理</li></ul>',51);function k(C,I){const l=h("ExternalLinkIcon");return n(),d("div",null,[_,i("ul",null,[i("li",null,[i("a",f,[a("showdoc"),e(l)])]),i("li",null,[i("a",m,[a("eolinker"),e(l)])]),i("li",null,[i("a",b,[a("MinDoc"),e(l)])]),i("li",null,[i("a",x,[a("apizza"),e(l)])])]),w])}const B=t(p,[["render",k],["__file","index-05.html.vue"]]);export{B as default};
