<template>
	<div id="saleHot">
		<div class="good-sort">
			<router-link to="/new/saleHot/sales" tag="div" class="good-sort-item">
				<div @click="()=>{order=!order}">
					销量
					<span class="icon">
						<i class="iconfont icon-jiangxu" v-show="order"></i>
						<i class="iconfont icon-shengxu" v-show="!order"></i>
					</span>
				</div>
			</router-link>
			<router-link to="/new/saleHot/shared" tag="div" class="good-sort-item">
				<div @click="()=>{order=!order}">
					分成
					<span class="icon">
						<i class="iconfont icon-jiangxu" v-show="order"></i>
						<i class="iconfont icon-shengxu" v-show="!order"></i>
					</span>
				</div>
			</router-link>
			<router-link to="/new/saleHot/price" tag="div" class="good-sort-item">
				<div @click="()=>{order=!order}">
					价格
					<span class="icon">
						<i class="iconfont icon-jiangxu" v-show="order"></i>
						<i class="iconfont icon-shengxu" v-show="!order"></i>
					</span>
				</div>
			</router-link>
		</div>
		<keep-alive>
			<router-view :key="$route.fullPath"></router-view>
		</keep-alive>
	</div>
</template>
<script>
	export default {
		name: "SaleHot",
		data() {
			return {
				order: this.$store.state.order,
				active: {},

			}
		},
		methods: {
			changeOrder() {
				let icon = document.querySelectorAll('.icon')
				let list = []
				for (let item of icon) {
					console.log(item.parentNode.parentNode.className)
					if (item.parentNode.parentNode.className !== 'good-sort-item router-link-exact-active router-link-active') {
						list.push(item)
					} else {
						this.active = item
					}
				}
				for (let item of list) {
					item.style.display = 'none'
				}
				this.active.style.display = 'inline-block'
			}
		},
		mounted() {
			this.$nextTick(() => {
				
			})
		},
		updated() {
			// this.$router.go(0)
		},
		watch: {
			active(newVal) {
				newVal.style.display = 'inline-block'
				console.log(newVal)
			}
		}

	};
</script>
<style scoped>
	#saleHot {
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

	/* .filter {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.filter-item {
  width: 30%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #000000;
  font-size: 1.6rem;
  font-weight: 600;
}
.filter-item.router-link-active {
  color: #ce1010;
} */
</style>
