<template>
	<div class="sales">
		<good-list :goodList="goodList"></good-list>
	</div>
</template>
<script>
	import GoodList from '@/components/GoodList'
	export default {
		name: 'Sales',
		data() {
			return {
				goodList: []
			}
		},
		components: {
			GoodList
		},
		methods: {
			getSales() {
				this.$axios({
					url: "goods/searchGoods",
					method: "post",
					data: {
						flag: "saleHot",
						pageNum: 1,
						pageSize: 20,
						orderType: 'desc',
						orderField: 'saleNum'
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
				})
			}
		},
		created() {
			this.getSales()
		}
	}
</script>
<style scoped>

</style>
