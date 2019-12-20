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
				goodList: []
			}
		},
		components: {
			GoodList
		},
		methods: {
			getShared() {
				let data = {
					flag: "recommendNew",
					pageNum: 1,
					pageSize: 20,
					orderType: 'desc',
					orderField: 'goodsFenChengPrice'
				}
				this.$api.goods.searchGoods(data).then(res => {
					if (res.message == '查询成功') {
						this.goodList = res.data.list;
					}
				});
			}
		},
		created() {
			this.getShared()
		}
	}
</script>
<style scoped>

</style>
