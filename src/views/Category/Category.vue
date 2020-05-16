<template>
  <div>
    <nav-bar class="nav"><div slot="center">购物街</div> </nav-bar>
    <el-container>
        <el-aside width="30%">
          <el-menu :default-active="activeIndex">
            <el-menu-item v-for="(item,index) in category"
                          :index="index.toString()"
                          v-on:click="changeCategory(item)">
              {{item.title}}
            </el-menu-item>
          </el-menu>
        </el-aside>
      <el-main>
        <list :subCategory="subCategory"></list>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import List from "./componts/List";
  import NavBar from "../../components/common/navbar/NavBar";
  import {getCategory,getSubcategory,getCategoryDetail} from "../../network/category"
  import Scroll from "../../components/common/scroll/Scroll";
    export default {
      name: "Category",
      data(){
        return{
          activeIndex: '0',
          category:[],
          currentMaitKey:3627,
          subCategory:[],
        }
      },
      created() {
        this._getCategory()
        this._getSubcategory()
      },
      components:{
        Scroll,
          NavBar,
          List
      },
      methods:{
        _getSubcategory(){
          getSubcategory(this.currentMaitKey).then(res =>{
            console.log(res);
            this.subCategory = res.data.data.list
          })
        },
        _getCategory(){
          getCategory().then(res =>{
            console.log(res);
            this.category = res.data.data.category.list
          })
        },
        changeCategory(item){
          console.log(item);
          this.currentMaitKey = item.maitKey
          this._getSubcategory()
        }
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
