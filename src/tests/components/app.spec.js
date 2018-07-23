import App from '@/components/App.vue'
import { userStore, sharedStore } from '@/stores'

describe('components/App', () => {
  let sandbox
  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })
  afterEach(() => {
    sandbox.restore()
  })
  it('shows main app upon login', () => {
    const wrapper = shallowMount(App)
    const sharedStoreInitStub = sandbox.stub(sharedStore, 'init')
    expect(wrapper.contains('.app__main')).toBeFalsy()
    expect(wrapper.contains('.app__login')).toBeTruthy()
    wrapper.vm.login()
    sharedStoreInitStub.called.should.be.true
    expect(wrapper.vm.authenticated).toBeTruthy()
    expect(wrapper.contains('.app__main')).toBeTruthy()
    expect(wrapper.contains('.app__login')).toBeFalsy()
  })

  it('can log the user out', async () => {
    const wrapper = shallowMount(App)
    sandbox.stub(sharedStore, 'init')
    wrapper.vm.login()
    const logoutStub = sinon.stub(userStore, 'logout')
    wrapper.vm.logout()
    await logoutStub.called.should.be.true
    expect(wrapper.vm.authenticated).toBeFalsy()
    logoutStub.restore()
  })
})
