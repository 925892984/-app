/**
 * store模块接口列表
 */
import http from '@/JS/http.js'
import base from '../base'; // 导入接口域名列表

const store = {
	//获取商家店铺装修样式 
	getMerchantCustomByMerchantId (params) {
		return http.post(`${base.b}getMerchantCustomByMerchantId`,params)
	},
	//根据商家获取其所有商品列表
	getGoodsList (params) {
		return http.post(`${base.b}getGoodsList`,params)
	}
}

export default store;