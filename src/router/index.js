import Vue from 'vue'
import VueRouter from 'vue-router'

import homeRouter from './Home'
import menuRouter from './Menu'
import mineRouter from './Mine'
import newRouter from './New'
import shopCarRouter from './ShopCar'
import detailsRouter from './Detail'
// import searchRouter from './Search'

Vue.use(VueRouter)

const routes = [
	homeRouter,
	menuRouter,
	mineRouter,
	newRouter,
	shopCarRouter,
	detailsRouter,
	// searchRouter,
	{
		path: '/searchGood',
		component: () => import('@/components/Search')
	},
	{
		path: '/selectGoods',
		component: () => import('@/components/SelectGoods'),
		children: [{
				path: 'sales',
				component: () => import('@/components/SelectGoods/Filter/Sales.vue')
			},
			{
				path: 'price',
				component: () => import('@/components/SelectGoods/Filter/Price.vue')
			},
			{
				path: 'shared',
				component: () => import('@/components/SelectGoods/Filter/Shared.vue')
			},
			{
				path: '/selectGoods',
				redirect: '/selectGoods/sales'
			}
		]
	},
	{
		path: '/searchResult',
		component: () => import('@/components/SearchResult'),
		children: [{
				path: 'sales',
				component: () => import('@/components/SearchResult/Filter/Sales.vue')
			},
			{
				path: 'price',
				component: () => import('@/components/SearchResult/Filter/Price.vue')
			},
			{
				path: 'shared',
				component: () => import('@/components/SearchResult/Filter/Shared.vue')
			},
			{
				path: '/searchResult',
				redirect: '/searchResult/sales'
			}
		]
	},{
		path: '/fencheng',
		component: ()=> import('@/components/FenCheng')
	},{
		path: '/set',
		component: ()=> import('@/components/Set')
	},
	{
		path: '/myOrder',
		component: ()=> import('@/components/MyOrder'),
		children: [
			{
				path: 'all',
				component: ()=> import('@/components/MyOrder/index.vue')
			},
			{
				path: 'awaitPay',
				component: ()=> import('@/components/MyOrder/index.vue')
			},
			{
				path: 'awaitGoods',
				component: ()=> import('@/components/MyOrder/index.vue')
			},
			{
				path: 'awaitTakeGoods',
				component: ()=> import('@/components/MyOrder/index.vue')
			}
		]
	},{
		path: '/homeMenu',
		component: ()=> import('@/components/HomeMenu/Menu'),
		children: [{
				path: 'sales',
				component: () => import('@/components/HomeMenu/Menu/Filter/Sales.vue')
			},
			{
				path: 'price',
				component: () => import('@/components/HomeMenu/Menu/Filter/Price.vue')
			},
			{
				path: 'shared',
				component: () => import('@/components/HomeMenu/Menu/Filter/Shared.vue')
			},
			{
				path: '/homeMenu',
				redirect: '/homeMenu/sales'
			}
		]
	},
	{
		path: '/changePassWord',
		component: ()=> import('@/components/ChangePSWord')
	},{
		path: '/adminAddress',
		component: ()=> import('@/components/AdminAddress')
	},{
		path: '/newAdderss',
		component: ()=> import('@/components/AdminAddress/newAddress.vue')
	},{
		path: '/store',
		component: ()=> import('@/components/Store')
	},{
		path: '/service',
		component: ()=> import('@/components/Store')
	},
	{
		path: '/*',
		redirect: '/home'
	}

]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
