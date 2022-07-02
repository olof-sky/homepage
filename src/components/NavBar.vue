<template>
    <header class="header-container">
      <div v-click-away="onClickAway" style="width: 100%">
        <div class="topnav-home-link">
          <router-link to="/">
            <HomeIconLogo></HomeIconLogo>
          </router-link>
        </div>
        <div class="topnav">
          <ul>
            <li class="topnav-li"><router-link @click="scrollIfWelcomePage('about')" to="/about">about</router-link></li>
            <li class="topnav-li"><router-link to="/artfolio">artfolio</router-link></li>
            <li class="topnav-li"><router-link to="/codefolio">codefolio</router-link></li>
            <li class="topnav-li"><router-link to="/github">github</router-link></li>
            <li class="topnav-li"><router-link @click="scrollIfWelcomePage('contact')" to="/contact">contact</router-link></li>
          </ul>
        </div>
        <div :class="hamburgerMenuVisible ? 'topnav-hamburger-toggled' : 'topnav-hamburger-untoggled'">
          <ul>
            <li class="topnav-li-hamburger"><router-link to="/about">about</router-link></li>
            <li class="topnav-li-hamburger"><router-link to="/artfolio">artfolio</router-link></li>
            <li class="topnav-li-hamburger"><router-link to="/codefolio">codefolio</router-link></li>
            <li class="topnav-li-hamburger"><router-link to="/github">github</router-link></li>
            <li class="topnav-li-hamburger"><router-link to="/contact">contact</router-link></li>
          </ul>
        </div>
        <button @click="toggleHamburgerMenu()" :class="hamburgerMenuVisible ? 'hamburger-menu-button-toggled' : 'hamburger-menu-button-untoggled'">
          <div :class="hamburgerMenuVisible ? 'hamburger-menu-line-dissapear' : 'hamburger-menu-line-untoggled'"></div>
          <div :class="hamburgerMenuVisible ? 'hamburger-menu-line' : 'hamburger-menu-line-untoggled'"></div>
          <div :class="hamburgerMenuVisible ? 'hamburger-menu-line-dissapear' : 'hamburger-menu-line-untoggled'"></div>
        </button>
      </div>
    </header>
</template>

<script>
import HomeIconLogo from '.././components/HomeIconLogo.vue'

export default {
  name: 'NavBar',
  data() {
    return {
      hamburgerMenuVisible: false,
    }
  },

  components: {
    HomeIconLogo,
  },
  
  methods: {
    toggleHamburgerMenu() {
      if (!this.hamburgerMenuVisible) {
        this.hamburgerMenuVisible = true;
      }

      else {
        this.hamburgerMenuVisible = false;
      }
    },

    scrollIfWelcomePage(linkName){
      let pageHeight = 0;
      switch(linkName) {         
        case "about":
          pageHeight = 1000;
          break;
        case "contact":
          pageHeight = 3000;
          break;
        default:
          pageHeight = 0;
      }
      if (window.location.pathname == '/') {
        this.$router.replace('/', {silent:true})
        window.scroll({top:pageHeight, left:0, behavior: 'smooth'});
      }
    },
  
    onClickAway() {
      this.hamburgerMenuVisible = false;
    },

  }
}
</script>

<style scoped>
.header-container {
  width: 100%;
  height: 86px;
  background-color: #000000;
  box-shadow: 0px 6px 14px 6px #9b9b9b;
}

.hamburger-menu-button-untoggled {
  display: none;
}

.hamburger-menu-button-toggled {
  display: none;
}

.topnav-hamburger-untoggled {
  display: none;
}

.topnav-hamburger-toggled {
  display: none;
}

.topnav-home-link {
  position: absolute;
  left: 28px;
  top: 19px;
}

.topnav ul {
  display:flex;  
  list-style:none;
  float: right;
  height: 50px;
  margin-top: 15px;
  margin-right: 78px;
}

.topnav-li
{
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0 6px 0 6px;
  border: 3px solid transparent;
  position: relative;
}

.topnav-li a
{
   padding: 8px 16px 8px 16px;
   border: 3px solid transparent;
   position: relative;
}

.topnav-li:hover
{
   border: 3px solid #FFFFFF;
   position: relative;
}

.topnav-li:before {
   position:absolute;
   top:-10px;
   left:10%;
   content:"";
   display:block;
   height:10px;
   width:80%;
   background:#000000;
}

.topnav-li:after {
   position:absolute;
   bottom:-10px;
   left:10%;
   content:"";
   display:block;
   height:10px;
   width:80%;
   background:#000000;
}

ul {
  height: 70px;
  margin: 0 0 0 0;
}

li {
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  padding: 10px 12px 10px 0px;
  list-style-type: none
}

a {
  padding-top: 2px;
  text-decoration: none;
  color: #FFFFFF;
}

@media only screen and (max-height: 430px) { 
  .topnav-hamburger-toggled {
    position: fixed;
    width: 100% !important;
    height: 100px !important;
    right: 0;
    top: 85px;
    display: inline-flex;
    background-color: #000000;
    overflow: scroll;
    transition: height 0.1s linear;
  }

  .topnav-hamburger-toggled ul {
    display: inline-flex;
    flex-direction: row !important;
    width: 100% !important;
    height: 70px;
    margin: 0 0 0 0;
  }
}

/* Mobile CSS */
@media only screen and (max-width: 1100px) {
  .topnav {
    display: none;
  }

  .header-container {
    position: fixed;
    z-index: 20;
    box-shadow: none;
  }

  .hamburger-menu-line {
    height: 5px;
    width: 100%;
    background-color: #181818;
    transition: background-color 0.1s linear;
  }

  .hamburger-menu-line-untoggled {
    height: 5px;
    width: 100%;
    background-color: #FFFFFF;
    transition: background-color 0.1s linear;
  }

  .hamburger-menu-line-dissapear {
    height: 5px;
    width: 100%;
    background-color: #000000;
  }

  .hamburger-menu-button-untoggled {
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    height: 40px;
    width: 60px;
    right: 45px;
    top: 25px;
    background: none;
    color: inherit;
    border: none;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    z-index: 19;
    transition: width 0.1s linear;
  }

  .hamburger-menu-button-toggled {
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    height: 40px;
    width: 92px;
    right: 45px;
    top: 25px;
    background: none;
    color: inherit;
    border: none;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    z-index: 19;
    transition: width 0.1s linear;
  }

  .topnav-hamburger-toggled {
    display: inline-flex;
    position: fixed;
    width: 180px;
    height: 390px;
    right: 0;
    top: 85px;
    display: inline-flex;
    background-color: #000000;
    overflow: scroll;
    transition: height 0.1s linear;
  }

  .topnav-hamburger-untoggled {
    display: inline-flex;
    position: fixed;
    width: 180px;
    height: 0px;
    right: 0;
    top: 85px;
    display: inline-flex;
    background-color: #000000;
    overflow: scroll;
    transition: height 0.1s linear;
  }
 
  .topnav-li-hamburger {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .topnav-hamburger-toggled ul {
    height: 100%;
    width: 180px;
    padding: 0;
    margin: 0 0 0 0;
    overflow: hidden;
  }

}

</style>