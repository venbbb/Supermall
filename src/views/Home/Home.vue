<template>
  <div id="Home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['热门','新款','精选']"
                 @tabClick="tabClick"
                 ref="tabControl1"
                 v-show="isfixed"
                 class="tabControl"
    ></tab-control>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <carousel :banners="banners" @carouselImgLoad.once="imgLoad"></carousel>
      <home-recommend :recommends="recommends"></home-recommend>
      <img src="../../assets/img/home/recommend_bg.jpg" style="width: 100%">
      <tab-control :titles="['热门','新款','精选']"
                   @tabClick="tabClick"
                   ref="tabControl2"
      ></tab-control>
      <GoodsList :goods="showGoods"></GoodsList>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import HomeSwiper from "./componts/HomeSwiper";
  import HomeRecommend from "./componts/HomeRecommend";
  import TabControl from "../../components/content/TabControl";
  import GoodsListItem from "../../components/content/GoodsListItem";
  import GoodsList from "../../components/content/GoodsList";
  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/BackTop";

  import {getHomeMultiData,getHomeGoods} from "../../network/home";
  import Carousel from "./componts/HomeCarousel";

  export default {
    name: "Home",
    data() {
      return{
        banners:[],
        recommends:[],
        goods:{
          'pop' : {page: 0, list: []},
          'new' : {page: 0, list: []},
          'sell' : {page: 0, list: []},
        },
        currentType: 'pop',
        isShowBackTop: false,
        isfixed:false,
        tabControlOffsetTop:0,
        saveY:0
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    components:{
      BackTop,
      Scroll,
      Carousel,
      NavBar,
      HomeSwiper,
      HomeRecommend,
      TabControl,
      GoodsList,
      GoodsListItem

    },
    created() {
      this.getHomeMultiData()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    activated() {
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0,this.saveY,0)
    },
    deactivated() {
      this.saveY = this.$refs.scroll.scroll.y
    },
    mounted() {
      const refresh = this.debounce(this.$refs.scroll.refresh,200)
      this.$bus.$on('itemImageLoad',()=>{
        refresh()
      })
    },
    methods: {
      getHomeMultiData() {
        getHomeMultiData().then(res => {
          // console.log(res);
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          // console.log(res);
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
        })
      },

      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.current_index = index
        this.$refs.tabControl2.current_index = index
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 1000

        this.isfixed = (-position.y) >this.tabControlOffsetTop
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      imgLoad(){
        this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },
      debounce(func, delay) {
        let timer = null
        return function (...args) {
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            func.apply(this, args)
          }, delay)
        }
      },
    }
  }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #ffffff;
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }
  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tabControl{
    position: relative;
    z-index: 9;
  }
</style>
