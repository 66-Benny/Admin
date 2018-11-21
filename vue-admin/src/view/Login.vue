<template>
  <div class="login">
    <el-row :gutter="10">
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="grid-content"></div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="grid-content bg-purple">
          <h2 class="title">系统登录</h2>
          <el-form :label-position="labelPosition" label-width="80px" :model="loginForm" :rules="loginRules" ref="loginForm">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="loginForm.username" type="text" auto-complete="on"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="loginForm.password" type="password" auto-complete="on" @keyup.enter.native="userLogin"></el-input>
            </el-form-item>
            <el-button type="primary" :disabled="loginInfo" @click.native="userLogin">登录</el-button>
          </el-form>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import axios from 'axios'
import {
  isvalidUsername
} from '@/utils/validate'
import { mapMutations } from 'vuex'

export default {
  name: 'Login',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名，例如：admin 或者 editor'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码个数不能小于6位'))
      } else {
        callback()
      }
    }
    return {
      labelPosition: 'left',
      token: '',
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{
          required: true,
          trigger: 'blur',
          validator: validateUsername
        }],
        password: [{
          required: true,
          trigger: 'blur',
          validator: validatePassword
        }]
      }
    }
  },
  computed: {
    loginInfo () {
      if (this.loginForm.username && this.loginForm.password) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    userLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$router.push({
            path: `/RoleAll/`
          })
          this.token = this.loginForm.username + this.loginForm.password
          this.setInfo(this.loginForm)
          this.setToken(this.token)
          this.setRole(this.loginForm.username)
          window.localStorage.setItem('X-token', this.token)
          window.localStorage.setItem('UserRolr', this.loginForm.username)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    ...mapMutations({
      setInfo: 'SET_USERINFO',
      setToken: 'SET_TOKEN',
      setRole: 'SET_ROLE'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.login
  background : #181d4b
  color : #ffffff
  .grid-content
    border-radius: 4px;
    min-height: 36px;
    padding: 20px;
    color : #ffffff
    .title
      text-align: center;
    >>>.el-form-item__label
      color : #ffffff
</style>
