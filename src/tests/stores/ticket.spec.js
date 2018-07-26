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
  describe('#update', () => {
    it('updates a ticket', async () => {
      const id = 999
      const ticket = { id, name: 'Foo' }
      const updatedTicket = { id, name: 'Bar' }
      ticketStore.init([ticket])
      let httpPutStub = sandbox.stub(http, 'put')
      httpPutStub.callsArgWith(2, { data: updatedTicket })
      ticketStore.update(ticket, updatedTicket)
      httpPutStub.calledWith(`tickets/${id}`, updatedTicket).should.be.true
      expect(ticketStore.all.find((ticket) => {
        return ticket.id === id
      })).toEqual(updatedTicket)
      expect(ticketStore.byId(id)).toEqual(updatedTicket)
    })
  })
  describe('#byId', () => {
    it('can retrieve a ticket by its id', () => {
      ticketStore.init([blob])
      const ticket = ticketStore.byId(blob.id)
      expect(ticket.description).toEqual(blob.description)
    })
  })
})
