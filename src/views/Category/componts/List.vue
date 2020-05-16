<template>
    <div class="list">
        <div class="listItem" v-for="item in subCategory">
            <a :href="item.link">
            <img :src="item.image">
            <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "List",
        props:{
            subCategory:Array
        }
    }
</script>

<style scoped>
    .list{
        display: flex;
        flex-wrap: wrap;
    }
    .listItem{
        width: 30%;
        text-align: center;
        font-size: 14px;
        margin: 3px;
    }
    .listItem img{
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }
</style>
