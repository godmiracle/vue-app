import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 表单验证组件
import './utils/validation.js'
// postcss 插件，用于将单位转化为 rem
import 'amfe-flexible'
// 加载注册 Vant 组件
import Vant from 'vant'
import 'vant/lib/index.css'
import 'normalize.css'
import './styles/base.less'
import './styles/index.less'
Vue.use(Vant)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
