import axios from 'axios'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueinfiniteScroll from 'vue-infinite-scroll'
import VueMoment from 'vue-moment'
import App from './App.vue'
import router from './router'
import store from './store/'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueinfiniteScroll)
Vue.use(VueMoment)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
