# 11-从装饰器应用，底层 JS 到 仿 Nestjs 实战，路由器底层复杂泛型（上）

## 01：本章概述，熟练透彻掌握装饰器对职业发展有何意义

装饰器是前端了不起的技术革命，弥补了只有后端语言才有的 AOP(类似装饰器)的短板，学习装饰器好处有：

1. 较大提升前端架构思维和前端架构能力，装饰器底层蕴含的拦截思想在 java spring Nestjs 框架，python 各种后端语言中都有广泛的应用，而拦截器展示的就是一种架构思维，通过学习装饰器能扩大视野，是作为一名前端架构师以及晋级更高职位必会技能
2. Nestjs 等相对新型的 非常优秀的 Nodejs 框架大量运用了 TS 装饰器：例如 @Controller @Service @Get @Post
3. 在面试中，如果告诉面试官，你精通装饰器，这也能成为你的大家分项目，因为公司需要架构思维能力强的前端工程师，因为具有架构思维的前端开发人员子啊大中项目中一定能够写出扩展性更好的代码

纵观本章，囊括了装饰器应用，装饰器底层 JS 源码，装饰器实战