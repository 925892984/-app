import Vue from 'vue'
import VueRouter from 'vue-router'

import homeRouter from './Home'
import menuRouter from './Menu'
import mineRouter from './Mine'
import newRouter from './New'
import shopCarRouter from './ShopCar'
import detailsRouter from './Detail'

Vue.use(VueRouter)

const routes = [
	homeRouter,
	menuRouter,
	mineRouter,
	newRouter,
	shopCarRouter,
	detailsRouter,
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
		name: 'Search',
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
