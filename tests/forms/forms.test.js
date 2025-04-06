import formScreen from '../../screens/forms/formScreen.js'
import menuScreen from '../../screens/menu/menuScreen.js'
import { assert } from "chai"

describe('Forms', async function () {

    it('[CT01] - Validar as labels exibidas na tela "Forms".', async function () {
        await menuScreen.clickBtnForms()
        assert.equal(await formScreen.getTextLblTitleFormComponents(), 'Form components')
        assert.equal(await formScreen.getTextLblInputField(), 'Input field:')
        assert.equal(await formScreen.getTextLblSwitch(), 'Switch:')
        assert.equal(await formScreen.getTextBtnActive(), 'Active')
        assert.equal(await formScreen.getTextBtnInactive(), 'Inactive')
        assert.equal(await formScreen.getTextLblButtons(), 'Buttons')
    }),

    it('[CT02] - Preencher o campo "Input field" e verificar a label "Click to turn the switch ON" na tela "Forms".', async function () {
        await menuScreen.clickBtnForms()
        assert.equal(await formScreen.getTextLblYouHaveTyped(), 'You have typed:')
        assert.equal(await formScreen.getTextLblSwitchOn(), 'Click to turn the switch ON')
    })

    it('[CT03] - Acionar o Feature Toggle e validar a label "Click to turn the switch OFF" na tela "Forms".', async function () {
        await formScreen.clickBtnFeatureToggle()
        assert.equal(await formScreen.getTextLblSwitchOff(), 'Click to turn the switch OFF')
    })
    
})