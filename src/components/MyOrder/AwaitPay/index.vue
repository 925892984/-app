<template>
	<div id="await-pay">
		<div class="content">
			<div class="await-pay-item" v-for="item in awaitPayList" :key="item.orderNo">
				<div class="store-wrap">
					<div class="store-info">
						<div class="store-icon">
							<img :src="item.img" alt="">
						</div>
						<span class="store-name">
							{{item.merchanBusinessName}}
						</span>
					</div>
					<div class="order-title">
						<span class="await-pay-text">待付款</span>
					</div>
				</div>
				<div class="good-wrap" v-for="good in item.mapList" :key="good.goodsId">
					<div class="good-info">
						<div class="good-img">
							<img :src="good.goodsImg" alt="">
						</div>
						<div class="good-detail">
							<div class="good-name">{{good.goodsTitle}}</div>
							<div class="good-money-wrap">
								<div class="good-money">
									<span class="money">￥{{good.goodsPrice}}</span>
								</div>
								<div class="good-fencheng">
									<span class="fencheng-text">分成</span>
									<span class="money">￥{{good.orderGoodsFenChengPrice}}</span>
								</div>
							</div>
						</div>
					</div>
					<div class="good-other">
						<div class="good-num">
							<span class="iconfont"></span>{{good.orderNum}}
						</div>
					</div>
				</div>
				<div class="good-wuliu">
					<span>共{{item.purchaseNum}}件商品 合计:￥{{item.goodsTotalPrice}}(含运费：￥0)</span>
				</div>
				<div class="handle-wrap">
					<div class="change-address handle-wrap-item">
						<button class="handle-btn btn-address">修改地址</button>
					</div>
					<div class="off-order handle-wrap-item">
						<button class="handle-btn">取消订单</button>
					</div>
					<div class="payment handle-wrap-item">
						<button class="handle-btn">付款</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'AwaitPay',
		data(){
			return{
				awaitPayList: []
			}
		},
		methods:{
			findOrderPay(){  //订单查询
				let data = {
					pageNum: 1,
					pageSize: 10,
					ostatus: 2
				}
				this.$api.order.findOrderPay(data)
				.then(res=>{
					console.log(res)
					if(res.message == "查询成功"){
						this.awaitPayList = res.data.list
					}
				})
			}
		},
		created() {
			this.findOrderPay()
		}
	}
</script>

<style scoped>
	#await-pay{
		position: fixed;
		top: 100px;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: #F7EFFF;
	}
	
	.content{
		width: 100%;
		margin-top: 10px;
	}
	
	.await-pay-item{
		width: 94%;
		background-color: #ffffff;
		margin: 0 auto;
		margin-bottom: 20px;
		border-radius: 15px;
	}
	.store-wrap{
		width: 95%;
		margin: 0 auto;
		height: 50px;
		display: flex;
		justify-content: space-between;
		line-height: 50px;
		font-weight: 600;
		font-size: 1.4rem;
		display: flex;
	}
	.store-info{
		display: flex;
	}
	.store-icon{
		width: 30px;
		height: 30px;
		margin-top: 10px;
		border-radius: 50%;
		overflow: hidden;
	}
	.store-icon > img{
		height: 100%;
		width: 100%;
	}
	.store-name{
		display: inline-block;
		margin-left: 10px;
	}
	.order-title{
		width: 60px;
		text-align: right;
	}
	.await-pay-text{
		color: #F30213;
		font-weight: 400;
	}
	
	.good-wrap{
		width: 95%;
		margin: 0 auto;
	}
	.good-info{
		display: flex;
		height: 80px;
	}
	.good-img{
		width: 80px;
		height: 80px;
	}
	.good-img > img{
		width: 100%;
		height: 100%;
	}
	.good-detail{
		flex: 1;
		margin-left: 10px;
	}
	.good-name{
		height: 50px;
		font-size: 1.4rem;
		color: #666666;
		line-height: 25px;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.good-money-wrap{
		display: flex;
		justify-content: space-between;
		height: 30px;
		line-height: 30px;
		color: red;
		font-size: 1.3rem;
		font-weight: 600;
	}
	.good-money{

	}
	.fencheng-text{
		font-size: 1.6rem;
	}
	.good-other{
		color: #666666;
		font-size: 1.4rem;
	}
	.good-num{
		height: 30px;
		line-height: 30px;
		text-align: right;
		
	}
	.good-wuliu{
		width: 95%;
		margin: 0 auto;
		height: 40px;
		line-height: 40px;
		text-align: right;
		color: #666666;
		font-size: 1.4rem;
	}
	.handle-wrap{
		height: 60px;
		display: flex;
	}

	.handle-wrap-item{
		width: 90px;
		border-radius: 15px;
		height: 30px;
		margin: auto 5px;
		line-height: 30px;
		overflow: hidden;
		text-align: center;
		border: 0.5px solid #666666;
		background-color: #ffffff;
	}
	.handle-btn{
		padding: 5px;
		outline: none;
		border: none;
		background-color: #ffffff;
	}
	.change-address{
		margin-left: 80px;
	}
</style>
