import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/bootstrap.min.css'
import './assets/css/templatemo-style.css'  
import { BootstrapVue } from 'bootstrap-vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(BootstrapVue);