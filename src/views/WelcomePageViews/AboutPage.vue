<template>
    <div class="main-content">
      <div class="about-cards">
        <div class ="about-card" :id="!showScreen && windowWidth > 1100 ? 'screen-hidden' : 'screen-shown'">
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
          <img class="image" id="screen-left" :src="screenLeft"/>
        </div>      
        <div class ="about-card" :id="!showLaptop && windowWidth > 1100 ? 'laptop-hidden' : 'laptop-shown'">
          <div class="laptop-art-container">
            <img @click="toggleImg('1')" :class="imageOneToggled ? 'image-1-toggled' : 'image-1'" :src="imageOne"/>
            <img @click="toggleImg('2')" :class="imageTwoToggled ? 'image-2-toggled' : 'image-2'" :src="imageTwo"/>
            <img @click="toggleImg('3')" :class="imageThreeToggled ? 'image-3-toggled' : 'image-3'" :src="imageThree"/>
          </div>
          <img class="image" id="laptop-right" :src="laptopRight"/>
        </div>      
        <div :class="!showLaptop && windowWidth > 1100 ? 'art-text-container-hidden' : 'art-text-container-shown'">
          <h1>Hobby artist</h1>
          <p>As a teenager i had a brief period where i drawed comics. This led me on to try other medias and artforms, one of them being watercolor. 
            The years went and i rarely painted, until the day my wife handed me some paper and encouraged me to bring my old hobby back to life.</p>
        </div>
        <div class="about-card" :id="!showMobile && windowWidth > 1100 ? 'mobile-hidden' : 'mobile-shown'">
          <div class="mobile-and-splash">
            <img class="image" id="mobile-left" :src="mobileLeft"/>
            <img class="splash" :src="colorSplash"/>
          </div>
          <div :id="aboutMeToggled ? 'facts-large' : 'facts-small'" :class="!showMobile ? 'mobile-text-container-hidden' : 'mobile-text-container-shown'">
            <div class="mobile-text-container-facts">
              <button @click="toggleAboutMeCard" class="mobile-text-container-btn">
                <fa class="mobile-text-container-btn-icon" :id="aboutMeToggled ? 'arrow-left' : 'arrow-right'" :icon="[ 'fa', 'fa-arrow-right' ]"/>
              </button>
              <div :id="aboutMeToggled ? 'random-facts-hidden' : 'random-facts-shown'">
                <h1>Random facts</h1>
                  <ul>
                    <li>Coffee is breakfast</li>
                    <li>I love gaming</li>
                    <li>Design freak</li>
                    <li>Like keeping houseplants</li>
                    <li>I spend to much time in front of screens</li>
                  </ul>
                <p id="about-btn-text">More about me...</p>
              </div>
              <div class="more-facts" :id="aboutMeToggled ? 'more-facts-shown' : 'more-facts-hidden'">
                <h1>More?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Magnam ipsam sequi animi dolor explicabo odio officia, fugiat veniam sit magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Magnam ipsam sequi animi dolor explicabo odio officia, fugiat veniam sit magni?</p>
                <p>Alias similique, libero omnis laborum repudiandae rerum reprehenderit! Voluptatem, fugiat.
                Fugiat veniam sit magni? Alias similique, libero omnis laborum repudiandae rerum reprehenderit! Voluptatem, fugiat.</p>
                <p id="about-btn-text">...Less about me</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import ScreenLeft from '../../assets/ScreenLeft.png'
import LaptopRight from '../../assets/LaptopRight.png'
import MobileLeft from '../../assets/MobileLeft.png'
import ColorSplash from '../../assets/ColorSplash.png'
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
      colorSplash: ColorSplash,
      imageOne: ImageOne,
      imageTwo: ImageTwo,
      imageThree: ImageThree,
      imageOneToggled: false,
      imageTwoToggled: false,
      imageThreeToggled: false,
      showScreen: false,
      showLaptop: false,
      showMobile: false,
      aboutMeToggled: false,
      windowTop: window.top.scrollY,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      activeUrl: '',
    }
  },

  mounted() {
    window.addEventListener("scroll", this.onScroll)
    if (window.location.pathname == '/about') {
      this.showScreen = true;
      this.showLaptop = true;
      this.showMobile = true;
    }
  },

  methods: {
    toggleAboutMeCard() {
      if(this.aboutMeToggled) {
        this.aboutMeToggled = false;
      } else this.aboutMeToggled = true;
    },

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
      this.windowTop = window.top.scrollY;
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
    }
  },

  watch: {
    windowTop() {
      if (this.windowTop > 500 || this.windowTop + this.windowHeight > 500 || this.windowWidth < 1100 || window.location.pathname == '/about') {
        this.showScreen = true;
      }
      if (this.windowTop > 1300 || this.windowTop + this.windowHeight > 2700 || this.windowWidth < 1100 || window.location.pathname == '/about') {
        this.showLaptop = true;
      }
      if (this.windowTop > 2200 || this.windowTop + this.windowHeight > 3600 || this.windowWidth < 1100 || window.location.pathname == '/about') {
        this.showMobile = true;
      }
    }
  },
}
</script>

