<template>
    <div id="tab-control">
        <div class="tab-control-item"
             v-for="(item,index) in titles"
             @click="change(index)"
             :class="{active : index === current_index}">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        data(){
            return{
                current_index:0
            }
        },
        props:{
            titles:Array
        },
        methods:{
            change(index){
                this.current_index = index
                this.$emit('tabClick', index)
            }
        }
    }
</script>

<style scoped>
    #tab-control{
        display: flex;
        text-align: center;
        font-size: 15px;
        background-color: white;
        height: 40px;
        line-height: 40px;
    }
    .tab-control-item{
        flex: 1;
    }
    .tab-control-item span{
        padding-bottom: 3px;
    }
    .active{
        color: var(--color-high-text);
    }
    .active span{
        border-bottom: 3px solid var(--color-tint);
    }
</style>