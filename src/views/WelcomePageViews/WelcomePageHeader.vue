<template>
    <div class="main-content">
      <div class="profile-info">
        <div class="profile-text">
          <h1 id="header-name">Olof</h1>
          <h1 id="header-lastname">Schylander</h1>
          <p id="profile-header-text">Developer and artist, using both my problem solving abilities and my creative side to build applications, backend functionality and websites.</p>
          <ul class="social-media-icons">
            <div class="social-media-line"/>
            <li><a class="social-media-link" href="https://github.com/olof-sky"><fa :icon="[ 'fab', 'github' ]"/></a></li>
            <li><a class="social-media-link" href="https://konst.se/olof"><fa :icon="[ 'fas', 'paintbrush' ]"/></a></li>
            <li><a class="social-media-link" href="https://www.linkedin.com/in/olof-schylander-309a67211"><fa :icon="[ 'fab', 'linkedin-in' ]"/></a></li>
            <div class="social-media-line"/>
          </ul>
        </div>
        <div class="profile-picture-and-pattern">
          <img class="profile-picture" :src="image"/>
        </div>
      </div>
    </div>
</template>

<script>
import image from "../../assets/profilePicture.png"

export default {
  components: {
  },

  data() {
    return {
      image: image
    }
  },
}
</script>

<style scoped>
.main-content {
  position: relative;
  height: 700px;
  background-color: #fff;
}

#header-name {
  font-size: 54px;
  font-family: 'Montserrat', sans-serif;
  margin: 0px;
  color: #212121;
}

#header-lastname {
  font-size: 54px;
  font-family: 'Montserrat', sans-serif;
  margin: 0 0 0 41px;
  color: #212121;
}

#profile-header-text{
  margin-top: 25px;
  margin-left: 41px;
  margin-bottom: 0px;
  width: 400px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: rgba(33, 33, 33, 0.75);
  text-align: left;
}

.profile-info {
  display: inline-flex;
  margin-top: 140px;
  padding-left: 50px;
  padding-right: 50px;
}

.profile-text {
  display: flex;
  padding-top: 36px;
  flex-direction: column;
  align-items: flex-start;
}

.profile-picture {
  padding-left: 100px;
  width: 365px;
  height: 365px;
  z-index: 0;
}

.profile-picture-and-pattern {
  margin-top: 6px;
  display: flex;
  position: relative;
}

.social-media-icons {
  display: inline-flex;
  align-items: center;
  margin-top: 25px;
  margin-left: 65px;
  padding: 0;
  height: 42px;
  font-size: 20px;
  list-style-type: none;
}

.social-media-link {
  padding: 10px;
}

a { color: #000000; }
a:hover { text-decoration: none; color: #00000080; }

.social-media-line {
  display: inline-block;
  width: 65px;
  height: 3px;
  margin-right: 18px;
  margin-left: 18px;
  margin-bottom: 5px;
  background-color: #000000;
}

@media only screen and (max-width: 1100px) {
  .main-content {
    height: 1000px;
  }

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
    padding-top: 45px;
    width: 200px;
    align-items: center !important;
  }
  #profile-header-text {
    margin: 50px 0 0 15px;
    text-align: -webkit-center;
    width: 300px !important;
  }
  #header-name {
    font-size: 50px;
    margin-left: 0;
  }
  #header-lastname {
    font-size: 50px;
    margin-left: 0;
  }
  .profile-picture-pattern {
    visibility: hidden;
    width: 100%;
  }
  .profile-picture {
    margin-top: 100px;
    width: 250px !important;
    height: 250px !important;
    padding-left: 0px !important;
  }
  .profile-picture-and-pattern {
    margin-top: 0px !important;
  }

  .social-media-icons {
    margin-top: 55px !important;
    margin-left: 0px;
  }
}
</style>