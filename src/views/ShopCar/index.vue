<template>
	<div id="shop-car">
		<Header title="购物车"></Header>
		<div class="main">
			<div class="shop-car-item">
				<div class="storeWrap">
					<input type="checkbox" id="store-checkbox" name="store" value="阿汤哥的店" class="store-checkbox" />
					<label for="store-checkbox" class="checkbox-label"></label>
					<span class="store-name">阿汤哥的店</span>
				</div>
				<div class="goodWrap">
					<input type="checkbox" id="good-checkbox" name="good" value="阿汤哥的店" class="good-checkbox" />
					<label for="good-checkbox" class="checkbox-label"></label>
					<div class="good-item">
						<div class="goodImg">
							<img src="@/assets/logo.png" alt="">
						</div>
						<div class="goodDetails">
							<div class="good-name">
								<span>考研数学二</span>
							</div>
							<div class="good-price">￥0.01</div>
						</div>
						<div class="shop-car-num">
							<div class="but-wrap">
								<button class="minus btn">-</button>
								<button class="good-num btn">1</button>
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
				goodList: []
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
// 				if(!this.$store.user.state.isLogin){
// 					window.location.href = 'http://localhost:8080/login'
// 				}
			},
			getShopCar(){
				this.$axios({
					url: "shopCart/findShopCart",
					method: "post",
					data: {
						userId: window.localStorage.getItem('userId'),
						pageNum: 1,
						pageSize: 20,
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
				}).then(res => {
					console.log(res.data)
					let data = res.data;
					if (data.message == '查询成功') {
						this.goodList = data.data.list;
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
