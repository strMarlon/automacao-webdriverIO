import menuScreen from '../../screens/menu/menuScreen'
import loginScreen from '../../screens/login/loginScreen'
import { assert } from "chai"

describe('Login', function () {

    it('[CT06] - Validar a exibição e funcionalidade do botão "Login".', async function () {
        await menuScreen.clickBtnLogin()
        assert.equal(await menuScreen.getAttributeBtnLogin(), 'Login')
    })

    it('[CT07] - Verificar mensagens de erro ao deixar os campos de e-mail e senha em branco na tela "Login".', async function () {
        await loginScreen.clickBtnloginForm()
        assert.equal(await loginScreen.getTextLblInformativeMessageEmail(), 'Please enter a valid email address')
        assert.equal(await loginScreen.getTextLblInformativeMessagePassword(), 'Please enter at least 8 characters')
    })

    it('[CT08] - Validar as labels da subtela "Login" dentro da tela "Login".', async function () {
        await menuScreen.clickBtnLogin()
        assert.equal(await menuScreen.getAttributeBtnLogin(), 'Login')
        assert.equal(await loginScreen.getTextLblTitleLoginSignUpForm(), 'Login / Sign up Form')
        assert.equal(await loginScreen.getTextLblSubTitleLogin(1), 'Login')
        assert.equal(await loginScreen.getTextLblDescriptionLogin(), 'When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login.')
    })

    it('[CT09] - Validar o preenchimento dos campos de e-mail e senha na tela "Login".', async function () {
         await loginScreen.addValueInpEmailLogin('MarlonAmorim@gmail.com')
         await loginScreen.addValueInpPasswordLogin('Marlon123')
         await loginScreen.clickBtnloginForm()
         await loginScreen.clickBtnOk()
    })

    it('[CT10] - Verificar as ações e os resultados esperados da subtela "Sign Up" na tela "Login".', async function () {
         assert.equal(await loginScreen.getTextLblSubTitleSignUp(), 'Sign up')
         await loginScreen.clickBtnSubTitleSignUp()
         await loginScreen.addValueInpEmailSignUp('MarlonAmorim@gmail.com')
         await loginScreen.addValueInpPasswordSignUp('Marlon123')
         await loginScreen.addValueInpConfirmPasswordSignUp('Marlon123')
    })

})