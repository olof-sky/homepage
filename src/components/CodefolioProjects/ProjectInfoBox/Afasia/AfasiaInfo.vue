<template>
  <div class="main">
    <div class="text-box">
      <div class="info-text">
        <p>The Aphasia training application is a project I started working on at my internship with BR Str&ouml;ms. The idea of this project is providing a tool used by patients, at home, by themself in between doctors&rsquo; appointments and check-ups. Aphasia is a condition which may cause a variety of different disabilities. It may include difficulties with speech, understanding visual input, understanding situations and much more.</p>
        <p>This application provides a range of exercises to help the patient improve on the areas which function has been reduced by the condition. It is written in Vue.js and packaged as an APK file with Cordova to install on a notepad placed in the patients home. To simplify the interface and speed up the developing process I used Vuetify together with Vue and got a good result with focus on accessibility. The types of exercises included is.</p>
        <ul>
          <li>Video exercises</li>  
          <li>Listening exercises</li>  
          <li>Image understanding exercises</li>  
          <li>Sentence understanding exercises</li>  
          <li>Writing  exercises</li>  
        </ul>
        <p>We had a good collaboration and got lots of ideas from similar applications written in English. As this is for the Swedish market I got a chance to create my own material. This product is something I believe could replace tons of papers being unnecessarily printed out, and at the same time give the patient a better experience exercising their abilities.</p>
      </div>
      <div class="tools-used">
        <ul>
          <h2>Tools</h2>
          <li>Vue.js</li>
          <li>Node</li>
          <li>Android</li>
          <li>Cordova</li>
          <li>APK</li>
          <li>HTML/CSS</li>
        </ul>
      </div>
    </div>
    <img class="image" :src="image"/>
  </div>
</template>

<script>
import Image from '../../../../assets/codefolio/AfasiaAppPS.png'
export default {
  name: "AfasiaInfo",
  data() {
    return {
      image: Image,
    }
  }
};
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
}

ul {
  text-align: center;
  padding: 0;
}

li {
  display: inline-flex;
  text-align: center;
  padding: 15px;
  font-size: 18px;
}

.info-text {
  display: flex;
  align-items: center;
  text-align: left;
  flex-direction: column;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  line-height: calc(1.5em + .2vw);
  word-break: break-word;
}


.info-text li {
  display: block;
  text-align: left;
  line-height: 30px;
}

.text-box {
  display: flex;
  align-items: center;
  text-align: left;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 20px;
  width: 80%;
}

.tools-used {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 0px 0px 0px;
}

.image {
  width: 90%;
  border-radius: 8px;
  position: relative;
  margin: 50px 0 40px 0;
}

@media only screen and (max-width: 1100px) {
.text-box {
  margin: 0 0 0 0;
  flex-direction: column;
  width: 100%;
}

.info-text {
  padding: 0 0 0 0;
  font-size: 18px;
}
}
</style>