import Vue from 'vue'
import Axios from 'axios';
import VueAxios from 'vue-axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue';
import routes from "@/router";

Vue.config.productionTip = false;
Axios.defaults.baseURL = "http://127.0.0.1";
Vue.use(VueAxios, Axios);
Vue.use(ElementUI);

new Vue({
  router: routes,
  render: h => h(App)
}).$mount('#app');
