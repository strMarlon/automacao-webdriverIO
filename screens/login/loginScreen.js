class LoginScreen {

    async getTextLblTitleLoginSignUpForm() {
        return driver.isAndroid
            ? $('//android.widget.TextView[@text="Login / Sign up Form"]').getText()
            : $('//XCUIElementTypeStaticText[@name="Login / Sign up Form"]').getText()
    }

    async getTextLblSubTitleLogin(position) {
        return driver.isAndroid
            ? $(`//android.widget.TextView[@text="Login"][${position}]`).getText()
            : $$('//XCUIElementTypeStaticText[@name="Login"]')[position - 1].getText()
    }

    async addValueInpEmailLogin(value) {
        return driver.isAndroid
            ? $('//android.widget.EditText[@content-desc="input-email"]').addValue(value)
            : $('//XCUIElementTypeTextField[@name="input-email"]').addValue(value)
    }

    async getTextInpEmailLogin() {
        return driver.isAndroid
            ? $('//android.widget.EditText[@content-desc="input-email"]').getText()
            : $('//XCUIElementTypeTextField[@name="input-email"]').getText()
    }

    async addValueInpPasswordLogin(value) {
        return driver.isAndroid
            ? $('//android.widget.EditText[@content-desc="input-password"]').addValue(value)
            : $('//XCUIElementTypeSecureTextField[@name="input-password"]').addValue(value)
    }

    async getTextInpPasswordLogin() {
        return driver.isAndroid
            ? $('//android.widget.EditText[@content-desc="input-password"]').getText()
            : $('//XCUIElementTypeSecureTextField[@name="input-password"]').getText()
    }

    async getTextLblDescriptionLogin() {
        return driver.isAndroid
            ? $('//android.widget.TextView[@text="When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login."]').getText()
            : $('//XCUIElementTypeStaticText[@name="When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login."]').getText()
    }

    async clickBtnLoginForm() {
        return driver.isAndroid
            ? $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup').click()
            : $('(//XCUIElementTypeOther[@name="LOGIN"])[2]').click()
    }

    async clickBtnOk() {
        if (driver.isAndroid) {
            return $('//android.widget.Button[@text="OK"]').click()
        } else {
            console.log('O botão OK não será clicado no iOS.')
        }
    }

    async getTextLblInformativeMessageEmail() {
        return driver.isAndroid
            ? $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]').getText()
            : $('//XCUIElementTypeStaticText[@name="Please enter a valid email address"]').getText()
    }

    async getTextLblInformativeMessagePassword() {
        return driver.isAndroid
            ? $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[2]').getText()
            : $('//XCUIElementTypeStaticText[@name="Please enter at least 8 characters"]').getText()
    }

    async getTextLblSubTitleSignUp() {
        return driver.isAndroid
            ? $('//android.widget.TextView[@text="Sign up"]').getText()
            : $('//XCUIElementTypeStaticText[@name="Sign up"]').getText()
    }

    async clickBtnSubTitleSignUp() {
        return driver.isAndroid
            ? $('//android.widget.TextView[@text="Sign up"]').click()
            : $('//XCUIElementTypeStaticText[@name="Sign up"]').click()
    }

    async addValueInpEmailSignUp(email) {
        return driver.isAndroid
            ? $('//android.widget.EditText[@content-desc="input-email"]').addValue(email)
            : $('//XCUIElementTypeTextField[@name="input-email"]').addValue(email)
    }

    async getTextInpEmailSignUp() {
        return driver.isAndroid
            ? $('//android.widget.EditText[@content-desc="input-email"]').getText()
            : $('//XCUIElementTypeTextField[@name="input-email"]').getText()
    }
 
    async addValueInpPasswordSignUp(password) {
        return driver.isAndroid
            ? $('//android.widget.EditText[@content-desc="input-password"]').addValue(password)
            : $('//XCUIElementTypeSecureTextField[@name="input-password"]').addValue(password)
    }

    async getTextInpPasswordSignUp() {
        return driver.isAndroid
            ? $('//android.widget.EditText[@content-desc="input-password"]').getText()
            : $('//XCUIElementTypeSecureTextField[@name="input-password"]').getText()
    }

    async addValueInpConfirmPasswordSignUp(password) {
        return driver.isAndroid
            ? $('//android.widget.EditText[@content-desc="input-repeat-password"]').addValue(password)
            : $('//XCUIElementTypeSecureTextField[@name="input-repeat-password"]').addValue(password)
    }

    async getTextInpConfirmPasswordSignUp() {
        return driver.isAndroid
            ? $('//android.widget.EditText[@content-desc="input-repeat-password"]').getText()
            : $('//XCUIElementTypeSecureTextField[@name="input-repeat-password"]').getText()
    }

    async getTextBtnSignUp() {
        return driver.isAndroid
            ? $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup').getText()
            : $('(//XCUIElementTypeOther[@name="SIGN UP"])[2]').getText()
    }

    async clickBtnSignUp() {
        return driver.isAndroid
            ? $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup').click()
            : $('(//XCUIElementTypeOther[@name="SIGN UP"])[2]').click()
    }

    async clickBtnloginForm() {
        return driver.isAndroid
            ? $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup').click()
            : $('(//XCUIElementTypeOther[@name="LOGIN"])[2]').click()
    }

}

export default new LoginScreen()
