import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: {},
		goodList: []
	},
	getters: {
		getUser(state) {
			return state.user
		},
		getGoodList(state) {
			return state.goodList
		}
	},
	mutations: {
		setUser(state, data) {
			state.user = data
		},
		setGoodList(state, data) {
			state.goodList = data
		}
	},
	actions: {
		
	},
	modules: {

	}
})
