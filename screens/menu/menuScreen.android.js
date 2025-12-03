import BaseScreen from '../BaseScreen.js'

export class MenuScreenAndroid extends BaseScreen {
  constructor() {
    super({
      btnLogin: '//android.widget.TextView[@text="Login"]',
      btnHome: '//android.widget.TextView[@text="Home"]'
    })
  }

  async clickBtnLogin() {
    return this.click('btnLogin')
  }

  async getAttributeBtnLogin() {
    // retorna o texto visível do botão
    return this.text('btnLogin')
  }

  async clickBtnHome() {
    return this.click('btnHome')
  }

  async getAttributeBtnHome() {
    return this.text('btnHome')
  }

  async isSelectedBtnHome() {
    return this.isDisplayed('btnHome')
  }
}

export default new MenuScreenAndroid()
