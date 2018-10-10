<template>
  <div class="custom-login">
    <div v-if="userInfo">
      登录名：{{ userInfo.userName }} <br>
      userInfoName: {{ userInfoName }}
    </div>
    <div v-else>
      <label for="">用户名</label>
      <input type="text" v-model="userName">
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'CustomLogin',
  data() {
    return {
      userName: '',
    };
  },
  computed: {
    ...mapState([
      'userInfo',
    ]),
    ...mapGetters([
      'userInfoName',
    ]),
    // userInfo() {
    //   return this.$store.state.userInfo;
    // },
  },
  methods: {
    ...mapMutations([
      'SEVE_USERINFO',
    ]),
    ...mapActions([
      'saveUserInfo',
    ]),
    login() {
      // this.SEVE_USERINFO({ userName: this.userName });
      this.saveUserInfo({ userName: this.userName });
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
