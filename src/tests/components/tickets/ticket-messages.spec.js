import TicketMessages from '@/components/tickets/ticket-messages.vue'
import stub from '@/stubs/message'
import messageBlob from '@/tests/blobs/message'
import ticketBlob from '@/tests/blobs/ticket'
import { ticketStore } from '@/stores'
import { alerts } from '@/services'

describe('components/tickets/ticket-messages', () => {
  let sandbox
  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })
  afterEach(() => {
    sandbox.restore()
  })
  it('can submit a message', async () => {
    const wrapper = shallowMount(TicketMessages, {
      propsData: {
        ticket: ticketBlob
      }
    })
    wrapper.setData({ newMessage: messageBlob })
    const storeStub = sandbox.stub(ticketStore, 'storeMessage')
    const alertStub = sandbox.stub(alerts, 'success')
    wrapper.find('form').trigger('submit')
    storeStub.calledWith(ticketBlob, messageBlob).should.be.true
    await wrapper.vm.$nextTick()
    alertStub.called.should.be.true
    expect(wrapper.vm.newMessage).toEqual(stub)
  })
})
