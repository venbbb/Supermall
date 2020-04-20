<template>
    <div class="block">
        <el-carousel height="300px" arrow="always" type="card">
            <el-carousel-item v-for="item in topImage">
                    <img :src="item" class="topImage">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "DetailCarousel",
        props:{
            topImage:Array
        }
    }
</script>

<style scoped>
    .topImage{
        width: 100%;
        overflow: hidden;
    }
</style>