<template>
  <div class="project-card">
    <img class="mac-window" :src="macWindow"/>
    <img class="mac-window-content" :src="afasiaContent"/>
  </div>
</template>

<script>
import AfasiaContent from "../../../assets/codefolio/Afasia.png"
import MacWindow from "../../../assets/codefolio/MacWindow.png"

export default {
  data() {
    return {
      afasiaContent: AfasiaContent, 
      macWindow: MacWindow,
    }
  },
  methods: {
  },
}
</script>

<style scoped>
.project-card {
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.project-card-large {
  width: 100%;
  height: 1000px;
  pointer-events: none;
}

.mac-window {
  position: absolute;
  width: 100%;
}

.mac-window-content {
  margin-top: 15px;
  width: 100%;
}
</style>