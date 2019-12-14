<template>
	<div>
		<div id="good-sort">
			<router-link to="/searchResult/sales" tag="div" class="good-sort-item">销量</router-link>
			<router-link to="/searchResult/shared" tag="div" class="good-sort-item">分成</router-link>
			<router-link to="/searchResult/price" tag="div" class="good-sort-item">价格</router-link>	
		</div>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>

</template>
<script>
	export default {
		name: "GoodSort"
	};
</script>
<style scoped>
	#good-sort {
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
