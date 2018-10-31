<template>
 <ul>
 <li> 
     <router-link :to="{name:'HelloWorld',params:{id:'只有一个地球看见了没'}}"> >
       Hello World
    </router-link> 
 </li>
 <li> 
   <!-- <router-link :to="{name:'HelloChina',params:{222:'FFFFFFFFFFFFFFFF'}}" >
       Hello China 
    </router-link> -->
   <router-link :to="{name: 'HelloChina',params:{look: 'FFFFFFF'}}">
        HELLO China
    </router-link>

 </li>
 </ul>
</template>

<script>
    export default {
        name: 'links'
    }
</script>

<style scoped>
    
</style>
