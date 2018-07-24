import { common as c } from '@/utils'
import { config, event } from '@/services'

describe('utils/common', () => {
  let sandbox
  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })
  afterEach(() => {
    sandbox.restore()
  })
  describe('#loadMainView', () => {
    it('emits a load view event with view and params', () => {
      const emitStub = sandbox.stub(event, 'emit')
      const view = 'home'
      const params = ['foo', 'bar']
      c.loadMainView(view, params)
      emitStub.called.should.be.true
      emitStub.calledWith(config.events.LOAD_MAIN_VIEW, view, params).should.be.true
    })
  })
})
