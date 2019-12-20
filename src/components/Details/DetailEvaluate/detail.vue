<template>
	<div ref="goodsDetail"></div>
</template>

<script>
	export default {
		name: 'GoodsDetail',
		created() {
			var data = {
				goodsId: this.$route.params.detail_id,
				userId: ""
			}
			this.$api.goods.selectGoodsDetail(data).then(res => {
				if (res.message == "查询成功") {
					this.$refs.goodsDetail.innerHTML = res.data.goodsDetail.goodsDetail;
				}
			});
		}
	}
</script>

<style>
</style>
