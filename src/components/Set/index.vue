<template>
	<div id="set">
		<header id="header">
			<span to="/" class="back-wrap" @click="()=>{this.$router.go(-1)}">
				<i class="iconfont icon-fanhui back"></i>
			</span>
			<h4 class="title">账户管理</h4>
		</header>
		<div class="main">
			<div class="userMsg-wrap-top">
				<div class="userMsg-item-wrap" @click="openInputWrap($event)">
					<lable class="userMsg-lable">昵称</lable>
					<div class="userMsg-item-right">
						<span class="userMsg-item">{{userInfo.userNickname}}</span>
						<i class="userMsg-item-icon iconfont icon-xiayibu"></i>
					</div>
				</div>
				<div class="userMsg-item-wrap" @click="openInputWrap($event)">
					<lable class="userMsg-lable">姓名</lable>
					<div class="userMsg-item-right">
						<span class="userMsg-item">{{userInfo.userName}}</span>
						<i class="userMsg-item-icon iconfont icon-xiayibu"></i>
					</div>
				</div>
				<div class="userMsg-item-wrap" @click="openInputWrap($event)">
					<lable class="userMsg-lable">邮箱</lable>
					<div class="userMsg-item-right">
						<span class="userMsg-item">{{userInfo.userEmail}}</span>
						<i class="userMsg-item-icon iconfont icon-xiayibu"></i>
					</div>
				</div>
				<div class="userMsg-item-wrap" @click.prevent="changePassword()">
					<lable class="userMsg-lable">修改密码</lable>
					<div class="userMsg-item-right">
						<span class="userMsg-item">******</span>
						<i class="userMsg-item-icon iconfont icon-xiayibu"></i>
					</div>
				</div>
				<div class="userMsg-item-wrap" @click="openInputWrap($event)">
					<lable class="userMsg-lable">手机</lable>
					<div class="userMsg-item-right">
						<span class="userMsg-item">{{userInfo.userPhone}}</span>
						<i class="userMsg-item-icon iconfont icon-xiayibu"></i>
					</div>
				</div>
				<div class="userMsg-item-wrap" @click.prevent="intoAddress()">
					<lable class="userMsg-lable">地址管理</lable>
					<div class="userMsg-item-right">
						<span class="nickname userMsg-item"></span>
						<i class="userMsg-item-icon iconfont icon-xiayibu"></i>
					</div>
				</div>
				<div class="userMsg-item-wrap">
					<lable class="userMsg-lable">版本检查</lable>
					<div class="userMsg-item-right">
						<span class="nickname userMsg-item">当前版本：1.0.0</span>
						<i class="userMsg-item-icon iconfont icon-xiayibu"></i>
					</div>
				</div>
				<div class="userMsg-item-wrap">
					<lable class="userMsg-lable">清除缓存</lable>
					<div class="userMsg-item-right">
						<span class="nickname userMsg-item">131.41MB</span>
						<i class="userMsg-item-icon iconfont icon-xiayibu"></i>
					</div>
				</div>
				<div class="userMsg-item-wrap">
					<lable class="userMsg-lable">重置应用</lable>
					<div class="userMsg-item-right">
						<span class="nickname userMsg-item">勇敢的小强</span>
						<i class="userMsg-item-icon iconfont icon-xiayibu"></i>
					</div>
				</div>

			</div>
			<div class="userMsg-wrap-bottom">
				<div class="userMsg-item-wrap">
					<lable class="userMsg-lable">问题反馈</lable>
					<div class="userMsg-item-right">
						<span class="nickname userMsg-item"></span>
						<i class="userMsg-item-icon iconfont icon-xiayibu"></i>
					</div>
				</div>
				<div class="userMsg-item-wrap">
					<lable class="userMsg-lable">关于新店</lable>
					<div class="userMsg-item-right">
						<span class="nickname userMsg-item"></span>
						<i class="userMsg-item-icon iconfont icon-xiayibu"></i>
					</div>
				</div>
				<div class="userMsg-item-wrap">
					<lable class="userMsg-lable">商家免费入驻</lable>
					<div class="userMsg-item-right">
						<span class="nickname userMsg-item"></span>
						<i class="userMsg-item-icon iconfont icon-xiayibu"></i>
					</div>
				</div>
			</div>
			<div class="outLoginWrap">
				<button class="outLogin" @click="outLogin()">退出登录</button>
			</div>
			<div class="my-popup" v-show="popupVisible" ref="popup">
				<div class="xd">
					<h3 class="xd-title">新店</h3>
					<p class="item-lable">请输入您的{{label}}</p>
				</div>

				<div class="inputWrap">
					<input type="text" v-model="updateMsg">
				</div>
				<div class="btnWrap">
					<button class="cancel btn" @click.prevent="cancelPopup()">取消</button>
					<button class="true btn" @click.prevent="update()">确认</button>
				</div>
			</div>
			<div class="my-popup-show" v-if="popupVisible" @click.prevent="closePopup()"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Set",
		data() {
			return {
				userInfo: {},
				popupVisible: false,
				updateMsg: null,
				label: ''
			};
		},
		methods: {
			getUser(){
				let data = {
					userId: window.localStorage.getItem('userId'),
				}
				this.$api.user.getUserByUserId(data).then(res => {
					console.log(res)
					// let data = res.data;
					if (res.message == "查询成功") {
						this.userInfo = res.data;
					}
				});
			},
			openInputWrap(e) {
				//作用： 修改this.label的值并显示弹出框
				//步骤：1、找到点击的是哪一个元素
				//		2、通过点击的元素找到label元素的值，并将值赋给this.label
				//		3、this.popupVisible = true打开弹出框
				if (e.target.className == 'userMsg-lable') { //label标签
					this.label = e.target.innerText
				} else if (e.target.className == 'userMsg-item-right') {
					this.label = e.target.previousSibling.innerText
				} else {
					this.label = e.target.parentNode.previousSibling.innerText
				}
				this.popupVisible = true
			},
			closePopup() { //关闭弹出框
				var contentWrap = this.$refs.popup
				if (contentWrap) {
					if (!contentWrap.contains(event.target)) {
						//按钮以外的区域
						this.popupVisible = false
					}
				}
			},
			cancelPopup() { //关闭弹出框
				this.popupVisible = false
			},
			update() { //修改用户信息
				if (this.label == '昵称') { //修改昵称
					let data = {
						userId: window.localStorage.getItem('userId'),
						userNickname: this.updateMsg
					}
					this.$api.user.updateUser(data).then(res => {
						// let data = res.data;
						if (res.message == "修改成功") {
							this.popupVisible = false
						}
					});
				}
				if (this.label == '姓名') { //修改昵称
					let data = {
						userId: window.localStorage.getItem('userId'),
						userName: this.updateMsg
					}
					this.$api.user.updateUser(data).then(res => {
						// let data = res.data;
						if (res.message == "修改成功") {
							this.popupVisible = false
						}
					});
				}
				if (this.label == '邮箱') { //修改昵称
					let data = {
						userId: window.localStorage.getItem('userId'),
						userEmail: this.updateMsg
					}
					this.$api.user.updateUser(data).then(res => {
						// let data = res.data;
						if (res.message == "修改成功") {
							this.popupVisible = false
						}
					});
				}
				if (this.label == '手机') { //修改昵称
					let data = {
						userId: window.localStorage.getItem('userId'),
						userPhone: this.updateMsg
					}
					this.$api.user.updateUser(data).then(res => {
						let data = res.data;
						if (data.message == "修改成功") {
							this.popupVisible = false
						} else {
							alert(data.message)
						}
					});
				}
			},
			changePassword() { //修改密码
				this.$router.push('/changePassWord')
			},
			intoAddress() { //地址管理
				this.$router.push('/adminAddress')
			},
			outLogin() {
				window.localStorage.setItem('token', null)
				window.localStorage.setItem('userId', null)
				window.location.href = 'http://localhost:8080/login'
			}
		},
		created() {
			this.getUser()
		}
	};
