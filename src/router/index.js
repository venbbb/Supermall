import Vue from "vue"
import VueRouter from "vue-router"
const Home = () =>import("../views/Home/Home")
const Category = () =>import("../views/Category/Category")
const Cart = () =>import("../views/Cart/Cart")
const Profile = () =>import("../views/Profile/Profile")
const Detail =()=>import('../views/Detail/Detail')
const Login =()=>import('../views/Login/Login')
const Collect =()=>import('../views/Profile/componts/Collect')

Vue.use(VueRouter)

const routes = [
    {
      path:'/',
      component:Login
    },
    {
        path:"/Home",
        component:Home
    },
    {
        path: '/category',
        component:Category
    },
    {
        path: '/cart',
        component:Cart
    }
    ,
    {
        path: '/profile',
        component:Profile,
    },
    {
        path: '/Detail/:iid',
        component:Detail
    },
    {
        path:'/collect',
        component:Collect
    }
]
const router = new VueRouter({
    mode:'history',
    routes,
})

export default router