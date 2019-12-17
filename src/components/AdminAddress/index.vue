<template>
	<div id="admin-address">
		<header id="header">
			<span class="back-wrap" @click="()=>{this.$router.back()}">
				<i class="iconfont icon-fanhui back"></i>
			</span>
			<h4 class="title">详情</h4>
		</header>
		<footer class="footer">
			<div class="btnWrap" @click.prevent="newAddrss()">
				<button class="btn add-address">
					<i class="iconfont icon-tianjiajiahaowubiankuang addIcon"></i>
					新增地址
				</button>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'AdminAddress',
		methods:{
			newAddrss(){
				this.$router.push('/newAdderss')
			}
		}
	}
</script>

<style scoped>
	#admin-address {
		width: 100%;
		background: #F70213;
	}

	header {
		position: fixed;
		top: 0;
		left: 0;
		height: 5rem;
		background: #f30213;
		width: 100%;
		z-index: 1001;
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

	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 50px;
		background-color: #ffffff;
		color: #ffffff;
		font-size: 1.4rem;
		font-weight: 600;
	}

	.btnWrap {
		width: 90%;
		height: 40px;
		margin: auto auto;
		border-radius: 5px;
		overflow: hidden;
	}

	.add-address {
		width: 100%;
		height: 100%;
		outline: none;
		border: none;
		text-align: center;
		line-height: 40px;
		color: #ffffff;
		background-color: #F30213;
	}

	.addIcon {
		font-size: 1.6rem;
	}
</style>
