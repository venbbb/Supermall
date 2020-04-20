<template>
  <div class='profile'>
    <nav-bar class="nav"><div slot="center">购物街</div> </nav-bar>
    <img class="avatar" src="../.././assets/img/profile/avatar.png">
    <el-divider></el-divider>
    <div class="list" @click="jump">
      <i class="el-icon-star-on"></i>
      <span style="font-size: 20px">收藏</span>
    </div>
  </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    export default {
      name: "Profile",
      components:{
        NavBar
      },
      methods:{
        jump(){
          this.$router.push('/collect')
        }
      }
    }
</script>
<style scoped>
  .avatar{
    position: relative;
    top: 60px;
    left: 20%;
    right: 20%;
    border-radius:50%;
    padding-bottom: 60px;
  }
  .nav{
    background-color: var(--color-tint);
    color: #ffffff;
  }
  .list{
    position: absolute;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    width: 100%;
  }
</style>
