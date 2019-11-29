import Vue from 'vue'
import VueRouter from 'vue-router'

import homeRouter from './Home'
import menuRouter from './Menu'
import mineRouter from './Mine'
import newRouter from './New'
import shopCarRouter from './ShopCar'

Vue.use(VueRouter)

const routes = [
	homeRouter,
	menuRouter,
	mineRouter,
	newRouter,
	shopCarRouter,
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
