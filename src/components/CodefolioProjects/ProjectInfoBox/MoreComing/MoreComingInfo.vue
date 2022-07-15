<template>
  <div class="main">
    <div class="text-box">
      <div class="info-text">
        <p>Always looking for a new project. At the moment I’m trying to collaborate on open-source projects on GitHub for the sake of learning. Focusing on JavaScript and Node as my main tools, but I’m open for other languages as well. If you have any ideas or you are working on a project where I could help, please contact me through the contact page and we can get in touch for more information.</p>
        <p>If you find anything in my projects that could need improvement, you are very welcome to point it out. I’m always looking to improve and find new angles on problems.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoreComingInfo",
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
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  list-style: none;
}

li {
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
}

.text-box {
  display: flex;
  align-items: center;
  text-align: left;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
  width: 80%;
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

.tools-used {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 0px 0px 60px;
}

.code-content {
  position: relative;
  width: 100%;
  margin: 30px 0 40px 0;
}

.code-block {
  display: flex;
  align-items: center;
  flex-direction: column;
}

#code {
  padding: 40px 20px 20px 20px;
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

ul {
  text-align: center;
}

li {
  display: inline-flex;
  text-align: center;
  padding: 15px;
  font-size: 18px;
}

.tools-used {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 0px 0px 0px;
}

.code-content {
    margin: 45px 0 45px 0;
}
}
</style>