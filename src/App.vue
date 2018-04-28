<template>
  <div id="app">
    <NavBar/>
    <transition name="page-transition">
      <router-view>
      </router-view>
    </transition>
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

.page-transition-enter-active {
    animation: enter 1s;
    animation-delay: .5s;
    opacity: 0;
}

.page-transition-leave-active {
  animation: leave .5s;
}

@keyframes enter {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes leave {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(30px);
    opacity: 0;
  }
}

</style>
