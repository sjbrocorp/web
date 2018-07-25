import CreateTicket from '@/components/tickets/create-ticket.vue'
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
    const wrapper = shallowMount(CreateTicket)
    wrapper.contains('form').should.be.true
  })
  it('creates a ticket when the form is submitted', async () => {
    const wrapper = shallowMount(CreateTicket)
    wrapper.setData({ newTicket: blob })
    const storeStub = sandbox.stub(ticketStore, 'store')
    const alertStub = sandbox.stub(alerts, 'success')
    const routerStub = sandbox.stub(router, 'go')
    wrapper.find('form').trigger('submit')
    storeStub.calledWith(blob).should.be.true
    Vue.nextTick(() => {
      alertStub.called.should.be.true
      routerStub.calledWith('tickets').should.be.true
      expect(wrapper.vm.newTicket).toEqual(stub)
    })
  })
})
