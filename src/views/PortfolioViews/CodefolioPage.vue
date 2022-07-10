<template>
  <div class="main-content">
    <div class="info-container">
      <div :class="moreInfoToggled ? 'info-container-card' : 'info-container-card-hidden'">
        <div v-if="showFragContent" class="frag-content">
          <img class="info-container-card-header-img" :src="fragHeader"/>
          <div class="info-container-card-container">
            <div class="info-container-card-scrollable-div">
              <div class ="info-container-card-scrollable-div-content">
              <h1>Frag calculator</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus mollitia tempore deleniti culpa adipisci, temporibus magnam quam repellat et optio non ex, suscipit laboriosam assumenda. Corrupti veritatis laborum reiciendis! Deleniti.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus mollitia tempore deleniti culpa adipisci, temporibus magnam quam repellat et optio non ex, suscipit laboriosam assumenda. Corrupti veritatis laborum reiciendis! Deleniti.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus mollitia tempore deleniti culpa adipisci, temporibus magnam quam repellat et optio non ex, suscipit laboriosam assumenda. Corrupti veritatis laborum reiciendis! Deleniti.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus mollitia tempore deleniti culpa adipisci, temporibus magnam quam repellat et optio non ex, suscipit laboriosam assumenda. Corrupti veritatis laborum reiciendis! Deleniti.</p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="showAfasiaContent" class="afasia-content">
          <img class="info-container-card-header-img" :src="fragHeader"/>
          <div class="info-container-card-container">
            <div class="info-container-card-scrollable-div">
              <div class ="info-container-card-scrollable-div-content">
              <h1>AFASIA CONTENT</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus mollitia tempore deleniti culpa adipisci, temporibus magnam quam repellat et optio non ex, suscipit laboriosam assumenda. Corrupti veritatis laborum reiciendis! Deleniti.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus mollitia tempore deleniti culpa adipisci, temporibus magnam quam repellat et optio non ex, suscipit laboriosam assumenda. Corrupti veritatis laborum reiciendis! Deleniti.</p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="showWebscraperContent" class="webscraper-content">
          <img class="info-container-card-header-img" :src="fragHeader"/>
          <div class="info-container-card-container">
            <div class="info-container-card-scrollable-div">
              <div class ="info-container-card-scrollable-div-content">
              // WEBSCRAPER CONTENT
              </div>
            </div>
          </div>
        </div>
        <div v-if="showMoreComingContent" class="more-coming-content">
          <img class="info-container-card-header-img" :src="fragHeader"/>
          <div class="info-container-card-container">
            <div class="info-container-card-scrollable-div">
              <div class ="info-container-card-scrollable-div-content">
              // MORE COMING CONTENT
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="moreInfoToggled ? 'button-and-text-toggled' : 'button-and-text-untoggled'">
        <button @click="toggleInfo" class="info-container-btn">
          <fa class="info-container-btn-icon" :id="moreInfoToggled ? 'arrow-up' : 'arrow-down'" :icon="[ 'fa', 'fa-arrow-right' ]"/>
        </button>
        <div v-if="!moreInfoToggled" class="check-out-more-text">Show</div>
        <div v-if="moreInfoToggled" class="check-out-more-text">Hide</div>
      </div>
    </div>
    <div class="project-container">
      <img class="laptop" :src="codefolioLaptop"/>
      <div class="slider-container">
        <SlideTest @scrolling="getContent()"/>
      </div>
    </div>
  </div>
</template>

