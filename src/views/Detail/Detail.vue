<template>
    <div id="Detail">
        <detail-nav-bar class="detail-nav" @itemClick="itemClick" ref="nav"/>
        <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
            <detail-carousel :topImage="topImage"></detail-carousel>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
            <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
            <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
            <GoodsList :goods="recommend" ref="recommend"></GoodsList>
        </scroll>
        <el-drawer :visible.sync="drawer" :direction="direction" :modal="modal" :size="size">
            <div style="font-weight:bold">尺码</div>
            <div class="size">
                <el-button size="mini" round>S</el-button>
                <el-button size="mini" round>M</el-button>
                <el-button size="mini" round>L</el-button>
                <el-button size="mini" round>XL</el-button>
            </div>
            <el-divider></el-divider>
            <div style="font-weight:bold">颜色分类</div>
            <div class="color">
                <el-button size="mini" round>红色</el-button>
                <el-button size="mini" round>蓝色</el-button>
                <el-button size="mini" round>绿色</el-button>
            </div>
            <el-divider></el-divider>
            <div class="drawer-button">
                <el-button type="danger" @click="purchase">确认</el-button>
            </div>
        </el-drawer>
        <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
        <detail-bottom-bar @addToCart="addToCart" @purchase="purchase" @addToCollect="addToCollect"></detail-bottom-bar>
    </div>
</template>

<script>
    import DetailNavBar from "./componts/DetailNavBar";
    import DetailCarousel from "./componts/DetailCarousel";
    import DetailBaseInfo from "./componts/DetailBaseInfo";
    import DetailShopInfo from "./componts/DetailShopInfo";
    import Scroll from "../../components/common/scroll/Scroll";
    import DetailParamInfo from "./componts/DetailParamInfo";
    import DetailGoodsInfo from "./componts/DetailGoodsInfo";
    import DetailCommentInfo from "./componts/DetailCommentInfo";
    import GoodsList from "../../components/content/GoodsList";
    import DetailBottomBar from "./componts/DetailBottomBar";
    import BackTop from "../../components/content/BackTop";

    import {getDetailDate,Goods,Shop,GoodsParam,getRecommend} from "../../network/detail";


    export default {
        name: "Detail",
        components: {
            DetailGoodsInfo,
            DetailParamInfo,
            DetailBaseInfo,
            DetailNavBar,
            DetailCarousel,
            DetailShopInfo,
            Scroll,
            DetailCommentInfo,
            GoodsList,
            DetailBottomBar,
            BackTop,
        },
        data(){
            return{
                iid:null,
                topImage:[],
                goods:{},
                shop:{},
                detailInfo:{},
                paramInfo:{},
                commentInfo:{},
                recommend:[],
                Y:[],
                position:0,
                isShowBackTop: false,
                drawer: false,
                direction: 'btt',
                modal:false,
                size:'60%'
            }
        },
        created() {
            this.iid = this.$route.params.iid

            getDetailDate(this.iid).then( res =>{
                // console.log(res);
                const data = res.data.result
                this.topImage = data.itemInfo.topImages

                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

                this.shop = new Shop(data.shopInfo)

                this.detailInfo = data.detailInfo;

                this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

                if(data.rate.cRate != 0) {
                    this.commentInfo = data.rate.list[0]
                }
            })

            getRecommend().then( res =>{
                this.recommend = res.data.data.list
            })
        },
        mounted() {
            const refresh = this.debounce(this.$refs.scroll.refresh,200)
            this.$bus.$on('detailImageLoad',()=>{
                refresh()
            })

        },
        methods:{
            debounce(func, delay) {
                let timer = null
                return function (...args) {
                    if (timer) clearTimeout(timer)
                    timer = setTimeout(() => {
                        func.apply(this, args)
                    }, delay)
                }
            },
            itemClick(index){
                this.$refs.scroll.scrollTo(0, -this.Y[index]+44, 100)
            },
            imageLoad(){
                this.$refs.scroll.refresh()

                this.Y.push(0)
                this.Y.push(this.$refs.param.$el.offsetTop)
                this.Y.push(this.$refs.comment.$el.offsetTop)
                this.Y.push(this.$refs.recommend.$el.offsetTop)

            },
            contentScroll(position){
                this.position = -position.y

                if (this.position >=this.Y[0] && this.position <this.Y[1]-44){
                    this.$refs.nav.currentIndex = 0
                }else if(this.position >=this.Y[1]-44 && this.position <this.Y[2]-44){
                    this.$refs.nav.currentIndex = 1
                }else if(this.position >=this.Y[2]-44 && this.position <this.Y[3]-44){
                    this.$refs.nav.currentIndex = 2
                }else{
                    this.$refs.nav.currentIndex = 3
                }

                this.isShowBackTop = (-position.y) > 1000
            },
            backClick(){
                this.$refs.scroll.scrollTo(0, 0)
            },
            addToCart(){
                const obj = {}
                obj.iid = this.iid
                obj.imgURL = this.topImage[0]
                obj.title = this.goods.title
                obj.desc = this.goods.desc
                obj.price = this.goods.realPrice
                obj.count = 0
                obj.checked = false

                this.$store.dispatch('addToCart',obj).then(res =>{
                    this.$message({
                        message:res,
                        center:true,
                        offset:200,
                        showClose:true,
                        duration:2000,
                        type: 'success'
                    })
                })
            },
            addToCollect(){
                const obj = {}
                obj.iid = this.iid
                obj.imgURL = this.topImage[0]
                obj.title = this.goods.title
                obj.desc = this.goods.desc
                obj.price = this.goods.realPrice

                this.$store.dispatch('addToCollect',obj).then(res =>{
                    this.$message({
                        message:res,
                        center:true,
                        offset:200,
                        showClose:true,
                        duration:2000,
                        type: 'success'
                    })
                })
            },
            purchase(){
                this.drawer = !this.drawer
            }
        }
    }
</script>

<style scoped>
    #Detail{
        position: relative;
        height: 100vh;
        z-index: 10;
        background-color: white;
    }
    .content{
        height: calc(100% - 44px - 49px);
    }
    .detail-nav {
        position: relative;
        z-index: 9;
        background-color: white;
    }

    .drawer-button{
        text-align: center;
        bottom: 0;
    }
</style>
<style>
    .el-message{
        min-width: 200px;
    }
</style>