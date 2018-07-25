import { userStore } from '@/stores'
import { http } from '@/services'
import blob from '@/tests/blobs/user'

describe('stores/user', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })
  afterEach(() => {
    sandbox.restore()
  })

  describe('#login', () => {
    it('logs a user in', () => {
      const formData = { email: 'test@test.com', password: 'test' }
      const httpPostStub = sandbox.stub(http, 'post')
      userStore.login(formData)
      httpPostStub.calledWith('me', formData).should.be.true
    })
  })

  describe('#logout', () => {
    it('logs a user out', () => {
      const httpDeleteStub = sandbox.stub(http, 'delete')
      userStore.logout()
      httpDeleteStub.calledWith('me', {}).should.be.true
    })
  })

  describe('#init', () => {
    it('sets the current user', () => {
      userStore.init(blob)
      expect(userStore.current).toEqual(blob)
    })
  })
})
