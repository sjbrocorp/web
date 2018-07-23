import { config, event } from '@/services'

export const common = {
  loadMainView (view, params) {
    event.emit(config.events.LOAD_MAIN_VIEW, view, ...params)
  }
}
