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
				evaluate: {},
				
			}
		},
		methods: {
			info(node, num) { //初始化评价进度条
				let parentWidth = this.$refs.progressBar.offsetWidth
				let currentWidth = num / 100 * parentWidth
				node.style.width = currentWidth + 'px'
			},
			setProgressBar() { //设置进度条
				let score = document.querySelectorAll('.score')
				let fills = document.querySelectorAll('.fill')
				let arrScore = Object.values(score)
				let arrNodes = Object.values(fills) //将对象转换成数组
				arrNodes.forEach((item, index) => {
					if (index == 0) {
						this.info(item, this.evaluate.HighlyRecommended)
						arrScore[0].innerText = this.evaluate.HighlyRecommended + '%'
					} else if (index == 1) {
						this.info(item, this.evaluate.VerySatisfied)
						arrScore[1].innerText = this.evaluate.VerySatisfied + '%'
					} else if (index == 2) {
						this.info(item, this.evaluate.ValueMoney)
						arrScore[2].innerText = this.evaluate.ValueMoney + '%'
					} else if (index == 3) {
						this.info(item, this.evaluate.GeneralFeeling)
						arrScore[3].innerText = this.evaluate.GeneralFeeling + '%'
					} else {
						this.info(item, this.evaluate.JustPassable)
						arrScore[4].innerText = this.evaluate.JustPassable + '%'
					}
				})
			},
			getEvaluate(){  //获取Evaluate()  评价数据
				var data = {
					goodsId: this.$route.params.detail_id,
					userId: ""
				}
				this.$api.goods.selectGoodsDetail(data)
				.then(res => {
					if (res.message == "查询成功") {
						this.evaluate = res.data.goodsDetail.evaluate;
						this.setProgressBar()
					}
				});
				
			}
		},
		created() {
			this.getEvaluate()
		}
	}
</script>

<style scoped>
	#goods-evaluate {
		width: 100%;
		background-color: #ffffff;
		height: 200px;
		margin: 15px auto 50px auto;
		overflow: hidden;
	}

	.item {
		width: 95%;
		height: 35px;
		line-height: 35px;
		margin: 0 auto;
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
		margin-left: 15px;
		margin-right: 20px;
		border-radius: 5px;
		background: #F7EFFF;
		line-height: 10px;
		overflow: hidden;
	}

	.progress-bar .fill {
		display: inline-block;
		height: 10px;
		background-image: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);
	}

	.progress-bar .score {
		display: inline-block;
		color: #303030;
		font-weight: 400;
		font-size: 1.1rem;
		padding-left: 5px;
		line-height: 10px;
	}
</style>
