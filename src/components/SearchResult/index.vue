<template>
	<div id="selectGoods">
		<header id="header">
			<a href="http://localhost:8080/home" class="back-wrap">
				<i class="iconfont icon-fanhui back"></i>
			</a>
			<h4 class="title">搜索结果</h4>
		</header>
		<good-sort></good-sort>
	</div>
</template>
<script>
	import GoodSort from '@/components/GoodSort/index.vue'
	export default {
		name: 'selectGoods',
		data(){
			return {
				goodList: []
			}
		},
		components:{
			GoodSort
		},
		methods:{
			getgoodList(msg){
				let data = {
						flag: "homeSearch",
						pageNum: 1,
						pageSize: 20,
						orderType : 'desc',
						orderField : 'saleNum',
						other : msg
					}
					this.$api.goods.searchGoods(data).then(res => {
					if (res.message == "查询成功") {
						this.goodList = res.data.list;
					}
				});
			}
		},
		created() {
			this.getgoodList(this.$route.query.content)
		}
	}
</script>
<style scoped>
	header {
		height: 5rem;
		background: #f30213;
		width: 100%;
	}

	header .back-wrap {
		position: absolute;
		left: 0;
		top: 0;
		height: 5rem;
		width: 5rem;
		line-height: 5rem;
		text-align: center;
		color: #ffffff;
	}

	header .back {
		font-size: 2rem;
		font-weight: 800;
	}

	header .title {
		display: inline-block;
		height: 5rem;
		width: 100%;
		line-height: 5rem;
		text-align: center;
		font-size: 2rem;
		color: #ffffff;
	}
</style>
