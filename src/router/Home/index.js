export default {
	path: '/home',
	component: ()=>import('@/views/Home'),
	children: [
		{
			path: 'details/:detail_id',
			component: ()=>import('@/components/Details')
		}
	]
}