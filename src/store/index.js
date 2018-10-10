import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
// 下面这个store 是浏览器 localStorage sessionStorage的封装
import store from '../utils/store';

Vue.use(Vuex);

const state = {
  userInfo: store.getUserInfo() || '',
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
