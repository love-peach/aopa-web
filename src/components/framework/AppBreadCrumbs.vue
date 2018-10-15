<template>
  <div class="app-bread-crumbs">
    <span v-for="(item, index) in getBreadCrumbsList" :key="index">
      <template v-if="index + 1 !== getBreadCrumbsList.length">
        <router-link class="bread-crumbs-link" :to="item.path">{{ item.name }}</router-link>
        <span class="bread-crumbs-separator">{{ separator }}</span>
      </template>
      <span class="bread-crumbs-link" v-else>{{ item.name }}</span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    breadCrumbsList: {
      type: Array,
      default() {
        return [];
      },
    },
    separator: {
      type: String,
      default: ' / ',
    },
  },
  computed: {
    getBreadCrumbsList() {
      return this.breadCrumbsList.length > 0
        ? this.breadCrumbsList
        : this.renderBreadCrumbsList();
    },
  },
  methods: {
    renderBreadCrumbsList() {
      const { matched } = this.$route;
      const breadCrumbsList = [
        {
          name: '首页',
          path: '/',
          isCurrentPath: false,
        },
      ];
      // 过滤掉 matched 中关于空 path ，空 name ，以及首页的路由。
      matched
        .filter(item => item && item.path && item.name && item.path !== '/')
        .forEach(item => {
          breadCrumbsList.push({
            name: item.name,
            path: item.path,
            isCurrentPath: item.regex.test(window.location.pathname),
          });
        });
      if (breadCrumbsList.length === 1) {
        breadCrumbsList[0].isCurrentPath = true;
      }
      return breadCrumbsList;
    },
  },
};
</script>

<style scoped lang="scss">
.app-bread-crumbs {
  padding: 10px 0;
  border: 1px solid #999;
}
.bread-crumbs-link {
  color: #515a6e;
  transition: color 0.2s ease-in-out;
}
a.bread-crumbs-link:hover {
  color: #2d8cf0;
}
.bread-crumbs-link:last-child {
  font-weight: 700;
  color: #515a6e;
}
.bread-crumbs-separator {
  margin: 0 8px;
  color: #dcdee2;
}
</style>
