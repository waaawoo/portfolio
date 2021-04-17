// storeの用意
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => {
      return {
        spClick: false,
      }
    },
    //
    mutations: {
      changFlg(state){
        state.spClick = !state.spClick
      }
    },

  })
}

export default createStore
