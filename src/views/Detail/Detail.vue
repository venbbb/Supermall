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
            TopY:[],

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
                position:0
            }
        },
        created() {
            this.iid = this.$route.params.iid

            getDetailDate(this.iid).then( res =>{
                console.log(res);
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

                console.log(this.Y)
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
        height: calc(100% - 44px);
    }
    .detail-nav {
        position: relative;
        z-index: 9;
        background-color: white;
    }
</style>