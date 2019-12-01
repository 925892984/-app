<template>
	<div id="details">
		<header id="header">
			<a href="http://localhost:8080/home" class="back-wrap">
				<i class="iconfont icon-fanhui back"></i>
			</a>
			<h4 class="title">详情</h4>
		</header>
		<div class="main">
			<div class="img-wrap">
				<img :src="detail.goodsDetailImg" alt="商品图片">
			</div>
			<div class="detail-info">
				<div class="price">
					售价：
					<i class="money-symbol">￥</i>
					<span class="money-num">{{detail.goodsPrice}}</span>					
				</div>
				<div class="title">购物不剁手 全民享分成
					<span class="fenChengPrice">分成 ￥{{detail.goodsFenChengPrice}}</span>
				</div>
				<div class="detail-name">
					<span class="redNew">新品</span>
					{{detail.goodsTitle}}
				</div>
				<div class="express">
					快递： 运费{{detail.transportPrice}}
				</div>
				<div class="guarantee">
					保障 正品保证，高额分成
				</div>
				<div class="parameter" @click="openParameter()">
					<mt-popup
						v-model="popupVisible"
						popup-transition="popup-fade">
							<p class="parameter-title">产品参数</p>
							<div class="parameter-content">
								产品参数产品参数产品参数产品参数产品参数
							</div>
					</mt-popup>
					参数   {{detail.goodsDetail}}
				</div>
			</div>
		</div>
		<footer class="footer">

		</footer>
	</div>
</template>

<script>
	// import { Popup } from 'mint-ui';
	export default {
		name: "Details",
		data() {
			return {
			detail: {},
			popupVisible: false
			}
		},
		methods:{
			openParameter(){
				this.popupVisible = true
			}
		},
		watch:{
			popupVisible(val){
				if(val){
					setTimeout(()=>{
						this.popupVisible = false;
					},2000)
				}
			}
		},
		created() {
			this.$axios({
				url: '/goods/selectGoodsDetail',
				method: 'post',
				data: {
					"goodsId": this.$route.params.detail_id,
					"userId": ''
				},
				transformRequest: [
					function(data) {
						let ret = '';
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
					console.log(res)
					let data = res.data;
					if(data.message == "查询成功"){
						this.detail = data.data
					}
			})
		}
	};
</script>

<style scoped>
	header {
		position: fixed;
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
		padding-top: 5rem;
		width: 100%;
		position: relative;
		font-size: 1.3rem;
		font-weight: 500;
		color: #000000;
	}

	.main .img-wrap {
		width: 100%;
	}

	.img-wrap img{
		width: 100%;
		height: 100%;
	}
	.main .detail-info{
		width: 90%;
		margin: 0 auto;
	}
	.detail-info .price{
		height: 40px;
		line-height: 40px;
	}
	.money-symbol{
		font-size: 1.0rem;
		color: #f30213;
	}
	.money-num{
		font-size: 1.6rem;
		font-weight: 600;
		color: #f30213;
	}
	.detail-info .title{
		background: #999955;
		height: 35px;
		width: 100%;
		line-height: 35px;
		color: #eeeeee;
	}
	.fenChengPrice{
		display: inline-block;
		padding-left: 20px;
		font-size: 1.6rem;
		font-weight: 600;
		color: #000000;
	}
	.detail-name{
		height: 35px;
		line-height: 35px;
		font-size: 1.6rem;
	}
	.detail-name .redNew{
		width: 15px;
		height: 10px;
		background: #f30213;
		padding: 2px 4px;
		color: #ffffff;
		font-size: 1.0rem;
	}
	.express,.guarantee{
		height: 30px;
		line-height: 30px;		
		border-bottom: 1px solid #eeeeee;	
	}
	.express{
		margin-top: 30px;
		border-top: 1px solid #eeeeee;
	}
	.parameter{
		margin: 20px 0;
		box-sizing: content-box;
		background-color: #ffffff;
		height: 30px;
		line-height: 30px;
	}
	.mint-popup{
		width: 90%;
		height: 60%;
		border-radius: 10px;
	}
	.parameter-title{
		height: 20px;
		line-height: 20px;
		text-align: center;
		font-size: 1.4rem;
		font-weight: 600;
	}
	
</style>
