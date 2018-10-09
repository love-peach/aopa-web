<template>
  <div>
    <h2>详情页</h2>
    <div>{{params}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: this.$route.params
    }
  }
}
</script>

<style>

</style>


