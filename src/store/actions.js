import { SEVE_USERINFO } from './mutation-types';

// TODO: Action 可以包含任意异步操作

// Action 个人理解：action 好似一个动作组合一样，可以将一系列的操作处理后，再触发 commit 改变state。
// 跟直接使用 commit 相比，它可以是异步的，可以是多个操作，可以将一系列的动作组合起来，调用的时候，不用关心需要做哪些一系列操作。
// 所以，一般可以将请求封装到这里。

export default {
  saveUserInfo(context, payload) {
    setTimeout(() => {
      context.commit(SEVE_USERINFO, payload);
    }, 1000);
  },
  // getAllMessages(context) {
  //   api.getAllMessages(messages => {
  //     context.commit('receiveAll', messages)
  //   })
  // },
};