<style scoped>
.main-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

h1 {
  font-size: 40px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
}

p {
  font-size: 15px;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.7;
}

.about-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1800px;
  margin-top: 350px;
  margin-bottom: 150px;
}

.about-card {
  padding: 150px 0 200px 0;
}

.image {
  height: 60%;
  width: 60%;
}

.mobile-and-splash {
  height: 100%;
  width: 100%;
}

.splash { 
  position: absolute;
  top: 30px;
  margin-left: -115px;
}


/* SCREEN CARD */

#screen-hidden {
  margin-left: -100%;
  align-self: flex-start;
  opacity: 0;
  transition: all .3s ease-in-out;
}

#screen-shown {
  margin-left: 0;
  align-self: flex-start;
  opacity: 100;
  transition: all .3s ease-in-out;
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
  transition: all .3s linear;
}

#screen-shown .mac-window-card {
  position: absolute;
  margin: -250px 0 0 700px;
  width: 40%;
  max-width: 600px;
  height: 400px;
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

#screen-shown .mac-window-card h1 {
  margin: 25px 0 0 0;
  padding: 0 60px 0 60px;
  transition: all 0.1s linear;
}

#screen-shown .mac-window-card p {
  padding: 0 60px 0 60px;
  left: 50%;
  color: rgba(33, 33, 33, 0.75);
  transition: all 0.1s linear;
}

#screen-shown .mac-window-card .code-icon {
    margin: -8% 0 0 84%;
    font-size: 60px;
    transition: all 0.1s linear;
}


/* LAPTOP CARD */

#laptop-hidden {
  margin-top: 350px;
  margin-right: -100%;
  padding-bottom: 0;
  align-self: flex-end;
  opacity: 0;
  transition: all .3s ease-in-out;
}

#laptop-shown {
  margin-top: 350px;
  margin-right: 0%;
  padding-bottom: 0;
  align-self: flex-end;
  opacity: 100;
  transition: all .3s ease-in-out;
}

#laptop-hidden .laptop-art-container {
  position: absolute;
  opacity: 0%;
  margin: 0px 0 0 0px;
  width: 90%;
  max-width: 900px;
  height: 600px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}

#laptop-shown .laptop-art-container {
  position: absolute;
  opacity: 100%;
  margin: -330px 0 0 -285px;
  width: 90%;
  max-width: 900px;
  height: 600px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}

#laptop-hidden .image-1 {
  position: absolute;
  top: -11px;
  left: 200px;
  height: 53%;
  opacity: 66%;
  box-shadow: 7px 7px 7px 0px rgb(155 155 155 / 20%);
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
  box-shadow: 7px 7px 7px 0px rgb(155 155 155 / 20%);
  transition: all 0.3s ease-in-out;
}

.image-1:hover {  
  cursor: pointer;
  transform: rotate(0deg);
  height: 55%;
  opacity: 100%;
  transition: all 0.3s ease-in-out;
  box-shadow: 7px 7px 7px 0px rgb(155 155 155 / 20%);
}

.image-1-toggled {  
  position: absolute;
  cursor: pointer;
  transform: rotate(0deg);
  top: 0;
  left: 40%;
  height: 80vh;
  opacity: 100%;
  z-index: 3;
  transition: all 0.3s ease-in-out;
  box-shadow: 7px 7px 7px 0px rgb(155 155 155 / 20%);
}

.image-2 {
  position: absolute;
  transform: rotate(355deg);
  top: 7%;
  left: 29%;
  height: 70%;
  z-index: 1;
  box-shadow: 7px 7px 7px 0px rgb(155 155 155 / 20%);
  transition: all 0.3s ease-in-out;
}

.image-2:hover {
  position: absolute;
  cursor: pointer;
  transform: rotate(360deg);
  height: 72%;
  box-shadow: 7px 7px 7px 0px rgb(155 155 155 / 20%);
  transition: all 0.3s ease-in-out;
}

.image-2-toggled {
  position: absolute;
  cursor: pointer;
  transform: rotate(360deg);
  top: 0;
  left: 40%;
  height: 80vh;
  opacity: 100%;
  box-shadow: 7px 7px 7px 0px rgb(155 155 155 / 20%);
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
  box-shadow: 7px 7px 7px 0px rgb(155 155 155 / 20%);
  transition: all 0.3s ease-in-out;
}

