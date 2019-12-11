<template>
	<div id="mine">
		<Header title="我的"></Header>
		<div class="main">
			<div class="userBox">
				<div class="user-info-wrap container">
					<div class="user-info-left">
						<div class="userIcon-wrap">
							<img :src="userInfo.headImg" alt="">
						</div>
						<div class="userName">
							<span class="nickname">勇敢的小强</span>
						</div>
					</div>
					<div class="user-info-right">
						<span class="setting" @click="set()">设置</span>
						<div class="service">
							<i class="iconfont icon-kefu"></i>
						</div>
					</div>
				</div>
				<div class="user-record">
					<div class="myCollect-wrap user-record-item">
						<div class="number">{{userInfo.collectionCount}}</div>
						<div class="my-text">我的收藏</div>
					</div>
					<div class="myAttention-wrap user-record-item">
						<div class="number">{{userInfo.attentionCount}}</div>
						<div class="my-text">我的关注</div>
					</div>
					<div class="myHistory-wrap user-record-item">
						<div class="number">{{userInfo.footmarkCount}}</div>
						<div class="my-text">浏览记录</div>
					</div>
					<div class="myFencheng-wrap user-record-item">
						<div class="number">{{userInfo.divideCount}}</div>
						<div class="my-text">分成详情</div>
					</div>
				</div>
			</div>
			<div class="commodityBox">
				<router-link class="commodityBox-item" tag="div" to="/myOrder/awaitPay">
					<div class="commodityBox-item-icon iconfont icon-daifukuan"></div>
					<div class="text">待付款</div>
				</router-link>
				<router-link class="commodityBox-item" tag="div" to="/myOrder/awaitGoods">
					<div class="commodityBox-item-icon iconfont icon-daifahuo"></div>
					<div class="text">待发货</div>
				</router-link>
				<router-link class="commodityBox-item" tag="div" to="/myOrder/awaitTakeGoods">
					<div class="commodityBox-item-icon iconfont icon-daishouhuo"></div>
					<div class="text">待收货</div>
				</router-link>
				<div class="commodityBox-item">
					<div class="commodityBox-item-icon iconfont icon-tuikuan"></div>
					<div class="text">退款/售后</div>
				</div>
			<!-- <my-order></my-order> -->
			</div>
			<div class="myWallet">
				<div class="myWalet-title myWallet-item">
					<span class="myWallet-icon iconfont icon-wodeqianbao"></span>
					<p class="myWallet-text wide-size">我的钱包</p>
				</div>
				<div class="fencheng myWallet-item">
					<span class="fencheng-icon iconfont icon-qian"></span>
					<p class="myWallet-text">分成总额</p>
					<span class="moneyNum">￥{{userInfo.divideInto}}</span>
				</div>
				<div class="balance myWallet-item">
					<span class="balance-icon iconfont icon-yue"></span>
					<p class="myWallet-text">余额</p>
					<span class="moneyNum">￥{{userInfo.surplusPrice}}</span>
				</div>
			</div>
			<div class="remind">
				<p class="remind-title">*贴士小服务提醒您：</p>
				<span class="remind-detail">钱包只可以提现不可以充值，此处的余额是指所获得的分成中提现后剩下的余额</span>
			</div>
			<div class="fencheng-ad2">
				<img src="@/assets/image/ad02.png" alt="">
			</div>
			<div class="fencheng-ad3">
				<img src="@/assets/image/ad03.png" alt="">
			</div>
		</div>
		<Navbar></Navbar>
		<router-view name="set" />
		<router-view></router-view>
	</div>
</template>

<script>
	import Header from '@/components/Header/index.vue'
	import Navbar from '@/components/Navbar/index.vue'
	// import MyOrder from '@/components/MyOrder/index.vue'
	export default {
		name: 'Mine',
		data() {
			return {
				userInfo: {}
			}
		},
		components: {
			Header,
			Navbar,
			// MyOrder

		},
		methods: {
			set() {
				this.$router.push('/set')
			},
			getUserInfo() {
				this.$axios({
					url: "sms/getUserByUserId",
					method: "post",
					data: {
						userId: window.localStorage.getItem('userId'),
					},
					transformRequest: [
						function(data) {
							let ret = "";
							for (let key in data) {
								ret +=
									encodeURIComponent(key) +
									"=" +
									encodeURIComponent(data[key]) +
									"&";
							}
							return ret;
						}
					],
					headers: {
						"Authorization": "Bearer " + window.localStorage.getItem('token')
					}
				}).then(res => {
					console.log(res)
					let data = res.data;
					if (data.message == "查询成功") {
						this.userInfo = data.data;
					}
				});
			}
		},
		created() {
			this.getUserInfo()
		}

	}
