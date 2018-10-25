<template>
    <div class="dashboard">
        <nav-menu></nav-menu>
        <dashboard-header></dashboard-header>
        <router-view>Hi {{userinfo.username}} - {{userToken}}</router-view>
    </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
import dashboardHeader from '../header/header'
import navMenu from '../navMenu/navMenu'
export default {
  name: 'dashboard',
  data () {
    return {}
  },
  components: {
    dashboardHeader,
    navMenu
  },
  computed: {
    ...mapGetters(['userinfo', 'userToken'])
  }
}
</script>

<style lang="stylus" scoped>
.dashboard
    display : flex
    justify-content : flex-start
    flex-direction : row
</style>
