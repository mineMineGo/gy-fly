import{_ as l,M as r,p as c,q as o,R as a,t as s,N as i,a1 as n}from"./framework-e8cb8151.js";const t="/assets/5f168291000112bf06400427-1f68c8e6.jpg",d="/assets/5f16835a00014fd918561368-79088f22.png",p="/assets/5f16837200017d2320480570-a466ff09.png",u="/assets/5f168382000154ae16200686-bb6b5435.png",v="/assets/5f16838c0001ce6c10480594-773ca7b6.png",m="/assets/5f1683970001249509480680-b2073e3a.png",b={},k=n('<h1 id="_03-docker-安装与运行" tabindex="-1"><a class="header-anchor" href="#_03-docker-安装与运行" aria-hidden="true">#</a> 03-Docker 安装与运行</h1><p><img src="'+t+`" alt="img"></p><blockquote><p>知识犹如人体的血液一样宝贵。——高士其</p></blockquote><p>这一小节我们介绍一下 Docker 安装与运行，在开始之后，我们需要明白的时候，Docker 有两个版本：一个是商业版收费的：<strong>Enterprice Edition，一般简称 Docker EE</strong>；另一个是社区版，也就是 <strong>Community Edition，一般简称为 Docker CE</strong>。</p><p>这里安装我们会介绍在 Linux 平台、Mac 平台、Windows 平台的安装。重点会介绍一下在 Linux 平台的安装，Linux 平台又会细分两个：Centos 和 Ubuntu。</p><h2 id="_1-linux-安装" tabindex="-1"><a class="header-anchor" href="#_1-linux-安装" aria-hidden="true">#</a> 1. Linux 安装</h2><p>Linux 下安装 Docker 我们将主要介绍 Centos 和 Ubuntu 系统</p><h3 id="centos" tabindex="-1"><a class="header-anchor" href="#centos" aria-hidden="true">#</a> Centos</h3><p>我们这里的示例 OS 版本是 Centos 7.4，使用命令 <code>lsb_release -a</code> 可以看到系统版本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># lsb_release -a</span>
LSB Version:	:core-4.1-amd64:core-4.1-noarch
Distributor ID:	CentOS
Description:	CentOS Linux release <span class="token number">7.4</span>.1708 <span class="token punctuation">(</span>Core<span class="token punctuation">)</span>
Release:	<span class="token number">7.4</span>.1708
Codename:	Core
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Centos 下面安装我们可以采用两种安装方式，一种是 yum 安装，一种是下载 rpm 包进行安装。</p><h4 id="yum-安装" tabindex="-1"><a class="header-anchor" href="#yum-安装" aria-hidden="true">#</a> yum 安装</h4><p>yum 安装需要确保 yum 源里面含有 Docker 软件包，国内的话推荐使用阿里云的 yum 源。如果要查看自己的系统的 yum 源，可以在目录 <code>/etc/yum.repos.d/</code> 下查看，下面是我自己的阿里云的 ecs 虚拟机 yum 源文件，包含两个部分：<code>CentOS-Base.repo</code> 和 <code>epel.repo</code> 。内容分别如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>base<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>CentOS-<span class="token variable">$releasever</span>
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">failovermethod</span><span class="token operator">=</span>priority
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://mirrors.cloud.aliyuncs.com/centos/<span class="token variable">$releasever</span>/os/<span class="token variable">$basearch</span>/
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>http://mirrors.cloud.aliyuncs.com/centos/RPM-GPG-KEY-CentOS-7

<span class="token punctuation">[</span>updates<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>CentOS-<span class="token variable">$releasever</span>
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">failovermethod</span><span class="token operator">=</span>priority
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://mirrors.cloud.aliyuncs.com/centos/<span class="token variable">$releasever</span>/updates/<span class="token variable">$basearch</span>/
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>http://mirrors.cloud.aliyuncs.com/centos/RPM-GPG-KEY-CentOS-7

<span class="token punctuation">[</span>extras<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>CentOS-<span class="token variable">$releasever</span>
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">failovermethod</span><span class="token operator">=</span>priority
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://mirrors.cloud.aliyuncs.com/centos/<span class="token variable">$releasever</span>/extras/<span class="token variable">$basearch</span>/
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>http://mirrors.cloud.aliyuncs.com/centos/RPM-GPG-KEY-CentOS-7
<span class="token punctuation">[</span>epel<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>Extra Packages <span class="token keyword">for</span> Enterprise Linux <span class="token number">7</span> - <span class="token variable">$basearch</span>
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">failovermethod</span><span class="token operator">=</span>priority
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://mirrors.cloud.aliyuncs.com/epel/7/<span class="token variable">$basearch</span>
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>http://mirrors.cloud.aliyuncs.com/epel/RPM-GPG-KEY-EPEL-7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用阿里云的 yum 源安装 Docker 非常简单，强烈建议各位同学配置阿里云的 yum 源。安装使用下面一条命令即可：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行完之后，可以通过如下命令查看 Docker 的版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker version</span>
Client:
 Version:         <span class="token number">1.13</span>.1
 API version:     <span class="token number">1.26</span>
 Package version:
Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the <span class="token function">docker</span> daemon running?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个输出表示 Docker 的版本是 1.13.1。细心的同学会注意到最后一句提示，是因为 Docker Daemon 进程还没有启动，启动命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> <span class="token function">docker</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start docker.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动完之后，我们就可以通过 docker 的命令来查看 Docker 是不是运行正常了，比如使用 <code>docker images</code> 查看本地所有的镜像。如下输出是正常的。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker images</span>
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="下载-rpm-包安装" tabindex="-1"><a class="header-anchor" href="#下载-rpm-包安装" aria-hidden="true">#</a> 下载 rpm 包安装</h4>`,25),h={href:"https://download.docker.com/linux/centos/7/x86_64/stable/Packages/",target:"_blank",rel:"noopener noreferrer"},g=n('<p><img src="'+d+`" alt="图片描述"></p><p>其中 containerd 和 docker-ce-cli 是 docker-ce 安装的前置条件，也就是要安装 docker-ce，需要先安装 containerd 和 docker-ce-cli。版本之间保证 docker-ce 和 docker-ce-cli 的版本一致，containerd 的版本尽可能新就 ok。下载到本地之后，使用 yum 安装。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token operator">&lt;</span>pkg_name<span class="token operator">&gt;</span>.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我这里选的版本是：</p><ul><li>docker-ce-cli-19.03.5-3.el7.x86_64.rpm</li><li>containerd.io-1.2.6-3.3.el7.x86_64.rpm</li><li>docker-ce-19.03.5-3.el7.x86_64.rpm</li></ul><p>按上面的顺序安装之后启动 docker</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start docker.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们看一下 docker version:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker version</span>
Client: Docker Engine - Community
 Version:           <span class="token number">19.03</span>.5
 API version:       <span class="token number">1.40</span>
 Go version:        go1.12.12
 Git commit:        633a0ea
 Built:             Wed Nov <span class="token number">13</span> 07:25:41 <span class="token number">2019</span>
 OS/Arch:           linux/amd64
 Experimental:      <span class="token boolean">false</span>

Server: Docker Engine - Community
 Engine:
  Version:          <span class="token number">19.03</span>.5
  API version:      <span class="token number">1.40</span> <span class="token punctuation">(</span>minimum version <span class="token number">1.12</span><span class="token punctuation">)</span>
  Go version:       go1.12.12
  Git commit:       633a0ea
  Built:            Wed Nov <span class="token number">13</span> 07:24:18 <span class="token number">2019</span>
  OS/Arch:          linux/amd64
  Experimental:     <span class="token boolean">false</span>
 containerd:
  Version:          <span class="token number">1.2</span>.6
  GitCommit:        894b81a4b802e4eb2a91d1ce216b8817763c29fb
 runc:
  Version:          <span class="token number">1.0</span>.0-rc8
  GitCommit:        425e105d5a03fabd737a126ad93d62a9eeede87f
 docker-init:
  Version:          <span class="token number">0.18</span>.0
  GitCommit:        fec3683
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个要比阿里云的 Yum 源中的 Docker 版本高很多，如果需要新的版本的 feature 的话，建议自己下载对应的 rpm 包进行安装。</p><h3 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h3><p>我们知道 ubuntu 的包管理是通过 apt-get 来做的，但是默认的 apt-get 里面是没有包含 docker 的软件包的，我们需要将 Docker 的官方仓库加进来。</p><h4 id="apt-get-安装" tabindex="-1"><a class="header-anchor" href="#apt-get-安装" aria-hidden="true">#</a> apt-get 安装</h4><p>更新 ubuntu 的 apt 源索引</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装包允许 apt 通过 HTTPS 使用仓库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
    apt-transport-https <span class="token punctuation">\\</span>
    ca-certificates <span class="token punctuation">\\</span>
    <span class="token function">curl</span> <span class="token punctuation">\\</span>
    software-properties-common
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加 Docker 官方 GPG key</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://download.docker.com/linux/ubuntu/gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置 Docker 稳定版仓库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository <span class="token punctuation">\\</span>
   <span class="token string">&quot;deb [arch=amd64] https://download.docker.com/linux/ubuntu \\
   <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> \\
   stable&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加仓库后，更新 apt 源索引</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 Docker CE，不如过不输入 Version，则默认安装最新版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> docker-ce<span class="token operator">=</span><span class="token operator">&lt;</span>VERSION<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动 Docker</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start docker.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用这种方式安装的最大劣势就是 Docker 官方仓库和我们国内的机器网速捉急，相比之下将 deb 包下载到本地再进行安装往往是一种更好的安装方式。</p><h4 id="deb-软件包安装" tabindex="-1"><a class="header-anchor" href="#deb-软件包安装" aria-hidden="true">#</a> deb 软件包安装</h4><p>软件包下载地址为：https://download.docker.com/linux/ubuntu/dists/，这个地方先选择自己的 ubuntu 版本，比如我们选择 artful，则软件包的完整路径为：https://download.docker.com/linux/ubuntu/dists/artful/pool/stable/amd64/</p><p><img src="`+p+`" alt="图片描述"></p><p>然后我们选择一个 docker-ce 版本，直接本地安装即可。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> dpkg <span class="token parameter variable">-i</span> <span class="token operator">&lt;</span>deb pkg name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-mac-安装" tabindex="-1"><a class="header-anchor" href="#_2-mac-安装" aria-hidden="true">#</a> 2. Mac 安装</h2>`,34),f={href:"https://docs.docker.com/v17.09/docker-for-mac/install/#download-docker-for-mac",target:"_blank",rel:"noopener noreferrer"},x=n('<ul><li>stable: 稳定版</li><li>edge: 最新的 release，稳定性不保障</li></ul><p><img src="'+u+'" alt="图片描述"></p><p>然后我们通过上图中 “Get Docker for Mac” 链接获取 dmg 安装文件。</p><h3 id="启动-docker" tabindex="-1"><a class="header-anchor" href="#启动-docker" aria-hidden="true">#</a> 启动 Docker</h3><p>启动，找到你的 Application 中的下面这个 Docker 图标，点击运行即可。</p><p><img src="'+v+'" alt="图片描述"></p><p>启动之后，我们可以在导航栏上发现这么一个小图标，就表示 Docker 运行成功了。</p><p><img src="'+m+'" alt="图片描述"></p><h2 id="_3-windows-安装" tabindex="-1"><a class="header-anchor" href="#_3-windows-安装" aria-hidden="true">#</a> 3. Windows 安装</h2><p>Windows 安装链接：https://docs.docker.com/v17.09/docker-for-windows/install/#download-docker-for-windows ，和 Mac 版类似，提供了 stable 和 edge 版本。我们只需要下载对应的版本的可执行文件进行安装即可。启动也是类似的，这里就不再赘述了。</p>',10);function _(y,D){const e=r("ExternalLinkIcon");return c(),o("div",null,[k,a("p",null,[s("哪里下载呢？"),a("a",h,[s("当然是 dockerhub"),i(e)]),s("，截图如下图所示：")]),g,a("p",null,[s("Mac 版本的安装页面地址为："),a("a",f,[s("https://docs.docker.com/v17.09/docker-for-mac/install/#download-docker-for-mac"),i(e)]),s(" 。Docker 针对 Mac 平台提供了两个不同的版本：")]),x])}const E=l(b,[["render",_],["__file","index-03.html.vue"]]);export{E as default};
