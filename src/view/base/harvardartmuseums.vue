<template>
    
</template>

<script>
import{getObject} from '../../api/harvardartmuseums'
    export default {
        name: 'harvardartmuseums',
        data() {
            return {
                data:[]
                
            }
        },
        methods:{
            initData(){
                getObject().then(response =>{
                    this.data = response.data
                })
            }
        },
        mounted(){
            this.initData
        }
    }
</script>

<style lang="less" scoped>
    
</style>