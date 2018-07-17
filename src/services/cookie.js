import { get, set, remove } from 'tiny-cookie'

export const cookie = {
  get (key) {
    return get(key)
  },
  set (key, value) {
    return set(key, value)
  },
  delete (key) {
    return remove(key)
  }
}
