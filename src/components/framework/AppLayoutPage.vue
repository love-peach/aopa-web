<template>
  <div class="app-container">
    <div class="app-container-inside">
      <!-- <router-view class="app-side-left" name="sideLeft"></router-view> -->
      <slot name="sideLeft"></slot>
      <div class="app-content">
        <slot name="breadCrumbs">
          <app-bread-crumbs></app-bread-crumbs>
        </slot>
        <!-- <router-view class="app-side-right" name="sideRight"></router-view> -->
        <slot name="sideRight"></slot>
        <div class="app-content-inside">
          <!-- <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
          </transition> -->
          <slot></slot>
        </div>
      </div>
    </div>
    <!-- <router-view name="ad"></router-view> -->
    <slot name="ad">
      <custom-ad-space></custom-ad-space>
    </slot>
    <!-- <app-share></app-share> -->
    <slot name="share">
      <custom-share></custom-share>
    </slot>
  </div>
</template>

<script>
import AppBreadCrumbs from './AppBreadCrumbs.vue';
import CustomShare from '../custom/custom-share/CustomShare.vue';
import CustomAdSpace from '../custom/custom-ad-space/CustomAdSpace.vue';

export default {
  components: {
    AppBreadCrumbs,
    CustomShare,
    CustomAdSpace,
  },
};
</script>
