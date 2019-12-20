/**
 * collection模块接口列表
 */
import http from '@/JS/http.js' // 导入http中创建的axios实例
// import base from '../base'; // 导入接口域名列表

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
	}
}

export default collection;