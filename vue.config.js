module.exports = {
	publicPath: '/',
	outputDir: 'dist',
	devServer: {
		open: true,
		proxy: {
			'/api': {
				target: 'http://101.37.157.218:8090/NewShopApi/',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/api': ''
				}
			},
		},
	},
	pages: {
		index :{
			entry: 'src/main.js',
		},
    login: {
      // page 的入口
      entry: 'src/Pages/Login/main.js',
      // 模板来源
      template: 'public/login.html',
      // 在 dist/index.html 的输出
      filename: 'login.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Login Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'login']
    },
    register: {
      // page 的入口
      entry: 'src/Pages/Register/main.js',
      // 模板来源
      template: 'public/register.html',
      // 在 dist/index.html 的输出
      filename: 'register.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Register Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'register']
    },
    forget: {
      // page 的入口
      entry: 'src/Pages/Forget/main.js',
      // 模板来源
      template: 'public/forget.html',
      // 在 dist/index.html 的输出
      filename: 'forget.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Forget Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'forget']
    }
  }
}