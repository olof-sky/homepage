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