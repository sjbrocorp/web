import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCopy,
  faFile
} from '@fortawesome/free-regular-svg-icons'
import {
  faSpinner,
  faPhone,
  faFax,
  faCheck,
  faUser,
  faCopy as faCopySolid
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(
  faSpinner,
  faPhone,
  faFax,
  faCopy,
  faCheck,
  faUser,
  faCopySolid,
  faFile
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
