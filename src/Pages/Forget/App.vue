<template>
	<div id="forget">
		<header id="header">
			<a href="http://localhost:8080/login" class="back-wrap">
				<i class="iconfont icon-fanhui back"></i>
			</a>
			<h4 class="title">注册</h4>
		</header>
		<div class="main">
			<form class="from-wrap">
				<div class="from-input">
					<div class="tel-wrap">
						<div class="tel-table">
							<span class="tel-text">手机号</span>
							<span class="tel-addNum">+86</span>
						</div>
						<div class="tel-input">
							<input type="tel" placeholder="输入手机号" v-model="userPhone" />
						</div>
					</div>
					<div class="captcha">
						<mt-field v-model="smsCode" placeholder="输入短信验证码">
							<mt-button @click.prevent="setSmsCode()" v-show="show" v-preventReClick class="send-captcha">{{smsCodeTest}}</mt-button>
							<span v-show="!show" class="send-captcha time-captcha">{{count}} s后重发</span>
						</mt-field>
					</div>
				</div>
				<div class="from-password">
					<mt-field label="新密码" placeholder="输入密码" type="password" v-model="userPassword"></mt-field>
					<mt-field label="确认密码" placeholder="确认输入密码" type="password" v-model="conPassword"></mt-field>
				</div>
				<div class="from-btn">
					<mt-button type="danger" @click.prevent="setRegister()" class="toast">确认提交</mt-button>
				</div>
			</form>
		</div>
	</div>
</template>
<script>
	import {
		Toast
	} from "mint-ui";
	export default {
		name: "Forget",
		data() {
			return {
				show: true,
				count: "",
				timer: null,
				userPhone: null,
				userPassword: "",
				conPassword: "",
				smsCode: null,
				smsCodeTest: "获取验证码"
			};
		},
		methods: {
			setSmsCode() {
				if (this.userPhone) {
					let reg = /^1[3|4|5|7|8][0-9]{9}$/; //手机号验证规则
					if (reg.test(this.userPhone)) {
						//           this.$axios
						//             .get("sms/createSmsCode?userPhone=" + this.userPhone)
						this.$api.user.createSmsCode(this.userPhone)
							.then(res => {
								console.log(res);
								const TIME_COUNT = 30;
								if (!this.timer) {
									this.count = TIME_COUNT;
									this.show = false;
									let time = setInterval(() => {
										if (this.count > 0 && this.count <= TIME_COUNT) {
											this.count--;
										} else {
											this.show = true;
											this.smsCodeTest = "重新获取验证码";
											clearInterval(time);
										}
									}, 1000);
								}
							});
					} else {
						Toast("手机号有误，请重填");
					}
				} else {
					Toast("请输入手机号");
				}
			},
			setRegister() {
				if (this.userPhone) {
					if (this.smsCode) {
						if (this.userPassword) {
							if (this.conPassword) {
								if (/^1[3|4|5|7|8][0-9]{9}$/.test(this.userPhone)) {
									//判断手机号是否正确
									if (
										/[A-z0-9]{8,20}/.test(this.userPassword) &&
										/[0-9]+/.test(this.userPassword) &&
										/[A-z]+/.test(this.userPassword)
									) {
										//判断密码是否符合规范,两种情况
										if (this.userPassword == this.conPassword) {
											//判断两次密码是否一致
											//                     this.$axios({
											//                       url: "sms/retrievePasswordEdit",
											//                       method: "post",
											//                       data: {
											//                         smsCode: this.smsCode,
											//                         userPhone: this.userPhone,
											//                         userPassword: this.userPassword
											//                       },
											//                       transformRequest: [
											//                         function(data) {
											//                           let ret = "";
											//                           for (let key in data) {
											//                             ret +=
											//                               encodeURIComponent(key) +
											//                               "=" +
											//                               encodeURIComponent(data[key]) +
											//                               "&";
											//                           }
											//                           return ret;
											//                         }
											//                       ],
											//                       headers: {
											//                         "Content-Type": "application/x-www-form-urlencoded"
											//                       }
											//                     })
											let data = {
												smsCode: this.smsCode,
												userPhone: this.userPhone,
												userPassword: this.userPassword
											}
											this.$api.user.retrievePasswordEdit(data).then(res => {
												// console.log(res);
												// let data = res.data;
												if (res.code == 200) {
													//注册成功,跳转到登陆页面
													Toast(res.message);
													window.location.href = 'http://localhost:8080/login'
												} else {
													//注册失败，弹出失败原因
													Toast(res.message);
												}
											});
										} else {
											Toast("两次密码不一致，请重填");
										}
									} else {
										Toast("密码必须是8-20之间，同时包含数字和字母");
									}
								} else {
									Toast("手机号有误，请重填");
								}
							} else {
								Toast("输入确认密码");
							}
						} else {
							Toast("输入密码");
						}
					} else {
						Toast("请输入短信验证码");
					}
				} else {
					Toast("请输入手机号");
				}
			}
		}
	};
</script>
<style scoped>
	header {
		height: 5rem;
		background: #f30213;
		width: 100%;
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
		width: 100%;
		position: relative;
		background-color: #ffe;
	}

	.from-input {
		background-color: #ffffff;
	}

	.tel-wrap {
		min-height: 48px;
		display: flex;
		align-items: center;
		border-bottom: 0.5px solid #eeefff;
		padding-left: 10px;
	}

	.tel-table {
		height: 40px;
		line-height: 40px;
		text-align: center;
		padding-right: 20px;
		border-right: 0.5px solid #eeeeee;
	}

	.tel-text {
		color: #000000;
		font-size: 1.6rem;
	}

	.tel-addNum {
		color: orange;
		display: inline-block;
		padding-left: 5px;
		font-size: 1.2rem;
	}

	.tel-input {
		padding-left: 10px;
	}

	.tel-input input {
		outline: none;
		border: none;
		font-size: 1.6rem;
	}

	.captcha {
		min-height: 48px;
	}

	.captcha .send-captcha {
		color: #ffffff;
		height: 30px;
		background-color: #f30213;
	}

	.captcha .time-captcha {
		display: inline-block;
		padding: 0 15px;
		line-height: 30px;
		border-radius: 3px;
	}

	.from-password {
		margin-top: 20px;
	}

	.from-btn {
		margin-top: 50px;
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.from-btn button {
		width: 92%;
		background-color: #f30213;
	}

	/* 弹出 */
	.mint-popup {
		position: fixed;
		background: #aaa;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 0);
		padding: 10px;
		font-size: 1.2rem;
		font-weight: 600;
	}

	.v-modal {
		background: #fff !important;
	}
</style>
