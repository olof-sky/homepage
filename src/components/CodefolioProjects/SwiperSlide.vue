<template>
  <div class="main-content">
    <button @click="scrollLeft" class="scroll-btn" id="scroll-left"><h1>&lt;&nbsp;</h1></button>
      <swiper 
        @click="toggleSwitch" @touchdown="toggleSwitch"
        :loop="true"
        :centeredSlides="true"
        :centerInsufficientSlides="true"
        :watchSlidesProgress="true" 
        :slidesPerView="3" 
        class="mySwiper">
        <swiper-slide id="webscraper-card"><WebscraperCard class="img-card"/></swiper-slide>
        <swiper-slide id="frag-card"><FragCard class="img-card"/></swiper-slide>
        <swiper-slide id="afasia-card"><AfasiaCard class="img-card"/></swiper-slide>
        <swiper-slide id="more-coming-card"><MoreComingCard class="img-card"/></swiper-slide>
      </swiper>
    <button @click="scrollRight" class="scroll-btn" id="carousel__next"><h1>/&gt;</h1></button>
  </div>
</template>

<script>
import WebscraperCard from '../../components/CodefolioProjects/ProjectCards/WebscraperCard.vue'
import FragCard from '../../components/CodefolioProjects/ProjectCards/FragCard.vue'
import AfasiaCard from '../../components/CodefolioProjects/ProjectCards/AfasiaCard.vue'
import MoreComingCard from '../../components/CodefolioProjects/ProjectCards/MoreComingCard.vue'
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    WebscraperCard,
    FragCard,
    AfasiaCard,
    MoreComingCard,
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      swiper: {},
    }
  },

  setup() {
    return {
      modules: [Navigation],
    };
  },

  methods: {
    toggleSwitch() {
      this.$emit('toggle-switch');
    },

    scrollLeft() {
      this.$el.querySelector('.swiper').swiper.slidePrev();
    },

    scrollRight() {
      this.$el.querySelector('.swiper').swiper.slideNext();
    },
  },
};
</script>

<style scoped>
.main-content {
  display: flex;
  justify-content: center;
  flex-direction: row !important;
}

h1 {
  margin: 0;
  padding: 10px 10px 10px 10px;
  font-size: 85px;
  font-family: 'Gothic A1', sans-serif;
}

#scroll-left {
  justify-content: flex-end;
}

#scroll-right {
  justify-content: flex-start;
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

.swiper {
  position: relative;
  width: 100%;
  height: 100%;
}
.swiper-slide {
  cursor: pointer;
  transition: all 0.1s ease-in-out;
}

.swiper-slide-active {
  transition: all 0.1s ease-in-out;
  z-index: 999 !important;
}

.swiper-slide-active .img-card {
  width: 460px;
  opacity: 100%;
  transition: all 0.1s ease-in-out;
}

.img-card {
  opacity: 60%;
  width: 340px;
  transition: all 0.1s ease-in-out;
}

@media only screen and (max-width: 700px) {
.swiper-slide-active .img-card {
  width: 100%;
}

.img-card {
  width: 60%;
}
}
</style>

<style>
.swiper-wrapper {
  align-items: center !important;
}
</style>