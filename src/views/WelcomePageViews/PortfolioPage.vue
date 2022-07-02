<template>
  <div class="main-content">
    <div class="art-code-container">
      <router-link to="/artfolio"><h1 :id="!scrollWatchDisabled ? 'art' : 'art-transition'">ART</h1></router-link>
      <div :id="!scrollWatchDisabled ? 'art-code-middle-line' : 'art-code-middle-line-transition'"></div>
      <router-link to="/codefolio"><h1 :id="!scrollWatchDisabled ? 'code' : 'code-transition'">CODE</h1></router-link>
    </div>
  </div>
</template>

<script>


export default {
  components: {
  },

  data() {
    return {
      windowTop: window.top.scrollY,
      scrollWatchDisabled: false,
    }
  },

  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },

  methods: {
    onScroll() {
      this.windowTop = window.top.scrollY
    }
  },

  watch: {
    windowTop() {
      if (this.windowTop > 1700 && this.windowTop < 2300 && window.innerWidth) {
        this.scrollWatchDisabled = true;
      }

      else (this.scrollWatchDisabled = false);
    }
  },


}
</script>

<style scoped>
.main-content {
  height: 1000px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

h1 {
  font-size: 64px;
  font-weight: 600;
  line-height: 78px;
  font-family: 'Montserrat', sans-serif;
  color: #000000;
  position: absolute;
}

#art {
  transition: font-size .3s ease-in-out;
  transition: margin-right .3s ease-in-out;
}

#code {
  margin-left: 40px;
  transition: font-size .3s ease-in-out;
  transition: margin-left .3s ease-in-out;
}

#code:hover {
  margin-left: 50px;
  font-size: 80px;
  cursor: pointer;
}

#art:hover {
  margin-right: 10px;
  font-size: 80px;
  cursor: pointer;
}

#code-transition:hover {
  margin-left: 50px;
  font-size: 80px;
  cursor: pointer;
}

#art-transition:hover {
  margin-right: 10px;
  font-size: 80px;
  cursor: pointer;
}

#code-transition {
  margin-left: 60px;
  text-decoration: underline;
  text-decoration-color: #E0826F;
  transition: margin-left .7s ease-in-out;
}  

#art-transition {
  margin-right: 15px;
  text-decoration: underline;
  text-decoration-color: #E0826F;
  transition: margin-right .7s ease-in-out;
}

.art-code-container {
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
}

.art-code-container a {
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 60px;
}

#art-code-middle-line {
  height: 200px;
  width: 9px;
  margin: 80px;
  background-color: #000000;
  overflow-y: hidden;
  transition: height 0.4s linear;
}

#art-code-middle-line-transition {
  height: 400px;
  width: 9px;
  margin: 80px;
  background-color: #000000;
  transition: height 0.4s linear;
}

@media only screen and (max-width: 600px) { 
  .main-content {
    height: 800px;
  }

  .art-code-container {
    margin-bottom: 35px;
  }

  h1 {
    font-size: 42px;
    font-weight: 700;
    line-height: 78px;
    font-family: 'Montserrat', sans-serif;
    color: #000000;
    position: absolute;
  }  

  #art {
    transition: margin-right .7s ease-in-out;
  }  

  #code {
    margin-left: 20px;
    transition: margin-left .7s ease-in-out;
  }  

  #code-transition {
    margin-left: 40px;
    text-decoration: underline;
    text-decoration-color: #E0826F;
    transition: margin-left .7s ease-in-out;
  }  

  #art-transition {
    margin-right: 15px;
    text-decoration: underline;
    text-decoration-color: #E0826F;
    transition: margin-right .7s ease-in-out;
  }

  #art-code-middle-line {
    height:150;
    width: 5px;
    margin: 15px;
    background-color: #000000;
    overflow-y: hidden;
    transition: height 0.4s linear;
  }

  #art-code-middle-line-transition {
    height: 400px;
    width: 5px;
    margin: 15px;
    background-color: #000000;
    transition: height 0.4s linear;
  }
}
</style>