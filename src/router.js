import Vue from 'vue';
import Router from 'vue-router';
import AppLayout from './components/framework/AppLayout.vue';
import RouterView from './views/router-view/RouterView.vue';

// 一级路由
const Home = () => import('./views/home/index.vue');
const Error404 = () => import('./components/error/Error404.vue');
const About = () => import('./views/about/About.vue');
const News = () => import('./views/news/index.vue');

// 二级路由
const NewsBillboards = () => import('./views/news/billboards/index.vue');

// 三级路由
const NewsDetails = () => import('./views/news/billboards/details/index.vue');

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
          component: About,
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
              component: News,
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
                  component: NewsBillboards,
                },
                {
                  path: ':id',
                  name: '新闻详情',
                  component: NewsDetails,
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
