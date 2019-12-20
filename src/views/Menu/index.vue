<template>
	<div id="menu">
		<header>
			<div class="menu-title">
				<h4>商品分类</h4>
			</div>
			<div class="search-wrap">
				<div class="menu-input-wrap" @click="enterSearch()">
					<i class="iconfont icon-sousuo icon"></i>
					<input type="text" class="menu-search" placeholder="请输入搜索内容">
				</div>
			</div>
		</header>
		<div class="main">
			<div class="menu-list" ref="menuList">
				<div>
					<router-link v-for="item in menuList" :key="item.id" :to="'/menu/item/' + item.id" tag="button" class="menu-btn">
						{{item.name}}
					</router-link>
				</div>
			</div>
			<router-view :key="$route.fullPath"></router-view>
		</div>
		<Navbar></Navbar>
	</div>
</template>

<script>
	import Navbar from '@/components/Navbar/index.vue'
	import BScroll from 'better-scroll'
	export default {
		name: 'Menu',
		data() {
			return {
				menuList: [],
				menuScroll: {},
				mainScroll: {}
			};
		},
		components: {
			Navbar
		},
		methods: {
			getMenu() { //查询一级类目
				var Menus = window.localStorage.getItem('menuList') ? JSON.parse(window.localStorage.getItem('menuList')) : [];
				if (this.menuList == Menus) {
					return
				}
				let data = {

				}
				this.$api.goods.goodsMenu(data).then(res => {
					// let data = res.data
					if (res.message == "查询成功") {
						this.menuList = res.data
						window.localStorage.setItem('menuList', JSON.stringify(res.data))
						this.active = res.data[0].id
					}
				})
			},
			enterSearch() { //进入搜索页
				this.$router.push('/searchGood')
			},
			initScroll() { //滑动
				this.menuScroll = new BScroll(this.$refs.menuList, {
					click: true
				})
				// 				this.mainScroll = new BScroll(this.$refs.main, {
				// 					click: true
				// 				})
			}
		},
		created() {
			this.getMenu()
		},
		mounted() {
			this.$nextTick(() => {
				this.initScroll()
			})
		}
	};
</script>

<style scoped>
	#menu {
		background: #7F7F7F;
		font-size: 1.6rem;
		font-weight: 500;
		color: #000000;
	}

	header {
		width: 100%;
		height: 50px;
		display: flex;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 101;
		background: #f30213;
	}

	header .menu-title {
		width: 120px;
		line-height: 50px;
		text-align: center;
		color: #ffffff;
		font-size: 2.0rem;
		font-weight: 800;
	}

	header .search-wrap {
		flex: 1;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.menu-input-wrap {
		position: relative;
		width: 90%;
		overflow: hidden;
		border-radius: 5px;
		height: 35px;
		box-sizing: border-box;
	}

	.menu-input-wrap i.icon {
		color: #666666;
		display: inline-block;
		position: absolute;
		left: 5px;
		top: 5px;
		font-weight: 600;
		font-size: 2.2rem;
	}

	.menu-search {
		width: 100%;
		height: 30px;
		border: none;
		outline: none;
		padding: 2.5px 0 2.5px 30px;
		color: #7F7F7F;
		font-size: 1.4rem;
	}

	.main {
		margin-top: 50px;
		width: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
	}

	.main .menu-list {
		position: absolute;
		top: 0;
		left: 0;
		width: 100px;
		bottom: 50px;
		background-color: #000088;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		background-color: #ffffff;
		margin-top: 20px;
		/* overflow: hidden; */
	}

	.menu-list .menu-btn {
		width: 100%;
		height: 40px;
		border: none;
		outline: none;
		background-color: #ffffff;
		padding: 0;
		font-size: 1.6rem;
		font-weight: 500;
		box-sizing: border-box;
	}

	.menu-btn.router-link-active {
		border: 0.5px solid red;
		border-left: 3px solid red;
		color: red;
	}
</style>
