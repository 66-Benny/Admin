<template>
    <div class="header">
       this is header
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'dashboardHeader',
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['userinfo', 'userToken'])
  }
}
</script>

<style lang="stylus" scoped>

</style>
