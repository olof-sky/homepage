<template>
  <div class="main-content">
    <div class="info-container">
      <div
        v-if="moreInfoToggled"
        v-click-outside="hideInfoContainer"
        id="info-container-card-id"
        :class="
          moreInfoToggled ? 'info-container-card' : 'info-container-card-hidden'
        "
      >
        <div v-if="showFragContent" class="frag-content">
          <img
            class="info-container-card-header-img"
            :src="smallHeader ? fragHeaderSmall : fragHeader"
          />
          <div class="info-container-card-container">
            <div class="info-container-card-scrollable-div">
              <div class="info-container-card-scrollable-div-content">
                <FragCalculatorInfo class="project-component-content" />
              </div>
            </div>
          </div>
        </div>
        <div v-if="showAfasiaContent" class="afasia-content">
          <img
            class="info-container-card-header-img"
            :src="smallHeader ? afasiaHeaderSmall : afasiaHeader"
          />
          <div class="info-container-card-container">
            <div class="info-container-card-scrollable-div">
              <div class="info-container-card-scrollable-div-content">
                <AfasiaInfo class="project-component-content" />
              </div>
            </div>
          </div>
        </div>
        <div v-if="showWebscraperContent" class="webscraper-content">
          <img
            class="info-container-card-header-img"
            :src="smallHeader ? webscraperHeaderSmall : webscraperHeader"
          />
          <div class="info-container-card-container">
            <div class="info-container-card-scrollable-div">
              <div class="info-container-card-scrollable-div-content">
                <WebScraperInfo class="project-component-content" />
              </div>
            </div>
          </div>
        </div>
        <div v-if="showMoreComingContent" class="more-coming-content">
          <img
            class="info-container-card-header-img"
            :src="smallHeader ? moreComingHeaderSmall : moreComingHeader"
          />
          <div class="info-container-card-container">
            <div class="info-container-card-scrollable-div">
              <div class="info-container-card-scrollable-div-content">
                <MoreComingInfo class="project-component-content" />
              </div>
            </div>
          </div>
        </div>
        <button
          v-if="moreInfoToggled"
          @click="toggleInfo"
          @touchdown="toggleInfo"
          class="info-container-btn"
        >
          <fa
            class="info-container-btn-icon"
            :id="moreInfoToggled ? 'arrow-up' : 'arrow-down'"
            :icon="['fa', 'fa-arrow-right']"
          />
        </button>
        <div
          v-if="moreInfoToggled"
          :class="
            moreInfoToggled
              ? 'check-out-more-text-toggled'
              : 'check-out-more-text-untoggled'
          "
        >
          Hide
        </div>
      </div>
    </div>
    <div class="project-container">
      <img class="laptop" :src="codefolioLaptop" />
      <div class="slider-container">
        <ProjectSlide @toggle-switch="toggleInfo()" @scrolling="getContent()" />
      </div>
    </div>
    <div
      :class="
        moreInfoToggled
          ? 'button-and-text-toggled'
          : 'button-and-text-untoggled'
      "
    >
      <button
        v-if="!moreInfoToggled"
        @click="toggleInfo"
        @touchdown="toggleInfo"
        class="info-container-btn"
      >
        <fa
          class="info-container-btn-icon"
          :id="moreInfoToggled ? 'arrow-up' : 'arrow-down'"
          :icon="['fa', 'fa-arrow-right']"
        />
      </button>
      <div
        v-if="!moreInfoToggled"
        :class="
          moreInfoToggled
            ? 'check-out-more-text-toggled'
            : 'check-out-more-text-untoggled'
        "
      >
        Show
      </div>
    </div>
  </div>
</template>

