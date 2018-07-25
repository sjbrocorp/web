import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faSpinner,
  faPhone,
  faFax
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(
  faSpinner,
  faPhone,
  faFax
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
