import Vue from 'vue'
import App from './App.vue'
import vectorMap from "../lib/vectorMap.umd"
import "../lib/vectorMap.css"
Vue.config.productionTip = false
Vue.use(vectorMap)
new Vue({
  render: h => h(App),
}).$mount('#app')
