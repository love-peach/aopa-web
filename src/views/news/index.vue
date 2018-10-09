<template>
  <app-layout-page>
    <template slot="sideLeft">
      <app-layout-side-left>
        <h2>fefe</h2>
      </app-layout-side-left>
    </template>
    <template slot="sideRight">
      <app-layout-side-right>
        <Login></Login>
      </app-layout-side-right>
    </template>
    <h2>新闻首页</h2>
    <router-link to="/news/billboards">公告</router-link><br>
  </app-layout-page>
</template>

<script>
import Login from '../../components/custom/custom-login/CustomLogin.vue';

export default {
  components: {
    Login,
  },
};
</script>

