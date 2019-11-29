import Vue from 'vue'
import Forget from './App.vue'
import axios from 'axios'

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
  render: h => h(Forget)
}).$mount('#forget')
