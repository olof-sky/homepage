<template>
  <div class="main-content">
    <div class="project-container">
      <img class="laptop" :src="codefolioLaptop"/>
    <div class="slider-container">
      <SlideTest/>
    </div>
      <button @click="check" class="mobile-text-container-btn">
        <fa class="mobile-text-container-btn-icon" :id="moreInfoToggled ? 'arrow-left' : 'arrow-right'" :icon="[ 'fa', 'fa-arrow-right' ]"/>
      </button>
      <div class="check-out-more-text">Toggle info</div>
      <div class="mac-window-card">
        <div class="mac-window-card-header">
          <div class="mac-window-card-header-dots">
            <div class="mac-window-card-header-dot"></div>
            <div class="mac-window-card-header-dot"></div>
            <div class="mac-window-card-header-dot"></div>
          </div>
        </div>
        <div class="mac-window-card-text">
          <h1>Info..</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlideTest from "../../components/CodefolioProjects/ProjectSlide.vue"
import CodefolioLaptop from "../../assets/codefolio/CodefolioLaptop.png"
import MacWindow from "../../assets/codefolio/MacWindow.png"
import FragContent from "../../assets/codefolio/FragCalculator.png"
import Webscraper from "../../assets/codefolio/Webscraper.png"
import AfasiaContent from "../../assets/codefolio/Afasia.png"
import MoreComing from "../../assets/codefolio/MoreComing.png"

export default {
  components: {
    SlideTest,
  },

  data() {
    return {
      codefolioLaptop: CodefolioLaptop,
      macWindow: MacWindow,
      projectCardContent: [
        Webscraper,
        FragContent,
        AfasiaContent,
        MoreComing,
      ],
      moreInfoToggled: false,
    }
  },

  methods: {
    check() {
      if (this.$el.querySelector('.carousel__slide--active > .carousel__item').id == 'FragCard') {
        console.log("UES");
      }
      if (this.moreInfoToggled == true) {
        this.moreInfoToggled = false;
      } else this.moreInfoToggled = true;
    }
  }
}
</script>

<style scoped>
.main-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  
}

h1 {
  margin: 0;
  padding: 10px 10px 10px 10px;
  font-size: 90px;
  font-family: sans-serif;
}

.mac-window-card {
  display: none;
  top: 585px;
  position: absolute;
  width: 40%;
  max-width: 600px;
  height: 200px;
  border-radius: 8px;
  box-shadow: 0px 3px 7px 0px rgb(155 155 155 / 20%);
  background: #ffffff52;
  transition: all .3s linear;
}

.mac-window-card-header {
  display: inline-flex;
  width: 100%;
  height: 40px;
  border-radius: 8px 8px 0 0;
  background: #00000033;
  flex-direction: row;
  align-items: center;
}

.mac-window-card-header-dots {
  display: flex;
  margin-left: 10px;
}

.mac-window-card-header-dot {
  margin-left: 10px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: white;
}

.mac-window-card h1 {
  font-size: 40px;
  margin: 25px 0 0 0;
  padding: 0 60px 0 60px;
  transition: all 0.1s linear;
}

.mac-window-card p {
  padding: 0 60px 0 60px;
  left: 50%;
  color: rgba(33, 33, 33, 0.75);
  transition: all 0.1s linear;
}

.mac-window-card .code-icon {
    margin: -8% 0 0 84%;
    font-size: 60px;
    transition: all 0.1s linear;
}

.slider-container {
  width: 90%;
  margin-bottom: 20px;
}

.project-container {
  height: 800px;
  margin-bottom: 700px;
  position: relative;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.laptop {
  -moz-user-select: none;  
  -webkit-user-select: none;  
  -ms-user-select: none;  
  -o-user-select: none;  
  user-select: none;
  position: absolute;
  width: 800px;
  margin-top: 50px;
}

.mac-window {
  position: absolute;
  width: 100%;
}

.mac-window-content {
  margin-top: 15px;
  width: 100%;
}

.check-out-more-text {
  position: absolute;
  bottom: 4px;
}

#arrow-left {
  transform: rotate(-90deg);
  transition: all 0.5s ease-in-out;
}

#arrow-right {
  transform: rotate(90deg);
  transition: all 0.5s ease-in-out;
}

.mobile-text-container-btn {
  position: absolute;
  bottom: 45px;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  box-shadow: 2px 4px 8px 0px rgb(0 0 0 / 42%);
  border-style: none;
  transition: all 0.1s ease-in-out;
}

.mobile-text-container-btn:hover {
  cursor: pointer;
  width: 70px;
  height: 70px;
  background: #bfbdbd;
  transition: all 0.1s ease-in-out;
}

.mobile-text-container-btn-icon {
  color: #a7a7a7;
  font-size: 20px;
}

.mobile-text-container-btn-icon {
  color: #a7a7a7;
  font-size: 20px;
}

@media only screen and (max-width: 1100px) { 
  
}
  
</style>