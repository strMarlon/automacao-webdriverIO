export default class HomeAndroidScreen {

    get imgDemoApp() { return $('//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[1]') }
    get lblWebdriver() { return $('//android.widget.TextView[@text="WEBDRIVER"]') }
    get imgIo() { return $('//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[2]') }
    get lblDemoApp() { return $('//android.widget.TextView[@text="Demo app for the appium-boilerplate"]') }
    get imgApple() { return $('//android.widget.TextView[@text="󰀵"]') }
    get imgAndroid() { return $('//android.widget.TextView[@text="󰀲"]') }
    get lblSupport() { return $('//android.widget.TextView[@text="Support"]') }
    get btnLogin() { return $('//android.view.View[@content-desc="Login"]') }
    get btnHome() { return $('//android.view.View[@content-desc="Home"]') }


    async isDisplayedImgDemoApp() {
        return await this.imgDemoApp.isDisplayed()
    }

    async getTextLblWebdriver() {
        return await this.lblWebdriver.getText()
    }

    async isDisplayedImgIo() {
        return await this.imgIo.isDisplayed()
    }

    async getTextLblDemoApp() {
        return await this.lblDemoApp.getText()
    }

    async isDisplayedImgApple() {
        return await this.imgApple.isDisplayed()
    }

    async isDisplayedImgAndroid() {
        return await this.imgAndroid.isDisplayed()
    }

    async getTextLblSupport() {
        return await this.lblSupport.getText()
    }

    async clickBtnLogin() {
        await this.btnLogin.click()
    }

    async getAttributeBtnHome() {
        return await this.btnHome.getAttribute('content-desc')
    }

    async isSelectedBtnHome() {
        return await this.btnHome.isSelected()
    }
}