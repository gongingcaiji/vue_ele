import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import './assets/css/base.css'


import router from './router';


import axios from 'axios';
// vue.prototype.$http=axios;  


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
