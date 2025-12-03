import BaseScreen from '../BaseScreen.js'

export class LoginScreenAndroid extends BaseScreen {
    constructor() {
        super({
            lblTitle: '//android.widget.TextView[@text="Login / Sign up Form"]',
            lblSubTitleLogin: (position) => `//android.widget.TextView[@text="Login"][${position}]`,
            inpEmailLogin: '//android.widget.EditText[@content-desc="input-email"]',
            inpPasswordLogin: '//android.widget.EditText[@content-desc="input-password"]',
            lblDescriptionLogin: '//android.widget.TextView[@text="When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login."]',
            btnLoginForm: '//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup',
            btnOk: '//android.widget.Button[@text="OK"]',
            lblInformativeMessageEmail: '//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]',
            lblInformativeMessagePassword: '//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[2]',
            lblSubTitleSignUp: '//android.widget.TextView[@text="Sign up"]',
            btnSubTitleSignUp: '//android.widget.TextView[@text="Sign up"]',
            inpEmailSignUp: '//android.widget.EditText[@content-desc="input-email"]',
            inpPasswordSignUp: '//android.widget.EditText[@content-desc="input-password"]',
            inpConfirmPasswordSignUp: '//android.widget.EditText[@content-desc="input-repeat-password"]',
            btnSignUp: '//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup',
            btnloginSignUp: '//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup',
            btnSystemConfirm: '//android.widget.Button[@resource-id="android:id/button1"]'
        })
    }

    async getTextLblTitleLoginSignUpForm() {
        return this.text('lblTitle')
    }

    async getTextLblSubTitleLogin(position) {
        return this.text('lblSubTitleLogin', position)
    }

    async addValueInpEmailLogin(value) {
        return this.addValue('inpEmailLogin', value)
    }

    async getTextInpEmailLogin() {
        return this.text('inpEmailLogin')
    }

    async addValueInpPasswordLogin(value) {
        return this.addValue('inpPasswordLogin', value)
    }

    async getTextInpPasswordLogin() {
        return this.text('inpPasswordLogin')
    }

    async getTextLblDescriptionLogin() {
        return this.text('lblDescriptionLogin')
    }

    async clickBtnLoginForm() {
        return this.click('btnLoginForm')
    }

    async clickBtnOk() {
        if (await this.isDisplayed('btnOk', { timeout: 1000 })) {
            return this.click('btnOk')
        }
    }

    async getTextLblInformativeMessageEmail() {
        return this.text('lblInformativeMessageEmail')
    }

    async getTextLblInformativeMessagePassword() {
        return this.text('lblInformativeMessagePassword')
    }

    async getTextLblSubTitleSignUp() {
        return this.text('lblSubTitleSignUp')
    }

    async clickBtnSubTitleSignUp() {
        return this.click('btnSubTitleSignUp')
    }

    async addValueInpEmailSignUp(email) {
        return this.addValue('inpEmailSignUp', email)
    }

    async getTextInpEmailSignUp() {
        return this.text('inpEmailSignUp')
    }

    async addValueInpPasswordSignUp(password) {
        return this.addValue('inpPasswordSignUp', password)
    }

    async getTextInpPasswordSignUp() {
        return this.text('inpPasswordSignUp')
    }

    async addValueInpConfirmPasswordSignUp(password) {
        return this.addValue('inpConfirmPasswordSignUp', password)
    }

    async getTextInpConfirmPasswordSignUp() {
        return this.text('inpConfirmPasswordSignUp')
    }

    async getTextBtnSignUp() {
        return this.text('btnSignUp')
    }

    async clickBtnSignUp() {
        return this.click('btnSignUp')
    }

    async clickBtnloginForm() {
        return this.click('btnLoginForm')
    }

    async clickBtnSystemConfirm() {
        return this.click('btnSystemConfirm')
    }

    async clickBtnloginSignUp() {
        return this.click('btnloginSignUp')
    }

}

export default new LoginScreenAndroid()
