<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <!-- <p class="login-tip">输入任意用户名和密码即可</p> -->
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ userName, password }) {
      this.handleLogin({ userName, password }).then(res => {
        this.getUserInfo().then(res => {
          this.$router.push({
            name: this.$config.homeName
          })
        })
      })
    }

    // handleSubmit(loginInfo){
    //   this.$auth.login({
    //     data:{
    //       'username':loginInfo.username,
    //       'password':loginInfo.password,
    //       'rememberMe':true
    //     },
    //     success:function(result){
    //       if(result.data.returnCode === 200){
    //         localStorage.socket_token = result.data.returnData.socketToken
    //         sessionStorage.socket_token = result.data.returnData.socketToken
    //       }else{
    //         if(result.data.returnMsg && result.data.returnMsg !== 'Bad credentials'){
    //           this.$error(result.data.returnMsg,3)
    //         }else{
    //           this.$error('用户名或密码错误！请重试！',3)
    //         }
    //         throw new Error('登录发生错误')
    //       }
    //     },
    //     error:function(result){
    //       this.$Message.error(result.data.returnMsg)
    //     },
    //     rememberMe:true,
    //     redirect:'/',
    //     fetchUser:true
    //   })
    // }
  }
}
</script>

<style>

</style>
