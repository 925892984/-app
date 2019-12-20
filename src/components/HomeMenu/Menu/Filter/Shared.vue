<template>
	<div class="shared">
		<good-list :goodList="goodList"></good-list>
	</div>
</template>
<script>
	import GoodList from '@/components/GoodList'
	export default {
		name: 'Shared',
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
			getShared() {
				var data = {}
				if(this.other == 'saleHot'){
					data = {
						flag: "saleHot",
						pageNum: 1,
						pageSize: 20,
						orderType: 'desc',
						orderField: 'goodsFenChengPrice'
					}
				}else if(this.other == 'recommendNew'){
					data = {
						flag: "recommendNew",
						pageNum: 1,
						pageSize: 20,
						orderType: 'desc',
						orderField: 'goodsFenChengPrice'
					}
				}else {
					data = {
						flag: "selectGoods",
						pageNum: 1,
						pageSize: 20,
						orderType: 'desc',
						orderField: 'goodsFenChengPrice',
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
			this.getShared()
		}
	}
</script>
<style scoped>

</style>
