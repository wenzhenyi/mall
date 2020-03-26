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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
