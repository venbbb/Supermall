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
        },
        addToCollect(content, payload){
            return new Promise((resolve,reject) =>{
                let old = null
                for (let item of content.state.goodsList){
                    if (item.iid === payload.iid){
                        old = item
                    }
                }
                if (old){
                    old.count +=1
                    resolve('已经收藏')
                }else{
                    payload.count = 1
                    content.state.goodsList.push(payload)
                    resolve('收藏成功')
                }
            })
        },
        delFromCat(content,payload){
            return new Promise((resolve,reject) =>{
                for (let item of content.state.goodsList){
                    let i = 0
                    if (item.iid === payload.iid){
                        content.state.goodsList.splice(i,1)
                    }
                    i++
                }
                resolve('删除成功')
            })
        }
    }
})

export default store
