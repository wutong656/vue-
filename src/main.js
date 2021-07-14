import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

axios.defaults.baseURL = "http://localhost:3000";
Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
