<template>
	<div ref="goodsDetail"></div>
</template>

<script>
	export default{
		name: 'GoodsDetail',
		created() {
			this.$axios({
				url: "goods/selectGoodsDetail",
				method: "post",
				data: {
					goodsId: this.$route.params.detail_id,
					userId: ""
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
				if (data.message == "查询成功") {
					this.$refs.goodsDetail.innerHTML = data.data.goodsDetail.goodsDetail;
				}
			});
		}
	}
</script>

<style>
</style>
