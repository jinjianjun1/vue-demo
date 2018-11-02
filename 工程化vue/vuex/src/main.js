// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.config.productionTip = false

let store= new Vuex.Store({
  state:{
    count:55
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  components: { App,store },
  template: '<App/>'
})
