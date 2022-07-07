<template>
  <div class="divider-container">
    <div class="divider-mobile"><p>{{ message }}</p></div>
    <div class="divider-text"><p>{{ message }}</p></div>
    <div @click="goUp()" class="divider-top">
      <div class="divider-top-visible"></div>
    </div>
    <div @click="goDown()" class="divider-bottom">
      <div class="divider-bottom-visible"></div>
    </div>
  </div>
</template>>

<script>
export default {
  props: {
    message: String,
  },

  data() {
    return {
    }
  },

  methods: {
    goUp() {
      let pageHeight = 0;
      switch(this.message) {
        case "ABOUT":
          pageHeight = 0;
          break;
        case "PORTFOLIO":
          pageHeight = 700;
          break;      
        case "CONTACT":
          pageHeight = 3950;
          break;
        default:
          pageHeight = 0;
      }
      window.scroll({top:pageHeight, left:0, behavior: 'smooth'});
    },

    goDown() {
      let pageHeight = 0;
      switch(this.message) {
        case "ABOUT":
          pageHeight = 3950;
          break;
        case "PORTFOLIO":
          pageHeight = 4750;
          break;      
        case "CONTACT":
          pageHeight = 6000;
          break;
        default:
          pageHeight = 0;
      }
      window.scroll({top:pageHeight, left:0, behavior: 'smooth'});
    }
  },
}
</script>

<style scoped>
.divider-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 150px;
  width: 150px;
}
.divider-text {
  padding-bottom: 16px;
  pointer-events: none;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #FFFFFF;
  z-index: 2;
}
.divider-top {
  position: absolute;
  border-radius: 100%;
  height: 150px;
  width: 150px;
  z-index: 1;
}
.divider-top-visible {
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  background-color: #282828;
  width: 100%;
  height: 50%;
}
.divider-bottom {
  position: absolute;
  margin-top: 150px;
  border-radius: 100%;
  height: 150px;
  width: 150px;
  z-index: 1;
}
.divider-bottom-visible {
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
  background-color: #282828;
  width: 100%;
  height: 50%;
}
.divider-top-visible:hover {
  background-color: #dbc6c6;
  transition: background-color .1s ease-in-out;
  cursor: pointer;
}
.divider-bottom-visible:hover {
  visibility: visible;
  background-color: #dbc6c6;
  transition: background-color .1s ease-in-out;
  cursor: pointer;
}

p {
  display: flex;
  justify-content: center;
  margin-top: 0px;
}

/* Mobile CSS */
@media only screen and (max-width: 1100px) {
  .divider-mobile {
    display: flex;
    justify-content: center;
  }
  .divider-mobile p {
    margin-bottom: 0;
    margin-top: 0;
  }
  .divider-container {
    height: 100px;
    width: 100px;
    margin-top: -50px;
  }

  .divider-mobile {
    position: absolute;
    border-radius: 100%;
    height: 100px;
    width: 100px;
    background-color: #dbc6c6;


    justify-content: space-around;
    align-items: center;
    pointer-events: none;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #FFFFFF;
    z-index: 2;
  }

  .divider-text {
    display: none;
  }

  .divider-top {
    display: none;
  }

  .divider-bottom {
    display: none;
  }
}
</style>