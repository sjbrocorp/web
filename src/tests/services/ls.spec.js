import { ls } from '@/services'
import localStorage from 'local-storage'

describe('services/ls', () => {
  const key = 'foo'
  const value = 'bar'
  afterEach(() => {
    localStorage.remove(key)
  })
  describe('#set', () => {
    it('stores a value', () => {
      ls.set(key, value)
      expect(localStorage(key)).toEqual(value)
    })
  })

  describe('#get', () => {
    it('returns a stored value', () => {
      localStorage(key, value)
      expect(ls.get(key)).toEqual(value)
    })
  })
})
