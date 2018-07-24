import { ticketStore } from '@/stores'
import { http } from '@/services'
import blob from '@/tests/blobs/ticket'

describe('stores/ticket', () => {
  let sandbox
  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })
  afterEach(() => {
    ticketStore.all = []
    sandbox.restore()
  })
  describe('#init', () => {
    it('correctly gathers tickets', () => {
      ticketStore.init([blob])
      ticketStore.all.length.should.equal(1)
    })
  })
  describe('#store', () => {
    it('stores a new ticket', async () => {
      let httpPostStub = sandbox.stub(http, 'post')
      httpPostStub.callsArgWith(2, { data: blob })
      ticketStore.store(blob)
      httpPostStub.calledWith('tickets', blob).should.be.true
      expect(ticketStore.all).toContain(blob)
    })
  })
})
