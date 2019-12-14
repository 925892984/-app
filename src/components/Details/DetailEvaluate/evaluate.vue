<template>
	<div id="goods-evaluate">
		<div class="item">
			<span class="label">强烈推荐</span>
			<div class="progress-bar" ref="progressBar">
				<div class="fill" ref="fill"></div>
				<div class="score"></div>
			</div>
		</div>
		<div class="item">
			<span class="label">非常满意</span>
			<div class="progress-bar" ref="progressBar">
				<div class="fill" ref="fill"></div>
				<div class="score"></div>
			</div>
		</div>
		<div class="item">
			<span class="label">物有所值</span>
			<div class="progress-bar" ref="progressBar">
				<div class="fill" ref="fill"></div>
				<div class="score"></div>
			</div>
		</div>
		<div class="item">
			<span class="label">感觉一般</span>
			<div class="progress-bar" ref="progressBar">
				<div class="fill" ref="fill"></div>
				<div class="score"></div>
			</div>
		</div>
		<div class="item">
			<span class="label">差强人意</span>
			<div class="progress-bar" ref="progressBar">
				<div class="fill" ref="fill"></div>
				<div class="score"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GoodsEvaluate',
		data() {
			return {
				evaluate: {}
			}
		},
		methods: {
			info(node, num) { //初始化评价进度条
				let parentWidth = this.$refs.progressBar.offsetWidth
				let currentWidth = num / 100 * parentWidth
				node.style.width = currentWidth + 'px'
			},
			setProgressBar(){//设置进度条
				let nodes = document.querySelectorAll('.fill')
				let arrNodes = Object.values(nodes) //[div,div,div,div,div]
				// let arrEvaluate = Object.values(this.evaluate)
				arrNodes.forEach((item,index)=>{
					if(index == 0){
						this.info(item,this.evaluate.HighlyRecommended)
					}else if(index == 1){
						this.info(item,this.evaluate.VerySatisfied)
					}else if(index == 2){
						this.info(item,this.evaluate.ValueMoney)
					}else if(index == 3){
						this.info(item,this.evaluate.GeneralFeeling)
					}else {
						this.info(item,this.evaluate.JustPassable)
					}
				}) 
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
					this.evaluate = data.data.goodsDetail.evaluate;
					this.setProgressBar()
				}
			});
		}
	}
</script>

<style scoped>
	#goods-evaluate {
		width: 90%;
		background-color: #ffffff;
		height: 200px;
		margin: 15px auto 50px auto;
		overflow: hidden;
	}

	.item {
		width: 100%;
		height: 35px;
		line-height: 35px;
		font-size: 1.3rem;
		font-weight: 600;
		display: flex;
	}

	.label {
		display: inline-block;
		padding-left: 10px;
	}

	.progress-bar {
		flex: 1;
		display: inline-block;
		height: 10px;
		margin: auto 0;
		margin-left: 20px;
		background: #F7EFFF;
		border-radius: 5px;
		position: relative;
	}

	.progress-bar .fill {
		position: absolute;
		top: 0;
		left: 0;
		height: 10px;
		background-image: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);
	}

	.progress-bar .score {}
</style>
