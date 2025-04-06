class MenuScreen {

    async getAttributeBtnHome() {
        return driver.isAndroid
            ? $('//android.view.View[@content-desc="Home"]').getAttribute('content-desc')
            : $('//XCUIElementTypeButton[@name="Home"]').getAttribute('label')
    }

    async getAttributeBtnLogin() {
        return driver.isAndroid
            ? $('//android.view.View[@content-desc="Login"]').getAttribute('content-desc')
            : $('//XCUIElementTypeButton[@name="Login"]').getAttribute('label')
    }

    async getAttributeBtnWebview() {
        return driver.isAndroid
            ? $('//android.view.View[@content-desc="Webview"]').getAttribute('content-desc')
            : $('//XCUIElementTypeButton[@name="Webview"]').getAttribute('label')
    }

    async getAttributeBtnForms() {
        return driver.isAndroid
            ? $('//android.view.View[@content-desc="Forms"]').getAttribute('content-desc')
            : $('//XCUIElementTypeButton[@name="Forms"]').getAttribute('label')
    }

    async getAttributeBtnSwipe() {
        return driver.isAndroid
            ? $('//android.view.View[@content-desc="Swipe"]').getAttribute('content-desc')
            : $('//XCUIElementTypeButton[@name="Swipe"]').getAttribute('label')
    }

    async getAttributeBtnDrag() {
        return driver.isAndroid
            ? $('//android.view.View[@content-desc="Drag"]').getAttribute('content-desc')
            : $('//XCUIElementTypeButton[@name="Drag"]').getAttribute('label')
    }

    async clickBtnHome() {
        await driver.isAndroid
            ? $('//android.view.View[@content-desc="Home"]').click()
            : $('//XCUIElementTypeButton[@name="Home"]').click()
    }

    async clickBtnLogin() {
        await driver.isAndroid
            ? $('//android.view.View[@content-desc="Login"]').click()
            : $('//XCUIElementTypeButton[@name="Login"]').click()
    }

    async clickBtnWebview() {
        await driver.isAndroid
            ? $('//android.view.View[@content-desc="Webview"]').click()
            : $('//XCUIElementTypeButton[@name="Webview"]').click()
    }

    async clickBtnForms() {
        await driver.isAndroid
            ? $('//android.view.View[@content-desc="Forms"]').click()
            : $('//XCUIElementTypeButton[@name="Forms"]').click()
    }

    async clickBtnSwipe() {
        await driver.isAndroid
            ? $('//android.view.View[@content-desc="Swipe"]').click()
            : $('//XCUIElementTypeButton[@name="Swipe"]').click()
    }

    async clickBtnDrag() {
        await driver.isAndroid
            ? $('//android.view.View[@content-desc="Drag"]').click()
            : $('//XCUIElementTypeButton[@name="Drag"]').click()
    }

    async isSelectedBtnHome() {
        return driver.isAndroid
            ? $('//android.view.View[@content-desc="Home"]').isSelected()
            : $('//XCUIElementTypeButton[@name="Home"]').isSelected()
    }

    async isSelectedBtnLogin() {
        return driver.isAndroid
            ? $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup').isSelected()
            : $('(//XCUIElementTypeOther[@name="LOGIN"])[2]').isSelected()
    }
    
}

export default new MenuScreen()