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
				let data = {
					flag: "homeSearch",
					pageNum: 1,
					pageSize: 20,
					orderType: 'desc',
					orderField: 'saleNum',
					other: this.$store.state.searchMsg
				}
				this.$api.goods.searchGoods(data).then(res => {
					if (res.message == "查询成功") {
						this.goodList = res.data.list;
					}
				});
			}
		},
		created() {
			this.getSales()
		}
	}
</script>
<style scoped>

</style>
