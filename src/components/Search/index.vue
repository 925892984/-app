<template>
	<div id="searchGood">
		<header>
			<div class="search-wrap">
				<form action="javascript:return true" class="input-wrap">
					<input type="search" placeholder="请输入搜索内容" v-model="content" @keydown="search($event)">
				</form>
			</div>
			<div class="cancel" @click.prevent="back()">
				取消
			</div>
		</header>
		<div class="main">
			<div class="search-words-wrap">
				<div class="words-item">
					衣服
				</div>
			</div>
			<p class="clear-history">
				清除搜索记录
			</p>
		</div>

	</div>
</template>

<script>
	// import { Popup } from 'mint-ui';
	export default {
		name: "searchGood",
		data() {
			return {
				content: ''
			};
		},
		methods: {
			back() {
				this.$router.push('/home')
			},
			search(ev) {
				if (ev.keyCode == 13) { //键盘回车的编码是13
					// this.$router.push('/searchResult')
					this.$router.push({
						path: '/searchResult',
						query: {
							content: this.content
						},
					})
				}
			},
		}

	};
</script>

<style scoped>
	header {
		position: fixed;
		top: 0;
		left: 0;
		height: 50px;
		width: 100%;
		background: #f30213;
		display: flex;
		z-index: 1001;
	}

	.search-wrap {
		flex: 1;
	}

	.cancel {
		width: 80px;
		text-align: center;
		line-height: 50px;
		color: orange;
		font-size: 1.4rem;
		font-weight: 400;
	}

	.input-wrap {
		height: 40px;
		width: 98%;
		margin: 5px auto;
		border-radius: 20px;
		overflow: hidden;
		line-height: 40px;
	}

	.input-wrap input {
		box-sizing: border-box;
		width: 100%;
		height: 40px;
		border: none;
		outline: none;
		padding-left: 20px;
		font-size: 1.4rem;
	}

	.main {
		margin-top: 50px;
		width: 100%;
		background-color: #fbfbfb;
		font-size: 1.4rem;
		font-weight: 600;
	}

	.main .search-words-wrap {
		width: 100%;
	}

	.words-item {
		padding-left: 10px;
		height: 40px;
		line-height: 40px;
		background-color: #ffffff;
		border-bottom: 2px solid #fbfbfb;
	}

	.clear-history {
		height: 40px;
		line-height: 40px;
		background-color: #ffffff;
		text-align: center;
	}
</style>
