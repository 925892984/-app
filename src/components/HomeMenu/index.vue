<template>
	<div id="home-menu">
		<div class="menuWrap" @click.prevent="setMenuTitle($event)">
			<router-link to="/homeMenu" tag="div" class="mentItem" >
				<div class="item-img">
					<img src="@/assets/image/01.png" alt class="imgItem"/>
				</div>
				<p class="menuText">特色美食</p>
			</router-link>
			<router-link to="/homeMenu" tag="div" class="mentItem" >
				<div class="item-img">
					<img src="@/assets/image/02.png" alt class="imgItem"/>
				</div>
				<p class="menuText">居家百货</p>
			</router-link>
			<router-link to="/homeMenu" tag="div" class="mentItem" >
				<div class="item-img">
					<img src="@/assets/image/04.png" alt class="imgItem" />
				</div>
				<p class="menuText">热门爆款</p>
			</router-link>
			<router-link to="/homeMenu" tag="div" class="mentItem" >
				<div class="item-img">
					<img src="@/assets/image/05.png" alt class="imgItem" />
				</div>
				<p class="menuText">数码电器</p>
			</router-link>
			<router-link to="/homeMenu" tag="div" class="mentItem" >
				<div class="item-img">
					<img src="@/assets/image/03.png" alt class="imgItem" />
				</div>
				<p class="menuText">服装穿戴</p>
			</router-link>
			<router-link to="/homeMenu" tag="div" class="mentItem" >
				<div class="item-img">
					<img src="@/assets/image/07.png" alt class="imgItem" />
				</div>
				<p class="menuText">美妆护肤</p>
			</router-link>
			<router-link to="/homeMenu" tag="div" class="mentItem" >
				<div class="item-img">
					<img src="@/assets/image/10.png" alt class="imgItem" />
				</div>
				<p class="menuText">免费送</p>
			</router-link>
			<router-link to="/homeMenu" tag="div" class="mentItem" >
				<div class="item-img">
					<img src="@/assets/image/06.png" alt class="imgItem" />
				</div>
				<p class="menuText">上新推荐</p>
			</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'HomeMenu',
		methods: {
			setMenuTitle(e) {  //将类型名称存储到vuex中
				if(e.target.className == 'mentItem'){
					// console.log(e.target.children[1].innerText)
					this.$store.dispatch('setMenuTitleFun',e.target.children[1].innerText)
				}else if(e.target.className == 'imgItem'){
					// console.log(e.target.parentNode.nextSibling.innerText)
					this.$store.dispatch('setMenuTitleFun',e.target.parentNode.nextSibling.innerText)
				}else{
					// console.log(e.target.innerText)
					this.$store.dispatch('setMenuTitleFun',e.target.innerText)
				}
			}
		}
	}
</script>

<style scoped>
	#home-menu {
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
</style>
