<template>
	<div id="details">
		<header id="header">
			<router-link to="/home" class="back-wrap">
				<i class="iconfont icon-fanhui back"></i>
			</router-link>
			<h4 class="title">详情</h4>
		</header>
		<div class="main">
			<div class="img-wrap">
				<mt-swipe :auto="4000">
					<mt-swipe-item v-for="(img,index) in goodsDetailImg" :key="index">
						<img :src="img" alt="" class="image-item">
					</mt-swipe-item>
				</mt-swipe>
			</div>
			<!-- <div class="detail-info"> -->
			<div class="detail-info">
				<div class="price-sales">
					<div class="price">
						售价：
						<span class="money-symbol">￥</span>
						<span class="money-num">{{detail.goodsPrice}}</span>
					</div>
					<div class="sales">
						销量：
						<span class="money-num">{{detail.saleNum}}</span>
					</div>
				</div>
				<div class="title">
					购物不剁手 全民享分成
					<span class="fenChengPrice">分成 ￥{{detail.goodsFenChengPrice}}</span>
				</div>
				<div class="detail-name">
					<span class="redNew">新品</span>
					{{detail.goodsTitle}}
				</div>
				<div class="express">快递: <span class="money-symbol">￥</span>{{detail.transportPrice}}</div>
				<div class="guarantee">保障 正品保证，高额分成</div>
				<!-- </div> -->
			</div>
			<!-- <div class="parameter" @click="openParameter()">
				参数 {{detail.goodsDetail}}
			</div>
			<div class="my-popup" v-show="popupVisible" ref="popup">
				<p class="parameter-title">产品参数</p>
				<div class="parameter-content">产品参数产品参数产品参数产品参数产品参数</div>
			</div>
			<div class="my-popup-show" v-if="popupVisible" @click.prevent="closePopup()"></div> -->
			<!-- 			<div class="detail-detail">
				<div class="detail-title">
					<p class="detail-title-text">详情</p>
					<p class="detail-title-text">详情</p>
				</div>
				<div class="goodsImg-wrap">
					<img alt="" v-for="(item,index) in goodsDetailImg" :key="index" :src="item">
				</div>
			</div> -->
			<div class="detail-evaluate">
				<div class="tab">
					<router-link tag="div" :to="'/detail/'+this.$route.params.detail_id+'/detail'" class="good-detail tab-item">
						<span>详情</span>
					</router-link>
					<router-link tag="div" :to="'/detail/'+this.$route.params.detail_id+'/evaluate'" class="good-evaluate tab-item" @click="changeTab()">
						<span>评价</span>
					</router-link>
				</div>
				<!-- <mt-tab-container v-model="active">
					<mt-tab-container-item id="tab-container1">
						<div ref="goodsDetail"></div>
					</mt-tab-container-item>
					<mt-tab-container-item id="tab-container2">
						
					</mt-tab-container-item>
				</mt-tab-container> -->
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</div>
		</div>
		<footer class="footer">
			<div class="footer-left">
				<div class="store">
					<i class="iconfont icon icon-dianpu"></i>
					<span class="text">店铺</span>
				</div>
				<div class="service">
					<i class="iconfont icon icon-kefu"></i>
					<span class="text">客服</span>
				</div>
				<div class="collect">
					<i class="iconfont icon icon-shoucang"></i>
					<span class="text">收藏</span>
				</div>
			</div>
			<div class="footer-right">
				<div class="add-chopCar">加入购物车</div>
				<div class="buy">立即购买</div>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		name: "Details",
		data() {
			return {
				detail: {},
				goodsDetail: '',
				popupVisible: false,
				goodsDetailImg: [],
			};
		},
		methods: {
			openParameter() {
				this.popupVisible = true;
			},
			closePopup() {
				var contentWrap = this.$refs.popup
				if (contentWrap) {
					if (!contentWrap.contains(event.target)) {
						//按钮以外的区域
						this.popupVisible = false
					}
				}
			},
			changeTab(){
				
			}
		},
		created() {
			this.$axios({
				url: "goods/selectGoodsDetail",
				method: "post",
				data: {
					goodsId: this.$route.params.detail_id,
					userId: ""
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
				let data = res.data;
				if (data.message == "查询成功") {
					this.detail = data.data
					this.goodsDetailImg = data.data.goodsDetailImg.split(",")
					this.goodsDetail = data.data.goodsDetail.goodsDetail;
					// this.$refs.goodsDetail.innerHTML = data.data.goodsDetail.goodsDetail;
				}
			});
		}
	};
</script>

