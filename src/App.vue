<template>
  <div id="app">
    <navigation></navigation>
    <!-- <heroImage></heroImage> -->
    <router-view />
  </div>
</template>

<script>
  import navigation from '@/components/navigation.vue'
  import heroImage from '@/components/heroImage.vue'
  // import aboutRachel from '@/components/AboutRachel.vue'

  export default {
    name: 'app',
    components: {
      navigation,
      heroImage,
      // aboutRachel
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>