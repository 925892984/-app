<template>
	<footer id="footer">
		<ul class="navbarWrap">
			<router-link tag="li" class="navbar-item" to="/home">
				<i class="iconfont icon-shouye"></i>
				<p class="icon-text">首页</p>
			</router-link>
			<router-link tag="li" class="navbar-item" to="/new">
				<i class="iconfont icon-liwu"></i>
				<p class="icon-text">新品</p>
			</router-link>
			<router-link tag="li" class="navbar-item" to="/menu">
				<i class="iconfont icon-fenlei"></i>
				<p class="icon-text">分类</p>
			</router-link>
			<router-link tag="li" class="navbar-item" to="/shopCar">
				<i class="iconfont icon-gouwuchekong"></i>
				<p class="icon-text">购物车</p>
			</router-link>
			<router-link tag="li" class="navbar-item" to="/mine" v-if="isLogin">  
				<i class="iconfont icon-gerenzhongxin"></i>
				<p class="icon-text">个人中心</p>
			</router-link>
			<a href="http://localhost:8080/login" class="navbar-item" v-else>
				<i class="iconfont icon-gerenzhongxin"></i>
				<p class="icon-text">个人中心</p>
			</a>
		</ul>
	</footer>
</template>

<script>
	export default {
		name: 'Navbar',
		data(){
			return {
				isLogin: false
			}
		},
		created(){
			if(window.localStorage.getItem('token') == 'null'){
				this.isLogin = false
			}else{
				this.isLogin = true
			}
		},
		methods:{
// 			isLogin(){
// 				return this.$store.state.isLogin
// 			}
		}
	}
</script>

<style scoped>
#footer{
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 5.0rem;
}
.navbarWrap{
	display: flex;
	justify-content: space-around;
	height: 100%;
	align-items: center;
	background: #ffffff;
}
.navbar-item{
	flex: 1;
	text-align: center;
	color: #666666;
}
.navbarWrap .router-link-active{
	color: #F30213;
}
.navbar-item i.iconfont{
	display: inline-block;
	font-size: 2rem;
	font-weight: 600;
}
.navbar-item p.icon-text{
	font-size: 1rem;
	font-weight: 200;
}
</style>
