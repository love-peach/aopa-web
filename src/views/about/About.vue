<template>
  <app-layout-page class="about">
    <template slot="sideRight">
      <app-layout-side-right>
        fefe
      </app-layout-side-right>
    </template>
    <h1>This is an about page</h1>
    <p v-dbClick="requestPoems">{{ poemsText }}</p>
    <img
      v-for="imgUrl in imgArr"
      :key="imgUrl"
      v-lazy="imgUrl"
      class="img"
      alt="图片"
    >
  </app-layout-page>
</template>


<script type="javascript">
import apiUrl from '@/utils/api';

export default {
  name: 'About',
  data() {
    return {
      poemsText: '',
      imgArr: [
        'http://covteam.u.qiniudn.com/test13.jpg',
        'http://covteam.u.qiniudn.com/test14.jpg',
        'http://covteam.u.qiniudn.com/test15.jpg',
        'http://covteam.u.qiniudn.com/test16.jpg',
        'http://covteam.u.qiniudn.com/test17.jpg',
        'http://covteam.u.qiniudn.com/test18.jpg',
        'http://covteam.u.qiniudn.com/test19.jpg',
        'http://covteam.u.qiniudn.com/test20.jpg',
        'http://covteam.u.qiniudn.com/test21.jpg',
        'http://covteam.u.qiniudn.com/test22.jpg',
        'http://covteam.u.qiniudn.com/test23.jpg',
        'http://covteam.u.qiniudn.com/test24.jpg',
      ],
    };
  },
  created() {
    this.requestPoems();
  },
  methods: {
    requestPoems() {
      this.$fetch.get(apiUrl.poems).then((res) => {
        this.poemsText = res.result.content;
      }).catch((err) => {
        console.log(err, 'err');
      });
    },
  },
};
</script>

<style scoped lang="scss">
  p {
    color: $colorStable;
  }
  .img {
    width: 50%;
    height: 500px;
  }
</style>
