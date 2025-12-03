import { MenuScreenAndroid } from './menuScreen.android.js'

class MenuScreenIOS extends MenuScreenAndroid {
  constructor() {
    super()
    this.selectors = {
      btnLogin: '//XCUIElementTypeStaticText[@name="Login"]',
      btnHome: '//XCUIElementTypeStaticText[@name="Home"]'
    }
  }
}

export default new MenuScreenIOS()
