import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource';

// import $ from "jquery"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min"


Vue.use(VueResource);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
