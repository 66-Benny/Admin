<template>
  <div id="app">
    <div class="nav">
      <nav-menu></nav-menu>
      <Header></Header>
    </div>
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import navMenu from './view/navMenu/navMenu'
import Header from './view/header/header'
export default {
  name: 'App',
  components: {
    navMenu,
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
.nav {
  display: flex;
}
</style>
