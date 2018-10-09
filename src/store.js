import Vue from 'vue';
import Vuex from 'vuex';
import store from './utils/store';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: store.getUserInfo() ? store.getUserInfo().userName || '' : '',
  },
  mutations: {
    login(state, { userName }) {
      store.setUserInfo({ userName });
      state.userName = userName;
    },
  },
  actions: {
    login(context) {
      context.commit('login');
    },
  },
});
