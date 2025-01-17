# 38-附录：项目中常用的插件

![img](./assets/5cd965230001d80706400359.jpg)

> 困难只能吓倒懦夫懒汉，而胜利永远属于敢于等科学高峰的人。——茅以升

本小节列出项目中常用的 Webpack 插件，大家在实际项目中有类似需求的可以直接通过本小节的介绍来快速查找使用。

## Webpack 内置的插件

Webpack 本身就内置了很多强大的插件：

- [webpack.DefinePlugin](https://webpack.js.org/plugins/define-plugin)：定义全局常量插件；
- [webpack.EnvironmentPlugin](https://webpack.js.org/plugins/environment-plugin)：定义环境变量插件；
- [webpack.BannerPlugin](https://webpack.js.org/plugins/banner-plugin)：在代码中添加版权注释等；
- [webpack.DllPlugin](https://webpack.js.org/plugins/dll-plugin)：使用 DLL 思想来加快编译速度的插件；
- [webpack.HashedModuleIdsPlugin](https://webpack.js.org/plugins/hashed-module-ids-plugin)：可以修改文件 Hash 算法的插件；
- [webpack.optimize.SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin)：代码拆分优化插件；
- [webpack.HotModuleReplacementPlugin](https://webpack.js.org/plugins/hot-module-replacement-plugin)：开启模块热替换功能，通过监听文件变化并自动加载被修改的文件来减少烦人的浏览器手动重新加载；
- [webpack.ProgressPlugin](https://webpack.js.org/plugins/progress-plugin)：构建进度插件；
- [webpack.ProvidePlugin](https://webpack.js.org/plugins/provide-plugin)：自动加载模块，例如出现`$`则加载 jQuery 等常用库；
- [webpack.IgnorePlugin](https://webpack.js.org/plugins/ignore-plugin)：用于忽略部分文件

## 非内置的插件

下面是常用的非内置插件。

- [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)：CSS 文件提取，并且在生产环境构建是可以用于优化 CSS 文件大小；
- [optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin)：压缩 CSS 文件；
- [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin)：在编译之前清理指定目录指定内容；
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)：html 插件，可以根据 JavaScript 模板文件生成 HTML；
- [preload-webpack-plugin](https://github.com/GoogleChromeLabs/preload-webpack-plugin)：html-webpack-plugin 的插件，给页面添加`<link rel="preload">`资源；
- [i18n-webpack-plugin](https://github.com/webpack-contrib/i18n-webpack-plugin)：帮助网页做国际化的插件；
- [webpack-manifest-plugin](https://github.com/danethurber/webpack-manifest-plugin)：生成 Webpack 打包文件清单的插件；
- [html-webpack-inline-source-plugin](https://github.com/DustinJackson/html-webpack-inline-source-plugin)：在 HTML 中内联打包出来的资源；
- [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)：webpack bundle 分析插件；
- [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin)：文件拷贝插件，可以指定文件夹的文件复制到 output 文件夹，方便打包上线；
- [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin)：JavaScript 代码压缩插件，这个插件兼容 ES6 语法，推荐使用这个插件，而不是用 uglifyjs；
- [serviceworker-webpack-plugin](https://github.com/oliviertassinari/serviceworker-webpack-plugin)：生成 PWA service worker 插件；
- [hard-source-webpack-plugin](https://github.com/mzgoddard/hard-source-webpack-plugin)：通过缓存提升非首次编译速度；
- [friendly-errors-webpack-plugin](https://github.com/geowarin/friendly-errors-webpack-plugin)：减少 Webpack 无用的构建 log；
- [stylelint-webpack-plugin](https://www.npmjs.com/package/stylelint-webpack-plugin)：StyleLint 的插件。
