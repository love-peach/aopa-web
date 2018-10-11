# aopa-web 项目说明

## 项目启动

安装项目依赖

```sh
yarn install
```

开发环境下，编译和热启动

```sh
yarn run serve
```

生产环境下，编译和压缩

```sh
yarn run build
```

格式化

```sh
yarn run lint
```

## TODO

- [x] 目录结构梳理
- [ ] 路由嵌套组合
- [x] 页面布局（粘性底部 命名视图 framwork7）
- [ ] 路由鉴权
- [ ] scrollBehavior
- [ ] cookie 策略
- [x] 本地存储方案
- [x] sass 变量的全局引用
- [ ] axios封装 连点cancel 本地断网处理
- [x] api 请求接口的封装
- [x] 代理
- [ ] mock
- [x] utils commonjs 封装
- [ ] 全局Toast
- [x] VueProgressBar
- [x] filters
- [x] directive
- [ ] UI 框架的选择
- [x] 图片懒加载
- [ ] keep-alive
- [ ] 字体图标
- [ ] 需要做 rem 方案吗
- [ ] fastclick 需要加吗（fastclick好像对移动端作用较大）
- [ ] 项目规范 https://cn.vuejs.org/v2/style-guide/index.html
- [ ] 前端代码优化压缩
- [ ] 单页面方案 还是多页面方案

## 技术栈

- vue
- vuex
- vue-router
- axios
- sass
- es6

## 项目目录说明

生成根目录树结构：`tree -a -F -L 1  -I node_modules\|.git\|.DS_Store`

```sh
.
├── public/              公用资源目录
├── src/                 源码目录
├── package.json         项目配置信息
├── vue.config.js        vue-cli 3.0 项目配置
├── babel.config.js      Babel 配置文件
├── README.md            项目说明文档
├── .browserslistrc      目标浏览器配置表
├── .eslintrc.js         eslint 配置文件
├── .gitignore           git 忽略文件
├── .postcssrc.js        css 转换配置文件
└── yarn.lock            依赖版本锁定
```

生成源码目录树结构：`tree -a -F -L 1  -I node_modules\|.git\|.DS_Store src`

```sh
src
├── assets/         静态资源目录
├── components/     组件目录
├── store/          store
├── styles/         项目全局样式目录
├── diractive/      自定义指令
├── filters/        自定义过滤器
├── views/          视图页面目录
├── utils/          工具类目录
├── App.vue         主组件
├── main.js         入口文件
└── router.js       路由配置文件
```

## 项目规范

### 文件夹命名

统一采用小写 `中划线 -` 命名方式，如：`user-login`;

### js命名

统一采用小写 `中划线 -` 命名方式，如：`user-login.js`;

### css 类名命名

统一采用小写 `中划线 -` 命名方式，并用双引号，如：`<div class="app-layout"></div>`;

### SASS 编写规范

参考: [编写Sass的八个技巧](https://www.sass.hk/skill/sass91.html)

### 组件命名

组件名称统一采用大驼峰（Pascal）写法，每一个单词的首字母都采用大写字母。
组件命名为多个单词组成，这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。
本项目对组件进行了分类，分为 框架级别，基本级别，错误级别，一般级别。

框架级别：统一以 `APP` 开头。例如：`APPHeader`，`APPFooter`，`AppBreadCrumbs`。
基础级别：统一以 `Basic` 开头。例如：`BasicButton`，`BasicTable`，`BasicIcon`。
错误级别：统一以 `Error` 开头。例如：`Error404`，`Error500`。
一般级别：统一以 `Custom` 开头。例如：`CustomList`，`CustomListItem`

### 页面编写规范

由于项目对页面做了统一布局，所有，在编写页面的时候，需要恶心一定，统一放在 `<app-layout-page>...</app-layout-page>` 标签中。

## 有问有答

这一部分，主要是讲项目中搭建以及开发过程过程中的问题。

### sass 全局变量怎么实现。

通过 `vue.config.js` 配置文件实现，将 sass 全局变量传递给 Loaser。本项目中，不仅将变量传递了，而且还将 placeholders 以及 mixins 传递了，这样一来，写样式起来就很方便了。

```js
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/style/base/index.scss`
      }
    }
  }
}
```

参考：[向预处理器 Loader 传递选项](https://cli.vuejs.org/zh/guide/css.html#%E5%90%91%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8-loader-%E4%BC%A0%E9%80%92%E9%80%89%E9%A1%B9)


### 开发模式下，代理怎么设置？

通过 `vue.config.js` 配置文件实现

```js
module.exports = {
  devServer: {
    proxy: {
      '/poems': {
        target: 'http://api.apiopen.top/singlePoetry',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/poems': '/',
        },
      },
    },
  },
}
```

参考：[devserver-proxy](https://cli.vuejs.org/zh/config/#devserver-proxy);

### 为啥 app-layout-page 组件不用引入也能用呀？

因为，这个组件在入口文件 `main.js` 中已经全局注册了，所以可以在页面中直接使用。

```js
// main.js
import globalComponents from './utils/global-components';
Vue.use(globalComponents);

// global-components.js
export default function (Vue) {
  Vue.component('AppLayoutPage', AppLayoutPage);
  Vue.component('AppLayoutSideLeft', AppLayoutSideLeft);
  Vue.component('AppLayoutSideRight', AppLayoutSideRight);
}
```
