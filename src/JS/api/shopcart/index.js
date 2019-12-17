/**
 * shopcart模块接口列表
 */
import http from '@/JS/http.js'

const shopcart = {
	//分页展示用户所有购物项 
	findShopCart (params) {
		return http.post('shopCart/findShopCart',params)
	},
	//修改商品的数 
	editNum (params) {
		return http.post('shopCart/editNum',params)
	},
	//删除购物项or清空购物车 
	shopCartDel (params) {
		return http.post('shopCart/shopCartDel',params)
	},
	//加入购物车 
	shopCartAdd (params) {
		return http.post('shopCart/shopCartAdd',params)
	},
	//修改商品的规格 
	editSpecification (params) {
		return http.post('shopCart/editSpecification',params)
	}
}

export default shopcart;