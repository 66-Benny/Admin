<template>
    <div class="header">
        <div class="iconfont navShowide" @click="navShowHide" :class="{arrow_down:isShowHide}">&#xec0b;</div>
         {{ 'No Data To Show' | translate }}
        <el-select v-model="value" :placeholder="langauage" @change="changeLang(value)">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
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
        value: 'zh',
        label: '中文'
      }, {
        value: 'en',
        label: 'English'
      }],
      value: '',
      langauage: '语言'
    }
  },
  created () {
    Vue.i18n.set('en')
  },
  methods: {
    navShowHide () {
      this.isShowHide = !this.isShowHide
      this.set_navShowHide(this.isShowHide)
    },
    changeLang (value) {
      console.log(value)
    },
    ...mapMutations({
      set_navShowHide: 'navShowHide'
    })
  },
  computed: {
    ...mapGetters(['userinfo', 'userToken'])
  }
}
</script>

<style lang="stylus" scoped>
.header
    height: 100px
    background : #cccccc
    width: 100%
    .iconfont.navShowide
        margin: 15px 0 0
        padding: 5px
        background: #a1a3a6
        width: 20px
        transform: rotate(180deg)
        cursor: pointer
        color: #ffffff
        transition: background 1s
    .iconfont.navShowide.arrow_down
        transform: rotate(90deg)
        background: #464547

</style>
