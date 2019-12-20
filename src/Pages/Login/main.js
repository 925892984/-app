import Vue from 'vue'
import Login from './App.vue'
import store from '@/store'
import http from '@/JS/http.js'
import api from '@/JS/api'

// 引入Mint-UI全部组件
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint);

//引入全局css样式
import '@/assets/css/Normalize.css'
import '@/assets/css/reset.css'
//字体文件
import '@/assets/css/font/iconfont.css'


Vue.prototype.$http = http 
Vue.prototype.$api = api;


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(Login)
}).$mount('#login')
