<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import storage from './storage'

export default {
  data() {
    return {
      res: {}
    }
  },
  mounted() {
    // 本地集成mockjs
    // this.axios.get('/user/login').then((res) => {
    //   this.res = res;
    // })
    // storage.setItem("user", {"a": 3})
    // storage.setItem("abc", {"aaa": 3}, "user")
    // storage.clear("a", "user")
  }
}
</script>
<style>
  @import url('./assets/scss/reset.scss');
</style>
