import CreateTicket from '@/components/modals/create-ticket.vue'
import { ticketStore } from '@/stores'
import { alerts } from '@/services'

describe('components/modals/create-ticket', () => {
  let sandbox
  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })
  afterEach(() => {
    sandbox.restore()
  })
  it('creates a ticket when form is submitted', () => {
    const wrapper = shallowMount(CreateTicket)
    const newTicket = {
      email: 'test@email.com',
      name: 'Test User',
      contact: 'Test Contact',
      telephone: '01234567890',
      extension: '+00',
      description: 'This is a test ticket.'
    }
    wrapper.setData({ newTicket })
    const createStub = sandbox.stub(ticketStore, 'store')
    const alertStub = sandbox.stub(alerts, 'success')
    wrapper.find('form').trigger('submit')
    createStub.calledWith(newTicket).should.be.true
    Vue.nextTick(() => {
      alertStub.called.should.be.true
      expect(wrapper.vm.newTicket).toBeNull()
    })
  })
})
