import Vue from 'vue'
import { config } from '.'

class EventBus {
  constructor () {
    this.bus = new Vue()
  }

  on (name, ...args) {
    return this.bus.$on(name, ...args)
  }

  emit (name, ...args) {
    return this.bus.$emit(name, ...args)
  }
}

const event = new EventBus()

event.$names = config.events

export { event }
