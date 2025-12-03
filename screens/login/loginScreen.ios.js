import { LoginScreenAndroid } from './loginScreen.android.js'

class LoginScreenIOS extends LoginScreenAndroid {
	constructor() {
		super()
		this.selectors = {
			lblTitle: '//XCUIElementTypeStaticText[@name="Login / Sign up Form"]',
			lblSubTitleLogin: (position) => `(//XCUIElementTypeStaticText[@name="Login"])[${position}]`,
			inpEmailLogin: '//XCUIElementTypeTextField[@name="input-email"]',
			inpPasswordLogin: '//XCUIElementTypeSecureTextField[@name="input-password"]',
			lblDescriptionLogin: '//XCUIElementTypeStaticText[@name="When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login."]',
			btnLoginForm: '(//XCUIElementTypeOther[@name="LOGIN"])[2]',
			btnOk: '//XCUIElementTypeButton[@name="OK"]',
			lblInformativeMessageEmail: '//XCUIElementTypeStaticText[@name="Please enter a valid email address"]',
			lblInformativeMessagePassword: '//XCUIElementTypeStaticText[@name="Please enter at least 8 characters"]',
			lblSubTitleSignUp: '//XCUIElementTypeStaticText[@name="Sign up"]',
			btnSubTitleSignUp: '//XCUIElementTypeStaticText[@name="Sign up"]',
			inpEmailSignUp: '//XCUIElementTypeTextField[@name="input-email"]',
			inpPasswordSignUp: '//XCUIElementTypeSecureTextField[@name="input-password"]',
			inpConfirmPasswordSignUp: '//XCUIElementTypeSecureTextField[@name="input-repeat-password"]',
			btnSignUp: '(//XCUIElementTypeOther[@name="SIGN UP"])[2]'
		}
	}
}

export default new LoginScreenIOS()
