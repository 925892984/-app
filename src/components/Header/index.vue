<template>
	<header id="header">
		<h4 class="title">{{title}}</h4>
	</header>
</template>

<script>
	export default {
		name: 'Header',
		props: {
			title: {
				type: String,
				default: '新店'
			}
		}
	}
</script>

<style scoped>
	header {
		position: fixed;
		top: 0;
		left: 0;
		height: 5rem;
		background: #F30213;
		width: 100%;
		z-index: 1001;
	}
	header .title{
		display: inline-block;
		height: 5rem;
		width: 100%;
		line-height: 5rem;
		text-align: center;
		font-size: 2rem;
		color: #ffffff;
	}
</style>
