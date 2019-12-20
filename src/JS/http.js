/** 
 * 封装axios
 */
import axios from 'axios';

//设置默认地址
axios.defaults.baseURL = process.env.VUE_APP_URL
//设置请求超时
axios.defaults.timeout = 10000;
//post请求头的设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//请求拦截器
axios.interceptors.request.use(
	config => {
		// 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
		// 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
		const token = window.localStorage.getItem('token');
		if (token) {
			config.headers = {
				"Authorization": "Bearer " + window.localStorage.getItem('token'),
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}
		return config;
	},
	error => {
		return Promise.error(error);
	})
export default {
	get: function(url, params) {
		return new Promise((resolve, reject) => {
			axios.get(url, params)
				.then(res => {
					resolve(res.data);
				})
				.catch(err => {
					reject(err.data)
				})
		})
	},
	post: function(url, params) {
		return new Promise((resolve) => {
			axios({
					url: url,
					method: 'post',
					data: params,
					transformRequest: [
						function(data) {
							let ret = "";
							for (let key in data) {
								ret +=
									encodeURIComponent(key) +
									"=" +
									encodeURIComponent(data[key]) +
									"&";
							}
							return ret;
						}
					]
				})
				.then(res => {
					resolve(res.data);
				})
			// 				.catch(err => {
			// 					// reject(err.data)
			// 				})
		})
	}
}
