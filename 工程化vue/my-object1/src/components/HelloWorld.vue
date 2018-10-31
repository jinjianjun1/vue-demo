<template>
  <div class="hello">
   <!-- <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
     <h3>{{$route.params.id}}</h3> -->
    <h1 @click='getdata'>axios试用</h1>
  <ul>
    <li v-for='item in items'>
      {{item.title}}
    </li>
  </ul>
  </div>
</template>

<script>
Vue.prototype.$http=axios
import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'
export default {
  name: 'HelloWorld',
  data () {
    return {
      items:[]
    }
  },
  methods:{
    getdata(){
      this.$http.get('https://cnodejs.org/api/v1/topics',{
        params:{
          page:1,
          limit:10
        }
       
      })
      .then(res=>{
        this.items=res.data.data
        console.log(this.items)
      })
      .catch(err=>{
        console.log(err)
      })
    },
    postdata(){
      this.$http.post(url,qs.stringify({
        params:{
          page:1,
          limit:10
        }       
      }))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
