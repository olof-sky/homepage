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