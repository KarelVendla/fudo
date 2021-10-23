<template>
  <div id="app">
    <TheNavbar/>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar';

export default {
  name: 'app',
  components: { TheNavbar },
};
</script>

<style lang="scss">
 /* @import './assets/scss/variables';*/
  @import '../node_modules/bootstrap/scss/bootstrap';
  @import '../node_modules/bootstrap-vue/dist/bootstrap-vue.min.css';
  @import './assets/scss/app';
</style>
