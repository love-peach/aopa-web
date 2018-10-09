import Vue from 'vue';
import Router from 'vue-router';
import AppLayout from './components/framework/AppLayout.vue';
import RouterView from './views/router-view/RouterView.vue';

// 一级路由
const Home = () => import('./views/home/index.vue');
const Error404 = () => import('./components/error/Error404.vue');

// 二级路由

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '',
      component: AppLayout,
      children: [
        {
          path: '/',
          name: '首页',
          component: Home,
        },
        {
          path: 'about',
          name: '关于',
          component: () => import('./views/about/About.vue'),
        },
        {
          path: 'news',
          name: '新闻',
          redirect: '/news',
          component: RouterView,
          children: [
            {
              path: '/',
              name: '',
              component: () => import('./views/news/index.vue'),
            },
            {
              path: 'billboards',
              name: '公告',
              redirect: '/billboards',
              component: RouterView,
              children: [
                {
                  path: '/',
                  name: '',
                  component: () => import('./views/news/billboards/index.vue'),
                },
                {
                  path: ':id',
                  name: '新闻详情',
                  component: () => import('./views/news/billboards/details/index.vue'),
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: '*',
      name: '',
      component: AppLayout,
      children: [
        {
          path: '/',
          name: '404',
          component: Error404,
        },
      ],
    },
  ],
});
