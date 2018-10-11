<template>
  <div class="app-layout">
    <div class="app-layout-inside">
      <app-header></app-header>
      <app-category-nav></app-category-nav>
      <transition name="slide-fade" mode="out-in">
        <keep-alive>
          <router-view :key="key"></router-view>
        </keep-alive>
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
  name: 'AppLayout',
  components: {
    AppHeader,
    AppFooter,
    AppCategoryNav,
  },
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
};
</script>
