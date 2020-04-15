import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import FastClick from 'fastclick'

Vue.use(Element)
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
