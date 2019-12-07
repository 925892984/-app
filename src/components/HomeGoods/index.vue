<template>
	<div class="hot">
		<div class="hotWrap">
			<p class="hot-title">
				<img src="@/assets/image/hot.png" alt />
			</p>
			<div class="container">
				<div class="hotShop-wrap">
					<div class="shop-item" v-for="(item,index) in recommendGoods" :key="index">
						<router-link :to="'/home/detail/'+item.goodsId">
							<div class="shop-img">
								<img :src="item.goodsImg" alt="商品图片" />
							</div>
							<div class="hot-detail">
								<p class="hotName">{{item.goodsTitle}}</p>
								<div class="hot-other">
									<span class="price">
										<i class="money-symbol">￥</i>
										{{item.goodsPrice}}
									</span>
									<div class="separate">
										<span class="separateText money-symbol">分成￥</span>
										<span class="separateNum">{{item.goodsFenChengPrice}}</span>
									</div>
								</div>
							</div>
						</router-link>
					</div>
					<router-view></router-view>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'HomeGoods',
		data() {
			return {
				recommendGoods: {}
			}
		},
		methods: {
			gethots() {
				//获取首页商品推荐
				this.$axios({
					url: "goods/searchGoods",
					method: "post",
					data: {
						flag: "recommend",
						pageNum: 1,
						pageSize: 20,
						userId: this.userId
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
					if (data.code == 200) {
						this.recommendGoods = data.data.list;
					}
				});
			},
		},
		created() {
			this.gethots()
		}
	}
</script>

<style scoped>
	.hot {
		background: #eeeeee;
		width: 100%;
		height: auto;
		margin-top: 0.5rem;
	}

	.hotWrap {
		font-size: 1.4rem;
		color: #c9b1b1;
	}

	.hotWrap .container {
		width: 98%;
		margin: 0 auto;
		position: relative;
	}

	.hot-title {
		display: inline-block;
		width: 100%;
		height: 20px;
		margin: 15px 0;
	}

	.hot-title>img {
		width: 100%;
		height: 100%;
	}

	.hotShop-wrap {
		display: flex;
		height: auto;
		justify-content: space-between;
		align-content: center;
		flex-wrap: wrap;
	}

	.hotShop-wrap .shop-item {
		display: inline-block;
		width: 49%;
		box-sizing: border-box;
		background: #ffffff;
		overflow: hidden;
		margin-bottom: 10px;
	}

	.shop-img {
		width: 100%;
		overflow: hidden;
	}

	.shop-img>img {
		width: 100%;
		height: 100%;
	}

	.hot-detail {
		width: 100%;
		height: 70px;
		overflow: hidden;
		box-sizing: border-box;
	}

	.hot-detail p.hotName {
		height: 40px;
		line-height: 40px;
		padding-left: 10px;
		color: #000000;
		font-size: 1.4rem;
		font-weight: 600;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.hot-other {
		height: 30px;
		line-height: 30px;
		position: relative;
		color: #f30213;
	}

	.hot-other .price {
		position: absolute;
		left: 10px;
	}

	.hot-other .separate {
		position: absolute;
		display: inline-block;
		right: 10px;
	}

	.money-symbol {
		font-size: 1rem;
	}
</style>
