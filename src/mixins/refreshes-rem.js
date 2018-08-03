import { common as c } from '@/utils'

export default {
  data () {
    return {
      windowWidth: 0,
      oneRem: 0
    }
  },
  mounted () {
    this.getOneRem()
    this.generateRows()

    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.getWindowWidth()
        this.getOneRem()
      })
      this.getWindowWidth()
    })
  },
  methods: {
    getOneRem () {
      this.oneRem = c.oneRem()
    },
    getWindowWidth () {
      this.windowWidth = document.documentElement.clientWidth
    }
  }
}
