import axios from 'axios'
import { http, config, cookie, event } from '@/services'

describe('services/http', () => {
  let sandbox, requestStub
  const url = '/test'
  const data = { foo: 'bar' }

  beforeEach(() => {
    sandbox = sinon.createSandbox()
    requestStub = sandbox.stub(axios, 'request')
  })
  afterEach(() => {
    sandbox.restore()
  })

  describe('#setBaseUrl', () => {
    it('sets the base url', () => {
      sandbox.stub(config, 'apiPath').value(url)
      sandbox.stub(axios, 'defaults').value({baseURL: ''})
      http.setBaseUrl(url)
      expect(axios.defaults.baseURL).toEqual(url)
    })
  })
  describe('#setRequestHeader', () => {
    it('can attach an authentication token to outgoing requests', () => {
      const key = 'Authorization'
      const token = 'Bearer ABC123'
      sandbox.stub(cookie, 'get').withArgs('jwt-token').returns(token)
      let config = { headers: {} }
      sandbox.stub(axios.interceptors.request, 'use').yields(config)
      http.setRequestHeader(key, () => token)
      expect(config.headers[key]).toEqual(token)
    })
  })
  describe('#storeResponseData', () => {
    it('can store a response\'s header', () => {
      const header = 'Authorization'
      const key = 'jwt-token'
      const token = 'Bearer ABC123'
      let response = { headers: { [header]: token } }
      let cookieSetStub = sandbox.stub(cookie, 'set')
      sandbox.stub(axios.interceptors.response, 'use').yields(response)
      http.storeResponseData(header, key)
      cookieSetStub.calledWith(key, token).should.be.true
    })
    it('will store a response\'s data if no header present', () => {
      const attribute = 'Authorization'
      const key = 'jwt-token'
      const token = 'Bearer ABC123'
      let response = { headers: {}, data: { [attribute]: token } }
      let cookieSetStub = sandbox.stub(cookie, 'set')
      sandbox.stub(axios.interceptors.response, 'use').yields(response)
      http.storeResponseData(attribute, key)
      cookieSetStub.calledWith(key, token).should.be.true
    })
    it('will emit a logout event if the response has an Unauthorized error', () => {
      let error = { response: { status: 401 } }
      sandbox.stub(axios.interceptors.response, 'use').callsArgWith(1, error)
      let emitStub = sandbox.stub(event, 'emit')
      const logout = 'logout'
      sandbox.stub(event.$names, 'LOGOUT').returns(logout)
      http.storeResponseData('', '')
      emitStub.calledWith(logout).should.be.true
    })
  })

  describe('#request', () => {
    it('executes callback on success', async () => {
      let cbExecuted = false
      const cb = () => { cbExecuted = true }
      requestStub.resolves()
      await http.request('', url, data, cb)
      expect(cbExecuted).toBeTruthy()
    })

    it('executes callback on failure', async () => {
      let cbExecuted = false
      const cb = () => { cbExecuted = true }
      requestStub.rejects()
      await http.request('', url, data, null, cb)
      expect(cbExecuted).toBeTruthy()
    })
  })

  describe('#get', () => {
    it('creates a GET request', () => {
      requestStub.resolves()
      http.get(url)
      requestStub.calledWith({ method: 'get', url, data: {} }).should.be.true
    })
  })

  describe('#post', () => {
    it('creates a POST request', () => {
      requestStub.resolves()
      http.post(url, data)
      requestStub.calledWith({ method: 'post', url, data }).should.be.true
    })
  })

  describe('#put', () => {
    it('creates a PUT request', () => {
      requestStub.resolves()
      http.put(url, data)
      requestStub.calledWith({ method: 'put', url, data }).should.be.true
    })
  })

  describe('#delete', () => {
    it('creates a DELETE request', () => {
      requestStub.resolves()
      http.delete(url, data)
      requestStub.calledWith({ method: 'delete', url, data }).should.be.true
    })
  })
})