<script>
import SlideTest from "../../components/CodefolioProjects/ProjectSlide.vue"
import CodefolioLaptop from "../../assets/codefolio/CodefolioLaptop.png"
import MacWindow from "../../assets/codefolio/MacWindow.png"
import FragContent from "../../assets/codefolio/FragCalculator.png"
import FragHeader from "../../assets/codefolio/FragCalculatorHeader.png"
import WebscraperContent from "../../assets/codefolio/Webscraper.png"
import AfasiaContent from "../../assets/codefolio/Afasia.png"
import MoreComingContent from "../../assets/codefolio/MoreComing.png"
export default {
  components: {
    SlideTest,
  },

  data() {
    return {
      codefolioLaptop: CodefolioLaptop,
      macWindow: MacWindow,
      projectCardContent: [
        WebscraperContent,
        FragContent,
        AfasiaContent,
        MoreComingContent,
      ],
      fragHeader: FragHeader,
      moreInfoToggled: true,
      showFragContent: false,
      showAfasiaContent: false,
      showWebscraperContent: false,
      showMoreComingContent: false,
    }
  },

  mounted() {
    this.getContent();
  },

  methods: {
    getContent() {
      // Re-render component on $emit
      this.$nextTick(() => {
        this.showFragContent = this.$el.querySelector('.carousel__slide--active > .carousel__item').id == 'FragCard';
        this.showAfasiaContent = this.$el.querySelector('.carousel__slide--active > .carousel__item').id == 'AfasiaCard';
        this.showWebscraperContent = this.$el.querySelector('.carousel__slide--active > .carousel__item').id == 'WebscraperCard';
        this.showMoreComingContent = this.$el.querySelector('.carousel__slide--active > .carousel__item').id == 'MoreComingCard';
      });
    },

    toggleInfo() {
      this.getContent();
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
  flex-direction: column;
  align-items: center;
}

.project-container {
  margin: 200px 0 120px 0;
  position: relative;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.slider-container {
  width: 90%;
  max-width: 1800px;
  margin-bottom: 20px;
}

.laptop {
  -moz-user-select: none;  
  -webkit-user-select: none;  
  -ms-user-select: none;  
  -o-user-select: none;  
  user-select: none;
  position: absolute;
  width: 40%;
  margin-top: 50px;
}

.info-container {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info-container-card {
  position: relative;
  opacity: 100%;
  margin: 90px 0 0 0;
  width: 60%;
  max-width: 1100px;
  height: 700px;
  border-radius: 8px;
  box-shadow: 0px 3px 7px 0px rgb(155 155 155 / 20%);
  background: #fffffff5;
  transition: all .1s linear;
  z-index: 1;
}

.info-container-card-hidden {
  position: relative;
  opacity: 0;
  margin: 0 0 0 0;
  width: 60%;
  max-width: 1100px;
  height: 700px;
  border-radius: 8px;
  box-shadow: 0px 3px 7px 0px rgb(155 155 155 / 20%);
  transition: all .1s linear;
  z-index: -1;
}

.info-container-card-header-img {
  display: inline-flex;
  width: 100%;
  border-radius: 8px 8px 0 0;
  flex-direction: row;
  align-items: center;
}

.info-container-card-container {
  height: 500px;
  position: relative;
}

.info-container-card-scrollable-div {
  max-height: 500px;
  overflow: auto;
  border:1px solid red;
}

.info-container-card-scrollable-div-content {
  padding: 5px;
  border:1px solid yellow;
}

.info-container-card h1 {
  font-size: 30px;
  font-family: 'Montserrat', sans-serif;
  color: #212121;
  margin: 25px 0 0 0;
  padding: 0 0px 0 60px;
  transition: all 0.1s linear;
}

.info-container-card p {
  padding: 0 0px 0 0px;
  left: 50%;
  color: rgba(33, 33, 33, 0.75);
  transition: all 0.1s linear;
}

.info-container-card .code-icon {
  margin: -8% 0 0 84%;
  font-size: 60px;
  transition: all 0.1s linear;
}

.button-and-text-toggled {
  position: relative;
  margin-top: -30px;
  transition: all 0.3s ease-in-out;
  z-index: 1;
}

.button-and-text-untoggled {
  position: absolute;
  bottom: -50px;
  transition: all 0.3s ease-in-out;
  z-index: 1;
}

.info-container-btn {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  box-shadow: 2px 4px 8px 0px rgb(0 0 0 / 42%);
  border-style: none;
  transition: all 0.1s ease-in-out;
}

.check-out-more-text {
  font-family: 'Montserrat', sans-serif;
  margin-top: 14px;
}

.info-container-btn:hover {
  cursor: pointer;
  width: 70px;
  height: 70px;
  background: #bfbdbd;
  transition: all 0.1s ease-in-out;
}

.info-container-btn-icon {
  color: #a7a7a7;
  font-size: 20px;
}

.info-container-btn-icon {
  color: #a7a7a7;
  font-size: 20px;
}

#arrow-up {
  transform: rotate(-90deg);
  transition: all 0.5s ease-in-out;
}

#arrow-down {
  transform: rotate(90deg);
  transition: all 0.5s ease-in-out;
}

@media only screen and (max-width: 1100px) { 
  
}
  
</style>