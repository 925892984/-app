/**
 * pay模块接口列表
 */
import http from '@/JS/http.js'

const pay = {
	//app微信支付 
	wxAppPay (params) {
		return http.post('ms-0.0.1-SNAPSHOT/wxAppPay',params)
	},
	//app支付宝支付 
	aliAppPay (params) {
		return http.post('ms-0.0.1-SNAPSHOT/aliAppPay',params)
	}
}

export default pay;