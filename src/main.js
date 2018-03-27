import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource';
import $ from "jquery"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import 'animate.css'
import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.use(VueFullpage)
Vue.use(VueResource);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
