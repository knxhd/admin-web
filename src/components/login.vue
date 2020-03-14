<template>
  <div id="login-container">
    <img id="bg-image" src="~@/assets/loginBg.jpg">
    <div id="login-banner">
      <div class="login-banner">
        <span class="login-title">商品管理系统</span>
        <div class="banner-item">
          <el-input placeholder="用户名" v-model.trim="userName" type="text"></el-input>
        </div>
        <div class="banner-item">
          <el-input placeholder="密码" v-model.trim="password" type="password"></el-input>
        </div>
        <div class="banner-item">
          <div class="login-button">
            <el-button @click="login">登录</el-button>
          </div>
        </div>
        <div class="banner-item">
          <div class="banner-item-a"><a>忘记密码</a></div>
          <div class="banner-item-a"><a>|</a></div>
          <div class="banner-item-a"><a>立即注册</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        userName: "",
        password: "",
        loginMessage:"",
      }
    },
    methods:{
      login() {
        if (this.userName.trim() ==="") {
          this.$message({
            showClose: true,
            message: '请输入用户名!',
            type: 'error',
            duration:1000
          });
          return;
        }
        if (this.password.trim() === "") {
          this.$message({
            showClose: true,
            message: '请输入密码!',
            type: 'error',
            duration:1000
          });
          return;
        }
        //TODO(调用接口进行登录)

        this.$http.get("/athUser/test")
          .then(res => {
            console.log(res.data);
            console.log("进入方法")
          }).catch(error => {
            this.$message.error("服务器出错，请联系管理员!");
            console.log(error);
        })
      }
    },
  }
</script>

<style lang="scss">
  #login-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    #bg-image {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      filter: blur(25px);
      overflow: hidden;
    }

    #login-banner {
      width: 20%;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      .login-banner {
        .login-title {
          font-size: 60px;
          color: white;
          text-shadow:
            1px 1px rgba(64, 158, 255, 0.2),
            2px 2px rgba(64, 158, 255, 0.2),
            3px 3px rgba(64, 158, 255, 0.2),
            4px 4px rgba(64, 158, 255, 0.2),
            5px 5px rgba(64, 158, 255, 0.2),
            6px 6px rgba(64, 158, 255, 0.2);
        }

        width: 100%;

        .banner-item {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
          color: white;

          .login-button {
            width: 100%;
          }

          .banner-item-a {
            margin-left: 4px;
          }

          .banner-item-a:hover {
            cursor: pointer;
          }
        }
      }
    }
  }

  .el-input {
    width: 100%;
  }

  .el-input__inner {
    width: 100%;
    height: 50px;
    border-radius: 25px;
    background: none;
    box-shadow: none;
    color: white;
  }

  .el-input__inner:focus {
    border-color: white;
  }

  .el-button {
    width: 100%;
    height: 50px;
    border-radius: 25px;
    color: #409EFF;
    border: none;
  }
</style>
