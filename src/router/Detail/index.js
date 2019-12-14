export default {
	path: '/detail/:detail_id',
	component: () => import('@/components/Details'),
	children: [
		{
			path: 'detail',
			component: ()=> import('@/components/Details/DetailEvaluate/detail.vue')
		},
		{
			path: 'evaluate',
			component: ()=> import('@/components/Details/DetailEvaluate/evaluate.vue')
		},{
			path: '/detail/:detail_id',
			redirect: '/detail/:detail_id/detail'
		}
	]
}
