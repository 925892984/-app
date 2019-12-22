<template>
	<div id="shop-car">
		<Header title="购物车"></Header>
		<div class="main">
			<div class="shop-car-item" v-for="item in shopCarList" :key="item.merchantId">
				<div class="storeWrap">
					<input type="checkbox" :id="item.merchantId" name="" value="" class="store-checkbox" />
					<label class="checkbox-label" @click="initStore($event)"></label>
					<span class="store-name">{{item.merchant_business_name}}</span>
				</div>
				<div class="store-good" >
					<div class="goodWrap"  v-for="good in item.item" :key="good.id"
					:data-id = "good.goodsId"
					:data-num = "good.goodsNum"
					:data-specificationId="good.specificationId"
					:data-goodsPrice = "good.goodsPrice">
						<input type="checkbox" :id="good.id" name="" value="" class="good-checkbox" />
						<label  class="checkbox-label good-inp" @click="initGood($event)"></label>
						<div class="good-item" @click="intoDetail(good.goodsId)">
							<div class="goodImg">
								<img :src="good.goodsImg" alt="">
							</div>
							<div class="goodDetails">
								<div class="good-name">
									<span>{{good.goodsTitle}}</span>`
								</div>
								<div class="good-price">￥{{good.goodsPrice}}</div>
							</div>
							<div class="shop-car-num">
								<div class="but-wrap">
									<button class="minus btn" @click="subNum($event)">-</button>
									<button class="good-num btn">{{good.goodsNum}}</button>
									<button class="add btn" @click="addNum($event)">+</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="shop-car-footer">
				<div class="footer-left">
					<input type="radio" name="" value="" class="radio-inp" />
					<label class="checkbox-label" @click="all()" ref="all"></label>
					<span class="all">全选</span>
					<span class="delete-good" @click="deleteGood()" ref="deleteGood">移除</span>
				</div>
				<div class="footer-right">
					<span class="need-to-pay">需支付：</span>
					<span class="pay-num">￥{{payMoney}}</span>
					<button class="pay-btn" @click.prevent="closeAccount()">结算</button>
					
				</div>
			</div>
		</div>
		<Navbar></Navbar>
	</div>
</template>

<script>
	import Header from '@/components/Header/index.vue'
	import Navbar from '@/components/Navbar/index.vue'
	export default {
		name: 'ShopCar',
		data() {
			return {
				value: '',
				shopCarList: [],
				payMoney: 0.00,
				num: 1
			}
		},
		components: {
			Header,
			Navbar
		},
		methods:{
			isLogin(){
				if(window.localStorage.getItem('token') == 'null'){
					window.location.href = 'http://localhost:8080/login'
				}
			},
			getShopCar(){
				let data = {
					userId: window.localStorage.getItem('userId'),
					pageNum: 1,
					pageSize: 20
				}
				this.$api.shopcart.findShopCart(data).then(res => {
					if (res.message == '查询成功') {
						this.shopCarList = res.data.list;
						this.num
					}
				});
			},
			initStore(e){  //点击商店按钮全选/全不选商品
				var goods = e.target.parentNode.nextElementSibling.childNodes;  //获取店铺所有商品
				let goodList = []  //存放商品信息  价格和数量
				goods.forEach(item=>{
					goodList.push({num:item.getAttribute('data-num'),money:item.getAttribute('data-goodsPrice')})
				})
				if(e.target.previousSibling.checked){   //true  已被选择，点击不选择
					e.target.previousSibling.removeAttribute('checked')
					goods.forEach((item)=>{
						item.childNodes[0].removeAttribute('checked')
					})
					goodList.forEach(item=>{
						this.payMoney -= item.num*item.money
					})
					this.$refs.all.previousSibling.removeAttribute('checked')
				} else{   //false  ，未选择，点击选择
					let stores = document.querySelectorAll('.storeWrap')  //获取所有店铺  当全部店铺都选择时，全选按钮打开
					let allStore = []
					let i = 0
					e.target.previousSibling.setAttribute('checked','true')
					goods.forEach((item)=>{
						item.childNodes[0].setAttribute('checked','true')
					})
					goodList.forEach(item=>{
						this.payMoney += item.num*item.money
					})
					stores.forEach((item)=>{
						if(item.childNodes[1] !== e.target){
							allStore.push(item)
						}
					})
					allStore.forEach((item)=>{
						if(item.childNodes[0].checked){
							i++
						}
					})
					if(i == stores.length-1){ //其他店铺都已选择
						this.$refs.all.previousSibling.setAttribute('checked','true')
					}
				}
			},
			initGood(e){  //点击商品
				let num = e.target.parentNode.getAttribute('data-num')  //商品数量
				let money = e.target.parentNode.getAttribute('data-goodsPrice')  //单个商品价格
				var goods = e.target.parentNode.parentNode.childNodes  //获取店铺所有商品
				if(e.target.previousSibling.checked){  //判断之前是否点击
					//之前已选择，现在未选择状态   商店为未选择状态
					e.target.previousSibling.removeAttribute('checked')
					e.target.parentNode.parentNode.previousSibling.childNodes[0].removeAttribute('checked')
					this.payMoney -= num*money
					this.$refs.all.previousSibling.removeAttribute('checked')
				}else{
					//之前未选择状态，但现在已选择状态
					let allGood = document.querySelectorAll('.goodWrap') //获取所有商品。控制是否选择全选按钮
					e.target.previousSibling.setAttribute('checked','true')
					this.payMoney += num*money
					let arr = []  //存放商品父节点、
					let allArr = []  //存放所有商品父节点
					let i = 0  //存放已选择商品数量
					let j = 0  //存放已选择商品数量
					//判断其他商品是否被选择，都选择，则店铺被选择
					goods.forEach((item)=>{
						if(item.childNodes[1] !== e.target){
							arr.push(item)
						}
					})
					allGood.forEach((item)=>{
						if(item.childNodes[1] !== e.target){
							allArr.push(item)
						}
					})
					arr.forEach((item)=>{
						if(item.childNodes[0].checked){
							i++
						}
					})
					allArr.forEach((item)=>{
						if(item.childNodes[0].checked){
							j++
						}
					})
					if(i == goods.length-1){ //其他商品都已选择
						e.target.parentNode.parentNode.previousSibling.childNodes[0].setAttribute('checked','true')
					}
					if(j == allGood.length-1){ //其他商品都已选择
						this.$refs.all.previousSibling.setAttribute('checked','true')
					}
				}
			},
			all(){  //全选购物车
				this.payMoney = 0.00
				let all = this.$refs.all
				let stores = document.querySelectorAll('.storeWrap')  //所有店铺
				let goods = document.querySelectorAll('.goodWrap')    //所有商品
				let money = []
				if(all.previousSibling.checked){  //判断是否为全选状态
					all.previousSibling.removeAttribute('checked')
					stores.forEach((item)=>{
						item.childNodes[0].removeAttribute('checked')
					})
					goods.forEach(item=>{
						item.childNodes[0].removeAttribute('checked')
					})
					this.payMoney = 0.00
				}else{
					all.previousSibling.setAttribute('checked','true')
					stores.forEach((item)=>{
						item.childNodes[0].setAttribute('checked','true')
					})
					goods.forEach(item=>{
						item.childNodes[0].setAttribute('checked','true')
						// money.push(item.childNodes[2].childNodes[1].childNodes[1].innerText.substring(1))
						money.push({num:item.getAttribute('data-num'),money:item.getAttribute('data-goodsPrice')})
					})
					money.forEach((item)=>{
						this.payMoney += this.accAdd(item.num*item.money,0)
					})
				}
			},
			isGood(){ //已选择的商品    需要改
				let money = []
				let goods = document.querySelectorAll('.goodWrap')
				goods.forEach(item=>{
					if(item.firstChild.checked){  //商品为选择状态
						money.push(item.childNodes[2].childNodes[1].childNodes[1].innerText.substring(1))
					}
				})
				money.forEach((item)=>{
					this.payMoney += Number(item)
				})
			},
			closeAccount(){  //结算
				//找到选择的商品。
				let goods = document.querySelectorAll('.goodWrap')
				let readyPay = []  //存放已选择的商品信息
				goods.forEach(item=>{
					if(item.childNodes[0].checked){  //商品已选择
						readyPay.push(item)
					}
				})
				
				let data = {
					goods: [
					],
					addressId: window.localStorage.getItem('address')
				}
				readyPay.forEach((item) => {
					data.goods.push({goodsId:item.getAttribute('data-id'),num:item.getAttribute('data-num'),specificationId:item.getAttribute('data-specificationId')})
				})
				if(data.goods[0].goodsId){
					this.$api.order.orderInitialize(data)
					.then(res=>{
						console.log(res)
					})
				}else{
					// console.log('请勾选需要结算的商品')
				}
			},
			accAdd(arg1,arg2){  //解决JS浮点加法不准确问题
				var r1,r2,m;
				try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
				try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
				m=Math.pow(10,Math.max(r1,r2))
				return (arg1*m+arg2*m)/m
			},
			subNum(e){  //修改商品的数量 减少
				let num = e.target.parentNode.childNodes[1].innerText   //原始商品数量
				if(num > 1){
					e.target.parentNode.childNodes[1].innerText = --num
					let data = {
						goodsNum: num,
						id:e.target.parentNode.parentNode.parentNode.parentNode.getAttribute('data-id')
					}
					this.$api.shopcart.editNum(data)
					.then(res=>{  //接口有问题
						console.log(res)
					})
				}else{
					console.log('至少选择一件商品')
				}
			},
			addNum(e){  //修改商品的数量 增加
				let num = e.target.parentNode.childNodes[1].innerText   //原始商品数量
				e.target.parentNode.childNodes[1].innerText = ++num
				let data = {
					goodsNum: num,
					id:e.target.parentNode.parentNode.parentNode.parentNode.getAttribute('data-id')
				}
				this.$api.shopcart.editNum(data)
				.then(res=>{  //接口有问题
					console.log(res)
				})
			},
			deleteGood(){  //移除商品或者清空购物车
				let delGod = this.$refs.deleteGood
				if(delGod.parentNode.childNodes[0].checked){  //判断是否全选。如果全选，清空购物车
					let data = {
						userId: window.localStorage.getItem('userId'),
						ids: ''
					}
					this.$api.shopcart.shopCartDel(data)
					.then(res=>{
						if(res.mrssage == "删除成功"){
							console.log("删除成功")
						}
					})
				}else{
					let goods = document.querySelectorAll('.goodWrap')
					let delList = []  //待删除商品列表
					let ids = ''
					goods.forEach(item=>{
						if(item.childNodes[0].checked){
							delList.push(item)
						}
					})
					let data = {
						userId: window.localStorage.getItem('userId'),
						ids: ''
					}
					if(delList.length == 1){
						data = {
							userId: window.localStorage.getItem('userId'),
							ids: delList[0].getAttribute('data-id')
						}
					}else{
						delList.forEach(item=>{
							ids += item.getAttribute('data-id') + ','
						})
						data = {
							userId: window.localStorage.getItem('userId'),
							ids: ids
						}
					}
					this.$api.shopcart.shopCartDel(data)
					.then(res=>{
						console.log(res)
						if(res.mrssage == "删除成功"){
							console.log("删除成功")
						}
					})
				}
			},
			intoDetail(id){  //进入商品详情页
				this.$router.push('/detail/' + id)
			}
		},
		created(){
			this.isLogin()
			this.getShopCar()
		}
	};
</script>
<style scoped>
	#shop-car {
		background-color: #F7EFFF;
	}

	.main {
		margin-top: 50px;
		width: 100%;
	}

	.shop-car-item {
		width: 100%;
		background-color: #ffffff;
		margin-bottom: 20px;
	}

	.storeWrap,.goodWrap {
		position: relative;
		color: #333333;
		font-size: 1.2rem;
	}
	
	.storeWrap{
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #F7EFFF;
	}

	.store-checkbox,.good-checkbox,.radio-inp{
		position: absolute;
		visibility: hidden;
	}
	.checkbox-label{
		position:absolute;
		top: 11px;
		left: 10px;
		width: 18px;
		height: 18px;
		border: 1px solid #A6A6A6;
		border-radius: 50%;
		background-color:#ffffff;
	}

	.store-checkbox:checked+label.checkbox-label:after,
	.good-checkbox:checked+label.checkbox-label:after,
	.radio-inp:checked+label.checkbox-label:after{
		content: "";
		position: absolute;
		left: 2px;
		top:2px;
		width: 9px;
		height: 4px;
		border: 2px solid #424242;
		border-top-color: transparent;
		border-right-color: transparent; 
		transform: rotate(-45deg);
		-ms-transform: rotate(-60deg);
		-moz-transform: rotate(-60deg);
		-webkit-transform: rotate(-60deg);
	}
	.store-name,.good-item{
		display: inline-block;
		margin-left: 40px;	
	}
	.good-item{
		display: flex;
	}
	.goodImg{
		width: 80px;
		height: 80px;
		margin: 10px 0;
	}
	.goodImg > img{
		height: 100%;
		width: 100%;
	}
	.goodDetails{
		flex: 1;
		margin-left: 10px;
	}
	.shop-car-num{
		width: 100px;
	}
	.good-name{
		margin-top: 15px;
	}
	.good-price{
		margin-top: 10px;
		color: #F30213;
	}
	.but-wrap{
		width: 80px;
		height: 20px;
		margin: 35px auto;
		display: flex;
		justify-content: space-around;
	}
	.but-wrap .btn{
		width: 20px;
		height: 20px;
		background-color: #ffffff;
		outline: none;
		border: 1px solid #F7EFFF;
	}
	
	.shop-car-footer{
		position: fixed;
		bottom: 50px;
		left: 0;
		right: 0;
		height: 40px;
		z-index: 1001;
		border-bottom: 2px solid #F7EFFF;
		line-height: 40px;
		display: flex;
		font-size: 1.6rem;
		color: #660066;
	}
	
	.footer-left{
		width: 120px;
		margin-left: 10px;
	}
	.footer-left .all{
		display: inline-block;
		margin-left: 30px;
	}
	.footer-left .delete-good{
		display: inline-block;
		width: 40px;
		height: 20px;
		line-height: 20px;
		text-align: center;
		border: 1px solid orange;
		color: orange;
		font-size: 1.2rem;
		margin-left: 10px;
	}
	.footer-right{
		position: relative;
		flex: 1;
		margin-right: 10px;
		text-align: right;
	}
	.footer-right .pay-num{
		margin-right: 70px;
		color: #F70213;
	}
	.footer-right .pay-btn{
		position: absolute;
		background-color: #F30213;
		color: #ffffff;
		font-size: 1.2rem;
		padding: 5px 10px;
		outline: none;
		border: none;
		border-radius: 5px;
		right: 10px;
		top: 8px;
	}
</style>
