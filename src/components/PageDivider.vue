<template>
  <div class="divider-container">
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
          pageHeight = 1000;
          break;      
        case "CONTACT":
          pageHeight = 2000;
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
          pageHeight = 1100;
          break;
        case "PORTFOLIO":
          pageHeight = 2100;
          break;      
        case "CONTACT":
          pageHeight = 3100;
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
    height: 200px;
    width: 200px;
  }

  .divider-text {
    justify-content: space-around;
    align-items: center;
    pointer-events: none;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    z-index: 1;
  }

  .divider-top {
    position: absolute;
    border-radius: 100%;
    height: 200px;
    width: 200px;
  }

  .divider-top-visible {
    border-top-right-radius: 100px;
    border-top-left-radius: 100px;
    background-color: #E0826F;
    width: 100%;
    height: 50%;
  }

  .divider-bottom {
    position: absolute;
    margin-top: 200px;
    border-radius: 100%;
    height: 200px;
    width: 200px;
  }

  .divider-bottom-visible {
    border-bottom-right-radius: 100px;
    border-bottom-left-radius: 100px;
    background-color: #E0826F;
    width: 100%;
    height: 50%;
  }

  .divider-top-visible:hover {
    background-color: #a86355;
    transition: background-color .1s ease-in-out;
  }

  .divider-bottom-visible:hover {
    visibility: visible;
    background-color: #a86355;
    transition: background-color .1s ease-in-out;
  }

</style>