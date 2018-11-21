<template>
  <div class="header">
    <div class="iconfont navShowide" @click="navShowHide" :class="{arrow_left:isShowHide}">&#xec0b;</div>
    <div class="left-menu">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/dashboard' }">{{'Dashboard' | translate}}</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right-menu">
      <el-dropdown class="el-select">
        <span class="el-dropdown-link">
        {{userrole}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-select class="el-select" v-model="value" :placeholder="langauage" @change="changeLang(value)">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {
  mapGetters,
  mapMutations
} from 'vuex'
export default {
  name: 'dashboardHeader',
  data () {
    return {
      isCollapse: true,
      isShowHide: true,
      options: [{
        value: 'cn',
        label: '中文'
      }, {
        value: 'en',
        label: 'English'
      }],
      value: '',
      langauage: 'Change Language'
    }
  },
  created () {
    let langauage = window.localStorage.getItem('X-Language')
    Vue.i18n.set(langauage)
    if (langauage === 'en') {
      this.langauage = 'Change Language'
    } else {
      this.langauage = '选择语言'
    }
  },
  methods: {
    navShowHide () {
      this.isShowHide = !this.isShowHide
      this.set_navShowHide(this.isShowHide)
    },
    changeLang (value) {
      Vue.i18n.set(value)
      if (value === 'en') {
        this.langauage = 'Language'
      } else {
        this.langauage = '语言'
      }
      window.localStorage.setItem('X-Language', value)
    },
    ...mapMutations({
      set_navShowHide: 'SET_NAVSHOWHIDE'
    })
  },
  computed: {
    ...mapGetters(['userinfo', 'userToken', 'userrole'])
  }
}
</script>

<style lang="stylus" scoped>
.header
    height: 50px
    background : #cccccc
    width: 100%
    padding-top: 15px
    flex: 1
    .iconfont.navShowide
        float: left
        padding: 5px
        background: #a1a3a6
        width: 20px
        transform: rotate(270deg)
        cursor: pointer
        color: #ffffff
        transition: background 1s
    .iconfont.navShowide.arrow_left
        transform: rotate(90deg)
        background: #464547
    .left-menu
      float: left
      margin-top: 8px
      margin-left: 8px
    .right-menu
      float: right
      width: 300px
      border: 1px solid #000
      .el-select
        width: 35%
        float: right
        padding-right: 8px

</style>
