import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		goodList: [],
		searchMsg: '',
		menuTitle: '',
		menuId: '',
		order: false,
		tooken: window.localStorage.getItem('token') || null
	},
	getters: {
		getGoodList(state) {
			return state.goodList
		},
		getMenuTitle(state) {
			return state.menuTitle
		},
		getMenuId(state) {
			return state.menuId
		}
	},
	mutations: {
		setGoodList(state, data) {
			state.goodList = data
		},
		setMenuTitle(state, str) {
			state.menuTitle = str
		},
		setMenuId(state, str) {
			state.menuId = str
		}
	},
	actions: {
		setMenuTitleFun(store,str){
			store.commit('setMenuTitle',str)
		},
		setMenuIdFun(store,str){
			store.commit('setMenuId',str)
		}
	},
	modules: {
		user
	}
})
