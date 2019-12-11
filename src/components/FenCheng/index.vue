<template>
	<div id="fencheng">
		<header id="header">
			<router-link to="/home" class="back-wrap">
				<i class="iconfont icon-fanhui back"></i>
			</router-link>
			<h4 class="title">分成规则介绍</h4>
		</header>
		<div class="movieWrap">
			<video src=""></video>
		</div>
	</div>
</template>

<script>
	export default {
		name: "FenCheng",
		data() {
			return {
			};
		}
	};
</script>

<style scoped>
	#fencheng {
		width: 100%;
	}

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
</style>
	
