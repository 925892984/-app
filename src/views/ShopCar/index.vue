<template>
	<div id="shop-car">
		<Header title="购物车"></Header>
		<Navbar></Navbar>
	</div>
</template>

<script>
	import Header from '@/components/Header/index.vue'
	import Navbar from '@/components/Navbar/index.vue'
	export default{
		name: 'ShopCar',
		components:{
			Header,
			Navbar
		}
	}
</script>

<style>
</style>
