<template>
  <div>
    <nav-bar class="nav"><div slot="center">购物街</div> </nav-bar>
    <el-container>
      <el-aside width="20%">
        <el-menu
              :default-active="activeIndex"
              background-color="#666"
              text-color="#fff"
              active-text-color="#ffd04b"
        >
        <el-menu-item index="1">上衣</el-menu-item>
        <el-menu-item index="2">裤子</el-menu-item>
        <el-menu-item index="3">内衣</el-menu-item>
          <el-menu-item index="4">裙子</el-menu-item>
          <el-menu-item index="5">女鞋</el-menu-item>
          <el-menu-item index="6">包包</el-menu-item>
          <el-menu-item index="7">配饰</el-menu-item>
          <el-menu-item index="8">美妆</el-menu-item>
          <el-menu-item index="9">个护</el-menu-item>
          <el-menu-item index="10">家具</el-menu-item>
          <el-menu-item index="11">百货</el-menu-item>
          <el-menu-item index="12">母婴</el-menu-item>
          <el-menu-item index="13">食品</el-menu-item>
      </el-menu>
      </el-aside>
      <el-main>
        <list></list>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import List from "./componts/List";
  import NavBar from "../../components/common/navbar/NavBar";
    export default {
        name: "Category",
      data(){
          return{
            activeIndex: '1',
          }
      },
      components:{
          NavBar,
        List
      }
    }
</script>

<style scoped>
  .nav{
    background-color: var(--color-tint);
    color: #ffffff;
  }
  .recommend{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
  }
  .recommend div{
    width: 30%;
  }
</style>
