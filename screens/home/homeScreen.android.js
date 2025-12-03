import BaseScreen from '../BaseScreen.js'

export class HomeScreenAndroid extends BaseScreen {
    constructor() {
        super({
            imgDemoApp: '//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[1]',
            lblWebdriver: '//android.widget.TextView[@text="WEBDRIVER"]',
            imgIo: '//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[2]',
            lblDemoApp: '//android.widget.TextView[@text="Demo app for the appium-boilerplate"]',
            imgApple: '//android.widget.TextView[@text="󰀵"]',
            imgAndroid: '//android.widget.TextView[@text="󰀲"]',
            lblSupport: '//android.widget.TextView[@text="Support"]'
        })
    }

    async isDisplayedImgDemoApp() {
        return this.isDisplayed('imgDemoApp')
    }

    async getTextLblWebdriver() {
        return this.text('lblWebdriver')
    }

    async isDisplayedImgIo() {
        return this.isDisplayed('imgIo')
    }

    async getTextLblDemoApp() {
        return this.text('lblDemoApp')
    }

    async isDisplayedImgApple() {
        return this.isDisplayed('imgApple')
    }

    async isDisplayedImgAndroid() {
        return this.isDisplayed('imgAndroid')
    }

    async getTextLblSupport() {
        return this.text('lblSupport')
    }

}

export default new HomeScreenAndroid()
