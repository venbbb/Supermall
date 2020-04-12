<template>
    <div class="recommend">
        <div class="recommend-item" v-for="item in recommends">
            <a :href="item.link">
                <img :src="item.image">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props:{
            recommends:Array
        }
    }
</script>

<style scoped>
    .recommend{
        display: flex;
        text-align: center;
        padding: 10px 0px 15px;
    }
    .recommend-item{
        flex: 1;
    }
    .recommend-item img{
        height: 65px;
        width: 65px;
    }
</style>