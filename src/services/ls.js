import localStorage from 'local-storage'

export const ls = {
  get (key) {
    return localStorage(key)
  },
  set (key, value) {
    return localStorage(key, value)
  }
}
