<template>
    <header class="header-container">
      <div style="width: 100%">
        <div class="topnav">
          <ul>
            <li class="topnav-li"><router-link to="/about">about</router-link></li>
            <li class="topnav-li"><router-link to="/artfolio">artfolio</router-link></li>
            <li class="topnav-li"><router-link to="/codefolio">codefolio</router-link></li>
            <li class="topnav-li"><router-link to="/github">github</router-link></li>
            <li class="topnav-li"><router-link to="/contact">contact</router-link></li>
          </ul>
        </div>
        <button class="hamburger-menu-button">HAMBURGARE</button>
        <div class="topnav-hamburger">
          <ul>
            <li class="topnav-li-hamburger"><router-link to="/about">about</router-link></li>
            <li class="topnav-li-hamburger"><router-link to="/artfolio">artfolio</router-link></li>
            <li class="topnav-li-hamburger"><router-link to="/codefolio">codefolio</router-link></li>
            <li class="topnav-li-hamburger"><router-link to="/github">github</router-link></li>
            <li class="topnav-li-hamburger"><router-link to="/contact">contact</router-link></li>
          </ul>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: 'NavBar',
    data() {
      return { }
  },
  
  methods: {
    hamburgerMenuDropdown() {
    }
  },
}
</script>

<style scoped>
.header-container {
  width: 100%;
  height: 86px;
  background-color: #000000;
  box-shadow: 0px 6px 14px 6px #9b9b9b;
}

.hamburger-menu-button {
  display: none;
}

.topnav-hamburger {
  display: none;
}

.topnav {
  float: right;
  margin-top: 15px;
  margin-right: 78px;
}

.topnav-li
{
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
  padding: 10px 12px 10px 12px;
}

a {
  padding-top: 2px;
  text-decoration: none;
  color: #FFFFFF;
}

@media only screen and (max-width: 1100px) {
  .topnav {
    display: none;
  }

  .hamburger-menu-button {
    display: inline-flex;
    position: absolute;
    right: 15px;
    top: 20px;
  }

  .topnav-hamburger {
    display: inline-flex;
    position: absolute;
    width: 140px;
    height: 300px;
    right: 0;
    top: 80px;
    display: inline-flex;
    background-color: #000000;
    z-index: 1;
  }
 
  .topnav-li-hamburger {

  }

}

</style>