export default {
	path: '/new',
	component: () => import('@/views/New'),
		children: [{
				path: 'saleHot',
				component: () => import('@/components/News/SaleHot'),
				children: [{
						path: 'sales',
						component: () => import('@/components/News/SaleHot/Filter/Sales.vue')
					},
					{
						path: 'price',
						component: () => import('@/components/News/SaleHot/Filter/Price.vue')
					},
					{
						path: 'shared',
						component: () => import('@/components/News/SaleHot/Filter/Shared.vue')
					},
					{
						path: '/new/saleHot',
						redirect: '/new/saleHot/sales'
					}
				]
			},
			{
				path: 'recommendNew',
				component: () => import('@/components/News/Recommend'),
				children: [{
						path: 'sales',
						component: () => import('@/components/News/Recommend/Filter/Sales.vue')
					},
					{
						path: 'price',
						component: () => import('@/components/News/Recommend/Filter/Price.vue')
					},
					{
						path: 'shared',
						component: () => import('@/components/News/Recommend/Filter/Shared.vue')
					},
					{
						path: '/new/recommendNew',
						redirect: '/new/recommendNew/sales'
					}
				]
			},
			{
				path: '/new',
				redirect: '/new/saleHot/sales'
			}
		],
// 	childern: [{
// 			path: 'saleHot/sales',
// 			component: () => import('@/components/News/SaleHot')
// 		},
// 		{
// 			path: 'saleHot/price',
// 			component: () => import('@/components/News/SaleHot')
// 		},
// 		{
// 			path: 'saleHot/shared',
// 			component: () => import('@/components/News/SaleHot')
// 		},
// 		{
// 			path: 'recommendNew/sales',
// 			component: () => import('@/components/News/SaleHot')
// 		},
// 		{
// 			path: 'saleHot/price',
// 			component: () => import('@/components/News/SaleHot')
// 		},
// 		{
// 			path: 'saleHot/shared',
// 			component: () => import('@/components/News/SaleHot')
// 		},
// 		{
// 			path: '/new',
// 			redirect: '/new/saleHot/sales'
// 		}
// 	]
	
}
