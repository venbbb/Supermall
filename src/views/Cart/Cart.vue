<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{goodsNum}})</div>
    </nav-bar>
    <cart-list :carts-list="cartList"></cart-list>
    <check-bar class="checkBar"></check-bar>
  </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import Scroll from "../../components/common/scroll/Scroll";
    import CartList from "./componts/CartList";
    import checkBar from "./componts/checkBar";

    export default {
      name: "Cart",
      components: {
          CartList,
          NavBar,
          Scroll,
          checkBar
        },
      computed:{
          goodsNum(){
            return this.$store.state.goodsList.length
          },
          cartList(){
            return this.$store.state.goodsList
          }
      }
    }
</script>

<style scoped>
  .cart-nav{
    background-color: var(--color-tint);
    color: #ffffff;
  }
  .cart{
    height: 100vh;
  }
</style>
