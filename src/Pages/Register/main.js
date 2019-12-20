import Vue from 'vue'
import Register from './App.vue'
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
  render: h => h(Register)
}).$mount('#register')
