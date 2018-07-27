import TicketForm from '@/components/tickets/ticket-form.vue'
import { alerts, router } from '@/services'
import { ticketStore } from '@/stores'
import stub from '@/stubs/ticket'
import blob from '@/tests/blobs/ticket'

describe('components/modals/create-ticket', () => {
  let sandbox
  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })
  afterEach(() => {
    sandbox.restore()
  })
  it('opens', async () => {
    const wrapper = shallowMount(TicketForm, { propsData: { type: 'create' } })
    wrapper.contains('form').should.be.true
  })
  it('can create a ticket', async () => {
    const wrapper = shallowMount(TicketForm, { propsData: { type: 'create' } })
    wrapper.setData({ newTicket: blob })
    const storeStub = sandbox.stub(ticketStore, 'store')
    const alertStub = sandbox.stub(alerts, 'success')
    const routerStub = sandbox.stub(router, 'go')
    wrapper.find('form').trigger('submit')
    storeStub.calledWith(blob).should.be.true
    await wrapper.vm.$nextTick()
    alertStub.called.should.be.true
    routerStub.calledWith('tickets').should.be.true
    expect(wrapper.vm.newTicket).toEqual(stub)
  })
  it('can edit a ticket', async () => {
    const wrapper = shallowMount(TicketForm, { propsData: { type: 'edit' } })
    const existingTicket = blob
    const newTicket = blob
    existingTicket.name = 'Foo'
    newTicket.name = 'Bar'
    wrapper.setData({ existingTicket, newTicket })
    const updateStub = sandbox.stub(ticketStore, 'update')
    const alertStub = sandbox.stub(alerts, 'success')
    const routerStub = sandbox.stub(router, 'go')
    wrapper.find('form').trigger('submit')
    updateStub.calledWith(existingTicket, newTicket).should.be.true
    await wrapper.vm.$nextTick()
    alertStub.called.should.be.true
    routerStub.calledWith('tickets').should.be.true
    expect(wrapper.vm.existingTicket).toEqual(null)
    expect(wrapper.vm.newTicket).toEqual(stub)
  })
})
