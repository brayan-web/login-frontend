import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import VueLazyLoadVideo from 'vue-lazyload-video'
Vue.use(VueLazyLoadVideo)
import VueSilentbox from 'vue-silentbox'
import '@morioh/v-lightbox/dist/lightbox.css';
import Lightbox from '@morioh/v-lightbox'
import VTooltip from 'v-tooltip'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from './store'
import panZoom from 'vue-panzoom'
import PinchZoom from 'vue-pinch-zoom';
import VueZoomer from 'vue-zoomer'

Vue.use(VueZoomer)
Vue.component('pinch-zoom', PinchZoom);
// install plugin
Vue.use(panZoom);
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VTooltip)
// global register
Vue.use(Lightbox)

Vue.use(VueSilentbox)






import 'animate.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
