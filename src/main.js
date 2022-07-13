import { createApp } from 'vue'
import { createStore } from 'vuex'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import router from './router'
import App from './App.vue'
import VueCodeHighlight from 'vue-code-highlight';
import vClickOutside from "click-outside-vue3"

import 'prism-es6/components/prism-markup-templating';
import 'prism-es6/components/prism-python';
import 'prism-themes/themes/prism-vsc-dark-plus.css';
import 'vue-code-highlight/themes/window.css';

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
.use(VueCodeHighlight)
.use(vClickOutside)
.mount('#app')