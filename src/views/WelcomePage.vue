<template>
  <div class="welcomepage">
    <WelcomePage class="component"></WelcomePage>
    <PageDivider class="page-divider" :message="'ABOUT'"></PageDivider>
    <AboutPage class="component-inset"></AboutPage>
    <PageDivider class="page-divider" :message="'PORTFOLIO'"></PageDivider>
    <PortfolioPage class="component"></PortfolioPage>
    <PageDivider class="page-divider" :message="'CONTACT'"></PageDivider>
    <ContactPage class="contact-component"></ContactPage>
  </div>
</template>

<script>
import PageDivider from ".././components/PageDivider.vue"
import WelcomePage from "./WelcomePageViews/WelcomePageHeader.vue"
import PortfolioPage from "./WelcomePageViews/PortfolioPage.vue"
import ContactPage from "./ContactViews/ContactPage.vue"
import AboutPage from "./WelcomePageViews/AboutPage.vue"

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    PageDivider,
    WelcomePage,
    AboutPage,
    PortfolioPage,
    ContactPage,
  }
}
</script>

<style>
body {
  background-color: #F6F6F6;
}

.divider-container {
  width: 200px;
  margin-top: -75px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}

.component {
  box-shadow: 6px 5px 7px 0px rgb(155 155 155 / 20%);
}

.component-inset {
  box-shadow: inset 6px -5px 7px 0px rgb(155 155 155 / 20%);
}

@media only screen and (max-width: 1100px) {
  .component {
    height: 1200px;
  }
}
</style>
