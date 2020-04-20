<template>
    <div class="cart-list">
        <scroll class="content">
            <collect-list-item v-for="(item,index) in collectList" :itemInfo="item" :key="index"></collect-list-item>
        </scroll>
    </div>
</template>

<script>
    import CollectListItem from "./CollectListItem";
    import Scroll from "../../../components/common/scroll/Scroll";
    export default {
        name: "CollectList",
        components: {CollectListItem, Scroll},
        props:{
            collectList:Array
        }
    }
</script>

<style scoped>
    .cart-list{
        height: calc(100% - 44px - 49px - 40px);
    }

    .content{
        height: 100%;
        overflow: hidden;
    }
</style>