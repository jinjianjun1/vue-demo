<template>
    <div>
    <span @click="deliver"> 我是子组件</span> <br>
    {{msg}} 
    <hr>
    {{getCount}}
    </div>
</template>

<script>
    export default {
        name:'child',
        data:function(){
            return {
                childmsg:'我是子组件内容'
            }
        },
        props:{
            msg:{
                type:String,
                default:''
            }
        },
        methods:{
            deliver:function(){
               // let childmsg=this.childmsg+'我从子组件来',
                this.$emit('comehere', this.childmsg)
            }
        },
        computed:{
            getCount:function(){
                return this.$store.state.count
            }
        }
    }
</script>

<style scoped>
    
</style>