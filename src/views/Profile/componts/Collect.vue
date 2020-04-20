<template>
    <div>
        <nav-bar class="nav">
            <div slot="left" class="img" @click="back">
                <img src='../../../assets/img/common/back.svg'>
            </div>
            <div slot="center">购物街</div>
        </nav-bar>
        <div class="list">
            <collect-list :collect-list="collectList"></collect-list>
        </div>
    </div>
</template>

<script>
    import NavBar from "../../../components/common/navbar/NavBar";
    import CollectList from "./CollectList";
    export default {
        name: "Collect",
        components:{
            CollectList,
            NavBar
        },
        computed:{
            collectList(){
                return this.$store.state.goodsList
            }
        },
        methods:{
            back() {
                this.$router.back()
            }
        }
    }
</script>

<style scoped>
    .nav{
        background-color: var(--color-tint);
        color: #ffffff;
    }
    .img{
        margin-top:6px ;
    }
</style>