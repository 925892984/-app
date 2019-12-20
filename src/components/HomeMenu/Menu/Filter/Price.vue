<template>
	<div class="price">
		<good-list :goodList="goodList"></good-list>
	</div>
</template>
<script>
	import GoodList from '@/components/GoodList'
	export default {
		name: 'Price',
		data() {
			return {
				goodList: [],
				other: this.$store.getters.getMenuId
			}
		},
		components: {
			GoodList
		},
		methods: {
			getPrice() {
				var data = {}
				if(this.other == 'saleHot'){
					data = {
						flag: "saleHot",
						pageNum: 1,
						pageSize: 20,
						orderType: 'desc',
						orderField: 'goodsPrice'
					}
				}else if(this.other == 'recommendNew'){
					data = {
						flag: "recommendNew",
						pageNum: 1,
						pageSize: 20,
						orderType: 'desc',
						orderField: 'goodsPrice'
					}
				}else {
					data = {
						flag: "selectGoods",
						pageNum: 1,
						pageSize: 20,
						orderType: 'desc',
						orderField: 'goodsPrice',
						other: this.other
					}
				}

				this.$api.goods.searchGoods(data).then(res => {
					console.log(res)
					if (res.message == '查询成功') {
						this.goodList = res.data.list;
					}
				});
			}
		},
		created() {
			this.other = this.$store.getters.getMenuId
			this.getPrice()
		}
	}
</script>
<style scoped>
	.price {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
	}
</style>
