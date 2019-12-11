import Vue from 'vue'
import Login from './App.vue'
import axios from 'axios'
import store from '@/store'

// 引入Mint-UI全部组件
import Mint from 'mint-ui'
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

//设置cookie
import CookieUtil from '@/common/cookie.js'
Vue.prototype.$cookie = CookieUtil

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(Login)
}).$mount('#login')
