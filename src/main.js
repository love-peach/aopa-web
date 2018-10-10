import Vue from 'vue';
import VueLazyLoad from 'vue-lazyload';
import App from './App.vue';
import router from './router';
import store from './store/';
import Http from './utils/http';
import './assets/style/index.scss';
import globalComponents from './utils/global-components';

Vue.use(globalComponents);

/* eslint-disable global-require */
// 图片懒加载
Vue.use(VueLazyLoad, {
  error: require('./assets/404.jpg'),
  loading: require('./assets/loading.gif'),
});
/* eslint-enable global-require */

// vue 原型上添加 http 方法
Vue.prototype.$fetch = Http;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
