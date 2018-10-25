<template>
    <div class="dashboard">
        <dashboard-header></dashboard-header>
        Hi {{userinfo.username}} - {{userToken}}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import dashboardHeader from '../header/header'
export default {
  name: 'dashboard',
  data () {
    return {}
  },
  components: {
    dashboardHeader
  },
  computed: {
    ...mapGetters(['userinfo', 'userToken'])
  }
}
</script>

<style lang="stylus" scoped>

</style>
