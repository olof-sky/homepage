<template>
  <div class="main-content">
    <div class="art-code-container">
      <router-link to="/artfolio"><h1 id="art">ART</h1></router-link>
      <div id="art-code-middle-line"></div>
      <router-link to="/codefolio"><h1 id="code">CODE</h1></router-link>
    </div>
  </div>
</template>

<script>


export default {
  components: {
  },

  data() {
    return {
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
  font-weight: 700;
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
  width: 10px;
  margin: 80px;
  background-color: #000000;
}

@media only screen and (max-width: 1100px) { 
  
}
  
</style>