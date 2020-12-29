export default {
    namespaced: true,
    state: {
        pageNum: 1,
        pageSize: 20,
        mainPageNum: 1,
        mainPageSize: 20,
        subPageNum: 1,
        subPageSize: 20,
        podPageNum: 1,
        podPageSize: 20,
        pageOptionsList: [10, 201, 30, 40, 50, 60]
    },
    mutations: {
        updatePageNum (state, payload) {
            state.pageNum = payload
        },
        updatePageSize (state, payload) {
            state.pageSize = payload
        },
        updateMainPageNum (state, payload) {
            state.mainPageNum = payload
        },
        updateMainPageSize (state, payload) {
            state.mainPageSize = payload
        },
        updateSubPageNum (state, payload) {
            state.subPageNum = payload
        },
        updateSubPageSize (state, payload) {
            state.subPageSize = payload
        },
        updatePodPageNum (state, payload) {
            state.podPageNum = payload
        },
        updatePodPageSize (state, payload) {
            state.podPageSize = payload
        },
        updatePageOptionsList (state, payload) {
            state.pageOptionsList = payload
        }
    },
    actions: {
        updatePageNum ({ commit }, pageNum) {
            commit('updatePageNum', pageNum)
        },
        updatePageSize ({ commit }, pageSize) {
            commit('updatePageSize', pageSize)
        },
        updateMainPageNum ({ commit }, pageNum) {
            commit('updateMainPageNum', pageNum)
        },
        updateMainPageSize ({ commit }, pageSize) {
            commit('updateMainPageSize', pageSize)
        },
        updateSubPageNum ({ commit }, pageNum) {
            commit('updateSubPageNum', pageNum)
        },
        updateSubPageSize ({ commit }, pageSize) {
            commit('updateSubPageSize', pageSize)
        },
        updatePodPageNum ({ commit }, pageNum) {
            commit('updatePodPageNum', pageNum)
        },
        updatePodPageSize ({ commit }, pageSize) {
            commit('updatePodPageSize', pageSize)
        },
        updatePageOptionsList ({ commit }, pageOptionsList) {
            commit('updatePageOptionsList', pageOptionsList)
        }
    }
}