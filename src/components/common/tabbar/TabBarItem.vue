<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="img"></slot></div>
    <div v-else><slot name="img-active"></slot></div>
    <div :class="{active:isActive}"><slot name="text"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
          path: String
        },
        data(){
          return{
          }
        },
      computed:{
        isActive(){
          return this.$route.path.indexOf(this.path) !== -1
        }
      },
        methods:{
          itemClick(){
            if (this.$route.path !== this.path) {
              this.$router.replace(this.path)
            }
          }
        }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 0px;
  }
  .active{
    color: red;
  }
</style>
