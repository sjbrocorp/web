import { ticketStore } from '@/stores'
import { http } from '@/services'
import ticketBlob from '@/tests/blobs/ticket'
import messageBlob from '@/tests/blobs/message'

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
      ticketStore.init([ticketBlob])
      ticketStore.all.length.should.equal(1)
    })
  })
  describe('#store', () => {
    it('stores a new ticket', async () => {
      let httpPostStub = sandbox.stub(http, 'post')
      httpPostStub.callsArgWith(2, { data: ticketBlob })
      ticketStore.store(ticketBlob)
      httpPostStub.calledWith('tickets', ticketBlob).should.be.true
      expect(ticketStore.all).toContain(ticketBlob)
    })
  })
  describe('#storeMessage', () => {
    it('stores a new message', async () => {
      let httpPostStub = sandbox.stub(http, 'post')
      let ticket = ticketBlob
      ticketStore.init([ticketBlob])
      httpPostStub.callsArgWith(2, { data: ticketBlob })
      ticketStore.storeMessage(ticket, messageBlob)
      httpPostStub.calledWith(`tickets/${ticket.id}/messages`, messageBlob).should.be.true
      expect(ticketStore.byId(ticket.id).messages).toContain(ticketBlob)
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
      ticketStore.init([ticketBlob])
      const ticket = ticketStore.byId(ticketBlob.id)
      expect(ticket.description).toEqual(ticketBlob.description)
    })
  })
})
