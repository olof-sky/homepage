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
  display: inline-flex;
  margin: 0 0 0 0;
  height: 100%;
  pointer-events: none;
}

.mac-window {
  position: absolute;
  width: inherit;
}

.mac-window-content {
  margin-top: 15px;
  width: 100%;
}
</style>