<template>
  <div class="home">
    <h1>首页</h1>
    <img alt="Vue logo" src="../assets/logo.png"><br>
    <router-link to="/about">about</router-link><br>
    <router-link to="/news">news</router-link><br>
    <router-link to="/details/12">detail</router-link>
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
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {},
};
</script>

