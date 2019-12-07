export default {
	path: '/home',
	component: () => import('@/views/Home'),
// 	children: [{
// 		path: 'searchGood',
// 		components: {
// 			default: () => import('@/views/Home'),
// 			searchGood: () => import('@/components/Search')
// 		},
// 	}, {
// 		path: 'detail/:detail_id',
// 		components: {
// 			default: () => import('@/views/Home'),
// 			detail: () => import('@/components/Details')
// 		},
// 		props: {
// 			detail: true
// 		}
// 	}]
}
