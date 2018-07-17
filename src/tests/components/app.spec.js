import App from '@/components/App.vue'
import { userStore } from '@/stores'

describe('components/App', () => {
  it('shows main app upon login', () => {
    const wrapper = shallowMount(App)

    expect(wrapper.contains('.app__main')).toBeFalsy()
    expect(wrapper.contains('.app__login')).toBeTruthy()
    wrapper.vm.login()
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
