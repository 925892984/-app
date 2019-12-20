<template>
	<div id="shop-car">
		<Header title="购物车"></Header>
		<div class="main">
			<div class="shop-car-item" v-for="item in shopCarList" :key="item.merchantId">
				<div class="storeWrap">
					<input type="checkbox" :id="item.merchantId" name="" value="" class="store-checkbox" />
					<label :for="item.merchantId" class="checkbox-label"></label>
					<span class="store-name">{{item.merchant_business_name}}</span>
				</div>
				<div class="goodWrap"  v-for="good in item.item" :key="good.id">
					<input type="checkbox" :id="good.id" name="" value="" class="good-checkbox" />
					<label :for="good.id" class="checkbox-label"></label>
					<div class="good-item">
						<div class="goodImg">
							<img :src="good.goodsImg" alt="">
						</div>
						<div class="goodDetails">
							<div class="good-name">
								<span>{{good.goodsTitle}}</span>
							</div>
							<div class="good-price">￥{{good.goodsPrice}}</div>
						</div>
						<div class="shop-car-num">
							<div class="but-wrap">
								<button class="minus btn">-</button>
								<button class="good-num btn">{{good.goodsNum}}</button>
								<button class="add btn">+</button>
							</div>
						</div>
					</div>
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
				shopCarList: []
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
					console.log(res)
					if (res.message == '查询成功') {
						this.shopCarList = res.data.list;
						console.log(this.shopCarList)
					}
				});
			}
		},
		created(){
			this.isLogin()
			this.getShopCar()

		}
	}
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

	.store-checkbox,.good-checkbox{
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
	.good-checkbox:checked+label.checkbox-label:after{
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
</style>
