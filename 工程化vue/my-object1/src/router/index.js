
import router from 'vue-router'
import Vue from 'vue'
import HelloWorld from '../components/HelloWorld'
import HelloChina from '../components/HelloChina'
Vue.use(router)

export default  new router({
  routes:[{
    path:'/word',
    component:HelloWorld
  },
  {
    path:'/China',
    component:HelloChina
  }]
})