import Vue from 'vue';
import VueLazyLoad from 'vue-lazyload';
import VueProgressBar from 'vue-progressbar';
import App from './App.vue';
import router from './router';
import store from './store/';
import Http from './utils/http';
import * as filters from './filters';
import globalComponents from './components/global-components';
import globalDirectives from './directive/';
import './styles/index.scss';

// 注册全局组件
Vue.use(globalComponents);

// 注册全局自定义指令
Vue.use(globalDirectives);

/* eslint-disable global-require */
// 图片懒加载
Vue.use(VueLazyLoad, {
  error: require('./assets/404.jpg'),
  loading: require('./assets/loading.gif'),
});
/* eslint-enable global-require */

// 顶部进度条动画
Vue.use(VueProgressBar, {
  color: '#fff',
});

// 注册全局 filter
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

// vue 原型上添加 http 方法
Vue.prototype.$fetch = Http;

Vue.config.productionTip = false;

// 这里讲 vue 实例导出，是为了在 http.js 中使用。
export default new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
