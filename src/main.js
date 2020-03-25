import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import env from './env'

// 默认配置 - 根据前端的跨域方式做调整 此处是用代理的方式，如果用jsonp或cros的需要加上域名如 https://www.a.com
axios.defaults.baseURL = '/api';
// 默认配置 - 超时
axios.defaults.timeout = 8000;
axios.defaults.baseURL = env.baseURL
// 接口错误拦截
axios.interceptors.response.use(function(response) {
  let res = response.data;
  if (res.status == 0) {
    // 正常
    return res.data;
  } else if (res.status == 10) {
    // 未登录
    window.location.href = '/#/login';
  } else {
    alert(res.msg);
  }
})

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
