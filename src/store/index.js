import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        goodsList:[]
    },
    actions:{
        addToCart(content, payload){
            return new Promise((resolve,reject) =>{
                let old = null
                for (let item of content.state.goodsList){
                    if (item.iid === payload.iid){
                        old = item
                    }
                }
                if (old){
                    old.count +=1
                    resolve('数量加一')
                }else{
                    payload.count = 1
                    content.state.goodsList.push(payload)
                    resolve('添加到购物车')
                }
            })
        }
    },
})

export default store