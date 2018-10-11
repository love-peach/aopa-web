import Vue from 'vue';
import VueLazyLoad from 'vue-lazyload';
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

// 注册全局 filter
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

// vue 原型上添加 http 方法
Vue.prototype.$fetch = Http;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
