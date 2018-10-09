<template>
  <div class="app-share">
    <span chass="share-out-text">分享</span>
    <ul class="share-list">
      <li class="share-list-item" v-for="(item, index) in shareList" :key="index">
        <img class="share-item-img" src="../../../assets/logo.png" alt="">
        <span class="share-item-text" >{{ item.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CustomShare',
  data() {
    return {
      shareList: [
        {
          icon: '',
          text: '微信',
        },
        {
          icon: '',
          text: '新浪微博',
        },
        {
          icon: '',
          text: '腾讯微博',
        },
        {
          icon: '',
          text: 'QQ好友',
        },
      ],
    };
  },
};
</script>

<style scooed lang="scss">
  .app-share {
    cursor: pointer;
    padding: 10px;
    position: absolute;
    top: 0;
    right: 25px;
  }
  .app-share:hover .share-list {
    display: block;
  }
  .share-list {
    display: none;
    position: absolute;
    left: 100%;
    top: 0;
    padding: 5px;
    border: 1px solid red;
  }
  .share-list-item {
    cursor: pointer;
    padding: 10px;
    white-space: nowrap;
  }
  .share-item-img {
    width: 25px;
  }
</style>
