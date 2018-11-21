<template>
    <div class="navMenu">
        <el-menu default-active="1-4-1"
                 class="el-menu-vertical-demo"
                 :collapse="navShowHide">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <router-link to="/RoleAll">
                        <el-menu-item index="1-1">RoleAll</el-menu-item>
                    </router-link>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <router-link to="/RoleAdmin">RoleAdmin</router-link>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <router-link to="/RoleEditor">RoleEditor</router-link>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  name: 'navMenu',
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
  },
  computed: {
    ...mapGetters(['navShowHide'])
  }
}
</script>

<style lang="stylus" scoped>
.navMenu {
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;

    }
}
</style>
