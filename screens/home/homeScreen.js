class HomeScreen {
    
    async isDisplayedImgDemoApp() {
        return driver.isAndroid
            ? await $('//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[1]').isDisplayed()
            : await $('//XCUIElementTypeOther[@name="WEBDRIVER Demo app for the appium-boilerplate"]/XCUIElementTypeOther[1]/XCUIElementTypeImage').isDisplayed()
    }

    async getTextLblWebdriver() {
        return driver.isAndroid
            ? await $('//android.widget.TextView[@text="WEBDRIVER"]').getText()
            : await $('//XCUIElementTypeStaticText[@name="WEBDRIVER"]').getText()
    }

    async isDisplayedImgIo() {
        return driver.isAndroid
            ? await $('//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[2]').isDisplayed()
            : await $('//XCUIElementTypeOther[@name="WEBDRIVER"]/XCUIElementTypeOther/XCUIElementTypeImage').isDisplayed()
    }

    async getTextLblDemoApp() {
        return driver.isAndroid
            ? await $('//android.widget.TextView[@text="Demo app for the appium-boilerplate"]').getText()
            : await $('//XCUIElementTypeStaticText[@name="Demo app for the appium-boilerplate"]').getText()
    }

    async isDisplayedImgApple() {
        return driver.isAndroid
            ? await $('//android.widget.TextView[@text="󰀵"]').isDisplayed()
            : await $('//XCUIElementTypeStaticText[@name="󰀵"]').isDisplayed()
    }

    async isDisplayedImgAndroid() {
        return driver.isAndroid
            ? await $('//android.widget.TextView[@text="󰀲"]').isDisplayed()
            : await $('//XCUIElementTypeStaticText[@name="󰀲"]').isDisplayed()
    }

    async getTextLblSupport() {
        return driver.isAndroid
            ? await $('//android.widget.TextView[@text="Support"]').getText()
            : await $('//XCUIElementTypeStaticText[@name="Support"]').getText()
    }
    
}

export default new HomeScreen()
