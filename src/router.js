import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import AppLayout from './components/AppLayout.vue';
import AppAdSpace from './components/AppAdSpace.vue';
import SomePage from './views/SomePage.vue';
import AnotherPage from './views/AnotherPage.vue';
import Error404 from './components/Error404.vue';
import RouterView from './views/RouterView.vue';

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
          components: {
            default: Home,
            sideLeft: SomePage,
            sideRight: AnotherPage,
            ad: AppAdSpace,
          },
        },
        {
          path: '/about',
          name: '关于',
          components: {
            default: () => import('./views/About.vue'),
            sideLeft: AnotherPage,
            sideRight: SomePage,
          },
        },
        {
          path: '/news',
          name: '新闻',
          component: RouterView,
          children: [
            {
              path: '/',
              name: '',
              component: () => import('./views/news/index/index.vue'),
            },
            {
              path: 'billboards',
              name: '公告',
              component: RouterView,
              children: [
                {
                  path: '/',
                  name: '',
                  component: () => import('./views/news/billboards/billboards.vue'),
                },
                {
                  path: ':id',
                  name: '详情',
                  component: () => import('./views/news/billboards/details/details.vue'),
                },
              ],
            },
          ],
        },
        {
          path: '/details/:id',
          name: '详情',
          component: () => import('./views/Details.vue'),
        },
      ],
    },
    {
      path: '/somepage',
      name: 'somepage',
      component: SomePage,
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
