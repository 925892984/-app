<template>
	<div id="selectGoods">
		<header id="header">
			<a href="http://localhost:8080/home" class="back-wrap">
				<i class="iconfont icon-fanhui back"></i>
			</a>
			<h4 class="title">特色美食</h4>
		</header>
		<div class="good-sort">
			<router-link to="/selectGoods/sales" tag="div" class="good-sort-item">销量</router-link>
			<router-link to="/selectGoods/shared" tag="div" class="good-sort-item">分成</router-link>
			<router-link to="/selectGoods/price" tag="div" class="good-sort-item">价格</router-link>
		</div>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>
<script>
	export default {
		name: 'selectGoods'
	}
</script>
<style scoped>
	header {
		height: 5rem;
		background: #f30213;
		width: 100%;
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


	.good-sort {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.good-sort-item {
		width: 30%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		color: #000000;
		font-size: 1.6rem;
		font-weight: 600;
	}

	.good-sort-item.router-link-active {
		color: #ce1010;
	}
</style>
