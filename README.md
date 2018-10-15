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

- [x] 目录结构梳理
- [ ] 路由嵌套组合
- [x] 页面布局（粘性底部 命名视图 framwork7）
- [x] 路由鉴权
- [x] scrollBehavior
- [ ] cookie 策略
- [x] 本地存储方案
- [x] sass 变量的全局引用
- [x] axios 封装 连点 cancel 本地断网处理
- [x] api 请求接口的封装
- [x] 代理
- [ ] mock
- [x] utils commonjs 封装
- [ ] 全局 Toast
- [x] VueProgressBar
- [x] filters
- [x] directive
- [ ] UI 框架的选择
- [x] 图片懒加载
- [x] keep-alive
- [ ] 字体图标
- [ ] 需要做 rem 方案吗
- [ ] fastclick 需要加吗（fastclick 好像对移动端作用较大）
- [ ] 项目规范 https://cn.vuejs.org/v2/style-guide/index.html
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

生成根目录树结构：`tree -a -F -L 1 -I node_modules\|.git\|.DS_Store`

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

生成源码目录树结构：`tree -a -F -L 1 -I node_modules\|.git\|.DS_Store src`

```sh
src
├── assets/         静态资源目录
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

统一采用小写 kebab-case (短横线分隔命名) `中划线 -` 命名方式，如：`user-login`;

### js 命名

统一采用小写 `中划线 -` 命名方式，如：`user-login.js`;

### css 类名命名

统一采用小写 `中划线 -` 命名方式，并用双引号，如：`<div class="app-layout"></div>`;

### SASS 编写规范

参考: [编写 Sass 的八个技巧](https://www.sass.hk/skill/sass91.html)

### 组件命名

组件名称统一采用大驼峰（Pascal）写法，每一个单词的首字母都采用大写字母。
组件命名为多个单词组成，这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。
本项目对组件进行了分类，分为 框架级别，基本级别，错误级别，一般级别。

框架级别：统一以 `APP` 开头。例如：`APPHeader`，`APPFooter`，`AppBreadCrumbs`。

基础级别：统一以 `Basic` 开头。例如：`BasicButton`，`BasicTable`，`BasicIcon`。

错误级别：统一以 `Error` 开头。例如：`Error404`，`Error500`。

一般级别：统一以 `Custom` 开头。例如：`CustomList`，`CustomListItem`。

### 页面编写规范

由于项目对页面做了统一布局，所有，在编写页面的时候，需要恶心一定，统一放在 `<app-layout-page>...</app-layout-page>` 标签中。

### 路径写法规范

统一采用 `@` 符号路径写法，方便文件位置变动。

```js
// bad
import Login from '../../components/custom/custom-login/CustomLogin.vue';

// good
import Login from '@/components/custom/custom-login/CustomLogin.vue';
```

### 组件引入与使用规范

引入组件时，统一采用大驼峰写法，
在模板中使用是，采用 `中划线-`， 的形式，如下：

```html
<template>
  <div>
    <app-header></app-header>
    <app-category-nav></app-category-nav>
  </div>
</template>
<script>
  import AppHeader from './AppHeader.vue';
  import AppCategoryNav from './AppCategoryNav.vue';

  export default {
    name: '',
    components: {
      AppHeader,
      AppCategoryNav
    },
  };
</script>
```

### 环境变量定义与使用规范

环境变量的作用我就不用说了，大概就是可以让程序根据不同的环境，做出不同的反应。

环境变量统一放在 `.env.[mode]` 中。如下：

```sh
NODE_ENV=development
BASE_URL=/

VUE_APP_ENV=development
VUE_APP_AXIOS_BASE_URL=''
VUE_APP_URL_PREFIX='/api'
```

需要注意的是，在项目的不同位置使用环境变量，它的限制是不一样的。

在`vue.config.js` 配置中使用，没什么限制，可以直接通过 `process.env.XXX` 来使用：

```js
module.exports = {
  baseUrl: process.env.BASE_URL,
};
```

在项目中，也就是 `src` 中使用环境变量的话，必须以 `VUE_APP_` 开头。例如我们可以在 `src/utils/http.js` 中使用：

```js
instance.defaults.baseURL = process.env.VUE_APP_AXIOS_BASE_URL;
```

## 有问有答

这一部分，主要是  讲项目中搭建以及开发过程过程中的问题。

### 页面布局怎么实现？

因为有个项目，它的布局比较灵活，基本上页面上的各个部分都是可配置的，比如有的页面有 `sideLeft`，有的页面有 `sideRight`，有的都有，有的都没有。因此，在仔细浏览过原型后，有了这个项目。

大布局，就不用细说了，请看 `components/framework/AppLayout.vue`，一个 `header`，一个 粘性`footer`，还是比较简单的。

主要是 `sideLeft`、`sideRight`，怎么做到可配置。请看 `components/framework/AppLayoutPage.vue`，主要是利用 `slot`，插槽来实现的。

```html
<template>
  <div class="app-container">
    <div class="app-container-inside">
      <!-- <router-view class="app-side-left" name="sideLeft"></router-view> -->
      <slot name="sideLeft"></slot>
      <div class="app-content">
        <slot name="breadCrumbs">
          <app-bread-crumbs></app-bread-crumbs>
        </slot>
        <!-- <router-view class="app-side-right" name="sideRight"></router-view> -->
        <slot name="sideRight"></slot>
        <div class="app-content-inside">
          <!-- <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
          </transition> -->
          <slot></slot>
        </div>
      </div>
    </div>
    <!-- <router-view name="ad"></router-view> -->
    <slot name="ad">
      <custom-ad-space></custom-ad-space>
    </slot>
    <!-- <app-share></app-share> -->
    <slot name="share">
      <custom-share></custom-share>
    </slot>
  </div>
