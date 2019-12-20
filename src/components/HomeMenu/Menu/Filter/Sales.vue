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
				goodList: [],
				other: ''
			}
		},
		components: {
			GoodList
		},
		methods: {
			getSales() {
				var data = {}
				console.log(this.other)
				if(this.other == 'saleHot'){
					data = {
						flag: "saleHot",
						pageNum: 1,
						pageSize: 20,
						orderType: 'desc',
						orderField: 'saleNum'
					}
				}else if(this.other == 'recommendNew'){
					data = {
						flag: "recommendNew",
						pageNum: 1,
						pageSize: 20,
						orderType: 'desc',
						orderField: 'saleNum'
					}
				}else {
					data = {
						flag: "selectGoods",
						pageNum: 1,
						pageSize: 20,
						orderType: 'desc',
						orderField: 'saleNum',
						other: this.other
					}
				}
				this.$api.goods.searchGoods(data).then(res => {
					console.log(res)
					if (res.message == '查询成功') {
						this.goodList = res.data.list;
					}
				})
			}
		},
		created() {
			this.other = this.$store.getters.getMenuId
			this.getSales()
		}
	}
</script>
<style scoped>

</style>
