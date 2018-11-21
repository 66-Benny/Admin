<template>
    <div class="content">
         <img :src="getContent.bang_head_pic">
         userrole:{{userrole}}
    </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
import axios from 'axios'
export default {
  name: 'dashboardContent',
  data () {
    return {
      getContent: ''
    }
  },
  created () {
    axios.get('hottopic/browse/topicList').then(response => {
      let resource = response.data.data
      console.log(resource)
      this.getContent = resource
    })
  },
  computed: {
    ...mapGetters(['userrole'])
  }
}
</script>

<style lang="stylus" scoped>
.content
    display: block
</style>
