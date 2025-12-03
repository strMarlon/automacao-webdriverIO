import { textFor, clickFor, addValueFor, isDisplayedFor, getAttributeFor } from '../helpers/elementFor.js'

export default class BaseScreen {
  constructor(selectors = {}) {
    this.selectors = selectors
  }

  _resolveSelector(keyOrSelector, args = []) {
    // se keyOrSelector é chave para this.selectors
    if (typeof keyOrSelector === 'string' && this.selectors && Object.prototype.hasOwnProperty.call(this.selectors, keyOrSelector)) {
      const sel = this.selectors[keyOrSelector]
      if (typeof sel === 'function') return sel(...args)
      return sel
    }
    // se keyOrSelector já é função (dinâmica)
    if (typeof keyOrSelector === 'function') return keyOrSelector(...args)
    // caso seja selector string
    return keyOrSelector
  }

  async text(keyOrSelector, ...args) {
    const sel = this._resolveSelector(keyOrSelector, args)
    return textFor(sel)
  }

  async click(keyOrSelector, ...args) {
    const sel = this._resolveSelector(keyOrSelector, args)
    return clickFor(sel)
  }

  async addValue(keyOrSelector, value, ...args) {
    const sel = this._resolveSelector(keyOrSelector, args)
    return addValueFor(sel, value)
  }

  async isDisplayed(keyOrSelector, opts = {}, ...args) {
    const sel = this._resolveSelector(keyOrSelector, args)
    return isDisplayedFor(sel, opts)
  }

  async getAttribute(keyOrSelector, attribute, ...args) {
    const sel = this._resolveSelector(keyOrSelector, args)
    return getAttributeFor(sel, attribute)
  }

}
