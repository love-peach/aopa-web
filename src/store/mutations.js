// 下面这个store 是浏览器 localStorage sessionStorage的封装
import store from '../utils/store';
import { SEVE_USERINFO } from './mutation-types';

// TODO: Mutation 必须是同步函数

export default {
  [SEVE_USERINFO](state, payload) {
    state.userInfo = payload;
    store.setUserInfo(payload);
  },
};
