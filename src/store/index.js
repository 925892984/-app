import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		goodList: [],
		searchMsg: '',
		menuTitle: '',
		order: false
	},
	getters: {
		getGoodList(state) {
			return state.goodList
		},
		getMenuTitle(state) {
			return state.menuTitle
		}
	},
	mutations: {
		setGoodList(state, data) {
			state.goodList = data
		},
		setMenuTitle(state, str) {
			state.menuTitle = str
		}
	},
	actions: {
		setMenuTitleFun(store,str){
			store.commit('setMenuTitle',str)
		}
	},
	modules: {
		user
	}
})
