<template>
    <nav-bar>
        <div slot="left" class="img" @click="back">
            <img src='../../../assets/img/common/back.svg'>
        </div>
        <div slot="center" class="center">
            <div v-for="(title,index) in list"
                 :class="{active:currentIndex==index}"
                 @click="changeTitle(index)"
            >{{title}}</div>
        </div>
    </nav-bar>
</template>

<script>
    import NavBar from "../../../components/common/navbar/NavBar";

    import {getDetailDate} from "../../../network/detail";

    export default {
        name: "DetailNavBar",
        components:{
            NavBar
        },
        data(){
            return{
                list:['商品','参数','评论','推荐'],
                currentIndex:0,
                iid:0
            }
        },
        methods: {
            changeTitle(index) {
                if (this.currentIndex != index) {
                    this.currentIndex = index
                    this.$emit('itemClick',index)
                }
            },
            back() {
                this.$router.back()
            }
        },
    }
</script>

<style scoped>
    .center{
        display: flex;
    }
    .center div{
        flex: 1;
    }
    .active{
        color: var(--color-high-text)
    }
    .img{
        margin-top:6px ;
    }
</style>