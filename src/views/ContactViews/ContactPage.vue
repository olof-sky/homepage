<template>
  <div class="main-content">
    <div class="background">
    <div class="email-form-container">
      <form action="http://localhost:3000/api/contact/send" id="contact-form" method="post">
        <div class="contact-label-card">
          <fa class="contact-label-card-icon" :icon="[ 'fa', 'fa-envelope' ]"/>
          <div class="email-form-input">
              <input required type="email" id="email" name="email" aria-describedby="email" placeholder="E-mail*">
          </div>
        </div>
        <div class="contact-label-card">
          <fa class="contact-label-card-icon" :icon="[ 'fa', 'fa-user' ]"/>
          <div class="email-form-input">
              <input required type="text" id="name" name="name" aria-describedby="name" placeholder="Name*">
          </div>
        </div>
        <div class="contact-label-card">
          <fa class="contact-label-card-icon" :icon="[ 'fa', 'fa-thumbtack' ]"/>
          <div class="email-form-input">
              <input required type="subject" id="subject" name="subject" aria-describedby="subject" placeholder="Subject*">
          </div>
        </div>
        <div class="contact-label-card">
          <fa class="contact-label-card-icon" :icon="[ 'fa', 'fa-comment-dots' ]"/>
          <div class="email-form-input">
            <textarea required type="text" rows="4" cols="50" id="text" name="text" aria-describedby="text" placeholder="Write me a message..."/>
          </div>
        </div>
        <button class="submit-button" type="submit"><fa class="submit-button-icon" :icon="[ 'fa', 'fa-paper-plane' ]"/></button>
      </form>
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

  methods: {
  }
}
</script>

<style scoped>
#app {
  background-color: none !important;
}

.main-content {
  height: 100%;
  display: block;
  position: relative;

}

.main-content::after {
  content: "";
  background: url("../../assets/contactBackground.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  opacity: 0.3;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}

input {
  height: 70px;
  width: 70%;
  font-size: 20px;
  font-family: sans-serif;
  padding: 0 0.5em 0 3em;
  background-color: rgba(15, 21, 27, 0.5);
  color: #fff;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 8px;
}

label {
  margin: 13px;
}

textarea { 
  width: 70%;
  height: 250px;
  font-size: 20px;
  font-family: sans-serif;
  padding: 1.1em 0.5em 0 3em;
  background-color: rgba(15, 21, 27, 0.5);
  color: #fff;
  max-width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 8px;
  resize: none;
}

input::-webkit-input-placeholder {
     color: white;
     opacity: 0.7;
}

textarea::-webkit-input-placeholder {
     color: white;
     opacity: 0.7;
}

textarea::-webkit-scrollbar       {background-color:#fff;width:16px}
textarea::-webkit-scrollbar-track {background-color:#fff}
textarea::-webkit-scrollbar-thumb {background-color:#babac0;border-radius:16px;border:4px solid #fff}

.submit-button {
  width: 130px;
  height: 50px;
  padding: 10px 25px;
  margin-top: 15px;
  border: 2px solid #fff;
  color: white;
  font-weight: 500;
  background: rgb(15 21 27 / 60%);
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  box-shadow: 1px 3px 9px 5px rgb(0 0 0 / 44%);
}

.submit-button:hover {
  width: 140px;
  height: 60px;
  padding: 10px 25px;
  border: 2px solid #fff;
  color: white;
  font-weight: 500;
  background: black;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.submit-button-icon {
  font-size: 20px;
  margin: 0;
}

.email-form-container {
  position: relative;
  margin: 300px 25% 50% 25%;
  display: inline-flex;
  flex-direction: column;
  align-content: center;
}

.email-form-input {
  width: 100%;
}

.email-form-input input {
  position: relative;
}

.contact-label-card {
  width: 90%;
  padding: 8px;
  display: inline-flex;
  flex-direction: row;
}

.contact-label-card-icon {
  position: absolute;
  color: white;
  margin-top: 14px;
  margin-left: 55px;
  padding: 8px;
  font-size: 25px;
  z-index: 1;
}

#contact-form {
  margin-top: 40px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}

@media only screen and (max-width: 1600px) {
  .email-form-container {
    margin: 220px 25% 50% 25%;
  }
}

@media only screen and (max-width: 1100px) { 
  .main-content::after {
    content: "";
    background: url("../../assets/contactBackground.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
  }

  input { 
    font-size: 18px;
    height: 60px;
    width: 80%;
    padding: 1px 0.5em 0 3em;
  }
  
  label {
    margin-top: 25px;
  }
  
  textarea { 
    font-size: 18px;
    width: 80%;
    height: 130px;
  }

  .contact-label-card {
    width: 300px;
    padding-right: 0px;
    padding-left: 0px;
    display: inline-flex;
    flex-direction: column;
    overflow: none;
  }

  .contact-label-card-icon {
    margin-top: 12px;
    margin-left: 10px;
  }
  
  .email-form-container {
    width: 100%;
    margin: 150px 0 70% 0;
  }
}
  
</style>