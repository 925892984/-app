/**
 * user模块接口列表
 */
import http from '@/JS/http.js'

const user = {
	//用户信息修改 
	updateUser (params) {
		return http.post('sms/updateUser',params)
	},
	//用户信息查询 
	getUserByUserId (params) {
		return http.post('sms/getUserByUserId',params)
	},
	//关注商家 
	addAttention (params) {
		return http.post('sms/addAttention',params)
	},
	//取消关注 
	delAttention (params) {
		return http.post('sms/delAttention',params)
	},
	//查询关注的商家信息
	selectAttention (params) {
		return http.post('sms/selectAttention',params)
	},
	//用户修改密码
	userPasswordEdit (params) {
		return http.post('sms/userPasswordEdit',params)
	},
	//找回密码
	retrievePasswordEdit (params) {
		return http.post('sms/retrievePasswordEdit',params)
	},
	//发送验证码
	createSmsCode (userPhone) {
		return http.get('sms/createSmsCode?userPhone=' + userPhone)
	},
	//登录接口 
	login (params) {
		return http.post('api/login',params)
	},
	//用户注册 
	register (params) {
		return http.post('sms/register',params)
	},
	//图片验证码  
	createImageCode () {
		return http.get('sms/createImageCode')
	},
	//退出接口   
	logout (params) {
		return http.post('api/logout',params)
	},
	//用户提现
	userWithdrawMakeMoney (params) {
		return http.post('userWithdraw/userWithdrawMakeMoney',params)
	},
	//查询用户提现详情-管理端   
	userWithdrawBrowser (params) {
		return http.post('userWithdraw/userWithdrawBrowser',params)
	}
}

export default user;