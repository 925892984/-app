const user = {
	/**
	 * 定义命名空间，防止多个模块同名共享，使用时需要带上命名空间
	 */
	namespaced: true,
	state: {
		isLogin: false,
		id: window.localStorage.getItem('userId') || null
	},
	mutations: {
		//     addCard(state, obj){
		//         state.cardArr.push(obj);
		//     }
	},
	actions: {
		//       addCardFun(store, obj){
		//         store.commit('addCard', obj);
		//       }
	}
}

//导出
export default user;
