<template>
	<div id="saleHot">
		<div class="good-sort">
			<router-link to="/new/saleHot/sales" data-path="/new/saleHot/sales" tag="div" class="good-sort-item">
				<div @click="changeOrder()">
					销量
					<span class="icon">
						<i class="iconfont icon-jiangxu" v-show="order"></i>
						<i class="iconfont icon-shengxu" v-show="!order"></i>
					</span>
				</div>
			</router-link>
			<router-link to="/new/saleHot/shared" data-path="/new/saleHot/shared" tag="div" class="good-sort-item">
				<div @click="changeOrder()">
					分成
					<span class="icon">
						<i class="iconfont icon-jiangxu" v-show="order"></i>
						<i class="iconfont icon-shengxu" v-show="!order"></i>
					</span>
				</div>
			</router-link>
			<router-link to="/new/saleHot/price" data-path="/new/saleHot/price" tag="div" class="good-sort-item">
				<div @click="changeOrder()">
					价格
					<span class="icon">
						<i class="iconfont icon-jiangxu" v-show="order"></i>
						<i class="iconfont icon-shengxu" v-show="!order"></i>
					</span>
				</div>
			</router-link>
		</div>
		<router-view :key="$route.fullPath"></router-view>
	</div>
</template>
<script>
	export default {
		name: "SaleHot",
		data() {
			return {
				active: {},
				getOrder: false,
				order: false
			}
		},
		methods: {
			changeOrder() {  //保证只有激活路由才有后面的升序或降序图标
				setTimeout(()=>{
					let icon = document.querySelectorAll('.icon')
					let list = []
					for (let item of icon) {
						if (item.parentNode.parentNode.className !== 'good-sort-item router-link-exact-active router-link-active') {
							list.push(item)
						} else {
							this.active = item
						}
					}
					for (let item of list) {
						item.style.visibility = 'hidden'
					}
					this.active.style.visibility = 'visible'
					//找到排序
					//修改排序  同时修改数据
					this.active.children.forEach((item)=>{
						if(item.style.display == 'none'){  //找到了display为none的元素
							item.style.display = 'inline-block'
						}else{
							item.style.display = 'none'
						}
					})
				},10)
			}
		},
		created() {
			this.$nextTick(() => {
				let icon = document.querySelectorAll('.icon')
				let list = []
				for (let item of icon) {
					if (item.parentNode.parentNode.className !== 'good-sort-item router-link-exact-active router-link-active') {
						list.push(item)
					} else {
						this.active = item
					}
				}
				for (let item of list) {
					item.style.visibility = 'hidden'
				}
				this.active.style.visibility = 'visible'
			})
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
		position: relative;
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

	.icon {
		visibility: hidden;
	}
</style>
