import App from '@/components/App.vue'
import { userStore, sharedStore } from '@/stores'
import { router } from '@/services'

describe('components/App', () => {
  let sandbox, sharedStoreInitStub, routerInitStub
  beforeEach(() => {
    sandbox = sinon.createSandbox()
    sharedStoreInitStub = sandbox.stub(sharedStore, 'init')
    routerInitStub = sandbox.stub(router, 'init')
  })
  afterEach(() => {
    sandbox.restore()
  })
  it('shows main app upon login', async () => {
    const wrapper = shallowMount(App)
    expect(wrapper.contains('.app__main')).toBeFalsy()
    expect(wrapper.contains('.app__login')).toBeTruthy()
    await wrapper.vm.login()
    sharedStoreInitStub.called.should.be.true
    routerInitStub.called.should.be.true
    expect(wrapper.vm.authenticated).toBeTruthy()
    expect(wrapper.contains('.app__main')).toBeTruthy()
    expect(wrapper.contains('.app__login')).toBeFalsy()
  })

  it('can log the user out', async () => {
    const wrapper = shallowMount(App)
    wrapper.vm.login()
    const logoutStub = sinon.stub(userStore, 'logout')
    wrapper.vm.logout()
    await logoutStub.called.should.be.true
    expect(wrapper.vm.authenticated).toBeFalsy()
    logoutStub.restore()
  })
})
