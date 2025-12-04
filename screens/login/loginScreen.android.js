export default class LoginAndroidScreen {

    get lblTitleLoginSignUpForm() { return $('//android.widget.TextView[@text="Login / Sign up Form"]') }
    set lblSubTitleLogin(position) { this.label = $(`//android.widget.TextView[@text="Login"][${position}]`) }
    get lblSubTitleLogin() { return this.lblSubTitleLogin }
    get inpEmailLogin() { return $('//android.widget.EditText[@content-desc="input-email"]') }
    get inpPasswordLogin() { return $('//android.widget.EditText[@content-desc="input-password"]') }
    get lblDescriptionLogin() { return $('//android.widget.TextView[@text="When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login."]') }
    get btnLoginForm() { return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup') }
    get btnOk() { return $('//android.widget.Button[@text="OK"]') }
    get lblInformativeMessageEmail() { return $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]') }
    get lblInformativeMessagePassword() { return $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[2]') }
    get lblSubTitleSignUp() { return $('//android.widget.TextView[@text="Sign up"]') }
    get inpEmailSignUp() { return $('//android.widget.EditText[@content-desc="input-email"]') }
    get inpPasswordSignUp() { return $('//android.widget.EditText[@content-desc="input-password"]') }
    get inpConfirmPasswordSignUp() { return $('//android.widget.EditText[@content-desc="input-repeat-password"]') }
    get btnSignUp() { return $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup') }
    get btnLogin() { return $('//android.view.View[@content-desc="Login"]') }

    async getTextLblTitleLoginSignUpForm() {
        return this.lblTitleLoginSignUpForm.getText()
    }

    async getTextLblSubTitleLogin(position) {
        this.lblSubTitleLogin = position
        return this.lblSubTitleLogin.getText()
    }

    async addValueInpEmailLogin(value) {
        await this.inpEmailLogin.addValue(value)
    }

    async addValueInpPasswordLogin(value) {
        await this.inpPasswordLogin.addValue(value)
    }

    async getTextLblDescriptionLogin() {
        return this.lblDescriptionLogin.getText()
    }

    async clickBtnLoginForm() {
        await this.btnLoginForm.click()
    }

    async clickBtnOk() {
        await this.btnOk.click()
    }

    async getTextLblInformativeMessageEmail() {
        return await this.lblInformativeMessageEmail.getText()
    }

    async getTextLblInformativeMessagePassword() {
        return await this.lblInformativeMessagePassword.getText()
    }

    async getTextLblSubTitleSignUp() {
        return await this.lblSubTitleSignUp.getText()
    }

    async clickBtnSubTitleSignUp() {
        await this.lblSubTitleSignUp.click()
    }

    async addValueInpEmailSignUp(email) {
        if (driver.isAndroid) {

            await this.inpEmailSignUp.setValue(email)

        } else {

            await this.inpEmailSignUp.clearValue()

            for (const char of email) {
                await this.inpEmailSignUp.addValue(char)
                await driver.pause(100)
            }
        }
    }

    async addValueInpPasswordSignUp(password) {
        await this.inpPasswordSignUp.addValue(password)
    }

    async addValueInpConfirmPasswordSignUp(password) {
        await this.inpConfirmPasswordSignUp.addValue(password)
    }

    async getTextBtnSignUp() {
        return this.btnSignUp.getText()
    }

    async clickBtnSignUp() {
        await this.btnSignUp.click()
    }

    async clickBtnLogin() {
        await this.btnLogin.click()
    }
}