</template>
```

可以看上面的代码中注释的部分，那是最开始的方案，通过命名视图来实现，在二级路由是没问题的，如果有三级路由，命名视图就不好使了，所以换成了 `slot` 插槽实现方案。稍微有点恶心就是，需要在每个页面中，嵌套 `AppLayoutPage` 组件，如下：

```html
<template>
  <app-layout-page>
    <template slot="sideLeft">
      ...
    </template>
    <template slot="sideRight">
      ...
    </template>
    <div>...</div>
  </app-layout-page>
</template>
```

### SASS  全局变量怎么实现？

通过 `vue.config.js` 配置文件实现，将 sass  全局变量传递给 Loaser。 本项目中，不仅将变量传递了，而且还将 placeholders 以及 mixins 传递了，这样一来，写  样式起来就很方便了。

```js
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/style/base/index.scss`,
      },
    },
  },
};
```

 参考：[向预处理器 Loader 传递选项](https://cli.vuejs.org/zh/guide/css.html#%E5%90%91%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8-loader-%E4%BC%A0%E9%80%92%E9%80%89%E9%A1%B9)

### 项目中的环境变量具体是干嘛的？

这里主要说明下项目中用到的环境变量的含义。

- NODE_ENV // 项目环境变量
- BASE_URL // 部署应用包时的基本 URL
- VUE_APP_ENV // 项目环境变量，同 NODE_ENV 保持一致
- VUE_APP_AXIOS_BASE_URL // 接口域名地址 如：http://www.aopa.com/
- VUE_APP_URL_PREFIX // 接口 url 前缀 如：/api/someurl

### 开发模式下，代理怎么设置？

通过 `vue.config.js` 配置文件实现

```js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.apiopen.top/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/',
        },
      },
    },
  },
};
```

参考：[devserver-proxy](https://cli.vuejs.org/zh/config/#devserver-proxy);

### 为啥 app-layout-page 组件不用引入也能用呀？

因为，这个组件在入口文件 `main.js` 中已经全局注册了，所以可以在页面中直接使用。

```js
// main.js
import globalComponents from './utils/global-components';
Vue.use(globalComponents);

// global-components.js
export default function(Vue) {
  Vue.component('AppLayoutPage', AppLayoutPage);
  Vue.component('AppLayoutSideLeft', AppLayoutSideLeft);
  Vue.component('AppLayoutSideRight', AppLayoutSideRight);
}
```

### 如何配置项目代码格式化

推荐用 `VSCode` 编辑器开发项目。安装 `Prettier-Conde formatter` 插件

然后 设置编辑器的 `首选项` mac 下快捷键 `Command + ,`, `User Settings`配置如下：

```json
{
  "jshint.enable": false,
  "editor.wordWrap": "off",
  "editor.fontSize": 16,
  "editor.lineHeight": 24,
  "gitlens.advanced.messages": {
    "suppressShowKeyBindingsNotice": true
  },
  "javascript.implicitProjectConfig.experimentalDecorators": true,
  "editor.renderWhitespace": "all",
  "emmet.triggerExpansionOnTab": true,
  "workbench.colorTheme": "Monokai",
  "workbench.startupEditor": "newUntitledFile",
  "workbench.iconTheme": "vscode-icons",
  "files.exclude": {
    "**/.DS_Store": true,
    "**/.git": true,
    "**/.hg": true,
    "**/.idea": true,
    "**/.svn": true,
    "**/.vsconde": true,
    "**/CVS": true,
    "**/node_modules": true
  },
  "gitlens.blame.dateFormat": "YYYY年MM月DD日",
  "vetur.validation.template": false,
  "editor.tabSize": 2,
  "window.zoomLevel": 0,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "prettier.trailingComma": "es5",
  "prettier.singleQuote": true
}
```

## 遇到的问题

### https 中请求 http

将本项目部署到 `github` 的 `gh-page` 分支里，部署之后发现报错了：

```sh
xhr.js:178 Mixed Content: The page at 'https://love-peach.github.io/aopa-web/about' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://api.apiopen.top/singlePoetry'. This request has been blocked; the content must be served over HTTPS.
```

意思是 我的项目运行在 `https` 的 `github` 上，但是我的请求是一个 `http`，这样是不被允许的。

暂时没有好的解决办法，只能换一个 `https` 的 openapi 接口了。

### Access-Control-Allow-Origin 跨域

当我换成 `https` 的接口后，接着它又报了下面的错：

```sh
Failed to load https://www.apiopen.top/weatherApi?city=%E6%AD%A6%E6%B1%89: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'https://love-peach.github.io' is therefore not allowed access.
```

尝试了设置 `Access-Control-Allow-Origin`，页不管用

`instance.defaults.headers['Access-Control-Allow-Origin'] = '*'`

暂时先不折腾这了，静态页面还是简简单单的展示得了，毕竟这个项目的重点是可配置的布局。我觉得，如果是个正常的服务器，我配个 `nginx` 应该能同时解决这两个问题，但是，暂时不知道怎么在 `gh-page` 中配置 `nginx`。还有一个可行方案，将 `gh-page` 自定义个域名，应该可以解决这个问题吧？
