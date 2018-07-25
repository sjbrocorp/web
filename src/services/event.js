import Vue from 'vue'
import { config } from '.'

class EventBus {
  constructor () {
    this.bus = new Vue()
  }

  on (...args) {
    return this.trigger(this.bus.$on, ...args)
  }

  emit (name, ...args) {
    return this.bus.$emit(name, ...args)
  }

  trigger (func, ...args) {
    if (args.length === 2) {
      func.call(this.bus, args[0], args[1])
    } else {
      Object.keys(args[0]).forEach(key => func.call(this.bus, key, args[0][key]))
    }
    return this
  }
}

const event = new EventBus()

event.$names = config.events

export { event }
