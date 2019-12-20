/**
 * address模块接口列表
 */
import http from '@/JS/http.js' // 导入http中创建的axios实例
// import base from '../base'; // 导入接口域名列表

const address = {
	//新增收货地址
	addaddress (params) {
		return http.post('address/addaddress',params)
	},
	//修改收货地址 
	editaddress (params) {
		return http.post('collection/editaddress',params)
	},
	//删除收货地址 
	deladdress  (params) {
		return http.post('collection/deladdress',params)
	},
	//查询收货地址列表
	listaddress (params) {
		return http.post('address/listaddress',params)
	},
	//设置默认收货地址
	setdefault (params) {
		return http.post('collection/setdefault',params)
	},
	//根据id查询收货地址
	listbyid (params) {
		return http.post('collection/listbyid ',params)
	}
}

export default address;