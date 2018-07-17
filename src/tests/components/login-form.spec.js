import LoginForm from '@/components/auth/login-form.vue'
import { userStore } from '@/stores'

describe('components/auth/login-form', () => {
  it('triggers login when form is submitted', () => {
    let email = 'test@test.com'
    let password = 'secret'
    const wrapper = shallowMount(LoginForm)
    wrapper.setData({ formData: { email, password } })
    const loginStub = sinon.stub(userStore, 'login')
    wrapper.find('form').trigger('submit')
    loginStub.calledWith({ email, password }).should.be.true
    Vue.nextTick(() => {
      expect(wrapper.vm.formData.password).toEqual('')
      expect(wrapper.emitted('loggedin')).toBeTruthy()
    })
    loginStub.restore()
  })
})
