import alertify from 'alertify.js'

export const alerts = {
  log (msg, type, cb = null) {
    alertify.logPosition('top right')
    alertify.closeLogOnClick(true)
    switch (type) {
      case 'success':
        alertify.success(msg, cb)
        break
      case 'error':
        alertify.error(msg, cb)
        break
      default:
        alertify.log(msg, cb)
        break
    }
  },
  success (msg, cb = null) {
    return this.log(msg, 'success', cb)
  },
  error (msg, cb = null) {
    return this.log(msg, 'error', cb)
  }
}