.image-3 {
  position: absolute;
  transform: rotate(357deg);
  bottom: 10%;
  right: 2%;
  height: 50%;
  opacity: 95%;
  z-index: 1;
  box-shadow: 7px 7px 7px 0px rgb(155 155 155 / 20%);
  transition: all 0.3s ease-in-out;
}

.image-3:hover {  
  cursor: pointer;
  transform: rotate(360deg);
  height: 58%;
  opacity: 100%;
  transition: all 0.3s ease-in-out;
  box-shadow: 7px 7px 7px 0px rgb(155 155 155 / 20%);
}

.image-3-toggled {  
  position: absolute;
  cursor: pointer;
  transform: rotate(360deg);
  right: 10%;
  bottom: 0;
  height: 80vh;
  opacity: 100%;
  z-index: 3;
  transition: all 0.3s ease-in-out;
  box-shadow: 7px 7px 7px 0px rgb(155 155 155 / 20%);
}

.art-text-container-hidden {
  text-align: left;
  padding: 20px;
  opacity: 0;
  width: 30%;
  max-width: 450px;
  transition: all 0.3s ease-in-out;
}

.art-text-container-shown {
  text-align: left;
  padding: 30px 50px 70px 50px;
  opacity: 100%;
  width: 30%;
  max-width: 450px;
  background: #f6f6f652;    
  border-radius: 0px;
  transition: all 0.3s ease-in-out;
}


/* MOBILE CARD */

#mobile-hidden {
  position: relative;
  display: flex;
  margin-top: 150px;
  margin-left: -100%;
  align-self: flex-start;
  opacity: 0;
  transition: all .3s ease-in-out;
}

#mobile-shown {
  position: relative;
  display: flex;
  margin-top: 150px;
  margin-left: 200px;
  align-self: flex-start;
  opacity: 100;
  transition: all .3s ease-in-out;
}

.mobile-text-container-hidden {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 0 0;
  width: 0%;
  max-width: 700px;
  border-radius: 8px;
  background: #00000000;
  transition: all .3s linear;
}

.mobile-text-container-shown {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: -50px 0 0 250px;
    width: 450px;
    border-radius: 8px;
    background: #f6f6f6f0;
    box-shadow: 0px 3px 7px 0px rgb(155 155 155 / 20%);
    transition: all .3s linear;
}

.mobile-text-container-shown h1 {
  margin-top: 40px;
  font-size: 30px;
}

.mobile-text-container-shown p {
  padding: 10px 10% 20px 10%;
  font-size: 15px;
}

.mobile-text-container-facts {
  padding-bottom: 60px;
  width: 100%;
}

.mobile-text-container-facts h1 {
  font-size: 40px;
}

.mobile-text-container-facts ul {
  margin-top: 25px;
  margin-bottom: 45px;
  padding: 0;
}

.mobile-text-container-facts li {
  font-size: 16px;
  padding: 5px;
  padding-bottom: 20px;
  list-style: none;
  font-family: 'Montserrat', sans-serif;
}

#facts-large {
  width: 900px;
  transition: all 0s linear;
}

#facts-small {
  width: 400px;
  transition: all 0s linear;
}

#random-facts-shown {
  display: flex;  
  flex-direction: column;
}

#random-facts-hidden {
  display: none;  
}

#more-facts-shown {
  display: flex;
  flex-direction: column;
}

#more-facts-hidden {
  display: none;
  position: relative;
  flex-direction: column;
}

.mobile-text-container-btn {
  position: absolute;
  bottom: -35px;
  right: -35px;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  box-shadow: 1px 2px 3px 0px rgb(0 0 0 / 10%);
  border-style: none;
  transition: all 0.1s ease-in-out;
}

#arrow-left {
  transform: rotate(-180deg);
  transition: all 0.5s ease-in-out;
}

#arrow-right {
  transition: all 0.5s ease-in-out;
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

#about-btn-text {
  margin: 0;
  padding: 0;
  position: absolute;
  right: 40px;
  bottom: 25px;
  color: #afadad;
  font-size: 12px;
  font-family: monospace;
}

