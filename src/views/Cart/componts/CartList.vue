<template>
    <div class="cart-list">
        <scroll class="content">
            <cart-list-item v-for="(item,index) in cartsList" :itemInfo="item" :key="index"></cart-list-item>
        </scroll>
    </div>
</template>

<script>
    import CartListItem from "./CartListItem";
    import Scroll from "../../../components/common/scroll/Scroll";
    export default {
        name: "CartList",
        components: {Scroll, CartListItem},
        props:{
            cartsList:Array
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