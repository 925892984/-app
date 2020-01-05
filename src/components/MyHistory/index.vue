<template>
	<div id="collection-count">
		<header id="header">
			<span class="back-wrap" @click="()=>{this.$router.back()}">
				<i class="iconfont icon-fanhui back"></i>
			</span>
			<h4 class="title">我的收藏</h4>
		</header>
		<div class="main">
			<div class="handle">
				<div class="handle-left">
					<!-- <input type="radio" class="handle-radio"> -->
					<input type="radio" name="" value="" class="radio-inp" />
					<label class="radio-label" @click="all()" ref="all"></label>
					<span class="all">全选</span>
				</div>
				<div class="handle-right">
					<button class="delete">移除</button>
				</div>
			</div>
			<div class="good-wrap" v-for="(item,index) in listGoods" :key="index">
<!-- 				<div class="radio-wrap">
					<input type="radio" class="good-radio">
				</div> -->
				<div class="radio-wrap">
					<input type="checkbox" name="" value="" class="good-checkbox" />
					<label class="checkbox-label" @click="initGood($event)"></label>
				</div>
				<div class="good-info">
					<div class="good-img">
						<img :src="item.goodsImg" alt="">
					</div>
					<div class="good-detail">
						<div class="good-name">{{item.goodsTitle}}</div>
						<div class="clickNum">
							<span>{{item.clickNum}}人点击</span>
						</div>
						<div class="good-money-wrap">
							<div class="good-money">
								<span class="money">￥{{item.goodsPrice}}</span>
							</div>
							<div class="good-fencheng">
								<span class="fencheng-text">分成</span>
								<span class="money">￥{{item.goodsFenChengPrice}}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script scoped>
	export default {
		name: 'collectionCount',
		data(){
			return{
				listGoods: []
			}
		},
		methods:{
			getlistGoods(){
				let data = {
					userId: window.localStorage.getItem('userId'),
					pageNum: 1,
					pageSize:20
				}
				this.$api.collection.listGoods(data)
				.then((res)=>{
					if(res.message == "查询成功"){
						this.listGoods = res.data.list
					}
				})
			},
			initGood(e){
				if(e.target.previousSibling.checked){  //判断之前是否点击
					//之前已选择，现在未选择状态   商店为未选择状态
					e.target.previousSibling.removeAttribute('checked')
					this.$refs.all.previousSibling.removeAttribute('checked')
				}else{
					e.target.previousSibling.setAttribute('checked','true')
				}
			},
			all(){  //点击全选
				let all = this.$refs.all
				let goods = document.querySelectorAll('.good-wrap')    //所有商品
				if(all.previousSibling.checked){  //判断是否为全选状态
					all.previousSibling.removeAttribute('checked')
					goods.forEach(item=>{
						item.childNodes[0].childNodes[0].removeAttribute('checked')
					})
				}else{
					all.previousSibling.setAttribute('checked','true')
					goods.forEach(item=>{
						item.childNodes[0].childNodes[0].setAttribute('checked','true')
					})
				}
			}
		},
		created() {
			this.getlistGoods()
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

	.main{
		position: fixed;
		top: 50px;
		bottom: 0px;
		left: 0;
		right: 0;
		background-color: #fff;
		font-size: 1.6rem;
	}
	.handle{
		height: 40px;
		width: 100%;
		border-bottom: 1px solid #F5F2F0;
		z-index: 101;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.handle .handle-left{
		width: 100px;
		margin-left: 10px;
	}
	.handle .handle-right{
		width: 50px;
		margin-right: 10px;
	}
	.handle-left .handle-radio{
		margin-right: 10px;
		width: 20px;
		height: 20px;
	}
	.handle-left .all{
		margin-left: 30px;
		font-size: 1.4rem;
		font-weight: 550;
		color: #C21F39;
	}
	.handle-right .delete{
		outline: none;
		border: none;
		background-color: orange;
		padding: 5px 8px;
		color: #fff;
		font-size: 1.2rem;
		-webkit-border-radius: 5px;
	}
	.good-wrap{
		width: 100%;
		display: flex;
		align-items: center;
		border-bottom:1px solid #F5F2F0;
		box-sizing: content-box;
	}
	.radio-wrap{
		position: relative;
		width: 38px;
		height: 50px;
		margin: 10px 0;
	}
	.radio-label{
		position:absolute;
		top: 10px;
		left: 10px;
		width: 20px;
		height: 20px;
		border: 1px solid #A6A6A6;
		border-radius: 50%;
		background-color:#ffffff;
	}
	.checkbox-label{
		position:absolute;
		top: 0px;
		left: 10px;
		width: 18px;
		height: 18px;
		border: 1px solid #A6A6A6;
		border-radius: 50%;
		background-color:#ffffff;
	}
	.good-checkbox,.radio-inp{
		position: absolute;
		visibility: hidden;
	}
	
	.good-checkbox:checked+label.checkbox-label:after,
	.radio-inp:checked+label.radio-label:after{
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
	.good-info{
		flex: 1;
		padding-right: 10px;
		display: flex;
		/* height: 80px; */
		margin: 10px 0;
	}
	.good-img{
		width: 80px;
		height: 80px;
	}
	.good-img > img{
		width: 100%;
		height: 100%;
	}
	.good-detail{
		flex: 1;
		margin-left: 10px;
	}
	.good-name{
		height: 50px;
		font-size: 1.4rem;
		color: #666666;
		line-height: 25px;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.clickNum{
		font-size: 1.2rem;
		color: #888888;
		margin-bottom: 10px;
	}
	.good-money-wrap{
		display: flex;
		justify-content: space-between;
		height: 30px;
		line-height: 30px;
		color: red;
		font-size: 1.3rem;
		font-weight: 600;
	}
	.good-money{
	
	}
	.fencheng-text{
		font-size: 1.6rem;
	}
</style>
