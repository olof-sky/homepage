<template>
  <NavBar/>
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {

  name: 'App',
  data () {
    return {
    }
  },

  components: {
    NavBar,
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    position: relative;
    width: 100%;
  }

  html, body{ 
    color: #2c3e50;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body::-webkit-scrollbar       {background-color:#fff;width:16px}
  body::-webkit-scrollbar-track {background-color:#fff}
  body::-webkit-scrollbar-thumb {background-color:#babac0;border-radius:16px;border:4px solid #fff}

  @media only screen and (max-width: 1100px) {
  }
</style>