</script>

<style scoped>
	.main {
		width: 100%;
		margin-top: 50px;
		font-size: 1.4rem;
		position: relative;
		background-color: #f7Efff;
	}

	.container {
		width: 90%;
		margin: 0 auto;
	}

	.userBox {
		width: 100%;
		background-color: #F30213;
		height: 180px;
		border-bottom-right-radius: 30px;
		border-bottom-left-radius: 30px;
		overflow: hidden;
		color: #ffffff;
		font-size: 1.8rem;
		font-weight: 500;
	}

	.user-info-wrap {
		display: flex;
		justify-content: space-between;
		/* align-items: center; */
	}

	.user-info-left {
		flex: 1;
		height: 60px;
		line-height: 60px;
	}

	.user-info-right {
		width: 80px;
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.userIcon-wrap {
		border-radius: 50%;
		overflow: hidden;
		display: inline-block;
		width: 60px;
		height: 60px;
	}

	.userIcon-wrap>img {
		width: 100%;
		height: 100%;
	}

	.userName {
		display: inline-block;
		margin-left: 20px;
		height: 60px;
	}

	.nickname {
		display: inline-block;
		width: 80px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.service {}

	.icon-kefu {
		font-size: 2.0rem;
		font-weight: 600;
	}

	.user-record {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 80px;
		font-size: 1.4rem;
		font-weight: 400;
	}

	.user-record-item {
		width: 20%;
		text-align: center;
	}

	.my-text {
		margin-top: 5px;
	}

	.commodityBox {
		height: 80px;
		width: 90%;
		margin: 0 auto;
		position: absolute;
		top: 140px;
		left: 5%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #ffffff;
		border-radius: 20px;
	}

	.commodityBox-item {
		width: 20%;
		text-align: center;
	}

	.commodityBox-item-icon {
		width: 40px;
		height: 40px;
		margin: 0 auto;
		border-radius: 50%;
		background-color: orange;
		line-height: 40px;
		text-align: center;
		font-size: 2.0rem;
		color: #ffffff;
	}

	.commodityBox-item .text {
		margin-top: 5px;
		font-size: 1.2rem;
	}

	.myWallet {
		width: 90%;
		margin: 0 auto;
		margin-top: 60px;
		background-color: #ffffff;
		border-radius: 15px;
		color: #CE1010;
	}

	.myWallet-item {
		height: 50px;
		line-height: 50px;
		position: relative;
	}

	.myWallet-text {
		display: inline-block;
		margin-left: 10px;
	}

	.myWallet-item .iconfont {
		display: inline-block;
		margin-left: 10px;
		font-size: 2.0rem;
		font-weight: 500;
	}

	.myWallet-icon {
		font-size: 2.5rem !important;
	}

	.myWallet-item .wide-size {
		color: #000000;
		font-size: 1.8rem;
		font-weight: 600;
	}

	.myWallet .fencheng {
		border-top: 1px solid #f7efff;
		border-bottom: 1px solid #f7efff;
	}

	.myWallet-item .moneyNum {
		position: absolute;
		right: 10px;
		color: #000000;
	}

	.remind {
		width: 90%;
		margin: 0 auto;
		margin-top: 20px;
		background-color: #ffffff;
		color: orange;
		border-radius: 15px;
	}

	.remind-title {
		font-size: 1.8rem;
		font-weight: 600;
		height: 50px;
		line-height: 50px;
		margin-left: 10px;
	}

	.remind-detail {
		display: inline-block;
		height: 60px;
		margin-left: 10px;
		font-size: 1.5rem;
		line-height: 25px;
	}

	.fencheng-ad2 {
		width: 90%;
		margin: 0 auto;
		height: 100px;
		margin-top: 10px;
	}

	.fencheng-ad2>img {
		width: 100%;
		height: 100%;
	}

	.fencheng-ad3 {
		width: 90%;
		margin: 0 auto;
		height: 50px;
		padding-bottom: 70px;
		margin-top: 10px;
	}

	.fencheng-ad3>img {
		width: 100%;
		height: 100%;
	}
</style>
