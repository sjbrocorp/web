import { sharedStore, ticketStore } from '@/stores'
import { http } from '@/services'
import ticketBlob from '@/tests/blobs/ticket'

describe('stores/shared', () => {
  let sandbox
  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })
  afterEach(() => {
    sandbox.restore()
  })
  describe('#init', () => {
    it('gathers data and initialises stores', () => {
      const response = {
        data: {
          tickets: [ticketBlob]
        }
      }
      let httpGetStub = sandbox.stub(http, 'get')
      httpGetStub.callsArgWith(1, response)
      let ticketInitStub = sandbox.stub(ticketStore, 'init')
      sharedStore.init()
      httpGetStub.calledWith('data').should.be.true
      ticketInitStub.calledWith(response.data.tickets).should.be.true
    })
  })
})
