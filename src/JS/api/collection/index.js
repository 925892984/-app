/**
 * collection模块接口列表
 */
import http from '@/JS/http.js'

const collection = {
	//添加收藏 
	addCollection (params) {
		return http.post('collection/addCollection',params)
	},
	//取消收藏（批量、单个)
	delCollection (params) {
		return http.post('collection/delCollection',params)
	},
	//收藏商品列表
	listGoods (params) {
		return http.post('collection/listGoods',params)
	},
	//加入购物车 
	addCollection (params) {
		return http.post('collection/addCollection',params)
	},
}

export default collection;