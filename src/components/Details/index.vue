<template>
	<div id="details">
		<header id="header">
			<span @click="()=>{this.$router.push('/home')}" class="back-wrap">
				<i class="iconfont icon-fanhui back"></i>
			</span>
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
				<div class="ad-title">
					购物不剁手 全民享分成
					<span class="fenChengPrice">分成 ￥{{detail.goodsFenChengPrice}}</span>
				</div>
				<div class="detail-name-wrap">
					<div class="detail-name">
						<span class="redNew">新品</span>
						{{detail.goodsTitle}}
					</div>
				</div>
				<div class="express-wrap">
					<div class="express">快递: <span class="money-symbol">￥</span>{{detail.transportPrice}}</div>
					<span class="iconfont icon-xiayibu detail-icon"></span>
				</div>
				<div class="guarantee-wrap">
					<div class="guarantee">保障 正品保证，高额分成，急速退款，七天退换</div>
					<span class="iconfont icon-xiayibu detail-icon"></span>
				</div>
			</div>
			<div class="specification" @click.prevent="popuShow()">
				<div class="specification-text-wrap">
					<span class="specification-text">选择 请选择规格</span>
				</div>
				<span class="iconfont icon-gengduo detail-icon"></span>
			</div>
			<div class="detail-evaluate">
				<div class="tab-bd">
					<div class="tab">
						<router-link tag="div" :to="'/detail/'+this.$route.params.detail_id+'/detail'" class="good-detail tab-item">
							<span>详情</span>
						</router-link>
						<router-link tag="div" :to="'/detail/'+this.$route.params.detail_id+'/evaluate'" class="good-evaluate tab-item"
						@click="changeTab()">
							<span>评价</span>
						</router-link>
					</div>
				</div>

				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</div>
		</div>
		<div class="specification-detail" v-if="show">
			<div class="specification-top">
				<!-- <div class="detail-show"> -->
					<div class="specificationImg">
						<img src="../../assets/logo.png" alt="">
					</div>
					<div class="goodinfo">
						<span class="money-symbol">￥</span>
						<span class="money-num">12.8</span>
						<div class="good-type">鼠你最美 苹果7/8</div>
					</div>
				<!-- </div>	 -->
				<div class="back-radius">
					<span class="iconfont icon-chengfa"></span>
				</div>
			</div>
			<div class="good-property">
				<div class="good-property-item">
					<div class="item-name">
						<span>颜色</span>
					</div>
					<div class="good-list">
						<button class="good-list-item">鼠你有运</button>
					</div>
				</div>
			</div>
			<div class="specification-btn">
				<button>确定</button>
			</div>
		</div>
		<footer class="footer">
			<div class="footer-left">
				<div class="store" @click.prevent="intoStore(detail.merchantId)">
					<i class="iconfont icon icon-dianpu"></i>
					<span class="text">店铺</span>
				</div>
				<div class="service" @click.prevent="intoService()">
					<i class="iconfont icon icon-kefu"></i>
					<span class="text">客服</span>
				</div>
				<div class="collect" @click.prevent="addCollect()" v-if="!collect">
					<i class="iconfont icon icon-shoucang"></i>
					<span class="text">收藏</span>
				</div>
				<div class="collect" @click.prevent="closeCollect()" v-else>
					<i class="iconfont icon icon-yishoucang"></i>
					<span class="text">已收藏</span>
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
				goodsDetailImg: [],
				collect: false,
				show: false
			};
		},
		methods: {
			addCollect() { //添加收藏
				let data = {
					goodsId: this.$route.params.detail_id,
					userId: window.localStorage.getItem('userId')
				}
				this.$api.collection.addCollection(data).then(res => {
					if (res.message == "添加成功") {
						this.collect = true
					}
				});
			},
			closeCollect() { //只完成了表面取消收藏，还需改变真实数据
				this.collect = false
			},
			popuShow(){  //展示规格详情  弹出框
				this.show = true
			},
			intoStore(id){//进入店铺页面
				this.$router.push({path:'/store',query:{merchantId:id}})
			},
			intoService(){  //客服
				this.$router.push('/service')
			}
		},
		created() {
			let data = {
				goodsId: this.$route.params.detail_id,
				userId: ""
			}
			this.$api.goods.selectGoodsDetail(data)
				.then(res => {
					if (res.message == "查询成功") {
						this.detail = res.data
						this.goodsDetailImg = res.data.goodsDetailImg.split(",")
						this.goodsDetail = res.data.goodsDetail.goodsDetail;
						if (res.data.iscollection == 0) { //商品未收藏
							this.collect = false
						} else {
							this.collect = true
						}
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
	
	.detail-name-wrap,
	.express-wrap,
	.guarantee-wrap{
		width: 100%;
		border-bottom: 1px solid #f7Efff;
		height: 40px;
		line-height: 40px;
		position: relative;
	}
	
	.detail-info .price-sales,
	.ad-title,
	.detail-name,
	.express,
	.specification-text-wrap,
	.guarantee {
		width: 95%;
		margin: 0 auto;
	}
	
	.detail-icon{
		display: inline-block;
		position: absolute;
		right: 10px;
		top: 0px;
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

	.detail-info .ad-title {
		background: #999955;
		height: 40px;
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

	.detail-name {
		margin-top: 10px;
		line-height: 25px;
		font-size: 1.6rem;
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

	.detail-evaluate {
		background-color: #ffffff;
	}
	
	.specification{
		margin: 20px 0;
		width: 100%;
		background-color: #ffffff;
		position: relative;
		height: 50px;
		line-height: 50px;
	}

	.detail-evaluate .tab-bd{
		border-bottom: 1px solid #f7Efff;
	}
	
	.detail-evaluate .tab {
		position: relative;
		width: 130px;
		margin: 0 auto;
		height: 40px;
		line-height: 40px;
	}

	.tab .tab-item {
		display: inline-block;
		position: absolute;
		height: 40px;
		width: 40px;

		text-align: center;
	}

	.good-detail {
		left: 0;
	}

	.good-evaluate {
		right: 0;
	}

	.good-evaluate.router-link-active,
	.good-detail.router-link-active {
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
	
	.specification-detail{
		position: fixed;
		top: 50px;
		left: 0;
		bottom: 50px;
		right: 0;
		z-index:1001;
		background-color: #ffffff;
	}
	
	.specification-top{
		width: 100%;
		height: 120px;
		margin-top: 20px;
		display: flex;
		position: relative;
		color: #F7EFFF;
	}
	
	.detail-show{
		
	}
	
	.specificationImg{
		margin-left: 20px;
		height: 120px;
		width: 120px;
		border-radius: 5px;
		overflow: hidden;
	}
	
	.specificationImg > img{
		width: 100%;
		height: 100%;
	}
	
	.goodinfo{
		flex: 1;
		margin-left: 10px;
	}
	
	.good-type{
		margin-top: 10px;
		font-size: 1.2rem;
		font-weight: 400;
	}
	
	.back-radius{
		position: absolute;
		top: 0;
		right: 15px;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		overflow: hidden;
		border: 1px solid #F7EFFF;
	}
	
	.good-property{
		margin-top: 40px;
		width: 100%;
	}
	
	.good-property-item{
		width: 95%;
		margin: 10px auto;
	}
	
	.item-name{
		color: #F7EFFF;
	}
	
	.good-list{
		margin: 5px 0;
	}
	
</style>
