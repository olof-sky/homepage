<template>
    <div class="main-content">
      <div class="about-cards">
        <div class ="about-card" :id="!showScreen ? 'screen-hidden' : 'screen-shown'">
          <div class="mac-window-card">
            <div class="mac-window-card-header">
              <div class="mac-window-card-header-dots">
                <div class="mac-window-card-header-dot"></div>
                <div class="mac-window-card-header-dot"></div>
                <div class="mac-window-card-header-dot"></div>
              </div>
            </div>
            <div class="mac-window-card-text">
              <h1>Developer</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Magnam ipsam sequi animi dolor explicabo odio officia, fugiat veniam sit magni?</p>
              <p>Alias similique, libero omnis laborum repudiandae rerum reprehenderit! Voluptatem, fugiat.
                Fugiat veniam sit magni? Alias similique, libero omnis laborum repudiandae rerum reprehenderit! Voluptatem, fugiat.</p>
            </div>
            <div class="code-icon">
              <h2>&lt;/&gt;</h2>
            </div>
          </div>
          <img class="image" :src="screenLeft"/>
        </div>      
        <div class ="about-card" :id="!showLaptop ? 'laptop-hidden' : 'laptop-shown'">
          <div class="laptop-art-container">
            <img @click="toggleImg('1')" :class="imageOneToggled ? 'image-1-toggled' : 'image-1'" :src="imageOne"/>
            <img @click="toggleImg('2')" :class="imageTwoToggled ? 'image-2-toggled' : 'image-2'" :src="imageTwo"/>
            <img @click="toggleImg('3')" :class="imageThreeToggled ? 'image-3-toggled' : 'image-3'" :src="imageThree"/>
          </div>
          <img class="image" :src="laptopRight"/>
        </div>      
        <div class ="about-card" :id="!showMobile ? 'mobile-hidden' : 'mobile-shown'">

          <img class="image" :src="mobileLeft"/>
        </div>
      </div>
    </div>
</template>

<script>
import ScreenLeft from '../../assets/ScreenLeft.png'
import LaptopRight from '../../assets/LaptopRight.png'
import MobileLeft from '../../assets/MobileLeft.png'
import ImageOne from '../../assets/artworks/img-1.png'
import ImageTwo from '../../assets/artworks/img-2.png'
import ImageThree from '../../assets/artworks/img-3.png'
export default {

  components: {

  },

  data() {
    return {
      screenLeft: ScreenLeft,
      laptopRight: LaptopRight,
      mobileLeft: MobileLeft,
      imageOne: ImageOne,
      imageTwo: ImageTwo,
      imageThree: ImageThree,
      imageOneToggled: false,
      imageTwoToggled: false,
      imageThreeToggled: false,
      windowTop: window.top.scrollY,
      showScreen: false,
      showLaptop: false,
      showMobile: false,
    }
  },

  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },

  methods: {
    toggleImg(img) {
      switch(img) {
        case '1':
          if (this.imageOneToggled) {
            this.imageOneToggled = false;
          } else { 
            this.imageOneToggled = true;
            this.imageTwoToggled = false;
            this.imageThreeToggled = false;
            }
        break;
        case '2':
          if (this.imageTwoToggled) {
            this.imageTwoToggled = false;
          } else { 
            this.imageOneToggled = false;
            this.imageTwoToggled = true;
            this.imageThreeToggled = false;
            }
        break;
        case '3':
          if (this.imageThreeToggled) {
            this.imageThreeToggled = false;
          } else { 
            this.imageOneToggled = false;
            this.imageTwoToggled = false;
            this.imageThreeToggled = true;
            }
        break;
        default:
      }
    },

    onScroll() {
      this.windowTop = window.top.scrollY
    }
  },

  watch: {
    windowTop() {
      if (this.windowTop > 500) {
        this.showScreen = true;
      }
      else {this.showScreen = false}

      if (this.windowTop > 1300) {
        this.showLaptop = true;
      }
      else {this.showLaptop = false}

      if (this.windowTop > 1900) {
        this.showMobile = true;
      }
      else {this.showMobile = false}
    }
  },
}
</script>

<style scoped>
.main-content {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.about-cards {
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1800px;
  margin-top: 150px;
  margin-bottom: 250px;
}

.about-card {
  padding: 350px 0 200px 0;
}

.image {
  height: 60%;
  width: 60%;
}


/* SCREEN CARD */

#screen-hidden {
  margin-left: -100%;
  align-self: flex-start;
  opacity: 0;
  transition: all .7s ease-in-out;
}

#screen-shown {
  margin-left: 0;
  align-self: flex-start;
  opacity: 100;
  transition: all .7s ease-in-out;
}

.mac-window-card {
  z-index: -1;
  text-align: left;
}

#screen-hidden .mac-window-card {
  position: absolute;
  margin: 100px 0 0 120px;
  width: 0%;
  max-width: 700px;
  height: 400px;
  border-radius: 8px;
  background: #00000000;
  transition: all 0.7s linear;
}

