<template>
    <div>
    <span> 我是父组件</span> -----{{fmsg}}
    <hr>
    <child :msg='msg' @comehere='getmsg'>
    
    </child>
    </div>
</template>

<script>
    import child from './child'
    export default {
        name:'parent',
        data:function(){
            return {
                msg:'我是父组件的内容',
                fmsg:''
            }
        },
        components:{
            child
        },
        methods:{
            getmsg:function(value){
                this.fmsg=value
            }
        }
    }    
</script>

<style scoped>
    
</style>