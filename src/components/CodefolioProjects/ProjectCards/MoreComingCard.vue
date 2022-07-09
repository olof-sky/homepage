<template>
  <div class="project-card">
    <img class="mac-window" :src="macWindow"/>
    <img class="mac-window-content" :src="moreComingContent"/>
  </div>
</template>

<script>
import MoreComingContent from "../../../assets/codefolio/MoreComing.png"
import MacWindow from "../../../assets/codefolio/MacWindow.png"

export default {
  data() {
    return {
      moreComingContent: MoreComingContent, 
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