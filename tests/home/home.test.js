import { homeScreen } from '../../constants.js'

describe('Home', function () {

    it('Validar as labels apresentadas na tela "Home".', async function () {
        await expect(await homeScreen.getAttributeBtnHome()).toBe('Home')
        await expect(await homeScreen.isSelectedBtnHome()).toBe(true)
        await expect(await homeScreen.isDisplayedImgDemoApp()).toBe(true)
        await expect(await homeScreen.getTextLblWebdriver()).toBe('WEBDRIVER')
        await expect(await homeScreen.isDisplayedImgIo()).toBe(true)
        await expect(await homeScreen.isDisplayedImgApple()).toBe(true)
        await expect(await homeScreen.isDisplayedImgAndroid()).toBe(true)
        await expect(await homeScreen.getTextLblSupport()).toBe('Support')
    })
})