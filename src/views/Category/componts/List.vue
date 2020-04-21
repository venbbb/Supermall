<template>
    <div>
        <span style="font-weight: bold">推荐分类</span>
        <div class="recommend">
            <div style="text-align:center;">
                <img src="../../.././assets/img/common/cloth.svg" style="width: 100%">
                <span>女装馆</span>
            </div>
            <div style="text-align:center;">
                <img src="../../.././assets/img/common/cloth.svg" style="width: 100%">
                <span>通勤馆</span>
            </div>
            <div style="text-align:center;">
                <img src="../../.././assets/img/common/cloth.svg" style="width: 100%">
                <span>国风馆</span>
            </div>
            <div style="text-align:center;">
                <img src="../../.././assets/img/common/cloth.svg" style="width: 100%">
                <span>潮女馆</span>
            </div>
            <div style="text-align:center;">
                <img src="../../.././assets/img/common/cloth.svg" style="width: 100%">
                <span>潮流馆</span>
            </div>
            <div style="text-align:center;">
                <img src="../../.././assets/img/common/cloth.svg" style="width: 100%">
                <span>新品馆</span>
            </div>
        </div>
        <el-divider></el-divider>
        <span style="font-weight: bold">热卖选购</span>
        <div class="recommend">
            <div style="text-align:center;">
                <img src="../../.././assets/img/common/cloth.svg" style="width: 100%">
                <span>女装馆</span>
            </div>
            <div style="text-align:center;">
                <img src="../../.././assets/img/common/cloth.svg" style="width: 100%">
                <span>连衣裙</span>
            </div>
            <div style="text-align:center;">
                <img src="../../.././assets/img/common/cloth.svg" style="width: 100%">
                <span>T恤</span>
            </div>
            <div style="text-align:center;">
                <img src="../../.././assets/img/common/cloth.svg" style="width: 100%">
                <span>衬衫</span>
            </div>
            <div style="text-align:center;">
                <img src="../../.././assets/img/common/cloth.svg" style="width: 100%">
                <span>大码女装</span>
            </div>
            <div style="text-align:center;">
                <img src="../../.././assets/img/common/cloth.svg" style="width: 100%">
                <span>休闲裤</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "List"
    }
</script>

<style scoped>
    .recommend{
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-around;
    }
    .recommend div{
        width: 30%;
    }
    .recommend span{
        color: #ff5777;
    }
</style>