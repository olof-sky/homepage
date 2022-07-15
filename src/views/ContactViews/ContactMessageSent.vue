<template>
  <div class="main-content">
    <div class="message-card">
      <h1>Thanks for your message!</h1>
      <h3>I'll get in touch with you as soon as possible.</h3>
        <router-link to="/">
          <button class="back-btn"><fa class="back-btn-icon" :icon="[ 'fa', 'fa-arrow-left' ]"/></button>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:600&display=swap');

.main-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.message-card {
  font-family: 'Montserrat', sans-serif;
  margin: 100px 10% 0 10%;
  font-size: 19px;
}

.back-btn {
  margin: 50px;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  box-shadow: 2px 4px 8px 0px rgb(0 0 0 / 42%);
  border-style: none;
  transition: all 0.1s ease-in-out;
}

.back-btn:hover {
  cursor: pointer;
  width: 70px;
  height: 70px;
  background: #e2e2e2;
  transition: all 0.1s ease-in-out;
}

.back-btn-icon {
  color: #a7a7a7;
  font-size: 20px;
}

@media only screen and (max-width: 1100px) { 
.message-card {
  margin-top: 200px;
}
}

@media only screen and (max-width: 500px) { 
.message-card {
  font-family: 'Montserrat', sans-serif;
  margin: 200px 10% 0 10%;
  font-size: 16px;
}
}
  
</style>