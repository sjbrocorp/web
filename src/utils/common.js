import { config, event } from '@/services'
/* eslint-disable-next-line */
import sassVariables from '!!mk-sass-variables-loader!../../assets/scss/abstracts/_variables.scss'

export const common = {
  loadMainView (view, ...params) {
    event.emit(config.events.LOAD_MAIN_VIEW, view, ...params)
  },

  oneRem () {
    const actualFontSizeInPixels = parseInt(window
      .getComputedStyle(document.getElementById('app'), null)
      .getPropertyValue('font-size')
      .replace('px', ''))
    const defaultFontSizeInRem = parseFloat(sassVariables['default-font-size'].replace('rem', ''))
    // console.log({ defaultFontSizeInRem, actualFontSizeInPixels, oneRem: Math.ceil((1 / defaultFontSizeInRem) * actualFontSizeInPixels) })
    return Math.ceil((1 / defaultFontSizeInRem) * actualFontSizeInPixels)
  }
}
