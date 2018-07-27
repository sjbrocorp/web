import { location as loc, common as c } from '@/utils'
import { ticketStore } from '@/stores'

export const router = {
  $HOME: 'home',
  routes: {
    '/home' () {
      c.loadMainView('home')
    },
    '/tickets' () {
      c.loadMainView('tickets')
    },
    '/tickets/create' () {
      c.loadMainView('tickets/create')
    },
    '/tickets/(\\d+)/edit' (id) {
      const ticket = ticketStore.byId(~~id)
      console.log({ticket})
      if (ticket) {
        c.loadMainView('tickets/edit', ticket)
      }
    }
  },
  init () {
    this.loadState()
    window.addEventListener('popstate', () => this.loadState(), true)
  },
  loadState () {
    if (!loc.getHash()) {
      return this.go('home')
    }
    Object.keys(this.routes).forEach(route => {
      const matches = loc.getHash().match(new RegExp(`^#!${route}$`))
      if (matches) {
        const [, ...params] = matches
        this.routes[route](...params)
        return false
      }
    })
  },
  go (path) {
    if (path[0] !== '/') {
      path = `/${path}`
    }
    if (path.indexOf('/#!') !== 0) {
      path = `#!${path}`
    }
    loc.setHref(loc.getOrigin() + loc.getPathname() + path)
  }
}
