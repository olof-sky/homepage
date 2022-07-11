<template>

<div class="main-content">
<button @click="scrollLeft" class="scroll-btn" id="scroll-left"><h1>&lt;&nbsp;</h1></button>
  <Carousel ref="myCarousel" :settings="settings">
    <Slide @click="toggleSwitch" @touchdown="toggleSwitch" v-for="slide in componentList.length" :key="slide">
      <component :id="this.componentList[slide - 1]" class="carousel__item" v-bind:is="componentList[slide - 1]"></component>
    </Slide>
  </Carousel>
  <button @click="scrollRight" class="scroll-btn" id="carousel__next"><h1>/&gt;</h1></button>
  </div>

</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide, Navigation, Pagination  } from 'vue3-carousel';
import FragCard from './ProjectCards/FragCard.vue'
import MoreComingCard from './ProjectCards/MoreComingCard.vue'
import AfasiaCard from './ProjectCards/AfasiaCard.vue'
import WebscraperCard from './ProjectCards/WebscraperCard.vue'

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  created() {
    window.addEventListener("resize", this.onResize);
    window.addEventListener("load", this.changeCarouselWidth)
  },

  mounted() {
    this.changeCarouselWidth();
  },

  unmounted() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("load", this.changeCarouselWidth);
  },

  data() {
    return {
      windowWidth: window.innerWidth,
      settings: {
        itemsToShow: "",
        wrapAround: "true",
      },
      componentList: [
        "FragCard",
        "AfasiaCard",
        "MoreComingCard",
        "WebscraperCard",
      ]
    }
  },

  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    FragCard,
    MoreComingCard,
    AfasiaCard,
    WebscraperCard,
  },

  watch: {
    windowWidth() {
      if (this.windowWidth < 1100) {
        this.$nextTick(() => {
          this.settings.itemsToShow = "1.7";
          this.$refs.myCarousel.restartCarousel();
        });
      }
      if (this.windowWidth > 1100) {
        this.$nextTick(() => {
          this.settings.itemsToShow = "3.1";
          this.$refs.myCarousel.restartCarousel();
        });
      }
    }
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },

    changeCarouselWidth() {
      if (this.windowWidth < 1100) {
        this.settings.itemsToShow = "1.7";
      }
      else {
        this.settings.itemsToShow = "3.1";
      }
      this.$refs.myCarousel.restartCarousel();
    },

    toggleSwitch() {
      this.$emit('toggle-switch');
    },

    scrollLeft() {
      this.$refs.myCarousel.prev();
      this.$emit('scrolling');
    },

    scrollRight() {
      this.$refs.myCarousel.next();
      this.$emit('scrolling');
    }
  }
});
</script>

<style scoped>
.btn {
    height: 249px;
    width: 368px;
    position: absolute;
}

h1 {
  margin: 0;
  padding: 10px 10px 10px 10px;
  font-size: 85px;
  font-family: 'Gothic A1', sans-serif;
}

.main-content {
    display: flex;
    justify-content: center;
    flex-direction: row !important;
    align-items: center;
}

.scroll-btn {
  align-items: center;
  -moz-user-select: none;  
  -webkit-user-select: none;  
  -ms-user-select: none;  
  -o-user-select: none;  
  user-select: none;
  display: flex;
  margin: 0;
  padding: 0;
  width: 140px;
  height: 140px;
  border: none;
  background: none;
  color: #0000002b;
  border-radius: 100%;
  transition: all 0.1s ease-in-out;
}

.scroll-btn:hover {
  width: 140px;
  height: 140px;
  color: #00000082;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
}

.carousel__slide > .carousel__item {
  -moz-user-select: none;  
  -webkit-user-select: none;  
  -ms-user-select: none;  
  -o-user-select: none;  
  user-select: none;
  transform: scale(0.8);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.8) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.8) translate(10px);
}
.carousel__slide--active > .carousel__item {
  position: absolute;
  transform: scale(1);
  opacity: 1;
}
.carousel__slide--active:hover {
  cursor: pointer;
}

@media only screen and (max-width: 1100px) {
.btn {
    height: 249px;
    width: 368px;
    position: absolute;
}

h1 {
  margin: 0;
  padding: 10px 10px 10px 10px;
  font-size: 85px;
  font-family: 'Gothic A1', sans-serif;
}

.scroll-btn {
  display: none;
}

.carousel__slide > .carousel__item {
  transform: scale(0.6);
}

.carousel__slide--next > .carousel__item {
  transform: scale(0.6) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.6) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1);

}
}

</style>