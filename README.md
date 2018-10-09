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

- [ ] 目录结构梳理
- [ ] 路由嵌套组合
- [ ] 页面布局（粘性底部 命名视图 framwork7）
- [ ] 路由鉴权
- [ ] scrollBehavior
- [ ] cookie 策略
- [ ] 本地存储方案
- [x] sass 变量的全局引用
- [ ] axios封装 连点cancel 本地断网处理
- [x] api 请求接口的封装
- [x] 代理
- [ ] mock
- [x] utils commonjs 封装
- [ ] 全局Toast
- [ ] VueProgressBar
- [ ] filters
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

## 项目规范

### 组件命名

组件名称统一采用大驼峰（Pascal）写法，每一个单词的首字母都采用大写字母。
组件命名为多个单词组成，这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。
本项目对组件进行了分类，分为 框架级别，基本级别，错误级别，一般级别。

框架级别：统一以 `APP` 开头。例如：`APPHeader`，`APPFooter`，`AppBreadCrumbs`。
基础级别：统一以 `Basic` 开头。例如：`BasicButton`，`BasicTable`，`BasicIcon`。
错误级别：统一以 `Error` 开头。例如：`Error404`，`Error500`。
一般级别：统一以 `Custom` 开头。例如：`CustomList`，`CustomListItem`

根组件，框架级别的组件

### SASS 编写规范

参考: [编写Sass的八个技巧](https://www.sass.hk/skill/sass91.html)