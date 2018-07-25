import { sharedStore, ticketStore, userStore } from '@/stores'
import { http } from '@/services'
import ticketBlob from '@/tests/blobs/ticket'
import userBlob from '@/tests/blobs/user'

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
          tickets: [ticketBlob],
          currentUser: userBlob
        }
      }
      let httpGetStub = sandbox.stub(http, 'get')
      httpGetStub.callsArgWith(1, response)
      let ticketInitStub = sandbox.stub(ticketStore, 'init')
      let userInitStub = sandbox.stub(userStore, 'init')
      sharedStore.init()
      httpGetStub.calledWith('data').should.be.true
      ticketInitStub.calledWith(response.data.tickets).should.be.true
      userInitStub.calledWith(response.data.currentUser).should.be.true
    })
  })
})
