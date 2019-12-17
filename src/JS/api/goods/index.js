/**
 * goods模块接口列表
 */
import http from '@/JS/http.js'

const goods = {
	//根据一级类目查询二级类目和商品 
	getGoods (params) {
		return http.post('goods/getGoods',params)
	},
	//修改点击量
	updateClickNum (params) {
		return http.post('goods/updateClickNum',params)
	},
	//修改销量 
	updateSaleNum (params) {
		return http.post('goods/updateSaleNum',params)
	},
	//查询用户足迹
	selectFootMark (params) {
		return http.post('goods/selectFootMark',params)
	},
	//根据单号查询物流 
	selectWuliu  (params) {
		return http.post('goods/selectWuliu',params)
	},
	//根据商品id，查询商品详情
	selectGoodsDetail (params) {
		return http.post('goods/selectGoodsDetail',params)
	},
	//删除足迹
	delFootMark (params) {
		return http.post('goods/delFootMark',params)
	},
	//查询类目 
	goodsMenu (params) {
		return http.post('goods/goodsMenu',params)
	},
	//商品搜索 
	searchGoods (params) {
		return http.post('goods/searchGoods',params)
	},
	//用户评价 
	evaluate (params) {
		return http.post('goods/evaluate',params)
	}
}

export default goods;