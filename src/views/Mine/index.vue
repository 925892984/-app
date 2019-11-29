<template>
	<div id="mine">
		<Header title="我的"></Header>
		<Navbar></Navbar>
	</div>
</template>

<script>
	import Header from '@/components/Header/index.vue'
	import Navbar from '@/components/Navbar/index.vue'
	export default{
		name: 'Mine',
		components:{
			Header,
			Navbar
		}
	}
</script>

<style>
</style>
