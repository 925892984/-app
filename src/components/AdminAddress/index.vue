<template>
	<div id="admin-address">
		<header id="header">
			<span class="back-wrap" @click="()=>{this.$router.back()}">
				<i class="iconfont icon-fanhui back"></i>
			</span>
			<h4 class="title">地址管理</h4>
		</header>
		<div class="main">
			<div class="address-item" v-for="item in addressList" :key="item.add_id">
				<div class="address-content">
					<div class="person">
						<span class="user-name">{{item.name}}</span>
						<span class="user-tel">{{item.phone}}</span>
					</div>
					<div class="detail-address">
						<span>{{item.address.district}} {{item.address.street}}</span>
					</div>
				</div>
				<div class="handle">
					<div class="handel-left">
						<input type="radio" name="addresss" class="radio-inp" 
						:data-radio="item.is_default">
						<span>默认地址</span>
					</div>
					<div class="handel-right">
						<div class="edit-address-wrap" @click="editAddress(item.name,item.phone,item.address,item.add_id)">
							<span class="iconfont icon-bianji address-icon"></span>
							<span class="edit">编辑</span>
						</div>
						<div class="delete-address-wrap">
							<span class="iconfont icon-shanchu address-icon"></span>
							<span class="delete">删除</span>
						</div>
					</div>
				</div>
			</div>
		</div>
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

<script scoped>
	export default {
		name: 'AdminAddress',
		data(){
			return {
				addressList: [],
				address: {}
			}
		},
		methods:{
			newAddrss(){
				this.$router.push('/newAdderss')
			},
			getAddressList(){//查询收货地址列表
				let data ={
					userId: window.localStorage.getItem('userId')
				}
				this.$api.address.listaddress(data)
				.then(res=>{
					console.log(res)
					if(res.message == "查询成功"){
						this.addressList = res.data.result
						setTimeout(()=>{
							this.initRadio()
						},1)
						this.addressList.forEach(item=>{
							item.address = JSON.parse(item.address)
							console.log(item.address)
						})
					}
					
				})
			},
			initRadio(){ //初始化默认地址
				let radios = document.querySelectorAll('.radio-inp')
				radios.forEach(item=>{
					if(item.getAttribute('data-radio') == 1){  //是否为默认地址
						item.setAttribute('checked','true')
					}
				})
			},
			editAddress(name,phone,address,addId){
				this.$router.push({path:'/editAddress',query:{
					name:name,
					phone:phone,
					address:address,
					addId: addId
				}})
				
			}
		},
		created() {
			this.getAddressList()
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
	
	.main{
		position: fixed;
		top: 50px;
		bottom: 50px;
		left: 0;
		right: 0;
		background-color: #F7EFFF;
		font-size: 1.6rem;
	}
	
	.address-item{
		margin-bottom: 15px;
		background-color: #fff;
		width: 100%;
	}
	
	.address-content{
		height: 90px;
		width: 100%;
		border-bottom: 1px solid #F7EFFF;
	}
	.address-content .person{
		margin-left: 10px;
		height: 50px;
		line-height: 50px;
	}
	
	.address-content .detail-address{
		margin-left: 10px;
		height: 40px;
		line-height: 30px;
		font-size: 1.4rem;
		font-weight: 200;
		color: #999999;
	}
	
	.person .user-tel{
		display: inline-block;
		margin-left: 10px;
	}
	
	.address-item .handle{
		height: 40px;
		line-height: 40px;
		display: flex;
		justify-content: space-between;
		font-size: 1.4rem;
		font-weight: 400;
		color: #666666;
	}
	
	.handel-left{
		flex: 1;
		margin-left: 10px;
	}
	.radio-inp{
		display: inline-block;
		margin-right: 10px;
	}
	.handel-right{
		width: 120px;
		margin-right: 10px;
		display: flex;
		justify-content: space-between;
	}
	.edit-address-wrap,.delete-address-wrap{
		width: 50px;
		font-size: 1.4rem;
	}
	.address-icon{
		font-size: 1.4rem;
		padding-right: 6px;
	}
	.icon-shanchu{
		font-size: 1.6rem;
	}
</style>