<style scoped>
	#details {
		width: 100%;
		background: #f7Efff;
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

	.main {
		margin: 50px 0;
		width: 100%;
		overflow: hidden;
		font-size: 1.3rem;
		font-weight: 500;
		color: #000000;
	}

	.main .img-wrap {
		width: 100%;
		height: 380px;
		overflow: hidden;
	}

	.img-wrap .image-item {
		width: 100%;
		height: 100%;
	}

	.main .detail-info {
		width: 100%;
		background-color: #ffffff;
	}

	.detail-info .price-sales,
	.title,
	.detail-name,
	.express,
	.guarantee {
		width: 95%;
		margin: 0 auto;
	}

	.detail-info .price-sales {
		height: 40px;
		line-height: 40px;
		position: relative;
	}

	.price-sales .price {
		display: inline-block;
	}

	.price-sales .sales {
		display: inline-block;
		position: absolute;
		right: 10px;
		top: 0;
	}

	.money-symbol {
		font-size: 1rem;
		color: #f30213;
	}

	.money-num {
		font-size: 1.6rem;
		font-weight: 600;
		color: #f30213;
	}

	.detail-info .title {
		margin-left: 10px;
		background: #999955;
		height: 40px;
		width: 100%;
		line-height: 40px;
		color: #eeeeee;
	}

	.fenChengPrice {
		display: inline-block;
		padding-left: 20px;
		font-size: 1.6rem;
		font-weight: 600;
		color: #000000;
	}

	.express,
	.guarantee {
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #f7Efff;
	}

	.detail-name {
		margin-top: 10px;
		line-height: 25px;
		font-size: 1.6rem;
		border-bottom: 1px solid #f7Efff;
	}

	.detail-name .redNew {
		width: 15px;
		height: 10px;
		background: #f30213;
		padding: 2px 4px;
		color: #ffffff;
		font-size: 1rem;
	}

	.parameter {
		margin: 20px 0;
		padding-left: 10px;
		box-sizing: content-box;
		background-color: #ffffff;
		height: 40px;
		line-height: 40px;
		overflow: hidden;
	}

	.my-popup {
		width: 90%;
		height: 60%;
		border-radius: 10px;
		position: fixed;
		background: #fff;
		top: 50%;
		left: 50%;
		-webkit-transform: translate3d(-50%, -50%, 0);
		transform: translate3d(-50%, -50%, 0);
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		-webkit-transition: .2s ease-out;
		transition: .2s ease-out;
		z-index: 2001;
	}

	.parameter-title {
		height: 20px;
		line-height: 20px;
		text-align: center;
		font-size: 1.4rem;
		font-weight: 600;
	}

	.my-popup-show {
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		opacity: 0.5;
		background: #000000;
		z-index: 2000;
	}
	
	.detail-detail {
		margin-top: 30px;
		margin-bottom: 100px;
		background-color: #ffffff;
		width: 100%;
	}

	/* .detail-title {
		height: 40px;
		line-height: 40px;
		text-align: center;
		color: #0074D9;
		border-bottom: 1px solid #f7Efff;
	}

	.detail-title-text {
		display: inline-block;
		height: 40px;
		width: 40px;
		border-bottom: 3px solid #0074D9;
	} */

	.detail-evaluate {
		
	}
	.detail-evaluate .tab{
		position: relative;
		width: 130px;
		margin: 0 auto;
		height: 40px;
		line-height: 40px;
		
		border-bottom: 1px solid #f7Efff;
	}
	.tab .tab-item{
		display: inline-block;
		position: absolute;
		height: 40px;
		width: 40px;
		
		text-align: center;
	}
	
	.good-detail{
		left: 0;
	}
	.good-evaluate{
		right: 0;
	}
	.good-evaluate.router-link-active,.good-detail.router-link-active{
		color: #0074D9;
		border-bottom: 3px solid #0074D9;
	}

	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50px;
		display: flex;
		background-color: #ffffff;
		z-index: 2001;
	}

	.footer-left {
		width: 45%;
		display: flex;
		justify-content: space-around;
	}

	.footer-right {
		display: flex;
		width: 55%;
		color: #ffffff;
		line-height: 50px;
		text-align: center;
		font-size: 1.4rem;
		font-weight: 400;
	}

	.footer-left .collect,
	.store,
	.service {
		width: 25%;
		text-align: center;
	}

	.footer-left i {
		display: block;
	}

	.footer-left i.icon {
		font-size: 2.0rem;
		font-weight: 400;
		line-height: 25px;

	}

	.service {
		color: #0074D9;
	}

	.collect {
		color: #EE9900;
	}

	.footer-left .text {
		line-height: 25px;
		font-size: 1.2rem;
	}

	.footer-right .add-chopCar {
		flex: 1;
		background-color: #EE9900;
	}

	.footer-right .buy {
		flex: 1;
		background-color: red;
	}

	.goodsImg-wrap {
		padding: 10px 10px 30px 10px;
		display: flex;
		flex-wrap: wrap;
	}

	.goodsImg-wrap img {
		width: 100%;
		height: 300px;
	}
</style>
