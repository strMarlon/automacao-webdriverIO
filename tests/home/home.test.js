import menuScreen from '../../screens/menu/menuScreen'
import homeScreen from '../../screens/home/homeScreen'
import { assert } from "chai"

describe('Home', function () {

    it('[CT04] - Validar as labels apresentadas na tela "Home".', async function () {
        assert.equal(await menuScreen.getAttributeBtnHome(), 'Home', 'A label "Home" do menu de serviços não foi exibida!')
        assert.isTrue(await menuScreen.isSelectedBtnHome(), 'O Botão "Home" do menu de serviços não foi exibido!')
        assert.isTrue(await homeScreen.isDisplayedImgDemoApp(), 'A imagem "Home scren" da tela da "home" não foi exibida!')
        assert.equal(await homeScreen.getTextLblWebdriver(), 'WEBDRIVER')
        assert.isTrue(await homeScreen.isDisplayedImgIo(), 'A imagem "I/O" da tela da "home" não foi exibida!')
        assert.isTrue(await homeScreen.isDisplayedImgApple(), 'A imagem "Apple" da tela da "home" não foi exibida!')
        assert.isTrue(await homeScreen.isDisplayedImgAndroid(), 'A imagem "Android" da tela da "home" não foi exibida!')
        assert.equal(await homeScreen.getTextLblSupport(), 'Support')
    })

    it('[CT05] - Verificar a ação de clique no botão "Home".', async function () {
        await menuScreen.clickBtnLogin()
        await menuScreen.clickBtnHome()
    })

})
