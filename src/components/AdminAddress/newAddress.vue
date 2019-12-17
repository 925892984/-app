<template>
	<div id="new-address">
		<header id="header">
			<span class="back-wrap" @click="()=>{this.$router.back()}">
				<i class="iconfont icon-fanhui back"></i>
			</span>
			<h4 class="title">新增收货地址</h4>
		</header>
		<div class="main">
			<from class="wrap">
				<div class="inputWrap">
					<input type="text" class="input-item" placeholder="输入收货人姓名">
					<span class="iconfont icon-gerenzhongxin newAdderss-icon"></span>
				</div>
				<div class="inputWrap">
					<input type="text" class="input-item" placeholder="输入收货人手机号">
				</div>
				<div class="inputWrap">
					<input type="text" class="input-item" placeholder="请选择地区">
					<span class="iconfont icon-fenlei newAdderss-icon"></span>
				</div>
				<div class="inputWrap">
					<input type="text" class="input-item" placeholder="请输入街道,小区,楼牌号等">
				</div>
			</from>
			<div class="btnWrap">
				<button class="sure">确认新增</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'NewAddress'
	}
</script>

<style scoped>
	#new-address {
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
	
	.main{
		width: 100%;
		margin-top: 50px;
		background-color: #ffffff;
		overflow: hidden;
	}
	.wrap{
		font-size: 1.6rem;
	}
	.inputWrap{
		position: relative;
		width: 100%;
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #F7EFFF;
	}
	.inputWrap .input-item{
		width: 100%;
		outline: none;
		border: none;
		height: 30px;
		padding: 10px 50px 10px 10px;
	}
	.newAdderss-icon{
		position: absolute;
		right: 30px;
		top: 0;
		color: #F70213;
		font-size: 1.6rem;
	}
	.btnWrap{
		margin-top: 50px;
		width: 100%;
	}
	.sure{
		display: block;
		width: 80%;
		height: 50px;
		color: #ffffff;
		margin: 0 auto;
		border: none;
		outline: none;
		background-color: #F70213;
		font-size: 1.6rem;
	}
</style>
