import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import './plugins/element.js'
import axios from './axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(Element)
Vue.prototype.$bus = new Vue()
//require("./mock.js")
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
