import HomeAndroidScreen from './homeScreen.android.js';

export default class HomeIosScreen extends HomeAndroidScreen {

    get imgDemoApp() { return $('//XCUIElementTypeOther[@name="WEBDRIVER Demo app for the appium-boilerplate"]/XCUIElementTypeOther[1]/XCUIElementTypeImage') }
    get lblWebdriver() { return $('//XCUIElementTypeStaticText[@name="WEBDRIVER"]') }
    get imgIo() { return $('//XCUIElementTypeOther[@name="WEBDRIVER"]/XCUIElementTypeOther/XCUIElementTypeImage') }
    get lblDemoApp() { return $('//XCUIElementTypeStaticText[@name="Demo app for the appium-boilerplate"]') }
    get imgApple() { return $('//XCUIElementTypeStaticText[@name="󰀵"]') }
    get imgAndroid() { return $('//XCUIElementTypeStaticText[@name="󰀲"]') }
    get lblSupport() { return $('//XCUIElementTypeStaticText[@name="Support"]') }
    get btnLogin() { return $('//android.view.View[@content-desc="Login"]') }
    get btnHome() { return $('//XCUIElementTypeButton[@name="Home"]') }

    async getAttributeBtnHome() {
        return await this.btnHome.getAttribute('label')
    }
}