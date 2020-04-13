import Vue from 'vue'
import Vuex from 'vuex'
import th from "element-ui/src/locale/lang/th";

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        goodsList:[]
    },
    mutations:{
        addToCart(state, payload){
            let old = null
            for (let item of state.goodsList){
                if (item.iid === payload.iid){
                    old = item
                }
            }
            if (old){
                old.count +=1
            }else{
                payload.count = 1
                state.goodsList.push(payload)
            }
        }
    },
})

export default store