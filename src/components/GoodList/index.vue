<template>
	<div id="goodsList">
		<div class="good-wrap" v-for="(item,index) in goodList" :key="index" @click="intoGood(item.goodsId)">
			<div class="img-wrap">
				<img :src="item.goodsImg" alt="">
			</div>
			<div class="good-detail-wrap">
				<div class="detail-top">
					<div class="good-name">
						<span class="hot">爆</span>
						<span class="new">新</span>
						<p class="item-name">{{item.goodsTitle}}</p>
					</div>
					<div class="store">
						<span>{{item.merchant_business_name}}</span>
					</div>
				</div>
				<div class="detail-bottom">
					<div class="fenchengAddwuliu">
						<span class="fencheng">分成 ￥{{item.goodsFenChengPrice}}</span>
						<span class="wuliu">包邮</span>
					</div>
					<div class="pay">
						<span class="money-symbol">￥</span>{{item.goodsPrice}}
						<span class="soldOut">已售{{item.saleNum}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "GoodsList",
		props: {
			goodList: Array
		},
		methods:{
			intoGood(goodId){
				this.$router.push('/detail/'+goodId)
			}
		}
	};
</script>

<style scoped>
	#goodsList {
		width: 100%;
		height: auto;
		display: flex;
		flex-wrap: wrap;
	}

	.good-wrap {
		margin: 10px 0 10px 10px;
		height: 130px;
		width: 100%;
		display: flex;
	}

	.img-wrap {
		width: 130px;
		border-radius: 5px;
		overflow: hidden;
	}

	.img-wrap>img {
		width: 100%;
		height: 100%;
	}

	.good-detail-wrap {
		position: relative;
		flex: 1;
		margin-left: 10px;
	}

	.detail-top {}

	.good-name {
		margin-top: 5px;
		height: 20px;
		display: flex;
		align-items: center;
		line-height: 20px;
	}

	.hot,
	.new {
		display: inline-block;
		width: 15px;
		height: 15px;
		line-height: 15px;
		text-align: center;
		background-color: red;
		color: #ffffff;
		margin-right: 10px;
		font-weight: 600;
	}

	.item-name {
		display: inline-block;
		font-weight: 600;
		font-size: 1.6rem;
		word-break: break-all;

		text-overflow: ellipsis;

		display: -webkit-box;

		-webkit-box-orient: vertical;

		-webkit-line-clamp: 2;

		overflow: hidden;
	}

	.store {
		margin-top: 20px;
		height: 15px;
		line-height: 15px;
	}

	.store>span {
		background-color: #999955;
		display: inline-block;
		padding: 2px 3px;
		font-size: 1.2rem;
		font-weight: 200;
	}

	.detail-bottom {
		position: absolute;
		bottom: 10px;
		color: #6C6C6C;
		font-size: 1.2rem;
		font-weight: 200;
	}

	.fenchengAddwuliu {
		height: 30px;
		line-height: 30px;
		text-align: left;
	}

	.wuliu {
		display: inline-block;
		margin-left: 30px;
	}

	.pay {
		color: red;
		font-size: 1.4rem;
		font-weight: 400;
	}

	.money-symbol {
		color: red;
		font-size: 1.0rem;
	}

	.soldOut {
		display: inline-block;
		margin-left: 30px;
		color: #6C6C6C;
	}
</style>
