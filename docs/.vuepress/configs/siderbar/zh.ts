import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/zh/skill/front/': [
    {
      text: 'HTML5三剑客',
      children: [
        '/zh/skill/front/',
        '/zh/skill/front/swordsman/html.md',
        '/zh/skill/front/swordsman/css.md',
        '/zh/skill/front/swordsman/js.md',
      ],
    },
    {
      text: 'JavaScript相关',
      children: [
        '/zh/skill/front/about/module.md',
        '/zh/skill/front/about/jquery.md',
        '/zh/skill/front/about/grunt.md',
        '/zh/skill/front/about/gulp.md',
        '/zh/skill/front/about/webpack.md',
        '/zh/skill/front/about/axios.md',
        '/zh/skill/front/about/typeScript.md',
        '/zh/skill/front/about/promise.md',
        '/zh/skill/front/about/todo.md',
      ],
    },
    {
      text: '包管理相关',
      children: [
        '/zh/skill/front/package/npm.md',
        '/zh/skill/front/package/yarn.md',
        '/zh/skill/front/package/pnpm.md',
        '/zh/skill/front/package/npm-yarn-pnpm.md',
      ],
    },
    {
      text: '前端框架',
      children: [
        '/zh/skill/front/frame/vue.md',
        '/zh/skill/front/frame/react.md',
      ],
    },
    {
      text: 'mini-前端框架',
      children: [
        '/zh/skill/front/mini-frame/mini-vue.md',
        '/zh/skill/front/mini-frame/mini-webpack.md',
        '/zh/skill/front/mini-frame/mini-router.md',
        '/zh/skill/front/mini-frame/mini-vue-router.md',
        '/zh/skill/front/mini-frame/mini-pinia.md',
      ],
    },
    {
      text: '源码解读',
      children: [
        '/zh/skill/front/source/axios.md',
        '/zh/skill/front/source/promise.md',
        '/zh/skill/front/source/utils.md',
        '/zh/skill/front/source/jquery.md',
        {
          text: 'Vue源码',
          collapsible: false,
          children: [
            '/zh/skill/front/source/vue/mustache.md',
            '/zh/skill/front/source/vue/diff.md',
            '/zh/skill/front/source/vue/reactivity.md',
            '/zh/skill/front/source/vue/ast.md',
            '/zh/skill/front/source/vue/direct-method.md',
            '/zh/skill/front/source/vue/vue-question.md',
          ],
        },
        {
          text: 'Vuex源码',
          children: ['/zh/skill/front/source/vuex.md'],
        },
        {
          text: '自定义Router',
          children: ['/zh/skill/front/source/router.md'],
        },
      ],
    },
    {
      text: '一些翻译',
      children: ['/zh/skill/front/translate/require-js.md'],
    },
  ],
  '/zh/interview': [
    {
      text: 'Html 相关',
      children: ['/zh/interview/html/html.md'],
    },
    {
      text: 'Css 相关',
      children: [
        '/zh/interview/css/css-layout.md',
        '/zh/interview/css/css-position.md',
        '/zh/interview/css/css-graphics.md',
        '/zh/interview/css/css-reactive.md',
      ],
    },
    {
      text: 'JavaScript 相关',
      children: [
        '/zh/interview/javascript/basic-01.md',
        '/zh/interview/javascript/basic-02.md',
        '/zh/interview/javascript/basic-03.md',
        '/zh/interview/javascript/basic-04.md',
        '/zh/interview/javascript/basic-05.md',
        '/zh/interview/javascript/basic-06.md',
        '/zh/interview/javascript/basic-07.md',
        '/zh/interview/javascript/basic-08.md',
        '/zh/interview/javascript/basic-09.md',
        '/zh/interview/javascript/basic-10.md',
        '/zh/interview/javascript/new.md',
        '/zh/interview/javascript/this.md',
      ],
    },
    {
      text: 'Webpack 相关',
      children: ['/zh/interview/webpack/webpack.md'],
    },
    {
      text: 'Vue 相关',
      children: ['/zh/interview/vue/vue-01.md'],
    },
    {
      text: 'React 相关',
      children: ['/zh/interview/react/react-01.md'],
    },
    {
      text: 'Http 相关',
      children: ['/zh/interview/http/http-01.md'],
    },
    {
      text: 'Node 相关',
      children: ['/zh/interview/node/node-01.md'],
    },
    {
      text: '开发环境',
      children: ['/zh/interview/environment/development/01.md'],
    },
    {
      text: '运行环境',
      children: ['/zh/interview/environment/production/01.md'],
    },
    {
      text: '算法相关',
      children: ['/zh/interview/algorithm/01.md'],
    },
    {
      text: '面试真题',
      children: ['/zh/interview/questions/01.md'],
    },
  ],
  '/zh/collect': [
    {
      text: 'Github大佬',
      collapsible: false,
      children: ['/zh/collect/github/github.md'],
    },
    {
      text: '技术相关',
      collapsible: false,
      children: [
        {
          text: '简书',
          children: [],
        },
        {
          text: '掘金',
          children: [],
        },
        {
          text: '其他',
          children: [
            {
              text: '设计模式',
              link: 'https://refactoringguru.cn/design-patterns',
            },
            {
              text: '数据结构',
              link: 'https://mp.weixin.qq.com/s/PzncE_ofS4M0b6KB9ESWnA',
            },
          ],
        },
      ],
    },
    {
      text: '读书笔记',
      collapsible: true,
      children: [
        {
          text: '简书',
          children: [],
        },
        {
          text: '掘金',
          children: [],
        },
        {
          text: '编程相关',
          children: [
            '/zh/collect/books/你不知道的JavaScript.md',
            '/zh/collect/books/JavaScript高级程序设计.md',
          ],
        },
      ],
    },
  ],
  '/zh/other': [
    {
      text: '其他推荐',
      children: ['/zh/other/', '/zh/other/video'],
    },
    {
      text: '常用快捷键',
      collapsible: false,
      children: ['/zh/other/hotkey/vscode.md'],
    },
    {
      text: '折腾笔记',
      children: [
        '/zh/other/toss/mac-in-windows.md',
        '/zh/other/toss/deepin.md',
      ],
    },
    {
      text: '问题合集',
      children: ['/zh/other/question/bug-list-01.md'],
    },
    {
      text: '课程笔记',
      collapsible: false,
      children: [
        '/zh/other/class/program-basic',
        '/zh/other/class/linear-algebra',
        '/zh/other/class/vue3-learn-practice',
        '/zh/other/class/interview-front',
        {
          text: '2周刷完100道前端优质面试真题',
          collapsible: true,
          children: [
            '/zh/other/class/fe-interview-100/index-01.md',
            '/zh/other/class/fe-interview-100/index-02.md',
            '/zh/other/class/fe-interview-100/index-03.md',
            '/zh/other/class/fe-interview-100/index-04.md',
            '/zh/other/class/fe-interview-100/index-05.md',
            '/zh/other/class/fe-interview-100/index-06.md',
            '/zh/other/class/fe-interview-100/index-07.md',
            '/zh/other/class/fe-interview-100/index-08.md',
            '/zh/other/class/fe-interview-100/index-09.md',
            '/zh/other/class/fe-interview-100/index-10.md',
            '/zh/other/class/fe-interview-100/index-11.md',
          ],
        },
        {
          text: '框架项目－聚焦Vue3/React/Webpack',
          collapsible: true,
          children: [
            '/zh/other/class/frame-project-interview/index-01.md',
            '/zh/other/class/frame-project-interview/index-02.md',
            '/zh/other/class/frame-project-interview/index-03.md',
            '/zh/other/class/frame-project-interview/index-04.md',
            '/zh/other/class/frame-project-interview/index-05.md',
            '/zh/other/class/frame-project-interview/index-06.md',
            '/zh/other/class/frame-project-interview/index-10.md',
            '/zh/other/class/frame-project-interview/index-11.md',
            '/zh/other/class/frame-project-interview/index-12.md',
          ],
        },
        {
          text: '前端模拟面试：给你真实的求职体验和面试经验',
          collapsible: true,
          children: ['/zh/other/class/mock-interview/index-01.md'],
        },
        '/zh/other/class/ts-axios',
        {
          text: '从0到1开发一款IOS APP',
          children: ['/zh/other/class/ios-development/01'],
        },
        {
          text: 'Vue3 源码解析，打造自己的 Vue3 框架，领悟尤大思维精髓',
          collapsible: true,
          children: [
            '/zh/other/class/vue3-learn/index-01.md',
            '/zh/other/class/vue3-learn/index-02.md',
            '/zh/other/class/vue3-learn/index-03.md',
            '/zh/other/class/vue3-learn/index-04.md',
            '/zh/other/class/vue3-learn/index-05.md',
            '/zh/other/class/vue3-learn/index-06.md',
            '/zh/other/class/vue3-learn/index-07.md',
            '/zh/other/class/vue3-learn/index-08.md',
            '/zh/other/class/vue3-learn/index-09.md',
            '/zh/other/class/vue3-learn/index-10.md',
            '/zh/other/class/vue3-learn/index-11.md',
            '/zh/other/class/vue3-learn/index-12.md',
            '/zh/other/class/vue3-learn/index-13.md',
            '/zh/other/class/vue3-learn/index-14.md',
            '/zh/other/class/vue3-learn/index-15.md',
            '/zh/other/class/vue3-learn/index-16.md',
          ],
        },
        {
          text: '吃透前端工程化，大厂级实战项目以战带练',
          collapsible: true,
          children: [
            '/zh/other/class/engineering/index-01.md',
            '/zh/other/class/engineering/index-02.md',
            '/zh/other/class/engineering/index-03.md',
            '/zh/other/class/engineering/index-04.md',
            '/zh/other/class/engineering/index-05.md',
            '/zh/other/class/engineering/index-06.md',
            '/zh/other/class/engineering/index-07.md',
            '/zh/other/class/engineering/index-08.md',
            '/zh/other/class/engineering/index-09.md',
            '/zh/other/class/engineering/index-10.md',
            '/zh/other/class/engineering/index-11.md',
            '/zh/other/class/engineering/index-12.md',
            '/zh/other/class/engineering/index-13.md',
            '/zh/other/class/engineering/index-14.md',
            '/zh/other/class/engineering/index-15.md',
            '/zh/other/class/engineering/index-16.md',
            '/zh/other/class/engineering/index-17.md',
            '/zh/other/class/engineering/index-18.md',
            '/zh/other/class/engineering/index-19.md',
            '/zh/other/class/engineering/index-20.md',
            '/zh/other/class/engineering/index-21.md',
            '/zh/other/class/engineering/index-22.md',
            '/zh/other/class/engineering/index-23.md',
            '/zh/other/class/engineering/index-24.md',
          ],
        },
        {
          text: '专为小白设计的TypeScript入门课',
          collapsible: true,
          children: [
            '/zh/other/class/typescript-simple/index-01.md',
            '/zh/other/class/typescript-simple/index-02.md',
            '/zh/other/class/typescript-simple/index-03.md',
            '/zh/other/class/typescript-simple/index-04.md',
            '/zh/other/class/typescript-simple/index-05.md',
            '/zh/other/class/typescript-simple/index-06.md',
            '/zh/other/class/typescript-simple/index-07.md',
            '/zh/other/class/typescript-simple/index-08.md',
            '/zh/other/class/typescript-simple/index-09.md',
          ],
        },
        {
          text: 'TS 从入门到深度掌握，晋级TypeScript高手',
          collapsible: true,
          children: [
            '/zh/other/class/typescript-advanced/index-01.md',
            '/zh/other/class/typescript-advanced/index-02.md',
            '/zh/other/class/typescript-advanced/index-03.md',
            '/zh/other/class/typescript-advanced/index-04.md',
            '/zh/other/class/typescript-advanced/index-05.md',
            '/zh/other/class/typescript-advanced/index-06.md',
            '/zh/other/class/typescript-advanced/index-07.md',
            '/zh/other/class/typescript-advanced/index-08.md',
            '/zh/other/class/typescript-advanced/index-09.md',
            '/zh/other/class/typescript-advanced/index-10.md',
            '/zh/other/class/typescript-advanced/index-11.md',
            '/zh/other/class/typescript-advanced/index-13.md',
          ],
        },
        {
          text: 'TS 相关补充',
          collapsible: true,
          children: [
            '/zh/other/class/typescript-supplement/index-02.md',
            '/zh/other/class/typescript-supplement/index-03.md',
            '/zh/other/class/typescript-supplement/index-04.md',
            '/zh/other/class/typescript-supplement/index-05.md',
          ],
        },
        {
          text: '破解JavaScript高级玩法，成为精通 JS 的原生专家',
          collapsible: true,
          children: [
            '/zh/other/class/crack-js/index-01.md',
            '/zh/other/class/crack-js/index-02.md',
            '/zh/other/class/crack-js/index-03.md',
            '/zh/other/class/crack-js/index-04.md',
            '/zh/other/class/crack-js/index-05.md',
            '/zh/other/class/crack-js/index-06.md',
            '/zh/other/class/crack-js/index-07.md',
            '/zh/other/class/crack-js/index-08.md',
            '/zh/other/class/crack-js/index-09.md',
            '/zh/other/class/crack-js/index-10.md',
            '/zh/other/class/crack-js/index-11.md',
            '/zh/other/class/crack-js/index-12.md',
            '/zh/other/class/crack-js/index-13.md',
            '/zh/other/class/crack-js/index-14.md',
            '/zh/other/class/crack-js/index-15.md',
            '/zh/other/class/crack-js/index-16.md',
            '/zh/other/class/crack-js/index-17.md',
          ],
        },
        {
          text: '前端主流布局系统进阶与实战',
          collapsible: true,
          children: [
            '/zh/other/class/front-layout/README.md',
            '/zh/other/class/front-layout/index-01.md',
            '/zh/other/class/front-layout/index-02.md',
            '/zh/other/class/front-layout/index-03.md',
            '/zh/other/class/front-layout/index-04.md',
            '/zh/other/class/front-layout/index-05.md',
            '/zh/other/class/front-layout/index-06.md',
            '/zh/other/class/front-layout/index-07.md',
            '/zh/other/class/front-layout/index-08.md',
            '/zh/other/class/front-layout/index-09.md',
          ],
        },
        {
          text: '快速掌握前端必会的7种设计模式',
          collapsible: true,
          children: [
            '/zh/other/class/design-pattern/index-01.md',
            '/zh/other/class/design-pattern/index-02.md',
            '/zh/other/class/design-pattern/index-03.md',
            '/zh/other/class/design-pattern/index-04.md',
            '/zh/other/class/design-pattern/index-05.md',
            '/zh/other/class/design-pattern/index-06.md',
            '/zh/other/class/design-pattern/index-07.md',
            '/zh/other/class/design-pattern/index-08.md',
            '/zh/other/class/design-pattern/index-09.md',
            '/zh/other/class/design-pattern/index-10.md',
            '/zh/other/class/design-pattern/index-11.md',
            '/zh/other/class/design-pattern/index-12.md',
            '/zh/other/class/design-pattern/index-13.md',
          ],
        },
        {
          text: '高阶前端进阶必修，自主打造同比AntD的React组建库',
          collapsible: true,
          children: [
            '/zh/other/class/component-lib/index-01.md',
            '/zh/other/class/component-lib/index-02.md',
          ],
        },
        {
          text: '渡一大师课',
          collapsible: true,
          children: [
            '/zh/other/class/duyi-master/index-01.md',
            '/zh/other/class/duyi-master/index-02.md',
            '/zh/other/class/duyi-master/index-03.md',
            '/zh/other/class/duyi-master/index-04.md',
            '/zh/other/class/duyi-master/index-05.md',
            '/zh/other/class/duyi-master/index-06.md',
          ],
        },
        {
          text: '前端性能优化 掌握行业实用专业前沿的解决方案',
          collapsible: true,
          children: [
            '/zh/other/class/performance-optimization-standard/index-01.md',
            '/zh/other/class/performance-optimization-standard/index-02.md',
            '/zh/other/class/performance-optimization-standard/index-03.md',
            '/zh/other/class/performance-optimization-standard/index-04.md',
            '/zh/other/class/performance-optimization-standard/index-05.md',
            '/zh/other/class/performance-optimization-standard/index-06.md',
            '/zh/other/class/performance-optimization-standard/index-07.md',
            '/zh/other/class/performance-optimization-standard/index-08.md',
            '/zh/other/class/performance-optimization-standard/index-09.md',
            '/zh/other/class/performance-optimization-standard/index-10.md',
          ],
        },
        {
          text: '前端性能优化入门与案例实战',
          collapsible: true,
          children: [
            '/zh/other/class/performance-optimization-introduction/index-01.md',
            '/zh/other/class/performance-optimization-introduction/index-02.md',
            '/zh/other/class/performance-optimization-introduction/index-03.md',
            '/zh/other/class/performance-optimization-introduction/index-04.md',
            '/zh/other/class/performance-optimization-introduction/index-05.md',
          ],
        },
        {
          text: '六大场景 梳理开发痛点 解锁前端进阶路',
          collapsible: true,
          children: [
            '/zh/other/class/develop-point/index-01.md',
            '/zh/other/class/develop-point/index-02.md',
            '/zh/other/class/develop-point/index-03.md',
            '/zh/other/class/develop-point/index-04.md',
            '/zh/other/class/develop-point/index-05.md',
            '/zh/other/class/develop-point/index-06.md',
          ],
        },
        {
          text: '2小时搞定移动端混合开发基础入门',
          collapsible: true,
          children: [
            '/zh/other/class/hyBird-app/index-01.md',
            '/zh/other/class/hyBird-app/index-02.md',
            '/zh/other/class/hyBird-app/index-03.md',
          ],
        },
        {
          text: '玩转Vim 从放弃到爱不释手',
          collapsible: true,
          children: [
            '/zh/other/class/vim-class/index-01.md',
            '/zh/other/class/vim-class/index-02.md',
          ],
        },
      ],
    },
    {
      text: '专栏合集',
      collapsible: true,
      children: [
        {
          text: '给程序员的职场情商课',
          collapsible: true,
          children: [
            '/zh/other/column/emotional-intelligence-lessons/index-01.md',
            '/zh/other/column/emotional-intelligence-lessons/index-02.md',
            '/zh/other/column/emotional-intelligence-lessons/index-03.md',
            '/zh/other/column/emotional-intelligence-lessons/index-04.md',
            '/zh/other/column/emotional-intelligence-lessons/index-05.md',
            '/zh/other/column/emotional-intelligence-lessons/index-06.md',
            '/zh/other/column/emotional-intelligence-lessons/index-07.md',
            '/zh/other/column/emotional-intelligence-lessons/index-08.md',
            '/zh/other/column/emotional-intelligence-lessons/index-09.md',
            '/zh/other/column/emotional-intelligence-lessons/index-10.md',
            '/zh/other/column/emotional-intelligence-lessons/index-11.md',
            '/zh/other/column/emotional-intelligence-lessons/index-12.md',
            '/zh/other/column/emotional-intelligence-lessons/index-13.md',
            '/zh/other/column/emotional-intelligence-lessons/index-14.md',
            '/zh/other/column/emotional-intelligence-lessons/index-15.md',
            '/zh/other/column/emotional-intelligence-lessons/index-16.md',
            '/zh/other/column/emotional-intelligence-lessons/index-17.md',
            '/zh/other/column/emotional-intelligence-lessons/index-18.md',
            '/zh/other/column/emotional-intelligence-lessons/index-19.md',
            '/zh/other/column/emotional-intelligence-lessons/index-20.md',
          ],
        },
        {
          text: 'Git原理详解与实操指南',
          collapsible: true,
          children: [
            '/zh/other/column/git-related/index-01.md',
            '/zh/other/column/git-related/index-02.md',
            '/zh/other/column/git-related/index-03.md',
            '/zh/other/column/git-related/index-04.md',
            '/zh/other/column/git-related/index-05.md',
            '/zh/other/column/git-related/index-06.md',
            '/zh/other/column/git-related/index-07.md',
            '/zh/other/column/git-related/index-08.md',
            '/zh/other/column/git-related/index-09.md',
            '/zh/other/column/git-related/index-10.md',
            '/zh/other/column/git-related/index-11.md',
            '/zh/other/column/git-related/index-12.md',
            '/zh/other/column/git-related/index-13.md',
            '/zh/other/column/git-related/index-14.md',
            '/zh/other/column/git-related/index-15.md',
            '/zh/other/column/git-related/index-16.md',
            '/zh/other/column/git-related/index-17.md',
            '/zh/other/column/git-related/index-18.md',
            '/zh/other/column/git-related/index-19.md',
            '/zh/other/column/git-related/index-20.md',
            '/zh/other/column/git-related/index-21.md',
            '/zh/other/column/git-related/index-22.md',
            '/zh/other/column/git-related/index-23.md',
            '/zh/other/column/git-related/index-24.md',
            '/zh/other/column/git-related/index-25.md',
            '/zh/other/column/git-related/index-26.md',
            '/zh/other/column/git-related/index-27.md',
            '/zh/other/column/git-related/index-28.md',
            '/zh/other/column/git-related/index-29.md',
            '/zh/other/column/git-related/index-30.md',
          ],
        },
        {
          text: 'JavaScript 设计模式精讲',
          collapsible: true,
          children: [
            '/zh/other/column/design-pattern/index-01.md',
            '/zh/other/column/design-pattern/index-02.md',
            '/zh/other/column/design-pattern/index-03.md',
            '/zh/other/column/design-pattern/index-04.md',
            '/zh/other/column/design-pattern/index-05.md',
            '/zh/other/column/design-pattern/index-06.md',
            '/zh/other/column/design-pattern/index-07.md',
            '/zh/other/column/design-pattern/index-08.md',
            '/zh/other/column/design-pattern/index-09.md',
            '/zh/other/column/design-pattern/index-10.md',
            '/zh/other/column/design-pattern/index-11.md',
            '/zh/other/column/design-pattern/index-12.md',
            '/zh/other/column/design-pattern/index-13.md',
            '/zh/other/column/design-pattern/index-14.md',
            '/zh/other/column/design-pattern/index-15.md',
            '/zh/other/column/design-pattern/index-16.md',
            '/zh/other/column/design-pattern/index-17.md',
            '/zh/other/column/design-pattern/index-18.md',
            '/zh/other/column/design-pattern/index-19.md',
            '/zh/other/column/design-pattern/index-20.md',
            '/zh/other/column/design-pattern/index-21.md',
            '/zh/other/column/design-pattern/index-22.md',
            '/zh/other/column/design-pattern/index-23.md',
            '/zh/other/column/design-pattern/index-24.md',
            '/zh/other/column/design-pattern/index-25.md',
            '/zh/other/column/design-pattern/index-26.md',
            '/zh/other/column/design-pattern/index-27.md',
            '/zh/other/column/design-pattern/index-28.md',
            '/zh/other/column/design-pattern/index-29.md',
          ],
        },
        {
          text: '跟BAT技术专家学Docker + K8s',
          collapsible: true,
          children: [
            '/zh/other/column/docker-k8s/index-01.md',
            '/zh/other/column/docker-k8s/index-02.md',
            '/zh/other/column/docker-k8s/index-03.md',
            '/zh/other/column/docker-k8s/index-04.md',
            '/zh/other/column/docker-k8s/index-05.md',
            '/zh/other/column/docker-k8s/index-06.md',
            '/zh/other/column/docker-k8s/index-07.md',
            '/zh/other/column/docker-k8s/index-08.md',
            '/zh/other/column/docker-k8s/index-09.md',
            '/zh/other/column/docker-k8s/index-10.md',
            '/zh/other/column/docker-k8s/index-11.md',
            '/zh/other/column/docker-k8s/index-12.md',
            '/zh/other/column/docker-k8s/index-13.md',
            '/zh/other/column/docker-k8s/index-14.md',
            '/zh/other/column/docker-k8s/index-15.md',
            '/zh/other/column/docker-k8s/index-16.md',
            '/zh/other/column/docker-k8s/index-17.md',
            '/zh/other/column/docker-k8s/index-18.md',
            '/zh/other/column/docker-k8s/index-19.md',
            '/zh/other/column/docker-k8s/index-20.md',
            '/zh/other/column/docker-k8s/index-21.md',
            '/zh/other/column/docker-k8s/index-22.md',
            '/zh/other/column/docker-k8s/index-23.md',
            '/zh/other/column/docker-k8s/index-24.md',
            '/zh/other/column/docker-k8s/index-25.md',
            '/zh/other/column/docker-k8s/index-26.md',
            '/zh/other/column/docker-k8s/index-27.md',
            '/zh/other/column/docker-k8s/index-28.md',
            '/zh/other/column/docker-k8s/index-29.md',
            '/zh/other/column/docker-k8s/index-30.md',
            '/zh/other/column/docker-k8s/index-31.md',
            '/zh/other/column/docker-k8s/index-32.md',
            '/zh/other/column/docker-k8s/index-33.md',
            '/zh/other/column/docker-k8s/index-34.md',
            '/zh/other/column/docker-k8s/index-35.md',
            '/zh/other/column/docker-k8s/index-36.md',
            '/zh/other/column/docker-k8s/index-37.md',
            '/zh/other/column/docker-k8s/index-38.md',
            '/zh/other/column/docker-k8s/index-39.md',
            '/zh/other/column/docker-k8s/index-40.md',
            '/zh/other/column/docker-k8s/index-41.md',
            '/zh/other/column/docker-k8s/index-42.md',
          ],
        },
      ],
    },
  ],
}

export const sidebarEn: SidebarConfig = {}