</script>

<style scoped>
	#set {
		width: 100%;
	}

	header {
		position: fixed;
		height: 5rem;
		background: #f30213;
		width: 100%;
		z-index: 1001;
		top: 0;
		left: 0;
	}

	header .back-wrap {
		position: absolute;
		left: 0;
		top: 0;
		height: 5rem;
		width: 5rem;
		line-height: 5rem;
		text-align: center;
		color: #ffffff;
	}

	header .back {
		font-size: 2rem;
		font-weight: 800;
	}

	header .title {
		display: inline-block;
		height: 5rem;
		width: 100%;
		line-height: 5rem;
		text-align: center;
		font-size: 2rem;
		color: #ffffff;
	}

	.main {
		margin-top: 50px;
		width: 100%;
		background-color: #F7EFFF;
		overflow: hidden;
	}

	.userMsg-wrap-top {
		width: 100%;
		background-color: #ffffff;
	}

	.userMsg-item-wrap {
		height: 50px;
		line-height: 50px;
		margin-left: 10px;
		border-bottom: 1px solid #F7EFFF;
		display: flex;
	}

	.userMsg-item-wrap .userMsg-lable {
		width: 200px;
		font-size: 1.6rem;
		font-weight: 500;
	}

	.userMsg-item-wrap .userMsg-item-right {
		flex: 1;
		position: relative;
		font-size: 1.4rem;
		color: #aaaaaa;
	}

	.userMsg-item {
		position: absolute;
		right: 30px;
	}

	.userMsg-item-icon {
		position: absolute;
		right: 10px;
	}

	.userMsg-wrap-bottom {
		margin-top: 30px;
		width: 100%;
		background-color: #ffffff;
	}

	.outLoginWrap {
		width: 90%;
		height: 40px;
		margin: 15px auto;
	}

	.outLogin {
		width: 100%;
		height: 100%;
		background-color: #F30213;
		outline: none;
		border: none;
		border-radius: 5px;
		font-size: 1.6rem;
		font-weight: 500;
		color: #ffffff;
	}

	/* 弹出框样式 */
	.my-popup {
		width: 80%;
		height: 25%;
		border-radius: 5px;
		position: fixed;
		background: #fff;
		top: 50%;
		left: 50%;
		-webkit-transform: translate3d(-50%, -50%, 0);
		transform: translate3d(-50%, -50%, 0);
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		-webkit-transition: .2s ease-out;
		transition: .2s ease-out;
		z-index: 2001;
	}

	.my-popup .xd {
		height: 50px;
		margin: 20px 0 0 20px;
	}

	.xd .xd-title {
		line-height: 30px;
		font-size: 1.6rem;
	}

	.xd .item-lable {
		line-height: 20px;
		font-size: 1.4rem;
	}

	.inputWrap {
		height: 50px;
		width: 100%;
		border-bottom: 2px solid #008800;
		overflow: hidden;
	}

	.inputWrap input {
		width: 100%;
		height: 100%;
		outline: none;
		border: none;
		font-size: 1.4rem;
	}

	.btnWrap {
		width: 70%;
		height: 50px;
		line-height: 50px;
		margin: 0 auto;
		position: relative;
	}

	.btnWrap .btn {
		color: #008800;
		border: none;
		outline: none;
		background-color: #ffffff;
		font-size: 1.4rem;
	}

	.btnWrap .cancel {
		position: absolute;
		top: 50%;
		left: 0;
	}

	.btnWrap .true {
		position: absolute;
		top: 50%;
		right: 0;
	}

	.my-popup-show {
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		opacity: 0.5;
		background: #000000;
		z-index: 2000;
	}
</style>
