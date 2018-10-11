<template>
  <app-layout-page>
    <template slot="sideLeft">
      <app-layout-side-left>
        fefe
      </app-layout-side-left>
    </template>
    <template slot="sideRight">
      <app-layout-side-right>
        <Login></Login>
      </app-layout-side-right>
    </template>
    <h1 v-waves="{color: 'rgba(255,0,0,.3)'}">首页2</h1>
    <h1 v-waves v-dbClick="demo">首页2</h1>
    <img alt="Vue logo" src="../../assets/logo.png"><br>
    <router-link to="/about">about</router-link><br>
    <router-link :to="{name: '新闻'}">news</router-link><br>
    <router-link to="/details/12">detail</router-link>
    <div>{{ amount | numberFormatter(2) }}</div>
    <div class="container">
      <div class="row">
        <div class="col-3">1</div>
        <div class="col-3">2</div>
        <div class="col-3">3</div>
        <div class="col-3">4</div>
      </div>
    </div>
    <table>
      <tr>
        <th>Month</th>
        <th>Savings</th>
      </tr>
      <tr>
        <td>January</td>
        <td>$100</td>
      </tr>
    </table>
  </app-layout-page>
</template>

<script>
import waves from '@/directive/waves'; // 水波纹指令
import Login from '../../components/custom/custom-login/CustomLogin.vue';

export default {
  name: 'HomePage',
  directives: {
    waves,
  },
  components: {
    Login,
  },
  data() {
    return {
      amount: 12123.23,
    };
  },
  methods: {
    demo() {
      console.log(123);
    },
  },
};
</script>
