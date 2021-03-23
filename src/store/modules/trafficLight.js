const state = () => {
    return {
        active: '',
        next: '',
        timer: 0
    }
}

const mutations = {
    setActive: (state, payload) => state.active = payload,
    setNext: (state, payload) => state.next = payload,
    setTimer: (state, payload) => state.timer = payload,
    decrementTimer: (state) => state.timer--,
}

export default {
    namespaced: true,
    state,
    mutations
}
