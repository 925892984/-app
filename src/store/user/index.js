const user = {
	/**
	 * 定义命名空间，防止多个模块同名共享，使用时需要带上命名空间
	 */
	namespaced: true,
	state: {
		isLogin: false,
		id: window.localStorage.getItem('userId') || null,
		tooken: window.localStorage.getItem('token') || null
	},
	getters:{
		getIsLogin(state){
			if(!window.localStorage.getItem('userId') == 'null'){
				state.isLogin = true
			}
		}
	},
	mutations: {
// 		 addCard(store, obj){
// 		   
// 		}
	},
	actions: {
		//       addCardFun(store, obj){
		//         store.commit('addCard', obj);
		//       }
	}
}

//导出
export default user;
