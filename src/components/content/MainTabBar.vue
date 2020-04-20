<template>
    <div id="MainTabBar">
        <TabBar>
            <TabBarItem path="/home">
                <img slot="img" src="~assets/img/tabbar/home.svg">
                <img slot="img-active" src="~assets/img/tabbar/home_active.svg">
                <div slot="text">首页</div>
            </TabBarItem>
            <TabBarItem path="/category">
                <img slot="img" src="~assets/img/tabbar/category.svg">
                <img slot="img-active" src="~assets/img/tabbar/category_active.svg">
                <div slot="text">分类</div>
            </TabBarItem>
            <TabBarItem  path="/cart">
                <img slot="img" src="~assets/img/tabbar/shopcart.svg">
                <img slot="img-active" src="~assets/img/tabbar/shopcart_active.svg">
                <div slot="text">购物车</div>
            </TabBarItem>
            <TabBarItem  path="/profile">
                <img slot="img" src="~assets/img/tabbar/profile.svg">
                <img slot="img-active" src="~assets/img/tabbar/profile_active.svg">
                <div slot="text">我的</div>
            </TabBarItem>
        </TabBar>

    </div>
</template>
<script>
    import TabBar from "components/common/tabbar/TabBar";
    import TabBarItem from "components/common/tabbar/TabBarItem";
    export default {
        name: 'MainTabBar',
        components: {
            TabBarItem,
            TabBar
        }

    }
</script>

<style>

</style>
