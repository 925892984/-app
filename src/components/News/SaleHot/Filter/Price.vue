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
				goodList: []
			}
		},
		components: {
			GoodList
		},
		methods: {
			getPrice() {
				let data = {
					flag: "saleHot",
					pageNum: 1,
					pageSize: 20,
					orderType: 'desc',
					orderField: 'goodsPrice'
				}
				this.$api.goods.searchGoods(data).then(res => {
					if (res.message == '查询成功') {
						this.goodList = res.data.list;
					}
				});
			}
		},
		created() {
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
