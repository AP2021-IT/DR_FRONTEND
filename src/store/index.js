import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    properties:[]
  },
  mutations: {
    propertieslist(state,list){
      state.properties=list
    }
  },
  getters:{
    getproperties: state=>state.properties
  },
  actions: {

    get_list({commit}){
      axios.get('http://127.0.0.1:8000/Properties/list/')
      .then(resp=>{
        console.log(resp.data);
        commit('propertieslist',resp.data)
      })
    }
  },
  modules: {
  }
})