/* Small screen CSS */
@media only screen and (max-width: 1600px) {

  h1 {
    font-size: 33px;
  }

  p {
    font-size: 14px;
  }

  .image {
    height: 50%;
    width: 50%;
  }

  .image-1 {
    left: 56px;
    height: 45%;
  }

  .image-2 {
    left: 37%;
    height: 64%;
  }

  .image-3 {
    height: 35%;
  }
  
  .about-cards {
    width: 100%;
  }
  
  .about-card {
    padding: 150px 0 200px 0;
  }
  
  #screen-shown .mac-window-card[data-v-828a76b8] {
    margin: -250px 0 0 550px;
    height: 400px;
  }

  #screen-shown .mac-window-card .code-icon[data-v-828a76b8] {
    margin: -8% 0 0 84%;
  }

  #screen-shown .mac-window-card h1 {
    font-size: 33px;
  }
  
  #screen-shown .mac-window-card p {
    font-size: 14px;
  }

  #laptop-shown {
    margin-right: -14%;
  }

  #laptop-shown .laptop-art-container {
    max-width: 820px;
    margin: -330px 0 0 -150px;
  }

  #mobile-shown .image {
    height: 60%;
    width: 60%;
  }

  .mobile-text-container-shown {
    max-width: 700px;
  }  
  
  .mobile-text-container-shown h1{
    margin-top: 55px;
  }
}

/* Mobile screen CSS  */
@media only screen and (max-width: 1100px) {
  h1 {
    font-size: 33px;
  }

  h2 {
    margin: 0;
  } 

  p {
    font-size: 14px;
  }

  .image {
    height: 50%;
    width: 50%;
  }

  .image-1 {
    top: 0;
    left: 50%;
    height: 35%;
  }

  .image-2 {
    top: 15%;
    left: 0;
    height: 44%;
    z-index: 2;
  }

  .image-3 {
    left: 37%;
    right: 0;
    top: 43%;
    height: 35%;
  }

  .image-1:hover {
    top: 0;
    left: 50%;
    height: 35%;
  }

  .image-2:hover {
    top: 15%;
    left: 0;
    height: 44%;
    z-index: 2;
  }

  .image-3:hover {
    left: 37%;
    right: 0;
    top: 43%;
    height: 36%;
  }

  .image-1-toggled {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 65%;
    z-index: 3;
  } 

  .image-2-toggled {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 69%;
    z-index: 3;
  } 

  .image-3-toggled {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 65%;
    z-index: 3;
  } 
  
  .about-cards {
    display: flex;
    align-items: flex-start;
    margin-top: 150px;
    margin-bottom: 200px;
    width: 100%;
  }
  
  .about-card {
    padding: 50px 0 50px 0;
    align-self: center;
  }
  
  #screen-left {
    position: relative;
    bottom: 80px;
    right: 35%;
    max-width: 200px;
  }

  #screen-shown {
    align-self: center;
    max-width: 90%;
  }

  #screen-shown .mac-window-card[data-v-828a76b8] {
    position: relative;
    z-index: 1;
    margin: 0 5% 0 5%;
    padding-bottom: 50px;
    width: 90%;
    height: 100%;
    background: #ffffffeb;
  }

  #screen-shown .mac-window-card .code-icon[data-v-828a76b8] {
    right: 0;
    bottom: -50px;
    position: absolute;
  }

  #screen-shown .mac-window-card h1 {
    font-size: 33px;
  }
  
  #screen-shown .mac-window-card p {
    font-size: 14px;
  }

  #laptop-shown {
    align-self: center;
    max-width: 90%;
    margin: 0;
  }

  #laptop-right {
    position: relative;
    bottom: 200px;
    left: 15%;
    height: 65%;
    width: 65%;
    max-width: 500px;
  }

  #laptop-shown .laptop-art-container {
    position: relative;
    z-index: 1;
    margin: 0 5% 0 5%;
    padding-bottom: 40px;
  }

 .art-text-container-shown {
    align-self: center;
    text-align: left;
    padding: 0 0 0 0;
    margin-top: -160px;
    width: 70%;
  }

  #mobile-shown {
    flex-direction: column;
    align-self: center;
    align-items: center;
    width: 90%;
    max-width: 100%;
    margin: 220px 0 270px 0;
  }
  
  .mobile-and-splash {
    display: flex;
    position: relative;
    max-width: 300px;
    margin-top: -56px;
    margin-right: 56px;
  }

  .splash {
    width: 290px;    
    top: -18px;
    margin-left: 10px;
  }

  #mobile-left {
    width: 70px !important;
  }

  #facts-small {
    position: absolute;
    margin: 0 0 19px 0;
    max-width: 75%;
  }

  #facts-large {
    position: relative !important;
    margin: -130px 0 -250px 0;
    max-width: 75%;
  }

  .mobile-text-container-shown {
    padding: 20px;
    background: #ffffffb8;
  }  
  
  .mobile-text-container-shown h1{
    margin: 25px 0 0 0;
    font-size: 33px;
  }

  .mobile-text-container-shown p{
    font-size: 14px;
  }

  #arrow-right {
    transform: rotate(90deg);
  }

  #arrow-left {
    transform: rotate(270deg);
  }
}
  
</style>