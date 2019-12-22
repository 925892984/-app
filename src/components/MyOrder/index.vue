<template>
	<div id="myOrder">
		<header id="header">
			<span to="/" class="back-wrap" @click="()=>{this.$router.push('/mine')}">
				<i class="iconfont icon-fanhui back"></i>
			</span>
			<h4 class="title">我的订单</h4>
		</header>
		<div>
			<div class="order-menu">
				<router-link to="/myOrder/all" tag="div" class="order-item">全部</router-link>
				<router-link to="/myOrder/awaitPay" tag="div" class="order-item">待付款</router-link>
				<router-link to="/myOrder/awaitGoods" tag="div" class="order-item">待发货</router-link>
				<router-link to="/myOrder/awaitTakeGoods" tag="div" class="order-item">待收货</router-link>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "MyOrder",
		data() {
			return {
				
			};
		}
	};
</script>

<style scoped>
	#myOrder {
		width: 100%;
		overflow: hidden;
		background: #f7Efff;
	}

	header {
		position: fixed;
		height: 50px;
		background: #f30213;
		width: 100%;
		z-index: 1001;
		top: 0;
		left: 0;
	}

	header .back-wrap {
		position: absolute;
		left: 0;
		top: 0;
		height: 5rem;
		width: 5rem;
		line-height: 5rem;
		text-align: center;
		color: #ffffff;
	}

	header .back {
		font-size: 2rem;
		font-weight: 800;
	}

	header .title {
		display: inline-block;
		height: 5rem;
		width: 100%;
		line-height: 5rem;
		text-align: center;
		font-size: 2rem;
		color: #ffffff;
	}
	.order-menu {
		margin-top: 50px;
		background-color: #ffffff;
		height: 50px;
		display: flex;
		align-items: center;
		font-size: 1.4rem;
	}
	
	.order-item {
		flex: 1;
		text-align: center;
	}
	.router-link-active{
		color: red;
		font-size: 1.6rem;
	}
</style>
