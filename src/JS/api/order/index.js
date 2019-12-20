/**
 * order模块接口列表    未写完
 */
import http from '@/JS/http.js'

const order = {
	//商品购买、立即支付、付款
	orderAdd (params) {
		return http.post('order/orderAdd',params)
	},
	//待支付订单支付接口 
	payOrder (params) {
		return http.post('order/payOrder',params)
	},
	//分成详情
	findOrderDivideInto (params) {
		return http.post('orderDivideInto/findOrderDivideInto',params)
	},
	//个人分成统计 
	sumOrderDivideIntoByUserId () {
		return http.get('orderDivideInto/sumOrderDivideIntoByUserId')
	},
	//提现详情（我的钱包界面获取查看金额明细） 
	findUserWithdraw (params) {
		return http.post('userWithdraw/findUserWithdraw',params)
	},
	//提现申请 
	userWithdrawAdd (params) {
		return http.post('userWithdraw/userWithdrawAdd',params)
	},
	//发起退款
	launchRefundInfo (params) {
		return http.post('refundInfo/launchRefundInfo',params)
	},
	//文件上传 
	upload (params) {
		return http.post('file/upload',params)
	},
	//个人中心气泡查询  
	findOrderBubbleByUserId () {
		return http.get('order/findOrderBubbleByUserId')
	},
	//取消支付
	cancelPay (params) {
		return http.post('orderPay/cancelPay',params)
	},
	//退货单号查询 
	getfindRefundInfo (params) { //findRefundInfo接口相同
		return http.post('refundInfo/findRefundInfo/1/10',params)
	},
	//购物车订单结算、查看订单详情
	orderInitialize (params) {
		return http.post('order/orderInitialize',params)
	},
	//根据（小订单号）orderPayNo 查询订单信息 
	findOrderPayByOrderPayNo (params) {
		return http.post('orderPay/findOrderPayByOrderPayNo',params)
	},
	//订单查询-手机端  
	findOrderPay (params) {
		return http.post('orderPay/findOrderPay',params)
	},
	//订单查询-管理端
	findOrderPayBrowser (params) {
		return http.post('orderPay/findOrderPayBrowser',params)
	},
	//订单发货 
	orderDelivery (params) {
		return http.post('orderPay/orderDelivery',params)
	},
	//订单收货 
	orderTakedelivery (params) {
		return http.post('orderPay/orderTakedelivery',params)
	},
	//修改订单的收货地址  
	updateOrderPayAddressId (params) {
		return http.post('orderPay/updateOrderPayAddressId',params)
	},
	//售后商品查询
	findOrderGoods (params) {
		return http.post('orderGoods/findOrderGoods',params)
	},
	//App端 查看退款详 
	findRefundInfoByUserIdAndPayNo (params) {
		return http.post('refundInfo/findRefundInfoByUserIdAndPayNo',params)
	},
	//商家同意、拒绝退款
		conductRefundInfo (params) {
		return http.post('refundInfo/conductRefundInfo',params)
	},
	//商家管理系统查看退款详情  
	findRefundInfo (params) {
		return http.post('refundInfo/findRefundInfo/1/10',params)
	},
	//商家金额统计（余额管理）
	sumOrderMerchantByMerchantId (params) {
		return http.post('orderMerchant/sumOrderMerchantByMerchantId',params)
	},
	//商家收益记录 
	findOrderMerchant (params) {
		return http.post('orderMerchant/findOrderMerchant',params)
	},
		//商家提现记录
	findMerchantWithdraw (params) {
		return http.post('merchantWithdraw/findMerchantWithdraw',params)
	},
	//商家金额提现申请
		merchantWithdrawAdd (params) {
		return http.post('merchantWithdraw/merchantWithdrawAdd',params)
	},
	//平台查看订单统计总览  
	findAllOrderPayTotal (params) {
		return http.post('orderGoods/findAllOrderPayTotal',params)
	},
	//商家提现审批
	merchantWithdrawApprover (params) {
		return http.post('merchantWithdraw/merchantWithdrawApprover',params)
	},
	//商品退款费用修改
	updateRefundPrice (params) {
		return http.post('refundInfo/updateRefundPrice',params)
	}
	
}

export default order;