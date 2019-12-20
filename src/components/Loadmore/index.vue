<template>
	<div class="loadmore" style="margin-bottom:80px;overflow:scroll;">
		<!-- overflow:scroll;该样式必须写，否则会持续向后端请求数据 
            :auto-fill='false':表示当没有滑动到底部时不加载，一般手机端写，这样可以防止上拉就请求数据
        -->
		<mt-loadmore :bottom-method="loadMore" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore"
		 :auto-fill='false'>
			<div class="container">
				<div class="hotShop-wrap">
					<div class="shop-item" v-for="(item,index) in list" :key="index">
						<div @click.prevent="intoDetail(item.goodsId)">
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
						</div>
					</div>
				</div>
			</div>
		</mt-loadmore>
	</div>
</template>
<script> 
	export default {
		name: 'loadmore',
		data() {
			return {
				list: [],
				allLoaded: false, //false：加载未完成,可以继续加载；true：加载完成，不能继续加载
				bottomStatus: '',
				loading: false,
				page: 1,
			}
		},
		beforeMount() {
			// Indicator.open('数据加载中');
		},
		created() {
			this.init() //创建页面时先获取page = 1 的数据
			// this.loadMore(); //创建页面时先获取page = 1 的数据    更新
		},
		methods: {
			/**
			 * :bottom-methos 手指上滑动触发 - 加载更多事件
			 *  */
			init() {
				this.$http.post('goods/searchGoods', {
					flag: "recommend",
					pageNum: 1,
					pageSize: 20
				}).then(res => {
					if (res.code == 200) {
						this.list = [...this.list, ...res.data.list];
						this.page++;
						if (res.data.list.length < 20) {
							this.$toast({
								message: '没有更多数据了'
							})
						}
					}
				}).catch(err => {
					console.log(err);
				})
			},
			loadMore() {
				console.log("请求数据了");
				this.allLoaded = true; // 若数据已全部获取完毕，不允许在继续加载
				// setTimeout(() => {
				//请求接口需要传参accessToken和page(当前page页的数据),accessToken我是在登录的时候存在了localStorage中,此时获取出来
				// let token = window.localStorage.getItem('token');
				this.$http.post('goods/searchGoods', {
					flag: "recommend",
					pageNum: this.page,
					pageSize: 20
				}).then(res => {
					if (res.code == 200) {
						// Indicator.close() ;
						/**
						 * 将新获取的数据拼接在list上,将page加一，这样在向下滑动时 获取的就是page = page + 1页的数据
						 * 当res.data.dataList.length = 0 时,说明没有获取到数据，提示(其实这样是多请求了一次,只是获取的数据为空)
						 * 如果后端可以把每页返回的条数pageCount返回,比如每页返回5条数据
						 * 那么可以判断获取的数据的res.data.dataList.length < pageCount，说明这次获取的数据不足5条，那么下一页肯定是没有数据的，就不允许再次获取数据了，这样就减少了一次请求
						 */
						this.list = [...this.list, ...res.data.list];
						this.page++;
						if (res.data.list.length < 20) {
							this.$toast({
								message: '没有更多数据了'
							})
						}
					}
					this.$refs.loadmore.onBottomLoaded();
					// console.log(this.$refs)
					this.allLoaded = false;
				}).catch(err => {
					console.log(err);
				})
				// },2500)
			},
			handleBottomChange(status) {
				this.bottomStatus = status;
			},
			intoDetail(id) {
				this.$router.push('/detail/' + id)
			}
		}
	}
</script>

<style scoped>
	.container {
		width: 95%;
		margin: 0 auto;
		position: relative;
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
