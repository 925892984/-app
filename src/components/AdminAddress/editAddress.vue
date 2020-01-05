<template>
	<div id="edit-address">
		<header id="header">
			<span class="back-wrap" @click="()=>{this.$router.back()}">
				<i class="iconfont icon-fanhui back"></i>
			</span>
			<h4 class="title">修改收货地址</h4>
		</header>
		<div class="main">
			<from class="wrap">
				<div class="inputWrap">
					<input type="text" class="input-item" v-model="address.name">
					{{address.name}}
					<span class="iconfont icon-gerenzhongxin newAdderss-icon"></span>
				</div>
				<div class="inputWrap">
					<input type="text" class="input-item" v-model="address.phone">
				</div>
				<div class="inputWrap">
					<input type="text" class="input-item" v-model="address.address.district">
					<span class="iconfont icon-fenlei newAdderss-icon"></span>
				</div>
				<div class="inputWrap">
					<input type="text" class="input-item" v-model="address.address.street">
				</div>
			</from>
			<div class="btnWrap">
				<button class="sure" @click="editaddress()">确认修改</button>
			</div>
		</div>
	</div>
</template>

<script scoped>
	export default {
		name: 'EditAddress',
		data(){
			return {
				address: {}
			}
		},
		methods:{
			editaddress(){
				let data = {
					name: this.address.name,
					phone: this.address.phone,
					address: JSON.stringify(this.address.address),
					addId: this.address.addId
				}
				this.$api.address.editaddress(data)
				.then((res)=>{
					// if(res.message == "更新成功"){
						alert(res.message)
					// }
				})
			}
		},
		created() {
			this.address = this.$route.query
		}
	}
</script>

<style scoped>
	#edit-address {
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
