<template>
  <div class="app-layout">
    <div class="app-layout-inside">
      <app-header></app-header>
      <app-category-nav></app-category-nav>
      <div class="app-container">
        <div class="app-container-inside">
          <router-view class="app-side-left" name="sideLeft"></router-view>
          <div class="app-content">
            <app-bread-crumbs></app-bread-crumbs>
            <router-view class="app-side-right" name="sideRight"></router-view>
            <div class="app-content-inside">
              <transition name="slide-fade" mode="out-in">
                <router-view></router-view>
              </transition>
            </div>
          </div>
        </div>
        <router-view name="ad"></router-view>
        <app-share></app-share>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';
import AppBreadCrumbs from './AppBreadCrumbs.vue';
import AppCategoryNav from './AppCategoryNav.vue';
import AppShare from './AppShare.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    AppBreadCrumbs,
    AppCategoryNav,
    AppShare,
  },
};
</script>
