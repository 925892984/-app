<template>
	<div id="saleHot">
		<div class="good-sort">
			<router-link to="/new/saleHot/sales" tag="div" class="good-sort-item">销量</router-link>
			<router-link to="/new/saleHot/shared" tag="div" class="good-sort-item">分成</router-link>
			<router-link to="/new/saleHot/price" tag="div" class="good-sort-item">价格</router-link>
		</div>
		<!-- <good-list></good-list> -->
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>
<script>
	// import GoodList from '@/components/GoodList'
	export default {
		name: "SaleHot",
		data() {
			return {

			}
		},
		components: {
			// GoodList
		}
	};
</script>
<style scoped>
	#saleHot {
		width: 100%;
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
	/* .filter {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.filter-item {
  width: 30%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #000000;
  font-size: 1.6rem;
  font-weight: 600;
}
.filter-item.router-link-active {
  color: #ce1010;
} */
</style>
