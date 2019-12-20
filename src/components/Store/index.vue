<template>
	<div id="store">
		<header ref="header">
			
		</header>
	</div>
</template>

<script> 
export default{
	name: 'Store',
	data(){
		return {
			store: {}
		}
	},
	methods:{
		init(){
			let data = {
				merchantId: this.$route.query.merchantId,
				userId: window.localStorage.getItem('userId')
			}
			this.$api.store.getMerchantCustomByMerchantId(data)
			.then(res=>{
				if(res.msg == 'SUCCESS'){
					this.store = res.data
					this.art()
				}
			})
		},
		art(){  //装修店铺
			this.$refs.header.style.background = this.store.merchantCustom.customColor
		}
	},
	created() {
		this.$nextTick(()=>{
			this.init()
		})
		
	}
}
</script>

<style scoped>
	#store{
		
	}
	header{
		height: 150px;
		width: 100%;
	}
</style>
