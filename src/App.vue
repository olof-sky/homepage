<template>
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Almarai&family=Gothic+A1&family=Questrial&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Almarai&family=Gothic+A1&family=Montserrat:wght@400&family=Questrial&display=swap" rel="stylesheet">
</head>
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
    height: -webkit-fill-available;
  }

  html, body{ 
    color: #2c3e50;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar       {background-color:transparent;width:14px; height:16px}
  ::-webkit-scrollbar-track {background-color:transparent;}
  ::-webkit-scrollbar-thumb {background-color:#e7e7e7;border-radius:16px;border:4px solid #e7e7e7;}

  @media only screen and (max-width: 1100px) {
  }
</style>
