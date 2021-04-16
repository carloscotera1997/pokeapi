const state = {
    list: []
}

const mutations = {
    addItem(state, item) {
        state.list.push(item)
    },
    deleteItem(state, item) {
        let index = state.list.splice(item)
        state.list.splice(index, 1)

    }
}

const getters = {
    getItems(state) {
        return state.list
    }
}

const actions = {}


export default {
    state,
    getters,
    actions,
    mutations


}