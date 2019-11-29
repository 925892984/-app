export default {
	path: '/mine',
	component: ()=>import('@/views/Mine'),
	children: [
		{
			path: 'login',
			component: ()=>import('@/Pages/Login/App.vue')
		}
	]
}