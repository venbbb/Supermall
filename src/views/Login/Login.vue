<template>
    <div>
        <nav-bar class="nav"><div slot="center">购物街</div></nav-bar>
        <div class="Login">
            <el-input placeholder='venb' prefix-icon="el-icon-user" class="input"></el-input>
            <el-input placeholder='******' prefix-icon="el-icon-lock" class="input"></el-input>
            <div class="button">
                <el-button type="primary" @click="login">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    export default {
        name: "Login",
        components:{
            NavBar
        },
        methods:{
            login(){
                this.$router.replace('/home')
            }
        }
    }
</script>

<style scoped>
    .Login{
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%, -50%);
    }
    .input{
        padding: 5px;
    }
    .button{
        text-align: center;
        padding: 5px;
    }
    .nav{
        background-color: var(--color-tint);
        color: #ffffff;
    }
</style>