import { loginScreen } from '../../constants.js'

describe('Login', function () {

    it('Verificar mensagens de erro ao deixar os campos de e-mail e senha em branco na tela "Login".', async function () {
        await loginScreen.clickBtnLogin()
        await loginScreen.clickBtnLoginForm()
        await expect(await loginScreen.getTextLblInformativeMessageEmail()).toBe('Please enter a valid email address')
        await expect(await loginScreen.getTextLblInformativeMessagePassword()).toBe('Please enter at least 8 characters')
    })

    it('Validar as labels da subtela "Login" dentro da tela "Login".', async function () {
        await expect(await loginScreen.getTextLblTitleLoginSignUpForm()).toBe('Login / Sign up Form')
        await expect(await loginScreen.getTextLblDescriptionLogin()).toBe('When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login.')
    })

    it('Validar o preenchimento dos campos de e-mail e senha na tela "Login".', async function () {
        await loginScreen.addValueInpEmailLogin('MarlonAmorim@gmail.com')
        await loginScreen.addValueInpPasswordLogin('Marlon123')
        await loginScreen.clickBtnLoginForm()
        await loginScreen.clickBtnOk()
    })

    it('Verificar as ações e os resultados esperados da subtela "Sign Up" na tela "Login".', async function () {
        await expect(await loginScreen.getTextLblSubTitleSignUp()).toBe('Sign up')
        await loginScreen.clickBtnSubTitleSignUp()
        await loginScreen.addValueInpEmailSignUp('MarlonAmorim@gmail.com')
        await loginScreen.addValueInpPasswordSignUp('Marlon123')
        await loginScreen.addValueInpConfirmPasswordSignUp('Marlon123')
    })
})