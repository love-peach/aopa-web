<template>
  <div class="app-layout">
    <div class="app-layout-inside">
      <app-header></app-header>
      <app-category-nav></app-category-nav>
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';
import AppCategoryNav from './AppCategoryNav.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    AppCategoryNav,
  },
};
</script>
