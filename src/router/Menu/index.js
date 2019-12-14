export default {
	path: '/menu',
	component: ()=>import('@/views/Menu'),
	children: [
		{
			path: 'item/:pid',
			component: ()=> import('@/components/MenuListItem')
		},{
			path: '/menu',
			redirect: '/menu/item/1'
		}
	]
}