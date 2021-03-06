import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import http from './JS/http.js'
import api from './JS/api'

// 引入Mint-UI全部组件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

//引入全局css样式
import '@/assets/css/Normalize.css'
import '@/assets/css/reset.css'
//字体文件
import '@/assets/css/font/iconfont.css'

//设置axios
const getBaseUrl = process.env.VUE_APP_URL
axios.defaults.baseURL = getBaseUrl
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios

Vue.prototype.$http = http 
Vue.prototype.$api = api;

//设置cookie
import CookieUtil from '@/common/cookie.js'
Vue.prototype.$cookie = CookieUtil

Vue.config.productionTip = false

Vue.directive('preventReClick', {
  inserted (el, binding) {
    el.addEventListener('click', () => {
      if (!el.disabled) {
        el.disabled = true
        setTimeout(() => {
          el.disabled = false
        }, binding.value || 2000)
      }
    })
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
