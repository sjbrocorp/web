export const location = {
  getHash () {
    return document.location.hash
  },
  setHash (value) {
    document.location.hash = value
  },
  getOrigin () {
    return document.location.origin
  },
  setOrigin (value) {
    document.location.origin = value
  },
  getPathname () {
    return document.location.pathname
  },
  setPathname (value) {
    document.location.pathname = value
  },
  getHref () {
    return document.location.href
  },
  setHref (value) {
    document.location.href = value
  }
}
