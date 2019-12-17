/**
 * slide模块接口列表
 */
import http from '@/JS/http.js'

const slide = {
	//首页轮播图图片集合
	slideImg (){
		return http.get('slide/getIndexSlide')
	}
}

export default slide;