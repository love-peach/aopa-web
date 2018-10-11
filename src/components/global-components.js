import AppLayoutPage from '../components/framework/AppLayoutPage.vue';
import AppLayoutSideLeft from '../components/framework/AppLayoutSideLeft.vue';
import AppLayoutSideRight from '../components/framework/AppLayoutSideRight.vue';

export default function (Vue) {
  Vue.component('AppLayoutPage', AppLayoutPage);
  Vue.component('AppLayoutSideLeft', AppLayoutSideLeft);
  Vue.component('AppLayoutSideRight', AppLayoutSideRight);
}
