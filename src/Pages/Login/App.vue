<template>
  <div id="login">
    <header id="header">
      <a href="http://localhost:8080/home" class="back-wrap">
        <i class="iconfont icon-fanhui back"></i>
      </a>
      <h4 class="title">登陆</h4>
    </header>
    <div class="main">
      <form class="from-wrap">
        <div class="from-input">
          <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="userPhone"></mt-field>
          <mt-field label="密码" placeholder="请输入密码" type="password" v-model="userPassword"></mt-field>
        </div>
        <div class="from-btn">
          <mt-button type="danger" @click.prevent="setLogin">登 陆</mt-button>
        </div>
      </form>
      <div class="ID-other">
        <div class="forget-wrap">
          <a href="" class="forget">找回密码</a>
        </div>
        <div class="register-wrap">
          <p class="register-text">还没有账号?</p>
          <a href="http://localhost:8080/register" class="register">立即注册</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  name: "Login",
  data(){
    return {
      userPhone: null,
      userPassword: ''
    }
  },
  methods: {
    setLogin(){
      if(this.userPhone){
        if(this.userPassword){
          if(/^1[3|4|5|7|8][0-9]{9}$/.test(this.userPhone)){
            this.$axios({
              url:'api/login',
              method: 'post',
              data:{"userPhone":this.userPhone,"userPassword":this.userPassword,"signinType":"from"},
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
                      ],
                      headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                      }
            })
            .then(res=>{
              let data = res.data;
              if(data.message == "登录成功"){
								window.localStorage.setItem('token',data.data.userInfo.token)
								window.localStorage.setItem('userId',data.data.userInfo.userId)
                window.location.href = 'http://localhost:8080/home'
              }
            })
          }else{
            Toast('手机号有误')
          }
        }else{
          Toast('请输入密码')
        }
      }else{
        Toast('请输入手机号')
      }
    }
  },
};
</script>
<style scoped>
header {
  height: 5rem;
  background: #f30213;
  width: 100%;
}
header .back-wrap{
  position: absolute;
  left: 0;
  top: 0;
  height: 5rem;
  width: 5rem;
  line-height: 5rem;
  text-align: center;
  color: #ffffff;
}
header .back{
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
.main{
  width: 100%;
  position: relative;
  background-color: #ffe;
}
.from-input{
  background-color: #ffffff;
}
.from-btn{
  margin-top:50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.from-btn button{
  width: 90%;
  background-color: #f30213;
}
.ID-other{
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 400;
}
.ID-other .forget-wrap{
  width: 50%;
  padding-left: 10px;
}
.ID-other .forget{
  color: aqua;
}
.ID-other .register-wrap{
  width: 50%;
  text-align: right;
  padding-right: 10px;
}
.register-wrap p.register-text{
  display: inline-block;
  margin-right: 5px;
}
.register{
  color: #f30213;
}
</style>
