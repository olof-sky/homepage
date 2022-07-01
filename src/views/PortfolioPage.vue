<template>
  <div class="main-content">
    <div class="art-code-container">
      <h1 id="art">ART</h1>
      <div id="art-code-middle-line"></div>
      <h1 id="code">CODE</h1>
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
h1 {
  font-size: 64px;
  font-weight: 700;
  line-height: 78px;
  font-family: 'Montserrat', sans-serif;
  color: #000000;
  position: absolute;
}

.main-content {
  height: 1000px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.art-code-container {
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 80px;
}

#art {
  margin-right: 280px;
}

#code {
  margin-left: 320px;
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