<script>
  import ProjectSlide from "../../components/CodefolioProjects/ProjectSlide.vue";
  import CodefolioLaptop from "../../assets/codefolio/CodefolioLaptop.png";
  import MacWindow from "../../assets/codefolio/MacWindow.png";
  import FragContent from "../../assets/codefolio/FragCalculator.png";
  import FragHeader from "../../assets/codefolio/FragCalculatorHeader.png";
  import FragHeaderSmall from "../../assets/codefolio/FragCalculatorHeaderSmall.png";
  import FragCalculatorInfo from "../../components/CodefolioProjects/ProjectInfoBox/FragCalculator/FragCalculatorInfo.vue";
  import WebscraperContent from "../../assets/codefolio/Webscraper.png";
  import WebscraperHeader from "../../assets/codefolio/WebscraperHeader.png";
  import WebscraperHeaderSmall from "../../assets/codefolio/WebscraperHeaderSmall.png";
  import WebScraperInfo from "../../components/CodefolioProjects/ProjectInfoBox/WebScraper/WebScraperInfo.vue";
  import AfasiaContent from "../../assets/codefolio/Afasia.png";
  import AfasiaHeader from "../../assets/codefolio/AphasiaHeader.png";
  import AfasiaHeaderSmall from "../../assets/codefolio/AphasiaHeaderSmall.png";
  import AfasiaInfo from "../../components/CodefolioProjects/ProjectInfoBox/Afasia/AfasiaInfo.vue";
  import MoreComingContent from "../../assets/codefolio/MoreComing.png";
  import MoreComingHeader from "../../assets/codefolio/MoreComingHeader.png";
  import MoreComingHeaderSmall from "../../assets/codefolio/MoreComingHeaderSmall.png";
  import MoreComingInfo from "../../components/CodefolioProjects/ProjectInfoBox/MoreComing/MoreComingInfo.vue";


  export default {
    components: {
      ProjectSlide,
      FragCalculatorInfo,
      AfasiaInfo,
      WebScraperInfo,
      MoreComingInfo,
    },

    created() {
      window.addEventListener("resize", this.onResize);
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
        windowWidth: window.innerWidth,
        smallHeader: false,
        fragHeader: FragHeader,
        fragHeaderSmall: FragHeaderSmall,
        afasiaHeader: AfasiaHeader,
        afasiaHeaderSmall: AfasiaHeaderSmall,
        webscraperHeader: WebscraperHeader,
        webscraperHeaderSmall: WebscraperHeaderSmall,
        moreComingHeader: MoreComingHeader,
        moreComingHeaderSmall: MoreComingHeaderSmall,
        moreInfoToggled: false,
        showFragContent: false,
        showAfasiaContent: false,
        showWebscraperContent: false,
        showMoreComingContent: false,
      };
    },

    mounted() {
      this.getContent();
      this.getHeaderSize();
    },

    unmounted() {
      window.removeEventListener("resize", this.onResize);
    },

    methods: {
      onResize() {
        this.windowWidth = window.innerWidth;
      },

      getHeaderSize() {
        if (this.windowWidth < 1100) {
          this.smallHeader = true;
        } else this.smallHeader = false;
      },

      getContent() {
        // Re-render component on $emit
        this.$nextTick(() => {
          this.showFragContent =
            this.$el.querySelector(".carousel__slide--active > .carousel__item")
              .id == "FragCard";
          this.showAfasiaContent =
            this.$el.querySelector(".carousel__slide--active > .carousel__item")
              .id == "AfasiaCard";
          this.showWebscraperContent =
            this.$el.querySelector(".carousel__slide--active > .carousel__item")
              .id == "WebscraperCard";
          this.showMoreComingContent =
            this.$el.querySelector(".carousel__slide--active > .carousel__item")
              .id == "MoreComingCard";
        });
      },

      toggleInfo() {
        this.getContent();
        if (this.moreInfoToggled) {
          this.moreInfoToggled = false;
        } else this.moreInfoToggled = true;
      },

      hideInfoContainer() {
        if (this.moreInfoToggled && this.windowWidth > 1100) {
          this.moreInfoToggled = false;
        }
      },
    },

    watch: {
      windowWidth() {
        this.windowWidth = window.innerWidth;
        this.getHeaderSize();
      },
    },
  };
</script>

