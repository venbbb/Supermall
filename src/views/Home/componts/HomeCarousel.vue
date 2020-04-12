<template>
    <div class="block">
        <el-carousel height="150px">
            <el-carousel-item v-for="item in banners">
                <a :href="item.link">
                    <img :src="item.image" style="width:100%;" @load="imgLoad">
                </a>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "Carousel",
        props:{
            banners:Array
        },
        methods:{
            imgLoad(){
                this.$emit('carouselImgLoad')
            }
        }
    }
</script>

<style scoped>

</style>