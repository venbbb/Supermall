<template>
    <div class="checkBar">
        <div class='checkContent'>
            <check-button class="checkButton" @checkBtnClick="checkedChange" :checked="allin"></check-button>
            <span>全选</span>
            <div class="price">
                <span>合计:￥{{account}}</span>
            </div>
            <div class="calc">
                <div>结账:({{goodsNum}})</div>
            </div>
        </div>

    </div>
</template>

<script>
    import CheckButton from "./CheckButton";
    export default {
        name: "checkBar",
        components: {CheckButton},
        data(){
          return{
              allin:false
          }
        },
        computed:{
            account(){
                let totalPrice = 0
                for (let item of this.$store.state.goodsList){
                    if (item.checked){
                        totalPrice += item.price*item.count
                    }
                }
                return totalPrice.toFixed(2)
            },
            goodsNum(){
                let i = 0
                for (let item of this.$store.state.goodsList){
                    if (item.checked){
                        i++
                    }
                }
                return i
            }
        },
        methods:{
            checkedChange(){
                this.allin = !this.allin;
                for (let item of this.$store.state.goodsList){
                    item.checked = !item.checked
                }
            }
        }
    }
</script>

<style scoped>
    .checkBar{
        height: 40px;
        position: relative;
        background-color: #F6f6f6;
        line-height: 40px;
        /*display: flex;*/
    }
    .checkContent{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .checkButton{
        width: 22px;
        height: 22px;
        line-height: 20px;
        margin-right: 5px;
    }
    .price{
        flex: 1;
        margin-left: 50px;
    }
    .calc{
        background-color: red;
        color: white;
        text-align: center;
        width: 90px;
    }
</style>