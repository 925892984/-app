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
				this.$axios({
					url: "goods/searchGoods",
					method: "post",
					data: {
						flag: "homeSearch",
						pageNum: 1,
						pageSize: 20,
						orderType : 'desc',
						orderField : 'goodsPrice',
						other: this.$store.state.searchMsg
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
						"Content-Type": "application/x-www-form-urlencoded"
					}
				}).then(res => {
					let data = res.data;
					if (data.message == '查询成功') {
						this.goodList = data.data.list;
					}
				});
			}
		},
		created() {
			this.getPrice()
		},

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
