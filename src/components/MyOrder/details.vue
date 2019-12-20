<template>
	<div id="details"
		<div class="myOrder">
			<div class="order-menu">
				<router-link to="/myOrde/all" tag="div" class="order-item">全部</router-link>
				<router-link to="/myOrde/awaitPay" tag="div" class="order-item">待付款</router-link>
				<router-link to="/myOrde/awaitGoods" tag="div" class="order-item">待发货</router-link>
				<router-link to="/myOrde/awaitTakeGoods" tag="div" class="order-item">待收货</router-link>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Details",
		

	};
</script>

<style scoped>
	#details {
		width: 100%;
		height: 100%;
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

	.myOrder{
		/* margin-top: 50px; */
	}
	.order-menu{
		background-color: #ffffff;
		height: 50px;
		display: flex;
	}
	.order-item{
		flex: 1;
		text-align: center;
	}
</style>
