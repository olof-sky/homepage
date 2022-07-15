<template>
  <div class="project-card">
    <img class="mac-window" :src="macWindow"/>
    <img class="mac-window-content" :src="fragContent"/>
  </div>
</template>

<script>
import FragContent from "../../../assets/codefolio/FragCalculator.png"
import MacWindow from "../../../assets/codefolio/MacWindow.png"

export default {
  data() {
    return {
      fragContent: FragContent, 
      macWindow: MacWindow,
    }
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