import { HomeScreenAndroid } from './homeScreen.android.js'

class HomeScreenIOS extends HomeScreenAndroid {
	constructor() {
		super()
		this.selectors = {
			imgDemoApp: '//XCUIElementTypeOther[@name="WEBDRIVER Demo app for the appium-boilerplate"]/XCUIElementTypeOther[1]/XCUIElementTypeImage',
			lblWebdriver: '//XCUIElementTypeStaticText[@name="WEBDRIVER"]',
			imgIo: '//XCUIElementTypeOther[@name="WEBDRIVER"]/XCUIElementTypeOther/XCUIElementTypeImage',
			lblDemoApp: '//XCUIElementTypeStaticText[@name="Demo app for the appium-boilerplate"]',
			imgApple: '//XCUIElementTypeStaticText[@name="󰀵"]',
			imgAndroid: '//XCUIElementTypeStaticText[@name="󰀲"]',
			lblSupport: '//XCUIElementTypeStaticText[@name="Support"]'
		}
	}
}

export default new HomeScreenIOS()
