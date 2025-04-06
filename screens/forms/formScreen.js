class FormScreen {

    async getTextLblTitleFormComponents() {
        return driver.isAndroid
            ? $('//android.widget.TextView[@text="Form components"]').getText()
            : $('//XCUIElementTypeStaticText[@name="Form components"]').getText()
    }

    async getTextLblInputField() {
        return driver.isAndroid
            ? $('//android.widget.TextView[@text="Input field:"]').getText()
            : $('//XCUIElementTypeStaticText[@name="Input field:"]').getText()
    }

    async addValueInpField(value) {
        await driver.isAndroid
            ? $('//android.widget.EditText[@content-desc="text-input"]').addValue(value)
            : $('//XCUIElementTypeTextField[@name="text-input"]').addValue(value)
    }

    async getTextLblYouHaveTyped() {
        return driver.isAndroid
            ? $('//android.widget.TextView[@text="You have typed:"]').getText()
            : $('//XCUIElementTypeStaticText[@name="You have typed:"]').getText()
    }

    async getTextLblSwitch() {
        return driver.isAndroid
            ? $('//android.widget.TextView[@text="Switch:"]').getText()
            : $('//XCUIElementTypeStaticText[@name="Switch:"]').getText()
    }

    async clickBtnFeatureToggle() {
        await driver.isAndroid
            ? $('//android.widget.Switch[@content-desc="switch"]').click()
            : $('//XCUIElementTypeSwitch[@name="switch"]').click()
    }

    async getTextLblSwitchOn() {
        return driver.isAndroid
            ? $('//android.widget.TextView[@text="Click to turn the switch ON"]').getText()
            : $('//XCUIElementTypeStaticText[@label="Click to turn the switch ON"]').getText()
    }

    async getTextLblSwitchOff() {
        return driver.isAndroid
            ? $('//android.widget.TextView[@text="Click to turn the switch OFF"]').getText()
            : $('//XCUIElementTypeStaticText[@label="Click to turn the switch OFF"]').getText()
    }

    async getTextLblButtons() {
        return driver.isAndroid
            ? $('//android.widget.TextView[@text="Buttons"]').getText()
            : $('//XCUIElementTypeStaticText[@name="Buttons"]').getText()
    }

    async getTextBtnActive() {
        return driver.isAndroid
            ? $('//android.widget.TextView[@text="Active"]').getText()
            : $('//XCUIElementTypeOther[@name="Active"]').getText()
    }

    async clickBtnActive() {
        await driver.isAndroid
            ? $('//android.widget.TextView[@text="Active"]').click()
            : $('//XCUIElementTypeOther[@name="Active"]').click()
    }

    async getTextBtnInactive() {
        return driver.isAndroid
            ? $('//android.widget.TextView[@text="Inactive"]').getText()
            : $('//XCUIElementTypeOther[@name="Inactive"]').getText()
    }

    async clickBtnInactive() {
        await driver.isAndroid
            ? $('//android.widget.TextView[@text="Inactive"]').click()
            : $('//XCUIElementTypeOther[@name="Inactive"]').click()
    }
    
}

export default new FormScreen()
