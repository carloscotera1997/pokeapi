import Vuex from 'vuex'
import list from './modules/list'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      list
    }
  })
}

export default createStore;