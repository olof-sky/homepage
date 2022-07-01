<template>
  <NavBar></NavBar>
  <WelcomePage class="component"></WelcomePage>
  <PageDivider class="page-divider" :message="'ABOUT'"></PageDivider>
  <WelcomePage class="component"></WelcomePage>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import PageDivider from "./components/PageDivider.vue"
import WelcomePage from "./views/WelcomePage.vue"

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    NavBar,
    PageDivider,
    WelcomePage,
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

  .divider-container {
    width: 200px;
    margin-top: -100px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }

  .component {
    height: 1000px;
    box-shadow: 0px 5px 8px 3px rgba(155, 155, 155, 0.3);
  }

  html, body{ 
    background-color: #F6F6F6;
    color: #2c3e50;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  @media only screen and (max-width: 1100px) {
    .main-content {
    }

    .component {
      height: 1200px;
    }
  }
</style>
