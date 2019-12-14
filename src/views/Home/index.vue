<template>
	<div id="home">
		<header class="header">
			<div class="container">
				<div class="logo"></div>
				<form class="serchWrap">
					<i class="iconfont icon-sousuo"></i>
					<input type="text" placeholder="请输入搜索内容" class="inputBox" @click="comeSearch()" />
				</form>
			</div>
		</header>
		<div class="main" ref="wrapper">
			<loading v-if="isLoading"></loading>
			<div class="content" v-else>
				<div class="pullDown" v-if="message">
					<loading></loading>
				</div>
				<div class="viewpagerWrap">
					<div class="viewpager container">
						<mt-swipe :auto="4000">
							<mt-swipe-item v-for="item in slideList" :key="item.id">
								<img :src="item.image" alt="轮播图" class="image-item" />
							</mt-swipe-item>
						</mt-swipe>
					</div>
				</div>
				<home-menu></home-menu>
				<router-view name="selectGoods"></router-view>
				<div class="rule" @click="fencheng()">
					<img src="@/assets/image/ad01.png" alt="分成规则" />
				</div>
				<div class="hot">
					<div class="hotWrap">
						<p class="hot-title">
							<img src="@/assets/image/hot.png" alt />
						</p>
						<div class="container">
							<div class="hotShop-wrap">
								<div class="shop-item" v-for="(item,index) in recommendGoods" :key="index">
									<router-link :to="'/detail/'+item.goodsId">
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
			</div>
			<router-view></router-view>
		</div>
		<Navbar></Navbar>
		<router-view name="searchGood" />
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import Navbar from "@/components/Navbar/index.vue"
	import Loading from '@/components/Loading'
	import HomeMenu from '@/components/HomeMenu'
	export default {
		name: "Home",
		data() {
			return {
				slideList: [],
				recommendGoods: [],
				scroll: {},
				message: false,
				isLoading: false
			}
		},
		components: {
			Navbar,
			Loading,
			HomeMenu
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
						this.recommendGoods = data.data.list;
						this.isLoading = false;
					}
				});
			},
			getslideList() {
				//获取轮播图
				let images = JSON.parse(window.localStorage.getItem('slideList'))
				if (images) {
					this.slideList = images
					this.isLoading = false;
				} else {
					this.$axios.get("slide/getIndexSlide").then(res => {
						let data = res.data;
						if (data.message == "查询成功") {
							this.slideList = data.data;
							window.localStorage.setItem('slideList', JSON.stringify(data.data))
							this.isLoading = false;
						}
					});
				}
			},
			comeDetail(id) { //进入商品详情页面
				this.$router.push('/details/' + id)
			},
			comeSearch() { //进入搜索页面
				this.$router.push('/searchGood')
			},
			fencheng() { //进入分成介绍页
				this.$router.push('/fencheng')
			}
		},
		created() {
			this.getslideList();
			this.gethots();
		},
		mounted() {
			this.$nextTick(() => {
				this.scroll = new BScroll(this.$refs.wrapper, {
					tap: true,
					probeType: 1,
					click: true
				});
				this.scroll.on('scroll', (pos) => {
					if (pos.y > 30) {
						this.message = true
					}
				})
				this.scroll.on('touchEnd', (pos) => {
					if (pos.y > 30) {
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
								this.message = false
								setTimeout(() => {
									this.recommendGoods = data.data.list;
									this.message = false
								}, 1000)
							}
						});
					}
				})
			})
		}
	}
</script>

<style scoped>
	header {
		position: fixed;
		top: 0;
		left: 0;
		height: 5rem;
		background: #f30213;
		width: 100%;
		z-index: 1001;
	}

	.container {
		width: 90%;
		margin: 0 auto;
		position: relative;
	}

	.logo {
		display: inline-block;
		height: 3rem;
		width: 3rem;
		background-image: url("../../assets/logo.png");
		background-size: cover;
		background-repeat: no-repeat;
		margin-top: 1rem;
	}

	form.serchWrap {
		position: absolute;
		box-sizing: border-box;
		right: 0;
		top: 1.2rem;
		width: 100%;
		height: 3rem;
		padding-left: 5rem;
	}

	.serchWrap i.iconfont {
		color: #666666;
		display: inline-block;
		position: absolute;
		left: 5.4rem;
		top: 0.5rem;
	}

	.serchWrap input {
		border: none;
		outline: none;
		padding: 0.8rem 0.4rem;
		border-radius: 8px;
		width: 100%;
		padding-left: 2.2rem;
		box-sizing: border-box;
	}

	.pullDown {
		margin: 0;
		padding: 0;
		border: none;
	}

	.main {
		width: 100%;
		height: 500px;
		margin-top: 5rem;
	}

	.main .viewpagerWrap {
		height: 14rem;
		width: 100%;
		box-sizing: border-box;
		background: #f30213;
		border: solid #f30213;
		border-bottom-left-radius: 30px;
		border-bottom-right-radius: 30px;
	}

	.viewpager {
		height: 12rem;
		border-radius: 10px;
		overflow: hidden;
	}

	.image-item {
		width: 100%;
		height: 100%;
	}

	.home-menu {
		width: 100%;
		height: auto;
		background: #ffffff;
		margin-top: 2rem;
	}

	.menuWrap {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}

	.menuWrap .mentItem {
		width: 25%;
		overflow: hidden;
	}

	.mentItem .item-img {
		margin: 0 auto;
		width: 50px;
		height: 50px;
	}

	.mentItem .item-img>img {
		width: 100%;
		width: 100%;
	}

	.menuText {
		height: 30px;
		width: 50px;
		font-size: 1.2rem;
		color: #666666;
		margin: 10px auto 0 auto;
	}

	.rule {
		width: 100%;
		height: auto;
	}

	.rule img {
		width: 99%;
		height: 13rem;
	}

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
