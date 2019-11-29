export default {
	path: '/new',
	component: ()=>import('@/views/New'),
	children: [
		{
			path: 'saleHot',
			component: ()=>import('@/components/News/SaleHot'),
			children: [
				{
					path: 'sales',
					component: ()=>import('@/components/News/Filter/Sales.vue')
				},
				{
					path: 'price',
					component: ()=>import('@/components/News/Filter/Price.vue')
				},
				{
					path: 'shared',
					component: ()=>import('@/components/News/Filter/Shared.vue')
				}
			] 
		},
		{
			path: 'recommendNew',
			component: ()=>import('@/components/News/Recommend'),
			children: [
				{
					path: 'sales',
					component: ()=>import('@/components/News/Filter/Sales.vue')
				},
				{
					path: 'price',
					component: ()=>import('@/components/News/Filter/Price.vue')
				},
				{
					path: 'shared',
					component: ()=>import('@/components/News/Filter/Shared.vue')
				}
			] 
		},
		{
			path: '/new',
			redirect: '/new/saleHot/sales'
		}
	],
}