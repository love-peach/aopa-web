<template>
  <div class="custom-login">
    <div v-if="name123">
      登录名：{{ name123 }}
    </div>
    <div v-else>
      <label for="">用户名</label>
      <input type="text" v-model="userName">
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomLogin',
  data() {
    return {
      userName: '',
    };
  },
  computed: {
    name123() {
      return this.$store.state.userName;
    },
  },
  methods: {
    login() {
      this.$store.commit('login', { userName: this.userName });
    },
  },
};
</script>

<style lang="scss">
  .custom-login {
    padding: 10px 0;
    border: 1px solid #999;
  }
</style>
