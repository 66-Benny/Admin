<template>
    <div class="header">
        <div class="iconfont navShowide" @click="navShowHide" :class="{arrow_down:isShowHide}">&#xec0b;</div>
    </div>
</template>

<script>
import {
  mapGetters,
  mapMutations
} from 'vuex'
export default {
  name: 'dashboardHeader',
  data () {
    return {
      isCollapse: true,
      isShowHide: true
    }
  },
  methods: {
    navShow () {
      this.set_navShowHide(false)
    },
    navHide () {
      this.set_navShowHide(true)
    },
    navShowHide () {
      this.isShowHide = !this.isShowHide
      this.set_navShowHide(this.isShowHide)
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
