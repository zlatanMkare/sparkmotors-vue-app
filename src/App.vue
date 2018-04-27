<template>
  <div id="app">
    <NavBar/>
    <router-view>
    </router-view>
    <Footer/>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import Footer from './components/Footer.vue'
  export default {
    components: {
      NavBar,
      Footer
    }
  }
</script>

<style>
#app {
  background-color: #fff;
}
</style>
