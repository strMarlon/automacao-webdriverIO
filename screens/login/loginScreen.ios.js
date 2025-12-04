import LoginAndroidScreen from './loginScreen.Android.js'

export default class LoginIosScreen extends LoginAndroidScreen {

    get lblTitleLoginSignUpForm() { return $('//XCUIElementTypeStaticText[@name="Login / Sign up Form"]') }
    set lblSubTitleLogin(position) { this.label = $$('//XCUIElementTypeStaticText[@name="Login"]')[position - 1] }
    get lblSubTitleLogin() { return this.label }
    get inpEmailLogin() { return $('//XCUIElementTypeTextField[@name="input-email"]') }
    get inpPasswordLogin() { return $('//XCUIElementTypeSecureTextField[@name="input-password"]') }
    get lblDescriptionLogin() { return $('//XCUIElementTypeStaticText[@name="When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login."]') }
    get btnLoginForm() { return $('(//XCUIElementTypeOther[@name="LOGIN"])[2]') }
    get btnOk() { return $('//XCUIElementTypeButton[@name="OK"]') }
    get lblInformativeMessageEmail() { return $('//XCUIElementTypeStaticText[@name="Please enter a valid email address"]') }
    get lblInformativeMessagePassword() { return $('//XCUIElementTypeStaticText[@name="Please enter at least 8 characters"]') }
    get lblSubTitleSignUp() { return $('//XCUIElementTypeStaticText[@name="Sign up"]') }
    get inpEmailSignUp() { return $('//XCUIElementTypeTextField[@name="input-email"]') }
    get inpPasswordSignUp() { return $('//XCUIElementTypeSecureTextField[@name="input-password"]') }
    get inpConfirmPasswordSignUp() { return $('//XCUIElementTypeSecureTextField[@name="input-repeat-password"]') }
    get btnSignUp() { return $('(//XCUIElementTypeOther[@name="SIGN UP"])[2]') }
    get btnForm() { return $('(//XCUIElementTypeOther[@name="LOGIN"])[2]') }
    get btnLogin() { return $('//XCUIElementTypeButton[@name="Login"]') }
}