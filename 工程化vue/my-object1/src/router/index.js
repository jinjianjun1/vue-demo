
import router from 'vue-router'
import Vue from 'vue'
import HelloWorld from '../components/HelloWorld'
import HelloChina from '../components/HelloChina'
Vue.use(router)

export default  new router({
  routes:[{
    name:'HelloWorld',
    path:'/word/:id',
    component:HelloWorld
  },
  {
    name:'HelloChina',
    path:'/China/:look',
    component:HelloChina
  }]
})