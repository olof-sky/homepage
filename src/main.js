import { createApp } from 'vue'
import { createStore } from 'vuex'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import router from './router'
import App from './App.vue'

library.add(fas, fab);

const store = createStore({
    state () {
      return {
        currentPage: "/",

      }
    },
    mutations: {
      loadPage (state, newPage) {
        state.currentPage = newPage;
      }
    }
  });


createApp(App)
.component('fa', FontAwesomeIcon)
.use(store)
.use(router)
.mount('#app')