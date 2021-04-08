import Vue from 'vue'
import Vuex from 'vuex'
import Axios from  'axios'
const apiUrl = 'https://gn3bbxdche.execute-api.us-west-2.amazonaws.com/Production/api'

import DevelopmentModule from './developments'
Vue.use(Vuex)

export default new Vuex.Store({

    modules:{
            developments: DevelopmentModule
    },
    getters:{
            api(){
                return Axios.create({
                    baseURL : apiUrl
                })
            }
    },

})