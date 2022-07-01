<template>
    <div class="main-content">
      <div class="profile-info">
        <div class="profile-text">
          <h1 id="header-name">Olof</h1>
          <h1 id="header-lastname">Schylander</h1>
          <p id="profile-header-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate laoreet commodo pulvinar vel amet, massa.</p>
          <ul class="social-media-icons">
            <div class="social-media-line"/>
            <li><a class="social-media-link" href="https://github.com/olof-sky"><fa :icon="[ 'fab', 'github' ]"/></a></li>
            <li><a class="social-media-link" href="https://www.instagram.com/onpitchz/?hl=sv"><fa :icon="[ 'fab', 'instagram' ]"/></a></li>
            <li><a class="social-media-link" href="https://www.linkedin.com/in/olof-schylander-309a67211"><fa :icon="[ 'fab', 'linkedin-in' ]"/></a></li>
            <div class="social-media-line"/>
          </ul>
        </div>
        <div class="profile-picture-and-pattern">
          <ProfilePicturePattern class="profile-picture-pattern"></ProfilePicturePattern>
          <img class="profile-picture" :src="image"/>
        </div>
      </div>
    </div>
</template>

<script>
import image from "../assets/profilePicture.png"
import ProfilePicturePattern from "../components/ProfilePicturePattern.vue"


export default {
  components: {
    ProfilePicturePattern,
  },

  data() {
    return {
      image: image
    }
  },
}
</script>

<style scoped>
#header-name {
  font-size: 64px;
  font-family: 'Montserrat', sans-serif;
  margin: 0px;
  color: #212121;
}

#header-lastname {
  font-size: 64px;
  font-family: 'Montserrat', sans-serif;
  margin: 0 0 0 41px;
  color: #212121;
}

#profile-header-text{
  margin-top: 25px;
  margin-left: 41px;
  width: 400px;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: rgba(33, 33, 33, 0.75);
  text-align: left;
}

.profile-info {
  display: inline-flex;
  margin-top: 170px;
  padding-left: 50px;
  padding-right: 50px;
}

.profile-text {
  display: flex;
  padding-top: 66px;
  /* align-content: flex-start; */
  flex-direction: column;
  align-items: flex-start;
}

.profile-picture {
  padding-left: 101px;
  width: 465px;
  height: 465px;
  z-index: 0;
}

.profile-picture-pattern {
  left: -70px;
  top: -160px;
  position: absolute;
}

.profile-picture-and-pattern {
  margin-top: 6px;
  display: flex;
  position: relative;
}

.social-media-icons {
  margin-top: 25px;
  margin-left: 27px;
  height: 100px;
  font-size: 20px;
}

a { color: #000000; }
a:hover { text-decoration: none; color: #00000080; }

.social-media-line {
  display: inline-block;
  width: 40px;
  height: 3px;
  margin-right: 18px;
  margin-left: 18px;
  margin-bottom: 5px;
  background-color: #000000;
}

@media only screen and (max-width: 1100px) {
  .profile-info {
    display: flex !important;
    flex-direction: column-reverse;
    align-items: center !important;
    margin-top: 0 !important;
    padding-top: 70px;
    padding-left: 0px !important;
    padding-right: 0px !important;
    width: 100vw;
  }
  .profile-text {
    width: 100vw;
    align-items: center !important;
  }
  #profile-header-text {
    width: 350px !important;
  }
  #header-lastname {
    margin-left: 0;
  }
  .profile-picture-pattern {
    visibility: hidden;
    width: 100%;
  }
  .profile-picture {
    width: 350px !important;
    height: 350px !important;
    padding-left: 0px !important;
  }
  .profile-picture-and-pattern {
    margin-top: 0px !important;
  }
}
</style>