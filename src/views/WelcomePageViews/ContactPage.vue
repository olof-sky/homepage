<template>
  <div class="main-content">
    <div style="display: table-cell; text-align:center; width:50%; vertical-align: middle;" class="logo-div">
        <img style="width:50%; margin-bottom:10%; vertical-align: middle;" src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg" alt="Twilio logo">
    </div>
    <div style="display: table-cell;" class="form-container">
        <form action="/contact" id="contact-form" method="post" style="margin: 10%; margin-left:5%; width: 350px;">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Subject</label>
                <input type="text" class="form-control" id="subject" name="subject" aria-describedby="emailHelp"
                    placeholder="Subject">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Message</label>
                <textarea class="form-control" id="message" name="message" placeholder="Message"></textarea>
            </div>
            <button type="submit" style="background:#0263e0 !important;" class="btn btn-primary">Submit</button>
        </form>
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
.main-content {
  margin-top: 500px;
  height: 1100px;
}

@media only screen and (max-width: 1100px) { 
  
}
  
</style>