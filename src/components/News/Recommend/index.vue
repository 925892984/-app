<template>
	<div id="recommendNew">
		<div class="good-sort">
			<router-link to="/new/recommendNew/sales" tag="div" class="good-sort-item">
				<div @click="changeOrder()">
					销量
					<span class="icon">
						<i class="iconfont icon-jiangxu" v-show="order"></i>
						<i class="iconfont icon-shengxu" v-show="!order"></i>	
					</span>
				</div>	
			</router-link>
			<router-link to="/new/recommendNew/shared" tag="div" class="good-sort-item">
				<div @click="changeOrder()">
					分成
					<span class="icon">
						<i class="iconfont icon-jiangxu" v-show="order"></i>
						<i class="iconfont icon-shengxu" v-show="!order"></i>	
					</span>
				</div>
			</router-link>
			<router-link to="/new/recommendNew/price" tag="div" class="good-sort-item">
				<div @click="changeOrder()">
					价格
					<span class="icon">
						<i class="iconfont icon-jiangxu" v-show="order"></i>
						<i class="iconfont icon-shengxu" v-show="!order"></i>	
					</span>
				</div>
			</router-link>
		</div>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>
<script>
	export default {
		name: "recommendNew",
		data(){
			return {
				order: true
			}
		},
		methods:{
			changeOrder(){
				this.order = !this.order
			}
		}
	};
</script>
<style scoped>
	#recommendNew {
		width: 100%;
	}

.good-sort {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.good-sort-item {
		width: 30%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		color: #000000;
		font-size: 1.6rem;
		font-weight: 600;
	}

	.good-sort-item.router-link-active {
		color: #ce1010;
	}
	.good-sort-item .iconfont{
		font-size: 1.0rem;
	}
</style>