<style scoped>
  .main-content {
    width: 100%;
    height: 100%;
    display: flex;
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
    top: 115px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .info-container-card {
    position: relative;
    opacity: 100%;
    width: 70%;
    max-width: 1400px;
    border-radius: 8px;
    box-shadow: 0px 3px 7px 0px rgb(155 155 155 / 20%);
    background: #fffffff5;
    transition: all 0.1s linear;
    z-index: 1;
  }

  .info-container-card-hidden {
    position: relative;
    opacity: 0;
    margin: 0 0 0 0;
    width: 60%;
    max-width: 1100px;
    border-radius: 8px;
    box-shadow: 0px 3px 7px 0px rgb(155 155 155 / 20%);
    transition: all 0.1s linear;
    z-index: -1;
  }

  .info-container-card-hidden .info-container-card-scrollable-div {
    height: 0px;
  }

  .info-container-card-header-img {
    display: inline-flex;
    width: 100%;
    border-radius: 8px 8px 0 0;
    flex-direction: row;
    align-items: center;
  }

  .info-container-card-container {
    position: relative;
  }

  .info-container-card-scrollable-div {
    overflow: auto;
  }

  .info-container-card-scrollable-div-content {
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .info-container-card h1 {
    font-size: 30px;
    font-family: "Montserrat", sans-serif;
    color: #212121;
    margin: 25px 0 0 0;
    transition: all 0.1s linear;
  }

  .info-container-card p {
    padding: 30px 0 0 0;
    left: 50%;
    color: rgba(33, 33, 33, 0.75);
    transition: all 0.1s linear;
  }

  .info-container-card .code-icon {
    margin: -8% 0 0 84%;
    font-size: 60px;
    transition: all 0.1s linear;
  }

  /* TOGGLE BUTTON CSS */

  .button-and-text-toggled {
    position: relative;
    margin-top: -35px;
    transition: all 0.3s ease-in-out;
    z-index: 1;
  }

  .button-and-text-untoggled {
    transition: all 0.3s ease-in-out;
    z-index: 1;
  }

  .check-out-more-text-untoggled {
    font-family: "Montserrat", sans-serif;
    margin-top: 14px;
  }

  .check-out-more-text-toggled {
    font-family: "Montserrat", sans-serif;
    margin-top: 14px;
    padding-bottom: 150px;
  }

  .info-container-btn {
    width: 70px;
    height: 70px;
    border-radius: 100%;
    box-shadow: 2px 4px 8px 0px rgb(0 0 0 / 42%);
    border-style: none;
    transition: all 0.1s ease-in-out;
  }

  .info-container-btn:hover {
    cursor: pointer;
    width: 70px;
    height: 70px;
    background: #e2e2e2;
    transition: all 0.1s ease-in-out;
  }

  .info-container-btn-icon {
    color: #a7a7a7;
    font-size: 20px;
  }

  .project-component-content {
    position: relative;
    width: 80%;
    margin: 20px 0 50px 0;
  }

  #arrow-up {
    transform: rotate(-90deg);
    transition: all 0.5s ease-in-out;
  }

  #arrow-down {
    transform: rotate(90deg);
    transition: all 0.5s ease-in-out;
  }

  /* ------------------- */

  @media only screen and (max-width: 500px) {
    .info-container-card {
      margin-top: 500px !important;
    }

    .project-container {
      margin: 200px 0 120px 0 !important;
    }
  }

  @media only screen and (max-width: 1100px) {
    .project-component-content {
      width: 87%;
    }

    .project-container {
      margin: 300px 0 120px 0;
    }

    .laptop {
      width: 90%;
      margin-top: 55px;
    }

    .slider-container {
      margin-top: 50px;
      width: 100%;
    }

    .info-container {
      top: 0;
    }

    .info-container-card {
      position: relative;
      margin-top: 100%;
      width: 95%;
    }

    .info-container-card-hidden {
      position: relative;
      opacity: 0;
      margin: 0 0 0 0;
      margin-top: 360px;
      width: 60%;
      max-width: 1100px;
      border-radius: 8px;
      box-shadow: 0px 3px 7px 0px rgb(155 155 155 / 20%);
      transition: all 0.1s linear;
      z-index: -1;
    }

    .info-container-btn:hover {
      cursor: pointer;
      width: 70px;
      height: 70px;
      background: #f6f6f6;
      transition: all 0.1s ease-in-out;
    }

    .button-and-text-untoggled {
      bottom: -15%;
      padding-bottom: 150px;
    }

    .check-out-more-text-toggled {
      padding-bottom: 150px;
    }
  }
</style>
// NOT SCOPED STYLE
<style>
  @media only screen and (max-width: 1100px) {
    .mac-window-content {
      margin-top: 0px !important;
    }
  }
</style>
