import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export const store=new Vuex.Store({
    strict:true,
    state:{
        user:{
            id:0 || localStorage.getItem('id'),
            first_name:"" || localStorage.getItem('first_name'),
            last_name:"" || localStorage.getItem('last_name'),
            auth_token:"" || localStorage.getItem('auth_token')
        }
    },
    getters:{},
    mutations:{
        setUser:(state,payload)=>{
            state.user=payload
        }
    },
    actions:{
        setUser:(context,payload)=>{
            localStorage.setItem('first_name',payload.first_name)
            localStorage.setItem('last_name',payload.last_name)
            localStorage.setItem('auth_token',payload.api_token)
            localStorage.setItem('id',payload.id)
            context.commit("setUser",payload)
        }
    }

})