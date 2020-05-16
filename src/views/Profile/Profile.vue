<template>
  <div class='profile'>
    <nav-bar class="nav"><div slot="center">我的信息</div> </nav-bar>
    <div class="userInfo">
      <img class="avatar" src="../.././assets/img/profile/user.png">
      <div class="content">
        <span>登录/注册</span>
        <br>
        <img class="phone" src="../.././assets/img/profile/phone.svg">
        <span style="font-size: 14px">暂无绑定手机号</span>
      </div>
    </div>
    <img class="arrow" src="../.././assets/img/profile/arrow.png">
    <div class="scoreInfo">
      <div class="price">
        <span class="num">0.00</span>
        <span>元</span>
        <br>
        <span>我的余额</span>
      </div>
      <div class="discount">
        <span class="num">0</span>
        <span>个</span>
        <br>
        <span>我的优惠</span>
      </div>
      <div class="score">
        <span class="num">0</span>
        <span>分</span>
        <br>
        <span>我的积分</span>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="bar">
      <div class="list" @click="jump">
        <i class="el-icon-star-on"></i>
        <span>收藏</span>
      </div>
      <div>
        <i class="el-icon-message"></i>
        <span>我的消息</span>
      </div>
      <div>
        <i class="el-icon-shopping-cart-1"></i>
        <span>积分商城</span>
      </div>
      <div>
        <i class="el-icon-location"></i>
        <span>地址管理</span>
      </div>
      <div>
        <i class="el-icon-present"></i>
        <span>礼物</span>
      </div>
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
  .bar{
    font-size: 22px;
  }
  .bar div{
    padding: 8px;
  }
  .bar i{
    color: var(--color-tint);
  }
  .scoreInfo{
    display: flex;
    text-align: center;
  }
  .num{
    color: var(--color-tint);
  }
  .scoreInfo div{
    padding-top: 20px;
    flex:1;
  }
  .userInfo{
    background-color:var(--color-tint);
    height: 130px;
    display: flex;
  }

  .arrow{
    position: fixed;
    height: 40px;
    width: 40px;
    right: 0;
    top: 80px;
    z-index: 9;
  }
  .phone{
    height: 20px;
    width: 20px;
  }
  .avatar{
    position: relative;
    top:10px;
    left: 5px;
    height: 100px;
    width: 100px;
  }
  .content{
    position: relative;
    top: 30px;
    margin: 10px;
  }
  .nav{
    background-color: var(--color-tint);
    color: #ffffff;
  }
  .list{
    border-radius: 4px;
    width: 100%;
  }
</style>
