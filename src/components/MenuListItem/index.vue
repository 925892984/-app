<template>
	<div class="menu-list-item" ref="itemWrap">
		<div class="secondMenuWrap">
			<div class="menu-item-wrap">
				<div class="menu-item" v-for="item in menuListItem" :key="item.id">
					<div class="itemImg-Wrap">
						<img :src="item.img" alt="">
					</div>
					<span class="item-text">
						{{item.name}}
					</span>
				</div>
			</div>
			<div class="menu-good-wrap">
				<div class="good-item" v-for="item in goods" :key="item.id">
					<div class="goodImg-wrap">
						<img :src="item.goodsImg " alt="">
					</div>
					<div class="good-name">
						<span>{{item.goodsTitle }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: "MenuListItem",
		data() {
			return {
				menuListItem: [],
				goods: [],
				scroll: {}
			};
		},
		methods: {
			infoBScroll() {
				this.scroll = new BScroll(this.$refs.itemWrap, {
					tap: true,
					probeType: 1,
					click: true
				});
			},
			getmsg() {
				let data = {
					pageNum: 1,
					pageSize: 20,
					pid: this.$route.params.pid
				}
				this.$api.goods.goodsMenu(data).then(res => {
					if (res.message == "查询成功") {
						this.menuListItem = res.data
					}
				})
				let msg = {
					pageNum: 1,
					pageSize: 20,
					pid: this.$route.params.pid
				}
				this.$api.goods.getGoods(msg).then(res => { //通过pid查询类目下的商品
					if (res.message == "查询成功") {
						this.menuGoods = res.data.goods.list
					}
				})
			}
		},
		created() {
			this.getmsg()
			this.$nextTick(() => {
				this.infoBScroll()
			})

		}
	};
</script>

<style scoped>
	.menu-list-item {
		position: absolute;
		top: 0;
		left: 100px;
		right: 0;
		bottom: 50px;
		background-color: #F7EFFF;
	}

	.menu-item-wrap {
		width: 95%;
		margin: 0 auto;
		margin-top: 10px;
		border-radius: 10px;
		background-color: #ffffff;
		display: flex;
		flex-wrap: wrap;
		overflow: hidden;
	}

	.menu-item {
		width: 33.33%;
		margin: 10px 0;
	}

	.itemImg-Wrap {
		width: 50px;
		margin: 0 auto;
	}

	.itemImg-Wrap>img {
		width: 100%;
		height: 100%;
	}

	.item-text {
		display: inline-block;
		padding-top: 10px;
		width: 100%;
		text-align: center;
		font-weight: 500;
		font-size: 1.6rem;
	}
</style>
