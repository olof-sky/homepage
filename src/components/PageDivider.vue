<template>
  <div class="divider-container">
    <div class="divider"><p>{{ message }}</p></div>
  </div>
</template>>

<script>
export default {
  props: {
    message: String,
  },

  data() {
    return {
    }
  },
}
</script>

<style scoped>
  .divider {
    height: 200px;
    width: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;

    background: #E0826F;
    border-radius: 100%;
  }
</style>