import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import About from './About.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const routes = [
  { path: '/about', component: About },
  { path: '/', component: Home }
];

const router = new VueRouter ({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
