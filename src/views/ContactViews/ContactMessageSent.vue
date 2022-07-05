<template>
  <div class="main-content">
    <div class="message-card">
      <h1>Thanks for your message!</h1>
      <h3>I'll get in touch with you as soon as possible.</h3>
      <div class="back-button">
        <span><router-link to="/"></router-link></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },

  data() {
    return {
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:600&display=swap');

.main-content {
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.message-card {
  margin-top: 100px;
  font-size: 19px;
  display: flex;
  flex-direction: column;
}

span{
  position: relative;
  display: inline-flex;
  width: 180px;
  height: 55px;
  margin: 45px 15px;
  perspective: 1000px;
}
span a{
  font-size: 19px;
  letter-spacing: 1px;
  transform-style: preserve-3d;
  transform: translateZ(-25px);
  transition: transform .25s;
  font-family: 'Montserrat', sans-serif;
  
}
span a:before,
span a:after{
  position: absolute;
  content: "HOME";
  height: 55px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid #E0826F;
  box-sizing: border-box;
  border-radius: 5px;
}
span a:before{
  content: "BACK";
  color: #fff;
  background: #E0826F;
  transform: rotateY(0deg) translateZ(25px);
}
span a:after{
  color: #000;
  border-color: #E0826F;
  transform: rotateX(90deg) translateZ(25px);
}
span a:hover{
  transform: translateZ(-25px) rotateX(-90deg);
}

@media only screen and (max-width: 1100px) { 
  .message-card {
    margin-top: 200px;
    width: 70%;
    font-size: 16px;
    display: flex;
    flex-direction: column;
}
}
  
</style>