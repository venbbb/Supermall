<template>
    <swiper>
        <swiper-item v-for="item in banners">
            <a :href="item.link">
                <img :src="item.image">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
    import Swiper from "../../../components/common/swiper/Swiper";
    import SwiperItem from "../../../components/common/swiper/SwiperItem";

    export default {
        name: "HomeSwiper",
        props:{
            banners:Array
        },
        components:{
            SwiperItem,
            Swiper
        }
    }
</script>

<style scoped>

</style>