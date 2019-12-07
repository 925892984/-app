<template>
	<div id="menu">
		<header>
			<div class="menu-title">
				<h4>商品分类</h4>
			</div>
			<div class="search-wrap">
				<div class="menu-input-wrap">
					<i class="iconfont icon-sousuo icon"></i>
					<input type="text" class="menu-search" placeholder="请输入搜索内容">
				</div>
			</div>
		</header>
		<div class="main">
			<div class="menu-list">
				<button class="menu-btn" v-for="item in menuList" :key="item.id" @click.prevent="clickMenu(item.id)">{{item.name}}</button>
			</div>
			<div class="menu-list-item">
				<mt-tab-container v-model="active" class="menu-tab-container">
					<mt-tab-container-item :id="menuId">
						<!-- <mt-cell> -->
							<div class="menuBox">
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
									<div class="good-item" v-for="item in menuGoods" :key="item.id">
										<div class="goodImg-wrap">
											<img src="" alt="">
										</div>
										<div class="good-name">
											<span></span>
										</div>
									</div>	
								</div>
							</div>		
						<!-- </mt-cell> -->
					</mt-tab-container-item>
				</mt-tab-container>
			</div>			
		</div>
		<Navbar></Navbar>
	</div>
</template>

<script>
	import Navbar from '@/components/Navbar/index.vue'
	export default {
		name: 'Menu',
		data() {
			return {
				menuList: [],
				active: null,
				menuId: null,
				menuListItem: [],
				menuGoods: []
			}
		},
		components: {
			Navbar
		},
		methods: {
			getMenu() {
				var Menus = window.localStorage.getItem('menuList') ? JSON.parse(window.localStorage.getItem('menuList')) : [];
				if (this.menuList == Menus) {
					return
				}
				this.$axios({
						url: 'goods/goodsMenu',
						method: 'post',
						data: {

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
					})
					.then(res => {
						console.log(res)
						let data = res.data
						console.log(data.message)
						if (data.message == "查询成功") {
							this.menuList = data.data
							window.localStorage.setItem('menuList', JSON.stringify(data.data))
							this.active = data.data[0].id
						}
					})
			},
			clickMenu(id) {
				this.active = id
				this.menuId = id
				this.$axios({
						url: '/goods/getGoods',
						method: 'post',
						data: {
							pageNum:1,
							pageSize: 20,
							pid: id
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
					})
					.then(res => {
						console.log(res)
						let data = res.data
						if (data.message == "查询成功") {
							this.menuListItem = data.data.category
							this.menuGoods = data.data.goods.list
						}
					})
			}
		},
		created() {
			this.getMenu();
		}
	}
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
		display: flex;
		background: #ffffff;
	}
	.main .menu-list{
		width: 100px;
		background-color: #000088;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		background-color: #ffffff;
		margin-top: 20px;
	}
	.main .menu-list-item{
		flex: 1;
		background: #f7Efff;
	}
	
	.menu-list .menu-btn{
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
	.menu-list .menu-btn:hover{
		border: 0.5px solid red;
		border-left: 3px solid red;
		color: red;
	}
	.menu-tab-container{
		margin-top: 10px;	
	}
	.menuBox{
		padding: 0 10px;
	}
	.menu-list-item .menu-item-wrap{
		width: 100%;
		background-color: #ffffff;
		border-radius: 10px;
		overflow: hidden;
		display: flex;
		flex-wrap: wrap;
	}
	.menu-item-wrap .menu-item{
		margin-bottom: 20px;
		width: 33.33%;
	}
	.itemImg-Wrap{
		width: 50px;
		margin: 0 auto;
	}
	.itemImg-Wrap > img{
		width: 100%;
		height: 100%;
	}
	.item-text{
		display: inline-block;
		padding-top: 10px;
		width: 100%;
		text-align: center;
		font-weight: 500;
		font-size: 1.6rem;
	}
	.menu-good-wrap{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-top: 5px;
		margin-bottom: 20px;
		background-color: #ffffff;
	}
	.good-item{
		width: 48%;
	}
	.good-item .goodImg-wrap{
		width: 100px;
		margin: 5px auto;
	}
	.goodImg-wrap > img{
		width: 100%;
		height: 100%;
	}
	
	
</style>