#screen-shown .mac-window-card {
  position: absolute;
  margin: -250px 0 0 35%;
  width: 40%;
  max-width: 600px;
  height: 400px;
  border-radius: 8px;
  box-shadow: 0px 10px 7px 0px rgb(155 155 155 / 20%);
  background: #00000003;
  transition: all 0.7s linear;
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

#screen-shown .mac-window-card h1 {
  margin: 25px 0 0 0;
  padding: 0 60px 0 60px;
  font-size: 40px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.1s linear;
}

#screen-shown .mac-window-card p {
  padding: 0 60px 0 60px;
  left: 50%;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.1s linear;
}

#screen-shown .mac-window-card .code-icon {
    margin: -1% 0 0 84%;
    font-size: 60px;
    transition: all 0.1s linear;
}


/* LAPTOP CARD */

#laptop-hidden {
  margin-top: 100px;
  margin-right: -100%;
  align-self: flex-end;
  opacity: 0;
  transition: all .7s ease-in-out;
}

#laptop-shown {
  margin-top: 100px;
  margin-right: 0;
  align-self: flex-end;
  opacity: 100;
  transition: all .7s ease-in-out;
}

#laptop-hidden .laptop-art-container {
  position: absolute;
  opacity: 0%;
  margin: 0px 0 0 0px;
  width: 90%;
  max-width: 900px;
  height: 600px;
  border-radius: 8px;
  transition: all 0.7s ease-in-out;
}

#laptop-shown .laptop-art-container {
  position: absolute;
  opacity: 100%;
  margin: -330px 0 0 -285px;
  width: 90%;
  max-width: 900px;
  height: 600px;
  border-radius: 8px;
  transition: all 0.7s ease-in-out;
}

#laptop-hidden .image-1 {
  position: absolute;
  top: -11px;
  left: 200px;
  height: 53%;
  opacity: 66%;
  box-shadow: 15px 16px 7px 0px rgb(155 155 155 / 20%);
  transition: all 0.3s ease-in-out;
}

.image-1 {
  transform: rotate(6deg);
  position: absolute;
  top: -11px;
  left: -36px;
  height: 53%;
  opacity: 66%;
  z-index: 2;
  box-shadow: 15px 16px 7px 0px rgb(155 155 155 / 20%);
  transition: all 0.3s ease-in-out;
}

.image-1:hover {  
  cursor: pointer;
  transform: rotate(0deg);
  height: 55%;
  opacity: 100%;
  transition: all 0.3s ease-in-out;
}

.image-1-toggled {  
  position: absolute;
  cursor: pointer;
  transform: rotate(0deg);
  top: 0;
  left: 10%;
  height: 80vh;
  opacity: 100%;
  z-index: 3;
  transition: all 0.3s ease-in-out;
}

.image-2 {
  position: absolute;
  transform: rotate(355deg);
  top: 7%;
  left: 29%;
  height: 70%;
  z-index: 1;
  box-shadow: 15px 16px 7px 0px rgb(155 155 155 / 20%);
  transition: all 0.3s ease-in-out;
}

.image-2:hover {
  position: absolute;
  cursor: pointer;
  transform: rotate(360deg);
  height: 72%;
  box-shadow: 15px 16px 7px 0px rgb(155 155 155 / 20%);
  transition: all 0.3s ease-in-out;
}

.image-2-toggled {
  position: absolute;
  cursor: pointer;
  transform: rotate(360deg);
  top: 0;
  left: 10%;
  height: 80vh;
  opacity: 100%;
  box-shadow: 15px 16px 7px 0px rgb(155 155 155 / 20%);
  z-index: 2;
  transition: all 0.3s ease-in-out;
} 

#laptop-hidden .image-3 {
  position: absolute;
  transform: rotate(357deg);
  bottom: 20%;
  right: 2%;
  height: 0%;
  opacity: 0%;
  box-shadow: 15px 16px 7px 0px rgb(155 155 155 / 20%);
  transition: all 0.3s ease-in-out;
}

.image-3 {
  position: absolute;
  transform: rotate(357deg);
  bottom: 10%;
  right: 2%;
  height: 50%;
  opacity: 88%;
  z-index: 1;
  box-shadow: 15px 16px 7px 0px rgb(155 155 155 / 20%);
  transition: all 0.3s ease-in-out;
}

.image-3:hover {  
  cursor: pointer;
  transform: rotate(360deg);
  height: 58%;
  opacity: 100%;
  transition: all 0.3s ease-in-out;
}

.image-3-toggled {  
  position: absolute;
  cursor: pointer;
  transform: rotate(360deg);
  bottom: 0;
  right: 10%;
  height: 80vh;
  opacity: 100%;
  z-index: 3;
  transition: all 0.3s ease-in-out;
}

/* MOBILE CARD */

#mobile-hidden {
  margin-left: -100%;
  align-self: flex-start;
  opacity: 0;
  transition: all .7s ease-in-out;
}

#mobile-shown {
  margin-left: 150px;
  align-self: flex-start;
  opacity: 100;
  transition: all .7s ease-in-out;
}

@media only screen and (max-width: 1100px) { 
  
}
  
</style>