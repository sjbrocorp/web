import CreateTicket from '@/components/modals/create-ticket.vue'
import { alerts } from '@/services'
import { ticketStore } from '@/stores'
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
    await wrapper.vm.open()
    wrapper.contains('form').should.be.true
  })
  it('creates a ticket when the form is submitted', async () => {
    const wrapper = shallowMount(CreateTicket)
    await wrapper.vm.open()
    wrapper.setData({ newTicket: blob })
    const storeStub = sandbox.stub(ticketStore, 'store')
    const alertStub = sandbox.stub(alerts, 'success')
    wrapper.find('form').trigger('submit')
    storeStub.calledWith(blob).should.be.true
    Vue.nextTick(() => {
      alertStub.called.should.be.true
      expect(wrapper.vm.newTicket).toBeNull()
    })
  })
})
